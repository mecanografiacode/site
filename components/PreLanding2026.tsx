
import React from 'react';
import { ArrowRight, MapPin, Star, GraduationCap, BookOpen, CheckCircle2 } from 'lucide-react';
import { UNITS } from '../constants';

interface PreLanding2026Props {
  onEnterSite: () => void;
  onOpenEnrollment: () => void;
}

const PreLanding2026: React.FC<PreLanding2026Props> = ({ onEnterSite, onOpenEnrollment }) => {
  return (
    <div className="fixed inset-0 z-[200] flex flex-col lg:flex-row overflow-y-auto bg-white scrollbar-hide">
      {/* Lado Esquerdo - Chamada Institucional - OCULTO NO MOBILE */}
      <div className="hidden lg:flex lg:w-[45%] bg-brand-blue p-10 lg:p-20 flex-col justify-center relative overflow-hidden min-h-screen shrink-0">
        {/* Elementos de fundo decorativos */}
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 -right-5 rotate-12">
            <GraduationCap size={140} className="text-white" />
          </div>
          <div className="absolute bottom-10 left-5 -rotate-12">
            <BookOpen size={100} className="text-white" />
          </div>
        </div>
        
        <div className="relative z-10 flex flex-col items-start text-left">
          <div className="flex gap-1.5 mb-8 animate-bounce-slow">
            <Star size={16} fill="#e63946" className="text-brand-red" />
            <Star size={16} fill="#e63946" className="text-brand-red" />
            <Star size={16} fill="#e63946" className="text-brand-red" />
          </div>
          
          <h1 className="text-7xl font-black text-white mb-10 tracking-tighter leading-[0.85]">
            O futuro <br /> tem nome: <br /> <span className="text-brand-red drop-shadow-2xl">Reação</span>
          </h1>
          
          <div className="space-y-4 mb-16 max-w-sm border-l-4 border-brand-red pl-8">
            <p className="text-white/90 text-xl font-medium leading-relaxed">
              Tradição que prepara, inovação que transforma e valores que ficam para sempre.
            </p>
            <div className="flex items-center gap-3 text-white/50 font-black text-[12px] uppercase tracking-[0.3em]">
              <CheckCircle2 size={14} className="text-brand-red" />
              Matrículas 2026 Abertas
            </div>
          </div>

          <button 
            onClick={onOpenEnrollment}
            className="group relative w-fit bg-brand-red text-white px-10 py-7 rounded-2xl font-black text-3xl shadow-[0_20px_50px_rgba(230,57,70,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center gap-4 btn-shimmer overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-4 uppercase tracking-tighter">
              Garantir Vaga
              <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform" />
            </span>
          </button>
          
          <p className="mt-10 text-white/30 font-black text-[11px] uppercase tracking-[0.4em]">
            Condições exclusivas para novos alunos
          </p>
        </div>
      </div>

      {/* Lado Direito - TELA INICIAL MOBILE - Impacto Visual Sticker Style com Fundo Azul Designer Refinado */}
      <div className="w-full lg:w-[55%] bg-[#f0f4f8] p-6 sm:p-10 lg:p-16 flex flex-col items-center justify-center relative min-h-screen lg:min-h-screen shrink-0 overflow-hidden">
        
        {/* PREMIUM BLUE DESIGNER BACKGROUND */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Malha de Gradiente (Mesh Gradient Effect) */}
          <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-brand-blue/10 rounded-full blur-[120px] mix-blend-multiply animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-brand-blue/5 rounded-full blur-[100px] mix-blend-multiply"></div>
          
          {/* Linhas de Design Abstratas em Azul */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.05]" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 20 Q 25 10 50 20 T 100 20" fill="none" stroke="#1b4a9a" strokeWidth="0.5" />
            <path d="M0 50 Q 25 40 50 50 T 100 50" fill="none" stroke="#1b4a9a" strokeWidth="0.3" />
            <path d="M0 80 Q 25 70 50 80 T 100 80" fill="none" stroke="#1b4a9a" strokeWidth="0.5" />
          </svg>

          {/* Padrão de Pontos Refinado */}
          <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(#1b4a9a 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
          
          {/* Overlay de Textura 'Grain' */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-[0.15] mix-blend-soft-light"></div>
          
          {/* Gradiente de Vinheta para focar no centro */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(13,43,82,0.05)_100%)]"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-md flex flex-col items-center">
          {/* Stickers Section - Foco total no Mobile */}
          <div className="flex flex-col gap-3 lg:gap-5 mb-10 lg:mb-16 rotate-[-1deg] w-full items-center">
             <div className="bg-brand-blue text-white px-5 py-2.5 lg:px-8 lg:py-4 rounded-xl text-lg sm:text-2xl lg:text-4xl font-black w-fit shadow-[5px_5px_0px_#0d2b52] lg:shadow-[10px_10px_0px_#0d2b52] border-2 lg:border-4 border-white transform hover:rotate-1 transition-transform cursor-default uppercase">
               A jornada de
             </div>
             <div className="bg-white text-brand-blue px-7 py-3 lg:px-10 lg:py-5 rounded-xl text-2xl sm:text-4xl lg:text-6xl font-black w-fit shadow-[5px_5px_0px_#e63946] lg:shadow-[10px_10px_0px_#e63946] border-2 lg:border-4 border-brand-blue -mt-2 lg:-mt-4 italic transform hover:-rotate-2 transition-transform cursor-default uppercase">
               EXCELÊNCIA
             </div>
             <div className="bg-brand-red text-white px-5 py-2.5 lg:px-8 lg:py-4 rounded-xl text-lg sm:text-2xl lg:text-4xl font-black w-fit shadow-[5px_5px_0px_#0d2b52] lg:shadow-[10px_10px_0px_#0d2b52] border-2 lg:border-4 border-white -mt-2 lg:-mt-4 transform hover:rotate-2 transition-transform cursor-default uppercase">
               começa
             </div>
             <div className="bg-brand-navy text-white px-8 py-5 lg:px-12 lg:py-10 rounded-[2rem] lg:rounded-[3rem] text-4xl sm:text-6xl lg:text-8xl font-black w-full text-center shadow-[10px_10px_0px_#e63946] lg:shadow-[20px_20px_0px_#e63946] border-2 lg:border-4 border-white -mt-2 uppercase tracking-tighter transform hover:scale-[1.02] transition-transform cursor-default">
               AQUI.
             </div>
          </div>

          {/* Unidades e Acesso ao Site */}
          <div className="w-full space-y-4">
            <div className="bg-brand-blue/95 backdrop-blur-md rounded-[1.8rem] lg:rounded-[2.5rem] p-5 lg:p-8 border-2 lg:border-4 border-white shadow-2xl flex flex-col items-center gap-4 w-full mb-2">
              <p className="text-white text-[10px] lg:text-[12px] font-black uppercase tracking-[0.3em] opacity-60 text-center">Matrículas Abertas em Ambas Unidades</p>
              <div className="flex justify-center gap-6 lg:gap-10 w-full">
                <a 
                  href={UNITS[0].whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 text-white group active:scale-95 transition-transform"
                >
                  <div className="bg-brand-red p-3 rounded-2xl shadow-lg border border-white/10">
                    <MapPin size={18} className="text-white" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest">Unidade I</span>
                </a>
                <a 
                  href={UNITS[1].whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 text-white group active:scale-95 transition-transform"
                >
                  <div className="bg-brand-red p-3 rounded-2xl shadow-lg border border-white/10">
                    <MapPin size={18} className="text-white" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest">Unidade II</span>
                </a>
              </div>
            </div>

            {/* BOTAO GARANTIR VAGA - Destaque em vermelho */}
            <button 
              onClick={onOpenEnrollment}
              className="w-full bg-brand-red text-white py-5 lg:py-8 rounded-[1.5rem] lg:rounded-[2.5rem] font-black text-xl lg:text-3xl shadow-[0_15px_40px_rgba(230,57,70,0.3)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-4 btn-shimmer overflow-hidden uppercase tracking-tighter"
            >
              Garantir Vaga <ArrowRight size={24} />
            </button>

            <button 
              onClick={onEnterSite}
              className="w-full bg-white/80 backdrop-blur-sm text-brand-navy border-2 lg:border-4 border-brand-blue py-4 lg:py-6 rounded-[1.5rem] lg:rounded-[2.5rem] font-black text-lg lg:text-2xl shadow-[0_10px_30px_rgba(13,43,82,0.1)] hover:bg-brand-blue hover:text-white transition-all duration-500 active:scale-95 uppercase"
            >
              Explorar o Site
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreLanding2026;
