
import React from 'react';
import { X, MessageCircle, MapPin, ArrowRight } from 'lucide-react';
import { UNITS } from '../constants';

interface UnitSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UnitSelectorModal: React.FC<UnitSelectorModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
      <div 
        className="absolute inset-0 bg-brand-navy/80 backdrop-blur-md animate-in fade-in duration-300"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white w-full max-w-2xl rounded-[3rem] shadow-3xl overflow-hidden animate-in zoom-in-95 duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-3 bg-slate-100 rounded-2xl text-slate-400 hover:text-brand-navy hover:bg-slate-200 transition-all"
        >
          <X size={24} />
        </button>

        <div className="p-10 md:p-16 text-center">
          <span className="inline-block bg-brand-red/10 text-brand-red px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-6">
            Agendamento 2026
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-brand-navy mb-4 tracking-tighter">
            Escolha sua unidade
          </h2>
          <p className="text-slate-500 text-lg font-light mb-12">
            Selecione a unidade mais próxima para falar com nossa equipe via WhatsApp.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {UNITS.map((unit) => (
              <a
                key={unit.id}
                href={unit.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center text-center p-8 bg-brand-offwhite rounded-[2.5rem] border-4 border-transparent hover:border-brand-red hover:bg-white hover:scale-[1.02] transition-all duration-500"
                onClick={onClose}
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:text-white transition-all">
                  <MapPin size={28} />
                </div>
                <h4 className="text-2xl font-black text-brand-navy mb-2">{unit.name}</h4>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-6">
                  {unit.id === 1 ? 'Recanto 206' : 'Recanto 201'}
                </p>
                <div className="flex items-center gap-2 text-green-500 font-black text-sm group-hover:translate-x-1 transition-transform">
                  IR PARA WHATSAPP <ArrowRight size={16} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnitSelectorModal;
