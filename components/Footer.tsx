
import React from 'react';
import { Instagram, Facebook, Youtube, Send, ArrowUp } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

interface FooterProps {
  onNavigate?: (page: 'home' | 'infantil' | 'fundamental' | 'highschool' | 'unidades' | 'seja-reacao') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const socialLinks = [
    { 
      icon: Instagram, 
      url: 'https://www.instagram.com/colegioreacao/', 
      name: 'Instagram' 
    },
    { 
      icon: Facebook, 
      url: 'https://www.facebook.com/colegioreacao/?locale=pt_BR', 
      name: 'Facebook' 
    },
    { 
      icon: Youtube, 
      url: 'https://www.youtube.com/@COLÉGIOREAÇÃO', 
      name: 'YouTube' 
    }
  ];

  const handleNavItemClick = (e: React.MouseEvent<HTMLAnchorElement>, label: string, href: string) => {
    if (href.startsWith('http')) {
      return;
    }

    e.preventDefault();

    if (label === 'Infantil' && onNavigate) {
      onNavigate('infantil');
    } else if (label === 'Anos Iniciais e Finais' && onNavigate) {
      onNavigate('fundamental');
    } else if (label === 'Ensino Médio' && onNavigate) {
      onNavigate('highschool');
    } else if (label === 'Unidades' && onNavigate) {
      onNavigate('unidades');
    } else if (label === 'Seja Reação 2026' && onNavigate) {
      onNavigate('seja-reacao');
    } else if (onNavigate) {
      onNavigate('home');
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-navy text-white pt-32 pb-16 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <button 
              onClick={() => onNavigate?.('home')} 
              className="block h-20 mb-8 bg-white p-3 rounded-2xl shadow-xl w-fit transition-transform hover:scale-105"
            >
              <img 
                src="https://i.imgur.com/LESvkxT.png" 
                alt="Logotipo detalhado do Colégio Reação no rodapé institucional" 
                className="h-full w-auto object-contain"
                loading="lazy"
              />
            </button>
            <p className="text-white/50 leading-relaxed text-lg font-light">
              Desde 1997, transformando potencial em conquistas extraordinárias. A jornada de excelência começa aqui.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((link, i) => (
                <a 
                  key={i} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-white/5 p-4 rounded-2xl hover:bg-brand-red hover:text-white transition-all duration-300 transform hover:-translate-y-1" 
                  aria-label={`Link para nosso ${link.name}`}
                >
                  <link.icon size={24} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-10 text-brand-red">Unidades</h4>
            <div className="space-y-8 text-white/60 text-base">
              <div>
                <p className="font-bold text-white mb-2 text-lg">Unidade I - Infantil e Fundamental</p>
                <p>Qd 206 - Recanto das Emas, Brasília - DF</p>
                <a href="tel:6133331434" className="text-brand-red mt-1 font-semibold hover:underline block">(61) 3333-1434</a>
              </div>
              <div>
                <p className="font-bold text-white mb-2 text-lg">Unidade II - Completa</p>
                <p>Qd 201, Lote 07, Av. Buriti - Recanto das Emas, Brasília - DF</p>
                <a href="tel:6133333332" className="text-brand-red mt-1 font-semibold hover:underline block">(61) 3333-3332</a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-10 text-brand-red">Menu</h4>
            <nav className="flex flex-col space-y-6">
              {NAV_ITEMS.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href} 
                  onClick={(e) => handleNavItemClick(e, item.label, item.href)}
                  target={item.href.startsWith('http') ? "_blank" : undefined}
                  rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="text-white/60 hover:text-white transition-colors text-lg flex items-center group"
                >
                  <span className="w-0 group-hover:w-4 h-px bg-brand-red mr-0 group-hover:mr-3 transition-all"></span>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-10 text-brand-red">Newsletter</h4>
            <p className="text-white/50 text-lg mb-8 font-light">Assine e receba nosso calendário acadêmico mensal.</p>
            <form className="relative group" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="newsletter-email" className="sr-only">Seu melhor e-mail</label>
              <input 
                id="newsletter-email"
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="w-full bg-white/5 border border-white/10 rounded-[1.5rem] px-6 py-5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red transition-all"
              />
              <button 
                className="absolute right-2 top-2 bg-brand-red text-white p-3 rounded-[1.2rem] hover:bg-brand-navy transition-colors" 
                type="button"
                aria-label="Assinar newsletter"
              >
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-16 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center text-white/30 text-sm gap-8">
          <p>© 2026 Colégio Reação. A jornada de excelência começa aqui.</p>
          <div className="flex space-x-12">
            <a href="#" className="hover:text-white transition-colors tracking-widest uppercase text-xs font-bold">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors tracking-widest uppercase text-xs font-bold">Termos</a>
            <button 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} 
              className="flex items-center gap-2 hover:text-brand-red transition-colors tracking-widest uppercase text-xs font-bold"
            >
              Topo <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
