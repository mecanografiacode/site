import React from 'react';
import { 
  Target, Rocket, GraduationCap, BookOpen, ArrowRight, CheckCircle, 
  Brain, Microscope, Laptop, Globe, Star, Award, Zap, 
  Users, BarChart3, ShieldCheck, Compass, Briefcase, Pencil, Heart
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface HighSchoolProps {
  onOpenUnitSelector?: () => void;
}

const HighSchool: React.FC<HighSchoolProps> = ({ onOpenUnitSelector }) => {
  return (
    <div className="bg-white">
      {/* Hero Section Ensino Médio - Otimizada para LCP e Notebooks */}
      <section className="relative h-[90vh] min-h-[650px] flex items-center overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.imgur.com/EUksldX.jpeg" 
            alt="Estudantes do Ensino Médio do Colégio Reação em ambiente de aprendizado avançado"
            className="w-full h-full object-cover opacity-40 scale-105 animate-soft-pulse"
            width="1920"
            height="1080"
            loading="eager"
            // @ts-ignore - Atributo de performance para LCP
            fetchpriority="high"
            decoding="sync"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/60 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full pt-20">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <span className="bg-brand-red text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.4em] inline-block shadow-lg">
                Ensino Médio
              </span>
              <div className="flex gap-1">
                <Star size={14} className="text-brand-red fill-brand-red" />
                <Star size={14} className="text-brand-red fill-brand-red" />
                <Star size={14} className="text-brand-red fill-brand-red" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-[6.5rem] font-black text-white mb-6 md:mb-8 tracking-tighter leading-[0.9]">
              Formação para <br />
              <span className="text-brand-red italic underline decoration-white/10">o Futuro.</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl lg:text-2xl max-w-2xl font-light mb-8 md:mb-12 leading-relaxed">
              Preparação completa para vestibulares, ENEM, PAS e desenvolvimento crítico e intelectual para os desafios do mundo contemporâneo.
            </p>
            <div className="flex flex-wrap gap-4 md:gap-5">
              <button 
                onClick={onOpenUnitSelector}
                className="bg-brand-red text-white px-8 md:px-12 py-4 md:py-6 rounded-full font-black text-base md:text-lg hover:scale-110 transition-all shadow-3xl shadow-brand-red/30 flex items-center gap-3 btn-shimmer"
              >
                Matrículas 2026 <ArrowRight />
              </button>
              <button 
                onClick={onOpenUnitSelector}
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 md:px-12 py-4 md:py-6 rounded-full font-bold text-base md:text-lg hover:bg-white hover:text-brand-navy transition-all"
              >
                Diferenciais Reação
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Introdução - Formação Integral */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-brand-navy text-4xl md:text-5xl font-black mb-10 leading-tight">
              Formação integral para os grandes <br/><span className="text-brand-red font-serif italic">desafios acadêmicos e da vida</span>.
            </h2>
            <div className="w-24 h-2 bg-brand-red mx-auto mb-12 rounded-full"></div>
            <div className="space-y-8 max-w-4xl mx-auto">
              <p className="text-slate-500 text-xl leading-[1.8] font-light">
                No Ensino Médio do Colégio Reação, combinamos excelência acadêmica com formação humana, preparando estudantes para os vestibulares mais concorridos, ENEM, PAS e para a vida universitária. Nossa metodologia integra aprofundamento disciplinar, orientação vocacional e desenvolvimento de autonomia intelectual.
              </p>
              <p className="text-slate-500 text-xl leading-[1.8] font-light">
                Acompanhamos cada aluno de perto, oferecendo suporte pedagógico individualizado, simulados periódicos e incentivo à maturidade acadêmica, formando bases sólidas para o futuro profissional e pessoal.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pilares Educacionais */}
      <section id="proposta" className="py-32 bg-brand-offwhite relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-24">
            <ScrollReveal>
              <h2 className="text-brand-blue text-xs font-black tracking-[0.4em] uppercase mb-6">Ensino Médio Reação</h2>
              <h3 className="text-4xl md:text-5xl font-black text-brand-navy mb-6 tracking-tight">Nossos Pilares Educacionais</h3>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">Uma abordagem completa que desenvolve potencialidades acadêmicas, humanas e prepara para o futuro.</p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: GraduationCap, 
                title: 'Formação Acadêmica Avançada', 
                text: 'Aprofundamento em Física, Química, Biologia, Matemática, Redação e Ciências Humanas com foco crítico e científico.' 
              },
              { 
                icon: Award, 
                title: 'Preparação para Vestibulares', 
                text: 'Preparação completa para ENEM, PAS e principais vestibulares com simulados, revisões e técnicas de estudo eficazes.' 
              },
              { 
                icon: Compass, 
                title: 'Orientação Vocacional', 
                text: 'Apoio na escolha da carreira e projeto de vida, auxiliando o aluno a identificar suas aptidões e áreas de interesse.'
              },
              { 
                icon: BarChart3, 
                title: 'Simulados Periódicos', 
                text: 'Aplicação constante de provas no modelo dos exames reais para controle de desempenho e gestão de tempo.' 
              },
              { 
                icon: Brain, 
                title: 'Pensamento Crítico', 
                text: 'Estímulo à análise de temas atuais e desenvolvimento de argumentação sólida para as provas de redação.' 
              },
              { 
                icon: ShieldCheck, 
                title: 'Suporte Pedagógico', 
                text: 'Acompanhamento próximo para garantir que o aluno mantenha o foco e a motivação durante a jornada pré-vestibular.' 
              }
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 100} className="bg-white p-12 rounded-[3.5rem] border border-slate-100 hover:border-brand-red/30 hover:shadow-2xl transition-all duration-500 group flex flex-col h-full">
                <div className="bg-brand-offwhite w-16 h-16 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-brand-red group-hover:text-white transition-all">
                  <item.icon size={28} />
                </div>
                <h4 className="text-2xl font-black text-brand-navy mb-4 leading-tight">{item.title}</h4>
                <p className="text-slate-500 font-medium leading-relaxed">{item.text}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy to-brand-red/20 opacity-50"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-12 tracking-tighter leading-tight">
              A jornada para o <br/><span className="text-brand-red underline decoration-white/20">sucesso acadêmico</span> começa agora.
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button 
                onClick={onOpenUnitSelector}
                className="bg-brand-red text-white px-12 py-8 rounded-full font-black text-2xl hover:scale-105 transition-all shadow-3xl shadow-brand-red/40 flex items-center justify-center gap-4 btn-shimmer"
              >
                Matricular para 2026 <ArrowRight />
              </button>
            </div>
            <p className="mt-12 text-white/30 uppercase text-[10px] font-black tracking-[0.4em]">
              Vagas para 1ª, 2ª e 3ª série do Ensino Médio
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default HighSchool;