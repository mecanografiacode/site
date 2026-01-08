
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBlock from './components/TrustBlock';
import Pillars from './components/Pillars';
import Stats from './components/Stats';
import About from './components/About';
import Transformation from './components/Transformation';
import Differentials from './components/Differentials';
import Units from './components/Units';
import Enrollment from './components/Enrollment';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import MusicPlayer from './components/MusicPlayer';
import ScrollReveal from './components/ScrollReveal';
import Infantil from './components/Infantil';
import Fundamental from './components/Fundamental';
import HighSchool from './components/HighSchool';
import UnitsPage from './components/UnitsPage';
import SejaReacao2026 from './components/SejaReacao2026';
import UnitSelectorModal from './components/UnitSelectorModal';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'infantil' | 'fundamental' | 'highschool' | 'unidades' | 'seja-reacao' | 'privacidade' | 'termos'>('home');
  const [isUnitModalOpen, setIsUnitModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const baseTitle = "Colégio Reação";
    const metaDescription = document.querySelector('meta[name="description"]');
    
    const pageMetadata: Record<string, { title: string, desc: string }> = {
      home: { title: `${baseTitle} | Tradição, Valores e Resultados`, desc: "A jornada de excelência do seu filho começa aqui. Conheça o Colégio Reação: 28 anos formando grandes histórias no Recanto das Emas." },
      infantil: { title: `Educação Infantil | ${baseTitle}`, desc: "Carinho e estímulo para o início da vida escolar." },
      fundamental: { title: `Ensino Fundamental | ${baseTitle}`, desc: "Bases sólidas e suporte pedagógico integral." },
      highschool: { title: `Ensino Médio | ${baseTitle}`, desc: "Preparação intensiva para ENEM e vestibulares." },
      unidades: { title: `Unidades | ${baseTitle}`, desc: "Conheça nossas estruturas modernas." },
      'seja-reacao': { title: `Matrículas 2026 | ${baseTitle}`, desc: "Garanta seu lugar na elite educacional." },
      privacidade: { title: `Privacidade | ${baseTitle}`, desc: "Segurança de dados." },
      termos: { title: `Termos de Uso | ${baseTitle}`, desc: "Condições de uso." }
    };

    const currentMeta = pageMetadata[currentPage] || pageMetadata.home;
    document.title = currentMeta.title;
    if (metaDescription) metaDescription.setAttribute('content', currentMeta.desc);
  }, [currentPage]);

  const navigateTo = (page: any) => setCurrentPage(page);
  const openUnitSelector = () => setIsUnitModalOpen(true);

  return (
    <div className="min-h-screen">
      <Header onNavigate={navigateTo} currentPage={currentPage} />
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero onOpenUnitSelector={openUnitSelector} />
            <TrustBlock />
            <Pillars />
            <Stats />
            <About />
            <Transformation />
            <Differentials />
            <Units onOpenUnitSelector={openUnitSelector} />
            <Enrollment onOpenUnitSelector={openUnitSelector} />
            <Testimonials />
            
            <section id="contato" className="py-24 md:py-48 bg-brand-offwhite">
              <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
                <ScrollReveal>
                  <h2 className="text-brand-red text-xs font-black tracking-[0.4em] uppercase mb-8">Atendimento Exclusivo</h2>
                  <h3 className="text-4xl md:text-7xl font-black text-brand-navy mb-20 tracking-tighter">Escolha o seu canal.</h3>
                </ScrollReveal>
                
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <ScrollReveal delay={100}>
                    <div className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-slate-100 group">
                      <div className="w-20 h-20 bg-brand-navy text-brand-red rounded-3xl flex items-center justify-center mx-auto mb-10 group-hover:rotate-6 transition-transform">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                      </div>
                      <h4 className="font-black text-2xl text-brand-navy mb-6">Central de Voz</h4>
                      <div className="flex flex-col gap-2">
                        <a href="tel:6133331434" className="text-xl font-bold hover:text-brand-red transition-colors">(61) 3333-1434</a>
                        <a href="tel:6133333332" className="text-xl font-bold hover:text-brand-red transition-colors">(61) 3333-3332</a>
                      </div>
                    </div>
                  </ScrollReveal>
                  
                  <ScrollReveal delay={200}>
                    <div className="bg-brand-navy p-12 rounded-[3.5rem] shadow-3xl text-white border-8 border-brand-offwhite group">
                      <div className="w-20 h-20 bg-brand-red text-white rounded-3xl flex items-center justify-center mx-auto mb-10 group-hover:-rotate-6 transition-transform shadow-2xl shadow-brand-red/40">
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                      </div>
                      <h4 className="font-black text-2xl mb-6">Visitas Presenciais</h4>
                      <p className="text-white/60 font-medium">Segunda a Sexta<br/><span className="text-brand-red font-black text-2xl">07:30 às 18:00</span></p>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </section>
          </>
        ) : currentPage === 'infantil' ? (
          <Infantil onOpenUnitSelector={openUnitSelector} />
        ) : currentPage === 'fundamental' ? (
          <Fundamental onOpenUnitSelector={openUnitSelector} />
        ) : currentPage === 'unidades' ? (
          <UnitsPage onOpenUnitSelector={openUnitSelector} />
        ) : currentPage === 'seja-reacao' ? (
          <SejaReacao2026 />
        ) : currentPage === 'privacidade' ? (
          <PrivacyPolicy />
        ) : currentPage === 'termos' ? (
          <TermsOfUse />
        ) : (
          <HighSchool onOpenUnitSelector={openUnitSelector} />
        )}
      </main>
      <Footer onNavigate={navigateTo} />
      <FloatingWhatsApp />
      <MusicPlayer />
      <UnitSelectorModal isOpen={isUnitModalOpen} onClose={() => setIsUnitModalOpen(false)} />
    </div>
  );
};

export default App;
