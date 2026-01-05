
import React from 'react';
import { 
  Target, Rocket, GraduationCap, BookOpen, ArrowRight, CheckCircle, 
  Brain, Microscope, Laptop, Globe, Star, Award, Zap, 
  Users, BarChart3, ShieldCheck, Compass, Briefcase, Pencil, Heart
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface HighSchoolProps {
  onOpenUnitSelector?: () => void;
}

const HighSchool: React.FC<HighSchoolProps> = ({ onOpenUnitSelector }) => {
  return (
    <div className="bg-white">
      {/* Hero Section Ensino Médio - Otimizada para LCP */}
      <section className="relative h-[90vh] min-h-[750px] flex items-center overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.imgur.com/EUksldX.jpeg" 
            alt="Estudantes do Ensino Médio do Colégio Reação em ambiente de aprendizado avançado"
            className="w-full h-full object-cover opacity-40 scale-105 animate-soft-pulse"
            width="1920"
            height="1080"
            loading="eager"
            // @ts-ignore - Atributo de performance para LCP
            fetchpriority="high"
            decoding="sync"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/60 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full pt-20">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-8">
              <span className="bg-brand-red text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.4em] inline-block shadow-lg">
                Ensino Médio
              </span>
              <div className="flex gap-1">
                <Star size={14} className="text-brand-red fill-brand-red" />
                <Star size={14} className="text-brand-red fill-brand-red" />
                <Star size={14} className="text-brand-red fill-brand-red" />
              </div>
            </div>
            <h1 className="text-5xl md:text-[6.5rem] font-black text-white mb-8 tracking-tighter leading-[0.9]">
              Formação para <br />
              <span className="text-brand-red italic underline decoration-white/10">o Futuro.</span>
            </h1>
            <p className="text-white/80 text-xl md:text-2xl max-w-2xl font-light mb-12 leading-relaxed">
              Preparação completa para vestibulares, ENEM, PAS e desenvolvimento crítico e intelectual para os desafios do mundo contemporâneo.
            </p>
            <div className="flex flex-wrap gap-5">
              <button 
                onClick={onOpenUnitSelector}
                className="bg-brand-red text-white px-12 py-6 rounded-full font-black text-lg hover:scale-110 transition-all shadow-3xl shadow-brand-red/30 flex items-center gap-3 btn-shimmer"
              >
                Matrículas 2026 <ArrowRight />
              </button>
              <button 
                onClick={onOpenUnitSelector}
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-12 py-6 rounded-full font-bold text-lg hover:bg-white hover:text-brand-navy transition-all"
              >
                Diferenciais Reação
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Introdução - Formação Integral */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-brand-navy text-4xl md:text-5xl font-black mb-10 leading-tight">
              Formação integral para os grandes <br/><span className="text-brand-red font-serif italic">desafios acadêmicos e da vida</span>.
            </h2>
            <div className="w-24 h-2 bg-brand-red mx-auto mb-12 rounded-full"></div>
            <div className="space-y-8 max-w-4xl mx-auto">
              <p className="text-slate-500 text-xl leading-[1.8] font-light">
                No Ensino Médio do Colégio Reação, combinamos excelência acadêmica com formação humana, preparando estudantes para os vestibulares mais concorridos, ENEM, PAS e para a vida universitária. Nossa metodologia integra aprofundamento disciplinar, orientação vocacional e desenvolvimento de autonomia intelectual.
              </p>
              <p className="text-slate-500 text-xl leading-[1.8] font-light">
                Acompanhamos cada aluno de perto, oferecendo suporte pedagógico individualizado, simulados periódicos e incentivo à maturidade acadêmica, formando bases sólidas para o futuro profissional e pessoal.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pilares Educacionais */}
      <section id="proposta" className="py-32 bg-brand-offwhite relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-24">
            <ScrollReveal>
              <h2 className="text-brand-blue text-xs font-black tracking-[0.4em] uppercase mb-6">Ensino Médio Reação</h2>
              <h3 className="text-4xl md:text-5xl font-black text-brand-navy mb-6 tracking-tight">Nossos Pilares Educacionais</h3>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">Uma abordagem completa que desenvolve potencialidades acadêmicas, humanas e prepara para o futuro.</p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: GraduationCap, 
                title: 'Formação Acadêmica Avançada', 
                text: 'Aprofundamento em Física, Química, Biologia, Matemática, Redação e Ciências Humanas com foco crítico e científico.' 
              },
              { 
                icon: Award, 
                title: 'Preparação para Vestibulares', 
                text: 'Preparação completa para ENEM, PAS e principais vestibulares com simulados, revisões e técnicas de estudo eficazes.' 
              },
              { 
                icon: Compass, 
                title: 'Orientação Vocacional', 
                text: 'Apoio na escolha de áreas profissionais, atividades de descoberta vocacional e informação sobre universidades e cursos.' 
              },
              { 
                icon: Rocket, 
                title: 'Autonomia e Maturidade', 
                text: 'Estímulo à responsabilidade, organização e independência nos estudos, preparando para a vida acadêmica e profissional.' 
              },
              { 
                icon: Users, 
                title: 'Acompanhamento Individualizado', 
                text: 'Monitoramento personalizado do desenvolvimento, reforço direcionado e comunicação constante com as famílias.' 
              },
              { 
                icon: Brain, 
                title: 'Ciência e Pensamento Crítico', 
                text: 'Desenvolvimento do pensamento científico, filosófico e crítico para análise e resolução de problemas complexos.' 
              }
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 100} className="bg-white p-12 rounded-[3.5rem] border border-slate-100 hover:border-brand-red/30 hover:shadow-2xl transition-all duration-500 group flex flex-col h-full">
                <div className="bg-brand-offwhite w-16 h-16 rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-brand-red group-hover:text-white transition-all shadow-sm">
                  <item.icon size={28} />
                </div>
                <h4 className="text-2xl font-black text-brand-navy mb-4 leading-tight">{item.title}</h4>
                <p className="text-slate-500 font-medium leading-relaxed">{item.text}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais - Seção Estruturada com Checklists */}
      <section id="diferenciais" className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ScrollReveal className="text-center mb-24">
            <h2 className="text-brand-red text-xs font-black tracking-[0.4em] uppercase mb-6">Excelência Comprovada</h2>
            <h3 className="text-4xl md:text-6xl font-black text-brand-navy mb-6 tracking-tighter">Diferenciais do Nosso Ensino Médio.</h3>
            <p className="text-slate-400 text-xl font-light">Uma formação completa que prepara para os desafios acadêmicos e para a vida.</p>
          </ScrollReveal>

          {/* Preparação ENEM */}
          <div className="grid lg:grid-cols-2 gap-24 items-center mb-40">
            <ScrollReveal className="relative">
              <div className="rounded-[4rem] overflow-hidden shadow-3xl border-[16px] border-brand-offwhite">
                <img 
                  src="https://i.imgur.com/f8gfneM.jpeg" 
                  alt="Estudantes do Ensino Médio em simulado ENEM" 
                  className="w-full h-full object-cover aspect-square" 
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-brand-red p-10 rounded-[3rem] shadow-2xl text-white">
                <Pencil size={40} className="mb-4" />
                <p className="text-2xl font-black">Foco <br /> ENEM/PAS</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="flex items-center gap-4 mb-8">
                <span className="bg-brand-red/10 text-brand-red p-3 rounded-2xl">
                   <Target size={24} />
                </span>
                <h4 className="text-3xl font-black text-brand-navy uppercase tracking-tight">Preparação para ENEM e Vestibulares</h4>
              </div>
              <p className="text-slate-500 text-lg leading-relaxed mb-10 font-light">
                Programa intensivo de preparação com simulados periódicos no formato ENEM e principais vestibulares, acompanhamento detalhado de desempenho, aulas de revisão estratégicas e ensino de técnicas de estudo eficazes.
              </p>
              
              <div className="grid gap-5">
                {[
                  { title: 'Simulados bimestrais', desc: 'Com correção TRI e análise de desempenho individualizada.' },
                  { title: 'Revisões intensivas', desc: 'Aulas focadas em conteúdos mais cobrados e temas recorrentes.' },
                  { title: 'Técnicas de redação', desc: 'Produção e correção de textos com base nas competências do ENEM.' },
                  { title: 'Plantão de dúvidas', desc: 'Atendimento individualizado para resolução de questões específicas.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="bg-brand-red/5 text-brand-red p-2 rounded-full h-fit group-hover:bg-brand-red group-hover:text-white transition-colors shadow-sm">
                      <CheckCircle size={20} />
                    </div>
                    <div>
                      <h5 className="font-bold text-brand-navy text-lg">{item.title}</h5>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Orientação Vocacional */}
          <div className="grid lg:grid-cols-2 gap-24 items-center mb-40">
            <ScrollReveal delay={200} className="order-2 lg:order-1">
              <div className="flex items-center gap-4 mb-8">
                <span className="bg-brand-blue/10 text-brand-blue p-3 rounded-2xl">
                   <Compass size={24} />
                </span>
                <h4 className="text-3xl font-black text-brand-navy uppercase tracking-tight">Orientação de Carreira e Vocacional</h4>
              </div>
              <p className="text-slate-500 text-lg leading-relaxed mb-10 font-light">
                Programa de orientação vocacional que auxilia o estudante na descoberta de suas aptidões, interesses e potencialidades, oferecendo informações sobre o mercado de trabalho, cursos superiores e universidades.
              </p>
              
              <div className="grid gap-5">
                {[
                  { title: 'Testes vocacionais', desc: 'Instrumentos validados para identificação de perfis e interesses profissionais.' },
                  { title: 'Palestras com profissionais', desc: 'Contato com diferentes áreas de atuação e realidades do mercado.' },
                  { title: 'Visitas a universidades', desc: 'Conhecimento in loco de instituições de ensino superior e sua estrutura.' },
                  { title: 'Informação sobre cursos', desc: 'Dados atualizados sobre graduações, áreas de atuação e tendências do mercado.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="bg-brand-blue/5 text-brand-blue p-2 rounded-full h-fit group-hover:bg-brand-blue group-hover:text-white transition-colors shadow-sm">
                      <CheckCircle size={20} />
                    </div>
                    <div>
                      <h5 className="font-bold text-brand-navy text-lg">{item.title}</h5>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal className="relative order-1 lg:order-2">
              <div className="rounded-[4rem] overflow-hidden shadow-3xl border-[16px] border-brand-offwhite">
                <img 
                  src="https://i.imgur.com/IAsRF6S.jpeg" 
                  alt="Orientação vocacional com estudantes do Ensino Médio" 
                  className="w-full h-full object-cover aspect-square" 
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-brand-blue p-10 rounded-[3rem] shadow-2xl text-white">
                <Briefcase size={40} className="mb-4" />
                <p className="text-2xl font-black">Futuro <br /> Profissional</p>
              </div>
            </ScrollReveal>
          </div>

          {/* Formação Humana */}
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <ScrollReveal className="relative">
              <div className="rounded-[4rem] overflow-hidden shadow-3xl border-[16px] border-brand-offwhite">
                <img 
                  src="https://i.imgur.com/4Ib4hnp.jpeg" 
                  alt="Estudantes em projeto de cidadania e ética" 
                  className="w-full h-full object-cover aspect-square" 
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-brand-navy p-10 rounded-[3rem] shadow-2xl text-white">
                <Heart size={40} className="mb-4" />
                <p className="text-2xl font-black">Valores <br /> Humanos</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="flex items-center gap-4 mb-8">
                <span className="bg-brand-navy/10 text-brand-navy p-3 rounded-2xl">
                   <Globe size={24} />
                </span>
                <h4 className="text-3xl font-black text-brand-navy uppercase tracking-tight">Formação Humana e Cidadania</h4>
              </div>
              <p className="text-slate-500 text-lg leading-relaxed mb-10 font-light">
                Desenvolvimento integral que vai além dos conteúdos acadêmicos, formando jovens éticos, responsáveis e conscientes de seu papel na sociedade, com habilidades socioemocionais essenciais para a vida adulta.
              </p>
              
              <div className="grid gap-5">
                {[
                  { title: 'Ética e valores humanos', desc: 'Discussões sobre moral, justiça, respeito e responsabilidade social.' },
                  { title: 'Inteligência emocional', desc: 'Desenvolvimento de autoconhecimento, empatia e resiliência.' },
                  { title: 'Projetos sociais', desc: 'Engajamento em ações comunitárias e voluntariado.' },
                  { title: 'Debates contemporâneos', desc: 'Discussão de temas atuais e relevantes para a formação cidadã.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="bg-brand-navy/5 text-brand-navy p-2 rounded-full h-fit group-hover:bg-brand-navy group-hover:text-white transition-colors shadow-sm">
                      <CheckCircle size={20} />
                    </div>
                    <div>
                      <h5 className="font-bold text-brand-navy text-lg">{item.title}</h5>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy to-brand-blue opacity-50"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-12 tracking-tighter leading-tight">
              Sua vaga na <br/><span className="text-brand-red underline decoration-white/20">universidade</span> começa aqui.
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button 
                onClick={onOpenUnitSelector}
                className="bg-brand-red text-white px-12 py-8 rounded-full font-black text-2xl hover:scale-105 transition-all shadow-3xl shadow-brand-red/40 flex items-center justify-center gap-4 btn-shimmer"
              >
                Solicitar Matrícula <ArrowRight />
              </button>
            </div>
            <p className="mt-12 text-white/30 uppercase text-[10px] font-black tracking-[0.4em]">
              Seja Reação 2026 - O colégio que prepara você para o mundo
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default HighSchool;
