
import React, { useState, useRef, useEffect } from 'react';
import { Music, VolumeX, Volume2, Music2, Music3, Music4 } from 'lucide-react';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [currentSourceIndex, setCurrentSourceIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Lista de fontes de áudio estáveis (Happy & Kids)
  const audioSources = [
    "https://cdn.pixabay.com/audio/2022/01/18/audio_d0a13f69d2.mp3", // Happy Ukelele
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", // Fallback padrão
    "https://cdn.pixabay.com/audio/2024/02/08/audio_403c4040a6.mp3"  // Outra opção kids
  ];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2; 
      audioRef.current.loop = true;
    }
    
    const timer = setTimeout(() => setShowTooltip(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  const handleAudioError = () => {
    console.warn(`Fonte de áudio ${currentSourceIndex} falhou. Tentando próxima...`);
    
    if (currentSourceIndex < audioSources.length - 1) {
      setCurrentSourceIndex(prev => prev + 1);
    } else {
      console.error("Todas as fontes de áudio falharam.");
      setIsPlaying(false);
    }
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.load();
      
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setShowTooltip(false);
          })
          .catch(err => {
            console.error("Interação necessária ou erro de carregamento:", err);
            setIsPlaying(false);
          });
      }
    }
  };

  return (
    <div className="fixed bottom-10 left-10 z-[110] flex items-center gap-4">
      <audio 
        ref={audioRef} 
        src={audioSources[currentSourceIndex]}
        preload="auto"
        onError={handleAudioError}
      />
      
      {showTooltip && (
        <div className="bg-white px-5 py-3 rounded-2xl shadow-2xl border-2 border-brand-red/10 animate-bounce-slow text-brand-navy text-[11px] font-black uppercase tracking-widest pointer-events-none flex items-center gap-2">
          <span className="text-xl">🎒</span> Ativar Melodia Alegre
        </div>
      )}

      <div className="relative">
        {/* Notas Musicais Flutuantes quando tocando */}
        {isPlaying && (
          <>
            <div className="absolute -top-12 left-2 animate-float-note-1 text-brand-red opacity-0">
              <Music2 size={20} />
            </div>
            <div className="absolute -top-16 left-8 animate-float-note-2 text-brand-blue opacity-0">
              <Music3 size={18} />
            </div>
            <div className="absolute -top-14 right-2 animate-yellow-500 opacity-0">
              <Music4 size={22} />
            </div>
          </>
        )}

        <button
          id="btn-music-toggle-control"
          onClick={toggleMusic}
          className={`group relative p-6 rounded-[2.5rem] shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 flex items-center justify-center overflow-hidden
            ${isPlaying ? 'bg-brand-red text-white' : 'bg-white text-brand-navy border-2 border-slate-100'}
          `}
          aria-label={isPlaying ? "Desativar música" : "Ativar música"}
        >
          {isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="absolute w-full h-full bg-white/30 animate-ping rounded-full"></span>
              <span className="absolute w-3/4 h-3/4 bg-white/20 animate-ping rounded-full" style={{ animationDelay: '0.4s' }}></span>
            </div>
          )}
          
          <div className="relative z-10 flex items-center justify-center">
            {isPlaying ? (
              <div className="flex gap-1 items-end h-6">
                <span className="w-1.5 bg-white rounded-full animate-music-bar-fast"></span>
                <span className="w-1.5 bg-white rounded-full animate-music-bar-slow"></span>
                <span className="w-1.5 bg-white rounded-full animate-music-bar-mid"></span>
              </div>
            ) : (
              <Music size={28} className="group-hover:rotate-12 transition-transform" />
            )}
          </div>
        </button>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes music-bar-fast {
          0%, 100% { height: 8px; }
          50% { height: 24px; }
        }
        @keyframes music-bar-slow {
          0%, 100% { height: 16px; }
          50% { height: 8px; }
        }
        @keyframes music-bar-mid {
          0%, 100% { height: 12px; }
          50% { height: 20px; }
        }
        .animate-music-bar-fast { animation: music-bar-fast 0.6s infinite ease-in-out; }
        .animate-music-bar-slow { animation: music-bar-slow 0.9s infinite ease-in-out; }
        .animate-music-bar-mid { animation: music-bar-mid 0.7s infinite ease-in-out; }

        @keyframes float-note {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          20% { opacity: 1; }
          100% { transform: translateY(-60px) rotate(20deg); opacity: 0; }
        }
        .animate-float-note-1 { animation: float-note 2s infinite ease-out; }
        .animate-float-note-2 { animation: float-note 2.5s infinite ease-out 0.5s; }
        .animate-float-note-3 { animation: float-note 2.2s infinite ease-out 0.8s; }
      `}} />
    </div>
  );
};

export default MusicPlayer;
