
import React from 'react';
import { Quote } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 md:py-48 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <ScrollReveal>
            <span className="text-brand-red text-xs font-black tracking-[0.5em] uppercase mb-8 block">Nossa História</span>
            <h2 className="text-4xl md:text-7xl font-black text-brand-navy mb-10 leading-[0.95] tracking-tighter">
              Educação é uma jornada de <span className="text-brand-red">confiança</span> mútua.
            </h2>
            <div className="space-y-8 text-slate-500 text-lg md:text-xl font-light leading-relaxed">
              <p>
                O Colégio Reação não nasceu apenas para ensinar fórmulas e datas. Nasceu da inquietação de oferecer uma educação que fizesse o aluno **reagir** ao mundo, não apenas observá-lo.
              </p>
              <p>
                Há 28 anos, cuidamos de cada estudante pelo nome. Aqui, a disciplina caminha de mãos dadas com o afeto, e o rigor acadêmico serve como ferramenta para a construção de cidadãos éticos, prontos para os desafios das melhores universidades e da vida.
              </p>
            </div>
            
            <div className="mt-12 p-8 bg-brand-offwhite rounded-[2.5rem] border-l-8 border-brand-red relative">
              <Quote className="absolute top-4 right-4 text-brand-red/10" size={48} />
              <p className="text-brand-navy font-bold italic text-lg leading-relaxed">
                "Não preparamos apenas para o vestibular, preparamos para o dia em que nossos alunos terão que tomar decisões que mudarão o mundo."
              </p>
              <p className="mt-4 text-slate-400 text-sm font-bold uppercase tracking-widest">— Fundadores do Colégio Reação</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200} className="relative">
            <div className="rounded-[4rem] overflow-hidden shadow-3xl rotate-3 hover:rotate-0 transition-transform duration-700 border-[20px] border-brand-offwhite">
              <img 
                src="https://i.imgur.com/ynCQi7jh.jpeg" 
                alt="Legado e Tradição Reação" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-brand-navy p-12 rounded-[3rem] text-white shadow-3xl">
              <p className="text-5xl font-black tracking-tighter mb-1">28</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-brand-red">Anos de impacto</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
