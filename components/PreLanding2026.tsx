
import React, { useEffect, useState } from 'react';
import { ArrowRight, MapPin, Clock, Star, Sparkles, GraduationCap, BookOpen, CheckCircle2 } from 'lucide-react';
import { UNITS } from '../constants';

interface PreLanding2026Props {
  onEnterSite: () => void;
  onOpenEnrollment: () => void;
}

const PreLanding2026: React.FC<PreLanding2026Props> = ({ onEnterSite, onOpenEnrollment }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className={`fixed inset-0 z-[200] flex flex-col lg:flex-row overflow-y-auto bg-white transition-opacity duration-1000 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slideRight {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        @keyframes slideLeft {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @keyframes popIn {
          0% { transform: scale(0.8); opacity: 0; }
          70% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes fadeInUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes rotateSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-slide-right { animation: slideRight 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-slide-left { animation: slideLeft 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-pop-in { opacity: 0; animation: popIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        .animate-fade-in-up { opacity: 0; animation: fadeInUp 0.8s ease-out forwards; }
        .animate-float { animation: float 6s infinite ease-in-out; }
        .animate-rotate-slow { animation: rotateSlow 20s linear infinite; }
      `}} />

      {/* Lado Esquerdo - Chamada Institucional (Azul Dominante) */}
      <div className="w-full lg:w-[45%] bg-brand-blue p-8 md:p-12 lg:p-20 flex flex-col justify-center relative overflow-hidden animate-slide-right">
        {/* Elementos de fundo animados */}
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 right-5 animate-float">
            <GraduationCap size={140} className="text-white" />
          </div>
          <div className="absolute bottom-10 left-5 animate-float" style={{ animationDelay: '1.5s' }}>
            <BookOpen size={100} className="text-white" />
          </div>
        </div>
        
        <div className="relative z-10">
          <div className="flex gap-2 mb-6 animate-pop-in" style={{ animationDelay: '0.4s' }}>
            <Star size={20} fill="#e63946" className="text-brand-red animate-pulse" />
            <Star size={20} fill="#e63946" className="text-brand-red animate-pulse" style={{ animationDelay: '0.2s' }} />
            <Star size={20} fill="#e63946" className="text-brand-red animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tighter leading-[0.9] animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            O futuro <br /> tem nome: <br /> <span className="text-brand-red drop-shadow-lg inline-block hover:scale-105 transition-transform duration-300">Reação</span>
          </h1>
          
          <div className="space-y-4 mb-10 max-w-sm border-l-4 border-brand-red pl-6 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <p className="text-white/90 text-base md:text-lg font-medium leading-relaxed">
              Tradição que prepara, inovação que transforma e valores que ficam para sempre.
            </p>
            <div className="flex items-center gap-3 text-white/60 font-black text-[10px] uppercase tracking-[0.2em]">
              <CheckCircle2 size={14} className="text-brand-red" />
              Matrículas 2026 Abertas
            </div>
          </div>

          <button 
            onClick={onOpenEnrollment}
            className="group relative w-full md:w-fit bg-brand-red text-white px-8 md:px-12 py-5 md:py-6 rounded-2xl font-black text-lg md:text-2xl shadow-[0_15px_40px_rgba(230,57,70,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-4 btn-shimmer overflow-hidden animate-pop-in" style={{ animationDelay: '1.2s' }}
          >
            <span className="relative z-10 flex items-center gap-4">
              GARANTIR VAGA
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
            </span>
          </button>
          
          <p className="mt-8 text-white/40 font-black text-[9px] uppercase tracking-[0.4em] text-center md:text-left animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
            Condições exclusivas para novos alunos
          </p>
        </div>
      </div>

      {/* Lado Direito - Impacto Visual Sticker Style (Branco/Azul/Vermelho) */}
      <div className="w-full lg:w-[55%] bg-brand-offwhite p-6 md:p-10 lg:p-16 flex flex-col items-center justify-center relative animate-slide-left">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy-dark.png')] opacity-5 animate-pulse"></div>
        
        <div className="relative z-10 w-full max-w-lg">
          {/* Sticker Texto Empilhado - Animações em Cascata (Cascading Pop) */}
          <div className="flex flex-col gap-4 mb-16 rotate-[-1deg]">
             <div 
              className="bg-brand-blue text-white px-6 py-3 rounded-xl md:rounded-2xl text-2xl md:text-4xl font-black w-fit shadow-[8px_8px_0px_#0d2b52] border-2 md:border-4 border-white self-start transform hover:rotate-1 transition-transform cursor-default uppercase animate-pop-in" 
              style={{ animationDelay: '0.8s' }}
             >
               A jornada de
             </div>
             <div 
              className="bg-white text-brand-blue px-8 py-3 rounded-xl md:rounded-2xl text-3xl md:text-5xl font-black w-fit shadow-[8px_8px_0px_#e63946] border-2 md:border-4 border-brand-blue self-center -mt-3 italic transform hover:-rotate-2 transition-transform cursor-default uppercase animate-pop-in" 
              style={{ animationDelay: '1s' }}
             >
               EXCELÊNCIA
             </div>
             <div 
              className="bg-brand-red text-white px-6 py-3 rounded-xl md:rounded-2xl text-2xl md:text-4xl font-black w-fit shadow-[8px_8px_0px_#0d2b52] border-2 md:border-4 border-white self-start -mt-3 transform hover:rotate-2 transition-transform cursor-default uppercase animate-pop-in" 
              style={{ animationDelay: '1.2s' }}
             >
               começa
             </div>
             <div 
              className="bg-brand-navy text-white px-8 py-6 rounded-[2rem] md:rounded-[2.5rem] text-5xl md:text-7xl font-black w-full text-center shadow-[15px_15px_0px_#e63946] border-4 border-white -mt-3 uppercase tracking-tighter transform hover:scale-[1.02] transition-transform cursor-default animate-pop-in" 
              style={{ animationDelay: '1.4s' }}
             >
               AQUI.
             </div>
          </div>

          {/* Barra de Unidades - Mais Compacta com entrada deslizante */}
          <div className="bg-brand-blue rounded-[2rem] p-4 md:p-6 border-4 border-white shadow-xl flex flex-col md:flex-row items-center gap-6 mb-10 animate-fade-in-up" style={{ animationDelay: '1.8s' }}>
            <div className="bg-white text-brand-blue p-3 rounded-2xl shadow-inner shrink-0 animate-bounce-slow">
              <Clock size={28} strokeWidth={2.5} />
            </div>
            <div className="flex-grow text-center md:text-left">
              <p className="text-white text-[10px] font-black uppercase tracking-[0.2em] mb-1.5 opacity-60">Matrículas Abertas em Ambas Unidades</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <a 
                  href={UNITS[0].whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white text-base font-black hover:scale-110 hover:text-brand-red transition-all cursor-pointer"
                >
                  <MapPin size={18} className="text-brand-red" /> Unidade I
                </a>
                <a 
                  href={UNITS[1].whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white text-base font-black hover:scale-110 hover:text-brand-red transition-all cursor-pointer"
                >
                  <MapPin size={18} className="text-brand-red" /> Unidade II
                </a>
              </div>
            </div>
          </div>

          {/* Botão de Entrada - Animação de Pulsar Leve para Atenção */}
          <button 
            onClick={onEnterSite}
            className="w-full bg-white text-brand-navy border-2 md:border-4 border-brand-blue py-5 md:py-6 rounded-[1.5rem] md:rounded-[2rem] font-black text-lg md:text-2xl shadow-[0_10px_30px_rgba(13,43,82,0.1)] hover:bg-brand-blue hover:text-white transition-all duration-500 animate-pop-in" style={{ animationDelay: '2.2s' }}
          >
            QUERO EXPLORAR O SITE
          </button>
          <p className="text-center mt-5 text-brand-navy/30 text-[9px] font-bold uppercase tracking-widest animate-fade-in" style={{ animationDelay: '2.5s' }}>
            A jornada de excelência começa aqui
          </p>
        </div>
        
        {/* Decorações flutuantes menores com animações específicas */}
        <div className="absolute bottom-5 left-5 animate-float" style={{ animationDelay: '2s' }}>
          <Sparkles size={30} className="text-brand-red opacity-30" />
        </div>
        <div className="absolute top-5 right-5 animate-rotate-slow">
          <Star size={35} fill="#1b4a9a" className="text-brand-blue opacity-20" />
        </div>
      </div>
    </div>
  );
};

export default PreLanding2026;
