
import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

interface HeroProps {
  onOpenUnitSelector?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenUnitSelector }) => {
  return (
    <section className="relative min-h-screen flex items-start md:items-center overflow-hidden bg-brand-navy">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/60 to-transparent z-10"></div>
        <img 
          src="https://i.imgur.com/jc4po2M.jpeg" 
          className="w-full h-full object-cover" 
          alt="Ambiente de excelência Colégio Reação"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-20 w-full pt-44 md:pt-60 pb-32">
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 mb-6 animate-fade-in-up">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <span className="text-white/60 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">Referência em Brasília desde 1997</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-black text-white mb-8 leading-[0.9] tracking-tighter animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            A jornada de <span className="text-brand-red">excelência</span> começa aqui.
          </h1>
          
          <p className="text-white/70 text-lg md:text-2xl mb-12 font-light leading-relaxed max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Mais do que conteúdo acadêmico, formamos caráter, autonomia e a coragem necessária para conquistar o mundo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <button
              onClick={onOpenUnitSelector}
              className="group relative bg-brand-red text-white px-10 py-6 rounded-full font-black text-lg shadow-2xl hover:scale-105 transition-all btn-shimmer flex items-center justify-center gap-3"
            >
              Agendar Visita Guiada
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
            <button
              onClick={onOpenUnitSelector}
              className="bg-white/5 backdrop-blur-xl text-white border border-white/20 px-10 py-6 rounded-full font-bold text-lg hover:bg-white hover:text-brand-navy transition-all"
            >
              Falar com a Coordenação
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-12 hidden md:block z-20">
        <div className="flex gap-12 text-white/30 text-[9px] font-black uppercase tracking-[0.4em]">
          <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-red rounded-full"></div> Disciplina & Acolhimento</span>
          <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-red rounded-full"></div> Alta Performance Acadêmica</span>
          <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-red rounded-full"></div> Valores Éticos e Morais</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
