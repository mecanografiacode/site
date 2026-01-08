
import React from 'react';
import { ShieldCheck, Users, Target } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const TrustBlock: React.FC = () => {
  return (
    <section className="py-20 bg-brand-offwhite">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { 
              icon: <ShieldCheck className="text-brand-red" size={32} />, 
              title: "Ambiente Blindado", 
              desc: "Segurança de última geração e monitoramento constante para sua tranquilidade." 
            },
            { 
              icon: <Target className="text-brand-red" size={32} />, 
              title: "Foco no Resultado", 
              desc: "Metodologia comprovada pelas maiores taxas de aprovação da região." 
            },
            { 
              icon: <Users className="text-brand-red" size={32} />, 
              title: "Parceria com a Família", 
              desc: "Comunicação aberta e direta para acompanhar cada passo do desenvolvimento." 
            }
          ].map((item, i) => (
            <ScrollReveal key={i} delay={i * 100} className="flex flex-col items-center text-center group">
              <div className="mb-6 p-6 bg-white rounded-3xl shadow-sm group-hover:bg-brand-navy transition-all duration-500">
                {React.cloneElement(item.icon as React.ReactElement<any>, { className: "group-hover:text-white transition-colors" })}
              </div>
              <h4 className="text-xl font-black text-brand-navy mb-3">{item.title}</h4>
              <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBlock;
