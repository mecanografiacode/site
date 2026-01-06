
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Pillars from './components/Pillars';
import Stats from './components/Stats';
import About from './components/About';
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

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'infantil' | 'fundamental' | 'highschool' | 'unidades' | 'seja-reacao'>('home');
  const [isUnitModalOpen, setIsUnitModalOpen] = useState(false);

  // Scroll to top and SEO Metadata Update
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // SEO: Dynamic Title and Meta Description Management
    const baseTitle = "Colégio Reação";
    const metaDescription = document.querySelector('meta[name="description"]');
    
    const pageMetadata: Record<string, { title: string, desc: string }> = {
      home: { 
        title: `${baseTitle} | A jornada de excelência começa aqui`, 
        desc: "O Colégio Reação oferece Educação Infantil, Fundamental e Médio com infraestrutura premium no Recanto das Emas, Brasília. Matrículas 2026 abertas." 
      },
      infantil: { 
        title: `Educação Infantil | ${baseTitle}`, 
        desc: "O início da jornada escolar com carinho e inovação pedagógica. Conheça o Reação Kids para crianças de 3 a 5 anos." 
      },
      fundamental: { 
        title: `Ensino Fundamental | ${baseTitle}`, 
        desc: "Do 1º ao 9º ano: excelência acadêmica e formação humana. Uma base sólida para o futuro do seu filho no Recanto das Emas." 
      },
      highschool: { 
        title: `Ensino Médio | ${baseTitle}`, 
        desc: "Preparação intensiva para ENEM, PAS e vestibulares. Formação crítica e intelectual de alta performance." 
      },
      unidades: { 
        title: `Nossas Unidades | ${baseTitle}`, 
        desc: "Conheça nossas unidades I e II no Recanto das Emas. Infraestrutura moderna, laboratórios e espaços de convivência." 
      },
      'seja-reacao': { 
        title: `Matrículas 2026 | ${baseTitle}`, 
        desc: "Garanta o futuro do seu filho. Processo de matrícula 2026 aberto para todos os segmentos. Inicie o agendamento agora." 
      }
    };

    const currentMeta = pageMetadata[currentPage] || pageMetadata.home;
    document.title = currentMeta.title;
    if (metaDescription) {
      metaDescription.setAttribute('content', currentMeta.desc);
    }
  }, [currentPage]);

  const navigateTo = (page: 'home' | 'infantil' | 'fundamental' | 'highschool' | 'unidades' | 'seja-reacao') => {
    setCurrentPage(page);
  };

  const openUnitSelector = () => setIsUnitModalOpen(true);

  return (
    <div className="min-h-screen">
      <Header onNavigate={navigateTo} currentPage={currentPage} />
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero onOpenUnitSelector={openUnitSelector} />
            <Pillars />
            <Stats />
            <About />
            <Differentials />
            <Units onOpenUnitSelector={openUnitSelector} />
            <Enrollment onOpenUnitSelector={openUnitSelector} />
            <Testimonials />
            
            <section id="contato" className="py-20 md:py-32 bg-brand-offwhite">
              <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
                <ScrollReveal>
                  <h2 className="text-brand-navy text-[10px] md:text-sm font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase mb-4 md:mb-6">Atendimento</h2>
                  <h3 className="text-3xl md:text-5xl font-extrabold text-brand-navy mb-12 md:mb-20 leading-tight">Canais de Relacionamento</h3>
                </ScrollReveal>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-4xl mx-auto">
                  <ScrollReveal delay={100}>
                    <div className="bg-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] card-elevation border border-slate-100 group h-full">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-navy text-brand-red rounded-2xl md:rounded-[2rem] flex items-center justify-center mx-auto mb-6 md:mb-8 shadow-xl shadow-blue-900/10 group-hover:rotate-6 transition-transform shrink-0">
                        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                      </div>
                      <h4 className="font-bold text-xl md:text-2xl text-brand-navy mb-4">Telefones</h4>
                      <div className="text-slate-500 text-base md:text-lg leading-relaxed flex flex-col items-center gap-1">
                        <a href="tel:6133331434" className="hover:text-brand-red transition-colors">(61) 3333-1434</a>
                        <a href="tel:6133333332" className="hover:text-brand-red transition-colors">(61) 3333-3332</a>
                      </div>
                    </div>
                  </ScrollReveal>
                  
                  <ScrollReveal delay={200}>
                    <div className="bg-brand-navy p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] card-elevation relative z-10 border-4 border-white shadow-3xl group h-full">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-red text-white rounded-2xl md:rounded-[2rem] flex items-center justify-center mx-auto mb-6 md:mb-8 shadow-2xl shadow-brand-red/20 group-hover:-rotate-6 transition-transform shrink-0">
                        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                      </div>
                      <h4 className="font-bold text-xl md:text-2xl text-white mb-4">Secretaria</h4>
                      <p className="text-white/60 text-base md:text-lg leading-relaxed">Segunda a Sexta<br/><span className="text-brand-red font-bold">07:30 às 18:00</span></p>
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
        ) : (
          <HighSchool onOpenUnitSelector={openUnitSelector} />
        )}
      </main>
      <Footer onNavigate={navigateTo} />
      <FloatingWhatsApp />
      <MusicPlayer />
      <UnitSelectorModal 
        isOpen={isUnitModalOpen} 
        onClose={() => setIsUnitModalOpen(false)} 
      />
    </div>
  );
};

export default App;
