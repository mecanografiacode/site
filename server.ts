import express from "express";
import path from "path";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Endpoint: Gemini Chat Assistant (Mila AI)
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages, userMsg, schoolContext } = req.body;
      const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;

      if (!apiKey) {
        return res.json({
          text: "No momento estou operando sem chave de API configurada, mas você pode falar diretamente com nossa secretaria pelo WhatsApp!"
        });
      }

      const ai = new GoogleGenAI({ apiKey });
      const formattedContents = [
        { role: 'user', parts: [{ text: schoolContext || 'Você é a Mila, assistente do Colégio Reação.' }] },
        ...(messages || []).map((m: { role: string; text: string }) => ({
          role: m.role,
          parts: [{ text: m.text }]
        })),
        { role: 'user', parts: [{ text: userMsg || '' }] }
      ];

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: formattedContents,
        config: {
          temperature: 0.7,
          topP: 0.8,
          maxOutputTokens: 500,
        }
      });

      const aiText = response.text || "Desculpe, tive um problema ao processar sua resposta. Pode repetir?";
      res.json({ text: aiText });
    } catch (error: any) {
      console.error("Erro no endpoint /api/chat:", error);
      res.status(500).json({
        error: error.message || "Erro ao comunicar com a IA",
        text: "No momento estou temporariamente offline, mas você pode falar com nossa secretaria pelo WhatsApp!"
      });
    }
  });

  // Health check endpoint
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true, host: '0.0.0.0', port: 3000 },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
