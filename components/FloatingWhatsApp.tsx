
import React, { useState } from 'react';
import { MessageCircle, X, ChevronRight } from 'lucide-react';
import { UNITS } from '../constants';

const FloatingWhatsApp: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-10 right-10 z-[100] flex flex-col items-end">
      {open && (
        <div className="mb-6 bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.2)] overflow-hidden w-80 animate-in fade-in slide-in-from-bottom-8 duration-500 border border-slate-100">
          <div className="bg-brand-navy p-8 pb-10 flex justify-between items-start">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/30">
                <MessageCircle className="text-white" size={28} />
              </div>
              <div>
                <p className="text-white text-lg font-bold">Central Mila</p>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <p className="text-white/60 text-[10px] uppercase font-black tracking-[0.2em]">Disponível agora</p>
                </div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/30 hover:text-white transition-colors bg-white/10 p-2 rounded-xl">
              <X size={18} />
            </button>
          </div>
          
          <div className="p-6 -mt-6 bg-white rounded-t-[2rem] space-y-4">
            <p className="text-slate-500 text-sm px-2 mb-2 font-medium">Olá! Como podemos ajudar hoje?</p>
            {UNITS.map(unit => (
              <a
                key={unit.id}
                href={unit.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-3xl border border-slate-100 hover:bg-slate-50 hover:border-brand-red/30 transition-all group"
              >
                <div>
                  <p className="text-sm font-black text-brand-navy uppercase tracking-wide">{unit.name}</p>
                  <p className="text-xs text-slate-400 mt-1">{unit.id === 1 ? 'Infantil e Fundamental' : 'Infantil ao Ensino Médio'}</p>
                </div>
                <div className="bg-slate-100 p-2 rounded-full group-hover:bg-brand-red transition-colors">
                  <ChevronRight size={16} className="text-slate-400 group-hover:text-white" />
                </div>
              </a>
            ))}
          </div>
          
          <div className="bg-slate-50 p-6 text-center border-t border-slate-100">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Atendimento Humano em Segundos</p>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="bg-green-500 text-white p-6 rounded-[2rem] shadow-2xl hover:scale-110 active:scale-95 transition-all shadow-green-500/20 group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
        <MessageCircle size={32} fill="white" className="relative z-10" />
      </button>
    </div>
  );
};

export default FloatingWhatsApp;
