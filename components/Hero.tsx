
import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, ArrowRight, Share2, Check } from 'lucide-react';

const slides = [
  {
    title: "Ambientes modernos preparados para o aprendizado",
    subtitle: "Infraestrutura premium com laboratórios de ponta e espaços integrados à natureza.",
    cta: "Conhecer nossas unidades",
    image: "https://i.imgur.com/faarQOT.png", 
    webp: "https://i.imgur.com/faarQOT.webp",
    alt: "Estudantes em ambiente moderno, amplo e tecnológico de aprendizado no Colégio Reação"
  },
  {
    title: "Matrículas 2026: A jornada de excelência começa aqui",
    subtitle: "O colégio que une excelência acadêmica e formação humana integral em um campus de prestígio.",
    cta: "Garantir minha vaga",
    image: "https://i.imgur.com/jc4po2M.jpeg",
    webp: "https://i.imgur.com/jc4po2M.webp",
    alt: "Arquitetura imponente e tradicional do Colégio Reação, simbolizando excelência e história"
  }
];

interface HeroProps {
  onOpenUnitSelector?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenUnitSelector }) => {
  const [current, setCurrent] = useState(0);
  const [isCopying, setIsCopying] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const handleShare = async () => {
    const slide = slides[current];
    const currentUrl = window.location.href;
    
    // Validação básica para evitar o erro "Invalid URL" em ambientes restritos ou locais
    let validUrl = '';
    try {
      const urlObj = new URL(currentUrl);
      if (urlObj.protocol === 'http:' || urlObj.protocol === 'https:') {
        validUrl = currentUrl;
      }
    } catch (e) {
      // Não é uma URL padrão (ex: about:srcdoc em sandboxes)
    }

    const shareData: ShareData = {
      title: 'Colégio Reação',
      text: `${slide.title}\n\n${slide.subtitle}`,
    };
    
    if (validUrl) {
      shareData.url = validUrl;
    }

    const fallbackToClipboard = async () => {
      const textToCopy = `${slide.title}\n\n${slide.subtitle}${validUrl ? `\n\nSaiba mais em: ${validUrl}` : ''}`;
      try {
        await navigator.clipboard.writeText(textToCopy);
        setIsCopying(true);
        setTimeout(() => setIsCopying(false), 3000);
      } catch (copyErr) {
        console.error('Falha ao copiar para área de transferência:', copyErr);
      }
    };

    try {
      // Verifica se a API de compartilhamento está disponível e se os dados são compartilháveis
      if (navigator.share && (typeof navigator.canShare !== 'function' || navigator.canShare(shareData))) {
        await navigator.share(shareData);
      } else {
        await fallbackToClipboard();
      }
    } catch (err) {
      // Captura erros como "Invalid URL" ou cancelamentos pelo usuário
      if ((err as Error).name !== 'AbortError') {
        console.warn('Navigator.share falhou, utilizando fallback:', err);
        await fallbackToClipboard();
      }
    }
  };

  return (
    <section className="relative h-screen min-h-[550px] md:min-h-[600px] overflow-hidden bg-brand-navy">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out ${index === current ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/40 to-transparent z-10"></div>
          
          {/* Background Image with Ken Burns Effect and WebP Optimization */}
          <div className={`w-full h-full transition-transform duration-[10000ms] ease-linear ${index === current ? 'scale-110' : 'scale-100'}`}>
            <picture>
              <source srcSet={slide.webp} type="image/webp" />
              <img 
                src={slide.image} 
                className="w-full h-full object-cover" 
                alt={slide.alt}
                width="1920"
                height="1080"
                loading={index === 0 ? "eager" : "lazy"}
                // @ts-ignore
                fetchpriority={index === 0 ? "high" : "low"}
                decoding={index === 0 ? "sync" : "async"}
              />
            </picture>
          </div>
          
          <div className="absolute inset-0 z-20 flex flex-col items-start justify-center px-4 sm:px-6 lg:px-32 max-w-7xl mx-auto">
            <div className="max-w-4xl mt-12 md:mt-10">
              <h1 className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[5.5rem] font-black text-white mb-4 md:mb-6 leading-[1.1] md:leading-[1] tracking-tighter transition-all duration-1000 delay-300 break-words text-balance ${index === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {slide.title}
              </h1>
              <p className={`text-sm sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-white/70 mb-6 md:mb-10 font-light leading-relaxed max-w-2xl transition-all duration-1000 delay-500 text-balance ${index === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {slide.subtitle}
              </p>
              
              <div className={`flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 transition-all duration-1000 delay-700 ${index === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <button
                  onClick={onOpenUnitSelector}
                  className="group relative bg-brand-red text-white px-6 md:px-10 py-3.5 md:py-4 lg:py-5 rounded-full font-black text-sm md:text-lg shadow-[0_20px_40px_-10px_rgba(230,57,70,0.5)] transition-all hover:scale-105 md:hover:scale-110 hover:-translate-y-1 active:scale-95 btn-shimmer flex items-center justify-center gap-3"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    {slide.cta}
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </button>
                
                <button
                  onClick={onOpenUnitSelector}
                  className="bg-white/5 backdrop-blur-xl text-white border border-white/20 px-6 md:px-10 py-3.5 md:py-4 lg:py-5 rounded-full font-bold text-sm md:text-lg hover:bg-white hover:text-brand-navy transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 active:scale-95 text-center"
                >
                  Agendar Visita
                </button>

                <button
                  onClick={handleShare}
                  className={`group flex items-center justify-center gap-3 px-6 md:px-8 py-3.5 md:py-4 lg:py-5 rounded-full font-bold text-sm md:text-lg transition-all duration-500 transform hover:scale-105 active:scale-95 border ${isCopying ? 'bg-green-500 border-green-500 text-white' : 'bg-white/10 border-white/20 text-white hover:bg-brand-blue hover:border-brand-blue'}`}
                >
                  {isCopying ? (
                    <>
                      <Check className="w-4 h-4 md:w-5 md:h-5" />
                      Link Copiado!
                    </>
                  ) : (
                    <>
                      <Share2 className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
                      Compartilhar
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-10 md:bottom-16 left-6 md:left-auto md:right-16 z-30 flex space-x-4 md:space-x-6 items-center">
        <div className="flex space-x-2 md:space-x-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-700 ${i === current ? 'bg-brand-red w-8 md:w-12' : 'bg-white/20 w-3 md:w-4 hover:bg-white/40'}`}
              aria-label={`Ir para slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
