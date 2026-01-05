
import React from 'react';
import { MessageCircle, ArrowRight, CheckCircle, ClipboardList, Calendar, MapPin, Star, Sparkles, PhoneCall } from 'lucide-react';
import { UNITS, ENROLLMENT_STEPS, DOCUMENTATION } from '../constants';
import ScrollReveal from './ScrollReveal';

const SejaReacao2026: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section - Urgência e Prestígio */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523050337458-5bd55f95f938?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-20"
            alt="Ambiente educacional premium"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy via-transparent to-brand-navy"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
          <ScrollReveal>
            <span className="bg-brand-red text-white px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.5em] inline-block mb-10 shadow-2xl animate-pulse">
              Matrículas Abertas 2026
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
              Garanta o lugar do <br/><span className="text-brand-red italic font-serif">seu filho no topo.</span>
            </h1>
            <p className="text-white/60 text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed mb-12">
              Não deixe para a última hora. O Colégio Reação prepara seu filho para os desafios do futuro com excelência acadêmica e valores sólidos.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* WhatsApp Central - O CORAÇÃO DA PÁGINA */}
      <section className="py-24 -mt-20 relative z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-10">
            {UNITS.map((unit, idx) => (
              <ScrollReveal key={unit.id} delay={idx * 200}>
                <div className="bg-white rounded-[4rem] p-12 shadow-3xl border-4 border-brand-offwhite group hover:border-brand-red transition-all duration-500">
                  <div className="flex justify-between items-start mb-10">
                    <div className="bg-green-500/10 p-6 rounded-3xl text-green-600">
                      <MessageCircle size={40} fill="currentColor" className="opacity-20 absolute" />
                      <MessageCircle size={40} className="relative z-10" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-100 px-4 py-2 rounded-full">
                      Atendimento Imediato
                    </span>
                  </div>
                  
                  <h3 className="text-4xl font-black text-brand-navy mb-4">{unit.name}</h3>
                  <p className="text-slate-500 mb-10 text-lg font-medium">
                    Fale com nossa consultora de matrículas da Unidade {unit.id === 1 ? 'Recanto 206' : 'Recanto 201'}.
                  </p>
                  
                  <div className="space-y-4 mb-12">
                    <div className="flex items-center gap-4 text-brand-navy font-bold">
                      <MapPin size={18} className="text-brand-red" />
                      {unit.address}
                    </div>
                    <div className="flex items-center gap-4 text-brand-navy font-bold">
                      <Sparkles size={18} className="text-brand-red" />
                      {unit.levels.join(' • ')}
                    </div>
                  </div>

                  <a 
                    href={unit.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-4 bg-green-500 text-white py-8 rounded-[2.5rem] font-black text-2xl hover:bg-green-600 hover:scale-[1.03] transition-all shadow-xl shadow-green-500/20 btn-shimmer w-full"
                  >
                    WHATSAPP {unit.name.toUpperCase()} <ArrowRight />
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Processo Simplificado */}
      <section className="py-32 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-24">
            <div className="lg:w-1/2">
              <ScrollReveal>
                <h2 className="text-brand-red text-xs font-black tracking-[0.5em] uppercase mb-8">Passo a Passo</h2>
                <h3 className="text-5xl md:text-6xl font-black text-brand-navy mb-12 tracking-tighter">Como ingressar <br/>em 2026?</h3>
                <p className="text-slate-500 text-xl font-light leading-relaxed mb-12">
                  Nosso processo de admissão é criterioso e focado em alinhar os valores da família com a nossa proposta pedagógica de alta performance.
                </p>
                <div className="bg-brand-navy p-10 rounded-[3rem] text-white shadow-2xl">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="bg-brand-red p-4 rounded-2xl">
                      <Calendar size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl">Agende sua Visita</h4>
                      <p className="text-white/40 text-sm">Vagas limitadas por turma.</p>
                    </div>
                  </div>
                  <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="w-full bg-white text-brand-navy py-5 rounded-2xl font-black hover:bg-brand-red hover:text-white transition-all">
                    ESCOLHER UNIDADE NO TOPO
                  </button>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:w-1/2 space-y-8">
              {ENROLLMENT_STEPS.map((step, idx) => (
                <ScrollReveal key={idx} delay={idx * 100}>
                  <div className="flex gap-8 group">
                    <div className="w-16 h-16 shrink-0 bg-white rounded-2xl flex items-center justify-center font-black text-brand-red text-xl shadow-sm group-hover:bg-brand-red group-hover:text-white transition-all">
                      0{idx + 1}
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-brand-navy mb-2">{step.title}</h4>
                      <p className="text-slate-500 font-medium">{step.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Checklist de Documentos */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <ScrollReveal className="bg-brand-navy rounded-[4rem] p-16 text-white relative overflow-hidden border-[16px] border-brand-offwhite">
            <div className="absolute top-0 right-0 p-10 opacity-10">
               <ClipboardList size={150} />
            </div>
            <h3 className="text-4xl font-black mb-12 flex items-center gap-6">
              <ClipboardList className="text-brand-red" size={40} /> Documentação Necessária
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {DOCUMENTATION.map((doc, idx) => (
                <div key={idx} className="flex items-center gap-4 text-white/70">
                  <CheckCircle size={20} className="text-brand-red shrink-0" />
                  <span className="font-medium">{doc}</span>
                </div>
              ))}
            </div>
            <p className="mt-16 text-white/30 text-xs font-bold uppercase tracking-widest text-center italic">
              * Documentos originais devem ser apresentados na secretaria
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-brand-navy text-4xl md:text-6xl font-black mb-12 tracking-tighter">
              Não espere o <span className="text-brand-red">amanhã</span> chegar.
            </h2>
            <div className="flex flex-col md:flex-row justify-center gap-8">
              <a href={UNITS[0].whatsapp} className="inline-flex items-center gap-4 bg-brand-navy text-white px-12 py-7 rounded-full font-black text-xl hover:scale-105 transition-all shadow-xl">
                 Unidade I <ArrowRight />
              </a>
              <a href={UNITS[1].whatsapp} className="inline-flex items-center gap-4 bg-brand-red text-white px-12 py-7 rounded-full font-black text-xl hover:scale-105 transition-all shadow-xl shadow-brand-red/20">
                 Unidade II <ArrowRight />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default SejaReacao2026;
