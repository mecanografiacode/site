
import React from 'react';
import { 
  Sparkles, Heart, Baby, Music, Palette, BookOpen, 
  ArrowRight, CheckCircle, Coffee, Cloud, Sun, 
  Star, MessageSquare, Camera, Brain, Users, Pencil, Clock, Smile,
  Gamepad2, Rocket, Zap
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface InfantilProps {
  onOpenUnitSelector?: () => void;
}

const Infantil: React.FC<InfantilProps> = ({ onOpenUnitSelector }) => {
  return (
    <div className="bg-white">
      {/* Hero Section Infantil */}
      <section className="relative h-[95vh] min-h-[650px] flex items-center overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.imgur.com/bNLzGFF.jpeg" 
            alt="Crianças na Education Infantil do Colégio Reação"
            className="w-full h-full object-cover opacity-60 scale-105 animate-soft-pulse"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy via-brand-navy/60 to-purple-500/20"></div>
          <div className="absolute top-20 right-20 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 left-10 w-48 h-48 bg-brand-red/20 rounded-full blur-3xl animate-bounce-slow"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full pt-32 md:pt-48">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <span className="bg-yellow-400 text-brand-navy px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.4em] inline-block shadow-lg">
                Reação Kids
              </span>
              <div className="flex gap-1">
                <Star size={14} className="text-yellow-400 fill-yellow-400" />
                <Star size={14} className="text-green-400 fill-green-400" />
                <Star size={14} className="text-purple-400 fill-purple-400" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-black text-white mb-6 md:mb-8 tracking-tighter leading-[0.9]">
              O início de uma <br />
              <span className="text-yellow-400 italic underline decoration-white/10">grande jornada.</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl lg:text-2xl max-w-2xl font-light mb-8 md:mb-12 leading-relaxed">
              Cuidamos com carinho e profissionalismo dos primeiros anos de aprendizado, respeitando a individualidade e estimulando o desenvolvimento integral.
            </p>
            <div className="flex flex-wrap gap-4 md:gap-5">
              <button 
                onClick={onOpenUnitSelector}
                className="bg-brand-red text-white px-8 md:px-12 py-4 md:py-6 rounded-full font-black text-base md:text-lg hover:scale-110 transition-all shadow-[0_20px_40px_-10px_rgba(230,57,70,0.5)] flex items-center gap-3 btn-shimmer"
              >
                Matricular Agora <ArrowRight />
              </button>
              <button 
                onClick={onOpenUnitSelector}
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 md:px-12 py-4 md:py-6 rounded-full font-bold text-base md:text-lg hover:bg-white hover:text-brand-navy transition-all"
              >
                Conhecer Unidades
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
      {/* Restante do componente permanece igual */}
    </div>
  );
};

export default Infantil;
