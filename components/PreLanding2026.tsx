
import React from 'react';
import { ArrowRight, MapPin, Star, GraduationCap, BookOpen, CheckCircle2 } from 'lucide-react';
import { UNITS } from '../constants';

interface PreLanding2026Props {
  onEnterSite: () => void;
  onOpenEnrollment: () => void;
}

const PreLanding2026: React.FC<PreLanding2026Props> = ({ onEnterSite, onOpenEnrollment }) => {
  return (
    <div className="fixed inset-0 z-[200] flex flex-col md:flex-row overflow-y-auto md:overflow-hidden bg-white">
      
      {/* Lado Esquerdo - Chamada Institucional */}
      <div className="hidden md:flex md:w-[40%] lg:w-[42%] bg-brand-blue p-6 lg:p-12 xl:p-20 flex-col justify-center relative overflow-hidden min-h-screen shrink-0 border-r-2 border-white/5">
        {/* Elementos de fundo decorativos */}
        <div className="absolute top-0 right-0 w-full h-full opacity-[0.05] pointer-events-none">
          <div className="absolute top-10 -right-10 rotate-12 scale-75 lg:scale-110 xl:scale-125">
            <GraduationCap size={150} className="text-white" />
          </div>
          <div className="absolute bottom-10 left-10 -rotate-12 scale-75 lg:scale-90 xl:scale-110">
            <BookOpen size={100} className="text-white" />
          </div>
        </div>
        
        <div className="relative z-10 flex flex-col items-start text-left max-w-lg mx-auto md:mx-0 lg:scale-90 xl:scale-100 origin-left">
          <div className="flex gap-2 mb-4 lg:mb-8 animate-bounce-slow">
            <Star size={16} fill="#e63946" className="text-brand-red" />
            <Star size={16} fill="#e63946" className="text-brand-red" />
            <Star size={16} fill="#e63946" className="text-brand-red" />
          </div>
          
          <h1 className="text-3xl lg:text-5xl xl:text-7xl font-black text-white mb-4 lg:mb-8 tracking-tighter leading-[0.9] drop-shadow-xl">
            O futuro <br /> tem nome: <br /> <span className="text-brand-red italic">Reação</span>
          </h1>
          
          <div className="space-y-4 mb-6 lg:mb-12 border-l-4 border-brand-red pl-4 lg:pl-8">
            <p className="text-white/90 text-base lg:text-xl xl:text-2xl font-medium leading-tight max-w-xs lg:max-w-none">
              Tradição que prepara, inovação que transforma e valores que ficam para sempre.
            </p>
            <div className="flex items-center gap-3 text-white/50 font-black text-[9px] xl:text-sm uppercase tracking-[0.2em] lg:tracking-[0.4em]">
              <CheckCircle2 size={16} className="text-brand-red shrink-0" />
              Matrículas 2026 Abertas
            </div>
          </div>

          <button 
            onClick={onOpenEnrollment}
            className="group relative w-fit bg-brand-red text-white px-6 lg:px-10 py-4 lg:py-6 rounded-xl lg:rounded-[1.5rem] font-black text-lg lg:text-2xl xl:text-3xl shadow-[0_20px_40px_rgba(230,57,70,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center gap-4 btn-shimmer overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3 lg:gap-4 uppercase tracking-tighter">
              Garantir Vaga
              <ArrowRight size={24} className="lg:w-8 lg:h-8 group-hover:translate-x-2 transition-transform" />
            </span>
          </button>
          
          <p className="mt-6 lg:mt-10 text-white/20 font-black text-[8px] xl:text-xs uppercase tracking-[0.3em] lg:tracking-[0.4em]">
            Condições exclusivas • Recanto das Emas
          </p>
        </div>
      </div>

      {/* Lado Direito - TELA INICIAL */}
      <div className="w-full md:w-[60%] lg:w-[58%] bg-[#f0f4f8] p-6 sm:p-10 md:p-4 lg:p-12 xl:p-16 flex flex-col items-center justify-center relative min-h-screen shrink-0 overflow-hidden">
        
        {/* PREMIUM BLUE DESIGNER BACKGROUND */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-5%] left-[-5%] w-[70%] h-[70%] bg-brand-blue/10 rounded-full blur-[140px] animate-pulse"></div>
          <div className="absolute bottom-[-5%] right-[-5%] w-[60%] h-[60%] bg-brand-red/5 rounded-full blur-[120px]"></div>
          
          <svg className="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 20 Q 25 10 50 20 T 100 20" fill="none" stroke="#1b4a9a" strokeWidth="0.4" />
            <path d="M0 50 Q 25 40 50 50 T 100 50" fill="none" stroke="#1b4a9a" strokeWidth="0.2" />
            <path d="M0 80 Q 25 70 50 80 T 100 80" fill="none" stroke="#1b4a9a" strokeWidth="0.4" />
          </svg>
        </div>
        
        {/* Container Central com Escala Inteligente para Notebooks */}
        <div className="relative z-10 w-full max-w-2xl flex flex-col items-center md:scale-[0.85] lg:scale-[0.9] xl:scale-100 2xl:scale-110 transition-transform duration-500 origin-center">
          
          {/* Stickers Section - Layout Altamente Adaptável */}
          <div className="flex flex-col gap-2 lg:gap-4 mb-8 lg:mb-12 rotate-[-1deg] w-full items-center">
             <div className="bg-brand-blue text-white px-5 py-2 lg:px-10 lg:py-5 rounded-xl text-lg lg:text-3xl xl:text-4xl font-black w-fit shadow-[6px_6px_0px_#0d2b52] lg:shadow-[10px_10px_0px_#0d2b52] border-2 lg:border-4 border-white transform hover:rotate-1 hover:scale-105 transition-all cursor-default uppercase tracking-tight whitespace-nowrap">
               A jornada de
             </div>
             <div className="bg-white text-brand-blue px-7 py-3 lg:px-14 lg:py-7 rounded-xl text-2xl lg:text-5xl xl:text-6xl font-black w-fit shadow-[6px_6px_0px_#e63946] lg:shadow-[10px_10px_0px_#e63946] border-2 lg:border-4 border-brand-blue -mt-1 lg:-mt-4 italic transform hover:-rotate-2 hover:scale-105 transition-all cursor-default uppercase tracking-tighter whitespace-nowrap">
               EXCELÊNCIA
             </div>
             <div className="bg-brand-red text-white px-5 py-2 lg:px-10 lg:py-5 rounded-xl text-lg lg:text-3xl xl:text-4xl font-black w-fit shadow-[6px_6px_0px_#0d2b52] lg:shadow-[10px_10px_0px_#0d2b52] border-2 lg:border-4 border-white -mt-1 lg:-mt-4 transform hover:rotate-2 hover:scale-105 transition-all cursor-default uppercase tracking-tight whitespace-nowrap">
               começa
             </div>
             <div className="bg-brand-navy text-white px-8 py-5 lg:px-16 lg:py-10 rounded-[1.5rem] lg:rounded-[3.5rem] text-3xl lg:text-6xl xl:text-7xl font-black w-full text-center shadow-[8px_8px_0px_#e63946] lg:shadow-[20px_20px_0px_#e63946] border-2 lg:border-4 border-white -mt-1 lg:-mt-4 uppercase tracking-tighter transform hover:scale-[1.03] transition-all cursor-default leading-none">
               AQUI.
             </div>
          </div>

          {/* Unidades e Acesso ao Site */}
          <div className="w-full max-w-md space-y-4 lg:space-y-6">
            <div className="bg-brand-blue/95 backdrop-blur-xl rounded-[1.2rem] lg:rounded-[2.5rem] p-4 lg:p-8 border-2 lg:border-4 border-white shadow-xl flex flex-col items-center gap-4 w-full">
              <p className="text-white text-[8px] lg:text-[11px] font-black uppercase tracking-[0.2em] lg:tracking-[0.4em] opacity-70 text-center">Matrículas em Ambas Unidades</p>
              <div className="flex justify-center gap-8 lg:gap-12 w-full">
                <a 
                  href={UNITS[0].whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 text-white group hover:scale-110 active:scale-95 transition-all"
                >
                  <div className="bg-brand-red p-3 lg:p-4 rounded-xl lg:rounded-2xl shadow-lg border border-white/10 group-hover:bg-white group-hover:text-brand-red transition-all">
                    <MapPin size={18} className="lg:w-6 lg:h-6" />
                  </div>
                  <span className="text-[8px] lg:text-xs font-black uppercase tracking-[0.2em]">Unidade I</span>
                </a>
                <a 
                  href={UNITS[1].whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 text-white group hover:scale-110 active:scale-95 transition-all"
                >
                  <div className="bg-brand-red p-3 lg:p-4 rounded-xl lg:rounded-2xl shadow-lg border border-white/10 group-hover:bg-white group-hover:text-brand-red transition-all">
                    <MapPin size={18} className="lg:w-6 lg:h-6" />
                  </div>
                  <span className="text-[8px] lg:text-xs font-black uppercase tracking-[0.2em]">Unidade II</span>
                </a>
              </div>
            </div>

            <button 
              onClick={onEnterSite}
              className="w-full bg-white text-brand-navy border-2 lg:border-4 border-brand-blue py-4 lg:py-7 rounded-[1.2rem] lg:rounded-[2rem] font-black text-lg lg:text-2xl shadow-[0_10px_30px_rgba(13,43,82,0.12)] hover:bg-brand-blue hover:text-white transition-all duration-500 active:scale-95 uppercase tracking-tight flex items-center justify-center gap-3"
            >
              Explorar Site <ArrowRight className="hidden md:block" size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreLanding2026;
