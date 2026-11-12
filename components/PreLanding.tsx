import React, { useEffect, useState } from 'react';
import { 
  MessageCircle, 
  ArrowRight, 
  MapPin, 
  Phone, 
  Sparkles, 
  GraduationCap, 
  Compass, 
  Building2, 
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { UNITS } from '../constants';

interface PreLandingProps {
  onExploreSite: () => void;
}

// Analytics helper
const trackEvent = (eventName: string, params: Record<string, any> = {}) => {
  try {
    // Google Tag Manager / GA4
    if (typeof window !== 'undefined') {
      if ((window as any).gtag) {
        (window as any).gtag('event', eventName, params);
      }
      if ((window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: eventName,
          ...params
        });
      }
      if ((window as any).posthog && typeof (window as any).posthog.capture === 'function') {
        (window as any).posthog.capture(eventName, params);
      }
    }
  } catch (err) {
    console.debug('Analytics tracking error:', err);
  }
};

const PreLanding: React.FC<PreLandingProps> = ({ onExploreSite }) => {
  const [selectedUnit, setSelectedUnit] = useState<number | null>(null);

  useEffect(() => {
    trackEvent('entry_view', {
      page: 'prelanding',
      timestamp: new Date().toISOString()
    });
  }, []);

  const handleUnitClick = (unitId: number, whatsappUrl: string, unitName: string) => {
    trackEvent(unitId === 1 ? 'entry_unit1_click' : 'entry_unit2_click', {
      unit: unitName,
      unit_id: unitId
    });
    trackEvent('entry_whatsapp_click', {
      unit: unitName,
      unit_id: unitId,
      channel: 'whatsapp'
    });
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleExploreClick = () => {
    trackEvent('entry_explore_site_click', {
      destination: 'home'
    });
    onExploreSite();
  };

  const handleContactSectionClick = () => {
    trackEvent('entry_contact_click', {
      section: 'unit_selection'
    });
  };

  // WhatsApp formatted messages according to official specification
  const unit1Message = encodeURIComponent("Olá! Quero conhecer o Colégio Reação e receber informações sobre as Matrículas 2027. Tenho interesse na Unidade I.");
  const unit2Message = encodeURIComponent("Olá! Quero conhecer o Colégio Reação e receber informações sobre as Matrículas 2027. Tenho interesse na Unidade II.");

  const unit1Url = `https://wa.me/5561996410987?text=${unit1Message}`;
  const unit2Url = `https://wa.me/5561999970428?text=${unit2Message}`;

  return (
    <div className="min-h-screen bg-brand-navy text-white relative flex flex-col justify-between overflow-x-hidden selection:bg-brand-red selection:text-white">
      {/* Background Image Layer with Refined Overlays */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Real photo of Colégio Reação students and facilities */}
        <img
          src="https://i.imgur.com/a8KWrIa.jpeg"
          alt="Alunos do Colégio Reação em ambiente de aprendizado e inovação"
          className="w-full h-full object-cover object-center opacity-25 scale-105 transition-transform duration-[20000ms] ease-out hover:scale-100"
          loading="eager"
          // @ts-ignore
          fetchPriority="high"
        />
        {/* Subtle dynamic architectural secondary image blend */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-overlay"
          style={{ backgroundImage: `url('https://i.imgur.com/jc4po2M.jpeg')` }}
        />

        {/* Ambient Brand Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/95 via-brand-navy/90 to-brand-navy/98 backdrop-blur-[2px]" />
        
        {/* Subtle Decorative Light Orbs */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-brand-blue/30 rounded-full blur-[140px] -z-10 pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-red/15 rounded-full blur-[120px] -z-10 pointer-events-none" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-12 md:py-16 flex flex-col flex-grow justify-between">
        
        {/* TOP BRAND BAR */}
        <header className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 sm:pb-8 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="bg-white/95 backdrop-blur-md p-2.5 sm:p-3 rounded-2xl shadow-xl border border-white/20 transition-transform duration-300 hover:scale-105">
              <img
                src="https://i.imgur.com/LESvkxT.png"
                alt="Logotipo oficial do Colégio Reação"
                className="h-10 sm:h-12 w-auto object-contain"
                width="180"
                height="60"
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-xs font-bold text-white/90 tracking-wide block uppercase">
                Colégio Reação
              </span>
              <span className="text-[10px] text-white/50 tracking-widest uppercase block">
                Recanto das Emas • Brasília - DF
              </span>
            </div>
          </div>

          {/* Official Campaign Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md px-4 py-2 rounded-full transition-all duration-300 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-ping" />
            <span className="w-2 h-2 rounded-full bg-brand-red -ml-3" />
            <span className="text-white text-xs sm:text-xs font-extrabold uppercase tracking-[0.2em]">
              Matrículas 2027 Abertas
            </span>
          </div>
        </header>

        {/* HERO EDITORIAL SECTION */}
        <section className="text-center max-w-4xl mx-auto pt-8 sm:pt-12 md:pt-14 pb-8 sm:pb-12">
          {/* Main Statement */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] mb-5 sm:mb-7">
            Uma grande jornada começa com a <span className="text-brand-red italic underline decoration-white/20 underline-offset-8">escola certa.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/80 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-3xl mx-auto mb-3 sm:mb-4">
            Há quase 30 anos, o Colégio Reação faz parte da história de famílias do Recanto das Emas. Conheça nossa proposta para 2027 e escolha como deseja começar.
          </p>

          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-amber-400/90 flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5" /> Escolha sua porta de entrada abaixo
          </p>
        </section>

        {/* STRATEGIC GATEWAY: 2 CLEAR PATHS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto w-full my-auto pb-8 sm:pb-12">
          
          {/* PATH 1 (PRIMARY / COMMERCIAL LEAD): QUERO FALAR COM O REAÇÃO (7 Cols on Desktop) */}
          <div 
            id="entry-path-contact"
            onClick={handleContactSectionClick}
            className="lg:col-span-7 bg-gradient-to-br from-white/12 via-white/[0.07] to-white/[0.03] backdrop-blur-xl rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 md:p-10 border-2 border-white/20 shadow-2xl flex flex-col justify-between relative overflow-hidden group hover:border-brand-red/60 transition-all duration-500"
          >
            {/* Top Accent Gradient Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-red via-brand-blue to-amber-400" />
            
            <div>
              {/* Option Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 bg-brand-red text-white text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full shadow-md">
                  <MessageCircle className="w-3.5 h-3.5" /> Opção 1 • Contato Direto
                </span>
                <span className="text-white/50 text-[11px] font-medium hidden sm:inline">
                  Atendimento oficial
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight mb-2">
                QUERO FALAR COM O REAÇÃO
              </h2>
              
              <p className="text-white/75 text-sm sm:text-base font-normal mb-6 sm:mb-8 leading-relaxed">
                Escolha a unidade mais conveniente para sua família e receba todas as orientações sobre o ano letivo de 2027.
              </p>

              {/* TWO UNIT CARDS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2">
                
                {/* UNIDADE I CARD */}
                <div 
                  className={`bg-brand-navy/80 hover:bg-brand-navy rounded-2xl sm:rounded-3xl p-5 sm:p-6 border transition-all duration-300 flex flex-col justify-between relative overflow-hidden group/card ${
                    selectedUnit === 1 ? 'border-brand-red shadow-lg shadow-brand-red/20 ring-2 ring-brand-red' : 'border-white/15 hover:border-brand-red/50 hover:shadow-xl'
                  }`}
                  onMouseEnter={() => setSelectedUnit(1)}
                  onMouseLeave={() => setSelectedUnit(null)}
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-red/20 border border-brand-red/40 flex items-center justify-center text-brand-red font-black text-base group-hover/card:bg-brand-red group-hover/card:text-white transition-colors">
                      I
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white/50 bg-white/5 px-2.5 py-1 rounded-lg">
                      Quadra 206
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-white mb-1">
                      UNIDADE I
                    </h3>
                    <p className="text-amber-300 text-xs sm:text-sm font-semibold mb-2">
                      Infantil e Fundamental
                    </p>
                    <p className="text-white/60 text-xs flex items-center gap-1.5 mb-1">
                      <MapPin className="w-3.5 h-3.5 text-brand-red shrink-0" />
                      Quadra 206 — Recanto das Emas
                    </p>
                    <p className="text-white/50 text-[11px] flex items-center gap-1.5 mb-5">
                      <Phone className="w-3 h-3 text-white/40 shrink-0" />
                      (61) 3333-1434
                    </p>
                  </div>

                  <button
                    id="btn-prelanding-unit-1"
                    onClick={() => handleUnitClick(1, unit1Url, 'Unidade I')}
                    className="w-full bg-brand-red hover:bg-[#c92a37] text-white py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-brand-red/30 transition-all transform active:scale-95 group-hover/card:scale-[1.02] btn-shimmer"
                    aria-label="Falar com a Unidade 1 via WhatsApp"
                  >
                    <span>FALAR COM A UNIDADE I</span>
                    <ArrowRight className="w-4 h-4 group-hover/card:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* UNIDADE II CARD */}
                <div 
                  className={`bg-brand-navy/80 hover:bg-brand-navy rounded-2xl sm:rounded-3xl p-5 sm:p-6 border transition-all duration-300 flex flex-col justify-between relative overflow-hidden group/card ${
                    selectedUnit === 2 ? 'border-brand-red shadow-lg shadow-brand-red/20 ring-2 ring-brand-red' : 'border-white/15 hover:border-brand-red/50 hover:shadow-xl'
                  }`}
                  onMouseEnter={() => setSelectedUnit(2)}
                  onMouseLeave={() => setSelectedUnit(null)}
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-blue/30 border border-brand-blue/60 flex items-center justify-center text-blue-300 font-black text-base group-hover/card:bg-brand-red group-hover/card:text-white transition-colors">
                      II
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white/50 bg-white/5 px-2.5 py-1 rounded-lg">
                      Quadra 201
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-white mb-1">
                      UNIDADE II
                    </h3>
                    <p className="text-amber-300 text-xs sm:text-sm font-semibold mb-2">
                      Infantil, Fundamental e Médio
                    </p>
                    <p className="text-white/60 text-xs flex items-center gap-1.5 mb-1">
                      <MapPin className="w-3.5 h-3.5 text-brand-red shrink-0" />
                      Quadra 201 — Recanto das Emas
                    </p>
                    <p className="text-white/50 text-[11px] flex items-center gap-1.5 mb-5">
                      <Phone className="w-3 h-3 text-white/40 shrink-0" />
                      (61) 3333-3332
                    </p>
                  </div>

                  <button
                    id="btn-prelanding-unit-2"
                    onClick={() => handleUnitClick(2, unit2Url, 'Unidade II')}
                    className="w-full bg-brand-red hover:bg-[#c92a37] text-white py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-brand-red/30 transition-all transform active:scale-95 group-hover/card:scale-[1.02] btn-shimmer"
                    aria-label="Falar com a Unidade 2 via WhatsApp"
                  >
                    <span>FALAR COM A UNIDADE II</span>
                    <ArrowRight className="w-4 h-4 group-hover/card:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            </div>

            <div className="pt-4 mt-2 border-t border-white/10 flex items-center justify-between text-white/40 text-[11px]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-400" /> Atendimento de Seg. a Sex. (07:30 às 18:00)
              </span>
              <span className="hidden sm:inline">WhatsApp Oficial</span>
            </div>
          </div>

          {/* PATH 2 (SECONDARY / INSTITUTIONAL EXPLORATION): QUERO CONHECER O REAÇÃO (5 Cols on Desktop) */}
          <div 
            id="entry-path-explore"
            className="lg:col-span-5 bg-gradient-to-br from-white/10 via-white/[0.05] to-transparent backdrop-blur-xl rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 md:p-10 border-2 border-white/15 shadow-xl flex flex-col justify-between group hover:border-white/40 hover:bg-white/[0.08] transition-all duration-500"
          >
            <div>
              {/* Option Header */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 bg-white/10 text-white/90 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full border border-white/15">
                  <Compass className="w-3.5 h-3.5 text-blue-300" /> Opção 2 • Institucional
                </span>
                <span className="text-white/40 text-[11px] font-medium">
                  Portal completo
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">
                QUERO CONHECER O REAÇÃO
              </h2>
              
              <p className="text-white/75 text-sm sm:text-base font-normal leading-relaxed mb-6 sm:mb-8">
                Explore nossa proposta pedagógica, nossas unidades, etapas de ensino e tudo o que fazemos para preparar nossos alunos para o futuro.
              </p>

              {/* Highlights List */}
              <div className="space-y-3 mb-8 bg-brand-navy/60 p-4 sm:p-5 rounded-2xl border border-white/10">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-white/80 font-medium">
                  <div className="w-6 h-6 rounded-lg bg-brand-blue/40 flex items-center justify-center text-blue-300 shrink-0">
                    <GraduationCap className="w-3.5 h-3.5" />
                  </div>
                  <span>Metodologia com foco em aprovação no PAS e ENEM</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-white/80 font-medium">
                  <div className="w-6 h-6 rounded-lg bg-brand-blue/40 flex items-center justify-center text-blue-300 shrink-0">
                    <Building2 className="w-3.5 h-3.5" />
                  </div>
                  <span>Estrutura completa com laboratórios e salas modernas</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-white/80 font-medium">
                  <div className="w-6 h-6 rounded-lg bg-brand-blue/40 flex items-center justify-center text-blue-300 shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                  <span>Educação Infantil, Fundamental e Ensino Médio</span>
                </div>
              </div>
            </div>

            {/* EXPLORAR SITE BUTTON */}
            <div>
              <button
                id="btn-prelanding-explore-site"
                onClick={handleExploreClick}
                className="w-full bg-white hover:bg-slate-100 text-brand-navy py-4 sm:py-5 px-6 rounded-2xl font-black text-sm sm:text-base uppercase tracking-wider flex items-center justify-center gap-3 shadow-xl transition-all duration-300 transform active:scale-95 group-hover:scale-[1.02] border-2 border-white"
                aria-label="Explorar o site completo do Colégio Reação"
              >
                <span>EXPLORAR O SITE</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300 text-brand-red" />
              </button>
              
              <p className="text-center text-white/40 text-[11px] mt-3 font-medium">
                Navegue livremente por fotos, projetos e diferenciais
              </p>
            </div>
          </div>

        </div>

        {/* BOTTOM SUPPORTING BRAND STATEMENT */}
        <footer className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-xs sm:text-sm text-white/60 font-medium tracking-wide">
            <span className="text-white font-bold">Desde 1997</span>, formando histórias e preparando futuros.
          </p>
          <div className="flex items-center gap-4 text-[11px] text-white/40">
            <span>Recanto das Emas – DF</span>
            <span>•</span>
            <button 
              onClick={handleExploreClick}
              className="text-white/60 hover:text-white underline underline-offset-4 transition-colors"
            >
              Ir direto para a Home
            </button>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default PreLanding;
