
import React from 'react';
import { MessageCircle, ArrowRight, CheckCircle, ClipboardList, Calendar, MapPin, Star, Sparkles, PhoneCall } from 'lucide-react';
import { UNITS, ENROLLMENT_STEPS, DOCUMENTATION } from '../constants';
import ScrollReveal from './ScrollReveal';

const SejaReacao2026: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section - Urgência e Prestígio */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden bg-brand-navy">
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
            <span className="bg-brand-red text-white px-6 md:px-8 py-2 md:py-3 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-[0.5em] inline-block mb-6 md:mb-10 shadow-2xl animate-pulse">
              Matrículas Abertas 2026
            </span>
            <h1 className="text-4xl md:text-8xl font-black text-white mb-6 md:mb-8 tracking-tighter leading-none">
              Garanta o lugar do <br/><span className="text-brand-red italic font-serif">seu filho no topo.</span>
            </h1>
            <p className="text-white/60 text-lg md:text-2xl max-w-3xl mx-auto font-light leading-relaxed mb-8 md:mb-12">
              Não deixe para a última hora. O Colégio Reação prepara seu filho para os desafios do futuro com excelência acadêmica e valores sólidos.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* WhatsApp Central - Otimizado para Mobile */}
      <section className="py-12 md:py-24 -mt-10 md:-mt-20 relative z-20">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="grid md:grid-cols-2 gap-4 md:gap-10">
            {UNITS.map((unit, idx) => (
              <ScrollReveal key={unit.id} delay={idx * 200}>
                <div className="bg-white rounded-[2rem] md:rounded-[4rem] p-6 md:p-12 shadow-2xl border-2 md:border-4 border-brand-offwhite group hover:border-brand-red transition-all duration-500">
                  <div className="flex justify-between items-center md:items-start mb-6 md:mb-10">
                    <div className="bg-green-500/10 p-4 md:p-6 rounded-2xl md:rounded-3xl text-green-600">
                      <MessageCircle size={32} className="md:w-10 md:h-10" />
                    </div>
                    <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-100 px-3 md:px-4 py-1.5 md:py-2 rounded-full">
                      Atendimento Imediato
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-4xl font-black text-brand-navy mb-2 md:mb-4">{unit.name}</h3>
                  <p className="text-slate-500 mb-6 md:mb-10 text-sm md:text-lg font-medium">
                    Fale com nossa consultora da Unidade {unit.id === 1 ? '206' : '201'}.
                  </p>
                  
                  <div className="space-y-3 mb-8 md:mb-12 text-xs md:text-base">
                    <div className="flex items-center gap-3 text-brand-navy font-bold">
                      <MapPin size={16} className="text-brand-red shrink-0" />
                      <span className="truncate">{unit.address}</span>
                    </div>
                    <div className="flex items-center gap-3 text-brand-navy font-bold">
                      <Sparkles size={16} className="text-brand-red shrink-0" />
                      <span className="truncate">{unit.levels.slice(0, 2).join(' • ')}...</span>
                    </div>
                  </div>

                  <a 
                    href={unit.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-green-500 text-white py-5 md:py-8 rounded-2xl md:rounded-[2.5rem] font-black text-lg md:text-2xl hover:bg-green-600 hover:scale-[1.03] transition-all shadow-xl shadow-green-500/20 btn-shimmer w-full"
                  >
                    WHATSAPP <ArrowRight size={20} className="md:w-8 md:h-8" />
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Processo Simplificado */}
      <section className="py-20 md:py-32 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-16 md:gap-24">
            <div className="lg:w-1/2">
              <ScrollReveal>
                <h2 className="text-brand-red text-xs font-black tracking-[0.5em] uppercase mb-6 md:mb-8">Passo a Passo</h2>
                <h3 className="text-3xl md:text-6xl font-black text-brand-navy mb-8 md:mb-12 tracking-tighter">Como ingressar <br/>em 2026?</h3>
                <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed mb-10 md:mb-12">
                  Nosso processo de admissão é criterioso e focado em alinhar os valores da família com a nossa proposta pedagógica.
                </p>
                <div className="bg-brand-navy p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] text-white shadow-2xl">
                  <div className="flex items-center gap-4 md:gap-6 mb-8">
                    <div className="bg-brand-red p-3 md:p-4 rounded-xl md:rounded-2xl shrink-0">
                      <Calendar size={20} className="md:w-6 md:h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg md:text-xl">Agende sua Visita</h4>
                      <p className="text-white/40 text-xs md:text-sm">Vagas limitadas por turma.</p>
                    </div>
                  </div>
                  <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="w-full bg-white text-brand-navy py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-sm md:text-base hover:bg-brand-red hover:text-white transition-all">
                    ESCOLHER UNIDADE NO TOPO
                  </button>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:w-1/2 space-y-6 md:space-y-8">
              {ENROLLMENT_STEPS.map((step, idx) => (
                <ScrollReveal key={idx} delay={idx * 100}>
                  <div className="flex gap-4 md:gap-8 group">
                    <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 bg-white rounded-xl md:rounded-2xl flex items-center justify-center font-black text-brand-red text-lg md:text-xl shadow-sm group-hover:bg-brand-red group-hover:text-white transition-all">
                      0{idx + 1}
                    </div>
                    <div>
                      <h4 className="text-lg md:text-2xl font-black text-brand-navy mb-1 md:mb-2">{step.title}</h4>
                      <p className="text-slate-500 text-sm md:text-base font-medium">{step.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Checklist de Documentos */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-12">
          <ScrollReveal className="bg-brand-navy rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-16 text-white relative overflow-hidden border-[8px] md:border-[16px] border-brand-offwhite">
            <div className="absolute top-0 right-0 p-10 opacity-5 hidden md:block">
               <ClipboardList size={150} />
            </div>
            <h3 className="text-2xl md:text-4xl font-black mb-8 md:mb-12 flex items-center gap-4 md:gap-6">
              <ClipboardList className="text-brand-red w-8 h-8 md:w-10 md:h-10" /> Documentação
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {DOCUMENTATION.map((doc, idx) => (
                <div key={idx} className="flex items-center gap-3 text-white/70">
                  <CheckCircle size={18} className="text-brand-red shrink-0" />
                  <span className="font-medium text-sm md:text-base">{doc}</span>
                </div>
              ))}
            </div>
            <p className="mt-10 md:mt-16 text-white/30 text-[9px] md:text-xs font-bold uppercase tracking-widest text-center italic">
              * Documentos originais devem ser apresentados na secretaria
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-brand-navy text-3xl md:text-6xl font-black mb-10 md:mb-12 tracking-tighter">
              Não espere o <span className="text-brand-red">amanhã</span> chegar.
            </h2>
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8">
              <a href={UNITS[0].whatsapp} className="inline-flex items-center justify-center gap-3 bg-brand-navy text-white px-8 md:px-12 py-5 md:py-7 rounded-full font-black text-lg md:text-xl hover:scale-105 transition-all shadow-xl">
                 Unidade I <ArrowRight size={20} />
              </a>
              <a href={UNITS[1].whatsapp} className="inline-flex items-center justify-center gap-3 bg-brand-red text-white px-8 md:px-12 py-5 md:py-7 rounded-full font-black text-lg md:text-xl hover:scale-105 transition-all shadow-xl shadow-brand-red/20">
                 Unidade II <ArrowRight size={20} />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default SejaReacao2026;
