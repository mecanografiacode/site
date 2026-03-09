
import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Star, ArrowRight, ArrowLeft } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const APPROVED_IMAGES = [
  {
    id: 1,
    url: 'https://i.imgur.com/N7FOSM6.png',
    name: 'Eduardo Guimarães Barbosa',
    year: 'Química / UnB'
  },
  {
    id: 2,
    url: 'https://i.imgur.com/BifyxoE.png',
    name: 'Izadora Farias',
    year: 'Fisioterapia (UCB)'
  },
  {
    id: 3,
    url: 'https://i.imgur.com/sdrCJN6.png',
    name: 'Giovanna Carlos',
    year: 'Direito (UNIPROCESSUS)'
  },
  {
    id: 4,
    url: 'https://i.imgur.com/Cg6eb1A.png',
    name: 'Carlos Aparecido',
    year: 'Engenharia de Software (UCB)'
  },
  {
    id: 5,
    url: 'https://i.imgur.com/crbCmvk.png',
    name: 'Ana Clara Fernandes',
    year: 'Direito (UNICORP)'
  },
  {
    id: 6,
    url: 'https://i.imgur.com/RsBFCLf.png',
    name: 'Maria Eduarda Soares',
    year: 'Pedagogia (SISU)'
  },
  {
    id: 7,
    url: 'https://i.imgur.com/NATzFhB.png',
    name: 'Márcia Leandra',
    year: 'Fisioterapia (UCB)'
  },
  {
    id: 8,
    url: 'https://i.imgur.com/de7spEr.png',
    name: 'Letícia dos Santos',
    year: 'Direito (UNICEUB)'
  },
  {
    id: 9,
    url: 'https://i.imgur.com/bmHwzgA.png',
    name: 'Rafael Barros',
    year: 'Engenharia Civil (UCB)'
  },
  {
    id: 10,
    url: 'https://i.imgur.com/MklxOkF.png',
    name: 'Ana Clara Félix',
    year: 'Arquitetura (UCB)'
  },
  {
    id: 11,
    url: 'https://i.imgur.com/5yN364D.png',
    name: 'Marina Gonçalves',
    year: 'Engenharia Civil (UCB)'
  },
  {
    id: 12,
    url: 'https://i.imgur.com/Inid42s.png',
    name: 'Ícaro Augusto',
    year: 'Análise de Sistemas (UCB)'
  },
  {
    id: 13,
    url: 'https://i.imgur.com/0um8de8.png',
    name: 'Geovanna Delmondes',
    year: 'Psicologia (UNICEPLAC)'
  },
  {
    id: 14,
    url: 'https://instagram.fbsb8-2.fna.fbcdn.net/v/t39.30808-6/638362806_122114467545209225_4177662968484790646_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=102&ig_cache_key=MzgzNjkxMjA4NDMxNTkwOTkzNw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=oasC8eSJHhEQ7kNvwFJqeD1&_nc_oc=AdlQfxsev72f6HKwnh3VGNNko6fstjk-RvSpEFhKOjEmyRQe3sABC-A3uLkbWM15Q28&_nc_ad=z-m&_nc_cid=1138&_nc_zt=23&_nc_ht=instagram.fbsb8-2.fna&_nc_gid=VHCVaXhin2EpkPYcK4kOdg&_nc_ss=8&oh=00_AfzCwxvGqEUPj-1l9wVKUS6Wef_YommZl_vAfvvHrBeP0g&oe=69B47CFA',
    name: 'Ana Clara Rabelo Goulart',
    year: 'Matemática - UnB'
  },
  {
    id: 15,
    url: 'https://instagram.fbsb8-2.fna.fbcdn.net/v/t39.30808-6/638320581_122114466387209225_6637488801514322255_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&_nc_cat=109&ig_cache_key=MzgzNzY4NDAwOTczNjg0MzI2Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=okrj_uKeHU0Q7kNvwFw-cjP&_nc_oc=Adn9mnTYnp7qvUJXR7hbOlkM1N5R6mugcZ-Y0E98Aysv6_sXFqZEFXbVeoXWL0KKC14&_nc_ad=z-m&_nc_cid=1138&_nc_zt=23&_nc_ht=instagram.fbsb8-2.fna&_nc_gid=VHCVaXhin2EpkPYcK4kOdg&_nc_ss=8&oh=00_Afwb58uuonHYpdvAlXMG_uycXfCHzMMMPJCz5hFZbxoZSA&oe=69B49BEF',
    name: 'Maria Eduarda Ribeiro Pinheiro',
    year: 'Ciências Sociais'
  },
  {
    id: 16,
    url: 'https://instagram.fbsb8-2.fna.fbcdn.net/v/t39.30808-6/638224036_122114466675209225_471291925872286830_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ig_cache_key=MzgzODQwODgzOTQ2NDU2NzcyOA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=aVaq9xSFReAQ7kNvwEsRVql&_nc_oc=AdkwknvejvuAOUPBdzQOt01CriMZgK1TONGVy3L5ylp_428WDCpYYTmPJ9M8AGpKDrQ&_nc_ad=z-m&_nc_cid=1138&_nc_zt=23&_nc_ht=instagram.fbsb8-2.fna&_nc_gid=VHCVaXhin2EpkPYcK4kOdg&_nc_ss=8&oh=00_Afy-qazRPTW7Jw75DZxGlUJc9cSIzOgy_GxG-00V6BPVmA&oe=69B476ED',
    name: 'Ryan Vieira Costa',
    year: 'Química Tecnológica'
  },
  {
    id: 17,
    url: 'https://instagram.fbsb8-1.fna.fbcdn.net/v/t39.30808-6/640469079_122114467257209225_7471339298930559577_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ig_cache_key=MzgzOTEzMzYzMTI5MzUzOTQ1NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=eyrqT6I9hT8Q7kNvwHxAwOm&_nc_oc=AdnrLKW-bsd_5xroqzODRtBPqv-ETrS3JL0BQweH2-EwCNIX4WNnuUefIV76nbDdMLs&_nc_ad=z-m&_nc_cid=1138&_nc_zt=23&_nc_ht=instagram.fbsb8-1.fna&_nc_gid=VHCVaXhin2EpkPYcK4kOdg&_nc_ss=8&oh=00_Afw4XE6_xJF-FyFtD-0Q1XUgH3jWMp1vcCetZm3dkvz9Vw&oe=69B496A7',
    name: 'Maria Eduarda Soares dos Santos',
    year: 'Fonoaudiologia'
  },
  {
    id: 18,
    url: 'https://instagram.fbsb8-1.fna.fbcdn.net/v/t39.30808-6/640178652_122114584527209225_3910386571409054292_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&_nc_cat=104&ig_cache_key=Mzg0MTA1NzczNjI1MjA1ODYzNg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=XliZkCFxRiwQ7kNvwHS9mw_&_nc_oc=AdlgjARuqZXFGP42C_Hhv9ba2eQ6VdJOZnljrjRF973TEpDRltzbR4voHxpqrgMEwoo&_nc_ad=z-m&_nc_cid=1138&_nc_zt=23&_nc_ht=instagram.fbsb8-1.fna&_nc_gid=E6daFhSvAK7Xd3Q-Dk9b5g&_nc_ss=8&oh=00_AfzpTy2V_FLwitLUhWPBjGPDTrAmvycbw4l9Jgg-aKk0Yg&oe=69B48032',
    name: 'Jorge Henrique Pereira dos Santos',
    year: 'Ciências Contábeis - UnB'
  }
];

const ApprovedStudents: React.FC = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-brand-offwhite relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl -z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-brand-red/10 rounded-lg">
                <Trophy className="text-brand-red w-6 h-6" />
              </div>
              <span className="text-brand-red font-black text-xs uppercase tracking-[0.3em]">Resultados Reais</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-brand-navy tracking-tighter leading-none">
              Nossos <span className="text-brand-red">Aprovados</span>
            </h2>
            <p className="text-slate-500 mt-4 max-w-xl text-lg font-light">
              Orgulho que transborda! Conheça alguns dos nossos alunos que conquistaram suas vagas nas melhores universidades do país.
            </p>
          </ScrollReveal>

          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="p-4 rounded-full bg-white border border-slate-200 text-brand-navy hover:bg-brand-navy hover:text-white transition-all shadow-sm"
              aria-label="Anterior"
            >
              <ArrowLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-4 rounded-full bg-brand-navy text-white hover:bg-brand-red transition-all shadow-lg"
              aria-label="Próximo"
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {APPROVED_IMAGES.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="min-w-[280px] md:min-w-[350px] aspect-[4/5] relative rounded-[2.5rem] overflow-hidden snap-start group shadow-xl"
            >
              <img 
                src={item.url} 
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="text-yellow-400 fill-yellow-400" size={16} />
                  <span className="text-white/70 text-xs font-bold uppercase tracking-widest">{item.year}</span>
                </div>
                <h4 className="text-white text-2xl font-black tracking-tight leading-tight">
                  {item.name}
                </h4>
              </div>

              {/* Decorative Badge */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                <Trophy className="text-white w-6 h-6" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-400 text-sm font-medium uppercase tracking-[0.2em]">
            Deslize para ver mais conquistas
          </p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
};

export default ApprovedStudents;
