
import React, { useState, useRef, useEffect } from 'react';
import { Music, VolumeX, Volume2 } from 'lucide-react';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Melodia Kids - Royalty Free (Happy & Playful)
  const musicUrl = "https://cdn.pixabay.com/audio/2022/01/12/audio_447385618b.mp3"; 

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.15; // Volume baixo para ser agradável
      audioRef.current.loop = true;
    }
    
    // Esconde o tooltip após 8 segundos
    const timer = setTimeout(() => setShowTooltip(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => console.log("User interaction required"));
    }
    setIsPlaying(!isPlaying);
    setShowTooltip(false);
  };

  return (
    <div className="fixed bottom-10 left-10 z-[100] flex items-center gap-4">
      <audio ref={audioRef} src={musicUrl} />
      
      {showTooltip && (
        <div className="bg-white px-4 py-2 rounded-2xl shadow-xl border border-slate-100 animate-bounce-slow text-brand-navy text-[10px] font-black uppercase tracking-widest pointer-events-none">
          Ouvir Melodia Kids 🎵
        </div>
      )}

      <button
        onClick={toggleMusic}
        className={`group relative p-5 rounded-[2rem] shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 flex items-center justify-center overflow-hidden
          ${isPlaying ? 'bg-brand-red text-white' : 'bg-white text-brand-navy border border-slate-100'}
        `}
        aria-label={isPlaying ? "Desativar música" : "Ativar música"}
      >
        {/* Efeito de pulsação quando tocando */}
        {isPlaying && (
          <span className="absolute inset-0 bg-white/20 animate-ping rounded-full"></span>
        )}
        
        <div className="relative z-10">
          {isPlaying ? <Volume2 size={24} /> : <Music size={24} />}
        </div>

        {/* Indicador de Som Visual */}
        {isPlaying && (
          <div className="absolute -top-1 -right-1 flex gap-0.5">
            <span className="w-1 h-3 bg-white rounded-full animate-[music-bar_0.8s_infinite_alternate]"></span>
            <span className="w-1 h-5 bg-white rounded-full animate-[music-bar_1.2s_infinite_alternate]"></span>
            <span className="w-1 h-2 bg-white rounded-full animate-[music-bar_0.5s_infinite_alternate]"></span>
          </div>
        )}
      </button>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes music-bar {
          from { transform: scaleY(0.5); }
          to { transform: scaleY(1.5); }
        }
      `}} />
    </div>
  );
};

export default MusicPlayer;
