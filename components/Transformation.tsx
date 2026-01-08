
import React from 'react';
import { Sparkles, Brain, Heart, Trophy, Rocket, Shield } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Transformation: React.FC = () => {
  return (
    <section className="py-24 md:py-48 bg-brand-navy relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-red/5 rounded-full blur-[150px] -mr-96 -mt-96"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <ScrollReveal className="text-center mb-24 md:mb-32">
          <span className="text-brand-red text-xs font-black tracking-[0.4em] uppercase mb-8 block">A Metamorfose</span>
          <h2 className="text-4xl md:text-8xl font-black text-white mb-8 tracking-tighter">
            O que seu filho <span className="text-brand-red italic">se torna</span> aqui.
          </h2>
          <p className="text-white/40 text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
            Nossa missão vai além de preencher cadernos. Construímos as habilidades que o mercado de trabalho ainda nem inventou.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              icon: <Brain />, 
              title: "Autonomia Intelectual", 
              text: "Alunos que não apenas memorizam, mas questionam, analisam e resolvem problemas complexos." 
            },
            { 
              icon: <Shield />, 
              title: "Caráter e Ética", 
              text: "Formação em valores que garantem uma conduta íntegra em qualquer cenário social ou profissional." 
            },
            { 
              icon: <Rocket />, 
              title: "Resiliência Acadêmica", 
              text: "Preparação para lidar com desafios, prazos e pressões com inteligência emocional." 
            },
            { 
              icon: <Heart />, 
              title: "Liderança Empática", 
              text: "Desenvolvimento da capacidade de inspirar e colaborar em equipe com respeito e visão." 
            },
            { 
              icon: <Trophy />, 
              title: "Alta Performance", 
              text: "Hábito de excelência em tudo o que faz, buscando sempre o melhor resultado possível." 
            },
            { 
              icon: <Sparkles />, 
              title: "Criatividade Disruptiva", 
              text: "Estímulo à inovação e à busca por soluções fora da caixa em todas as disciplinas." 
            }
          ].map((item, i) => (
            <ScrollReveal key={i} delay={i * 100} className="bg-white/5 backdrop-blur-xl p-12 rounded-[4rem] border border-white/10 group hover:bg-white hover:border-white transition-all duration-700">
              <div className="w-16 h-16 bg-brand-red rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-2xl shadow-brand-red/20 text-white">
                {React.cloneElement(item.icon as React.ReactElement<any>, { size: 28 })}
              </div>
              <h4 className="text-2xl font-black text-white group-hover:text-brand-navy mb-4 transition-colors">{item.title}</h4>
              <p className="text-white/40 group-hover:text-slate-500 font-medium leading-relaxed transition-colors">{item.text}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Transformation;
