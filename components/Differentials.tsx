
import React, { useState, useRef } from 'react';
import { CheckCircle2, Pause, Volume2, Loader2 } from 'lucide-react';
import { DIFFERENTIALS } from '../constants';
import ScrollReveal from './ScrollReveal';
import { GoogleGenAI, Modality } from "@google/genai";

// Audio decoding helpers
function decodeBase64(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

const Differentials: React.FC = () => {
  const [isNarrating, setIsNarrating] = useState(false);
  const [isLoadingAudio, setIsLoadingAudio] = useState(false);
  const audioSourceRef = useRef<AudioBufferSourceNode | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  const toggleNarration = async () => {
    if (isNarrating) {
      audioSourceRef.current?.stop();
      setIsNarrating(false);
      return;
    }

    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.error("API Key não configurada.");
      return;
    }

    setIsLoadingAudio(true);
    try {
      const ai = new GoogleGenAI({ apiKey });
      const prompt = `Narração profissional e acolhedora: No Colégio Reação, nossa jornada de excelência é construída sobre diferenciais sólidos. Oferecemos ${DIFFERENTIALS.join(', ')}. Tudo isso em um ambiente que respira inovação e valores.`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text: prompt }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: 'Kore' }, 
            },
          },
        },
      });

      const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (base64Audio) {
        if (!audioContextRef.current) {
          audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
        }
        
        const ctx = audioContextRef.current;
        if (ctx.state === 'suspended') {
          await ctx.resume();
        }

        const audioBuffer = await decodeAudioData(
          decodeBase64(base64Audio),
          ctx,
          24000,
          1,
        );

        const source = ctx.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(ctx.destination);
        source.onended = () => setIsNarrating(false);
        
        audioSourceRef.current = source;
        source.start();
        setIsNarrating(true);
      }
    } catch (error) {
      console.error("Erro ao gerar narração:", error);
    } finally {
      setIsLoadingAudio(false);
    }
  };

  return (
    <section className="py-32 bg-brand-navy text-white overflow-hidden relative">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[150px] -mr-[300px] -mt-[300px]"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-blue/10 rounded-full blur-[120px] -ml-[200px] -mb-[200px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-20">
          <ScrollReveal>
            <div className="flex flex-col items-center gap-6 mb-8">
              <h2 className="text-brand-red text-sm font-bold tracking-[0.3em] uppercase">Nossos Diferenciais</h2>
              <button 
                onClick={toggleNarration}
                disabled={isLoadingAudio}
                className="flex items-center gap-3 bg-white/10 hover:bg-brand-red border border-white/10 rounded-full px-6 py-3 transition-all group disabled:opacity-50 btn-shimmer"
              >
                {isLoadingAudio ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : isNarrating ? (
                  <Pause size={16} fill="currentColor" />
                ) : (
                  <Volume2 size={16} />
                )}
                <span className="text-[11px] font-black uppercase tracking-widest">
                  {isLoadingAudio ? 'Gerando Áudio...' : isNarrating ? 'Parar Narração' : 'Escutar Diferenciais'}
                </span>
              </button>
            </div>
            
            <h3 className="text-5xl md:text-7xl font-extrabold mb-12 leading-tight tracking-tighter">
              Metodologia <span className="text-brand-red">viva</span> e <br className="hidden md:block" /> conectada com o futuro.
            </h3>
          </ScrollReveal>
        </div>
        
        <ScrollReveal delay={200}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DIFFERENTIALS.map((diff, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-5 bg-white/5 p-8 rounded-[2rem] border border-white/10 hover:bg-white/10 hover:border-brand-red/50 transition-all duration-500 group hover:scale-[1.03] cursor-default"
              >
                <div className="bg-brand-red/20 p-3 rounded-2xl group-hover:scale-110 group-hover:bg-brand-red transition-all duration-500">
                  <CheckCircle2 className="text-brand-red group-hover:text-white" size={24} />
                </div>
                <span className="font-bold text-sm tracking-wide uppercase leading-snug">{diff}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400} className="mt-24 text-center">
          <p className="text-white/40 text-lg font-light max-w-3xl mx-auto leading-relaxed italic">
            "A educação não é preparação para a vida; a educação é a própria vida." — No Colégio Reação, traduzimos essa filosofia em cada pilar de nossa metodologia.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Differentials;
