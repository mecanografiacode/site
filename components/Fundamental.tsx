
import React from 'react';
import { 
  BookOpen, Brain, Target, Users, ArrowRight, CheckCircle, 
  Lightbulb, Microscope, Laptop, Globe, Star, 
  GraduationCap, Award, Zap, Layers, UserCheck, BarChart3, Rocket, Heart
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface FundamentalProps {
  onOpenUnitSelector?: () => void;
}

// Fix: Completed the component definition and added the missing default export
const Fundamental: React.FC<FundamentalProps> = ({ onOpenUnitSelector }) => {
  return (
    <div className="bg-white">
      {/* Hero Section Anos Iniciais e Finais */}
      <section className="relative h-[90vh] min-h-[650px] flex items-center overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.imgur.com/zEWb9RC.jpeg" 
            alt="Estudantes dos Anos Iniciais e Finais do Colégio Reação"
            className="w-full h-full object-cover opacity-50 scale-105 animate-soft-pulse"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/60 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full pt-32 md:pt-48">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <span className="bg-brand-blue text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.4em] inline-block shadow-lg">
                1º ao 9º ano
              </span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-brand-blue fill-brand-blue" />
                ))}
              </div>
            </div>
            <h1 className="text-4xl md:text-7xl lg:text-[7rem] font-black text-white mb-6 md:mb-8 tracking-tighter leading-[0.9]">
              Bases sólidas para <br />
              <span className="text-brand-blue italic underline decoration-white/10">grandes conquistas.</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl lg:text-2xl max-w-2xl font-light mb-8 md:mb-12 leading-relaxed">
              O Ensino Fundamental é o alicerce. Aqui, o conhecimento é construído com profundidade, estimulando a curiosidade e o pensamento crítico em cada etapa.
            </p>
            <div className="flex flex-wrap gap-4 md:gap-5">
              <button 
                onClick={onOpenUnitSelector}
                className="bg-brand-red text-white px-8 md:px-12 py-4 md:py-6 rounded-full font-black text-base md:text-lg hover:scale-110 transition-all shadow-3xl shadow-brand-red/30 flex items-center gap-3 btn-shimmer"
              >
                Agendar Visita <ArrowRight />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Fundamental;
