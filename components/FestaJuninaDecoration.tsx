import React from 'react';

// Festive color spectrum for Festa Junina
const FLAG_COLORS = [
  '#FF5964', // Red
  '#FFE81C', // Yellow
  '#35A7FF', // Blue
  '#38B000', // Green
  '#FF9F1C', // Orange
  '#F72585', // Magenta/Pink
  '#7209B7', // Violet
];

interface FlagProps {
  color: string;
  type: 'triangle' | 'swallowtail';
  className?: string;
  delay?: string;
  size?: number;
  style?: React.CSSProperties;
}

export const FestaJuninaFlag: React.FC<FlagProps> = ({ color, type, className = '', delay = '0s', size = 40, style = {} }) => {
  const width = size;
  const height = Math.round(size * 1.3);

  return (
    <div 
      className={`inline-block select-none origin-top transition-transform hover:scale-110 ${className}`}
      style={{ 
        animation: `junina-sway 3.5s ease-in-out infinite alternate`,
        animationDelay: delay,
        width: `${width}px`,
        height: `${height}px`,
        ...style
      }}
    >
      <svg 
        viewBox="0 0 100 130" 
        width="100%" 
        height="100%" 
        className="drop-shadow-[0_4px_6px_rgba(0,0,0,0.15)] filter"
      >
        {type === 'triangle' ? (
          // Triangular flag pointing down
          <polygon points="0,0 100,0 50,130" fill={color} />
        ) : (
          // Classic swallowtail flag (cutout at the bottom)
          <polygon points="0,0 100,0 100,130 50,100 0,130" fill={color} />
        )}
        {/* Subtle white highlight to show fold/depth */}
        <polygon points="0,0 15,0 7,130" fill="rgba(255, 255, 255, 0.15)" />
        {/* Flag suspension fold at the top */}
        <rect x="0" y="0" width="100" height="12" fill="rgba(0,0,0,0.1)" />
      </svg>
    </div>
  );
};

interface HangingGarlandProps {
  className?: string;
  flagCount?: number;
  flagSize?: number;
}

export const HangingGarland: React.FC<HangingGarlandProps> = ({ 
  className = '', 
  flagCount = 14, 
  flagSize = 36 
}) => {
  return (
    <div className={`relative w-full overflow-hidden pointer-events-none select-none z-30 ${className}`}>
      {/* Decorative hanging string */}
      <svg 
        className="absolute top-0 left-0 w-full h-16 text-amber-900/20" 
        viewBox="0 0 1000 100" 
        preserveAspectRatio="none"
      >
        <path 
          d="M 0,0 Q 250,55 500,65 T 1000,0" 
          fill="transparent" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeDasharray="4,4"
        />
      </svg>

      {/* Flag line container */}
      <div className="flex justify-around items-start w-full px-4 pt-1 pb-10">
        {Array.from({ length: flagCount }).map((_, index) => {
          const color = FLAG_COLORS[index % FLAG_COLORS.length];
          const type = index % 2 === 0 ? 'triangle' : 'swallowtail';
          // Sag offset: flags in the center sag slightly lower
          const centerFactor = Math.abs(index - (flagCount - 1) / 2) / ((flagCount - 1) / 2);
          const sagOffset = Math.round((1 - centerFactor * centerFactor) * 20); // Sag multiplier
          const delay = `${(index * 0.23).toFixed(2)}s`;

          return (
            <FestaJuninaFlag
              key={index}
              color={color}
              type={type}
              size={flagSize}
              delay={delay}
              className="transform"
              style={{
                marginTop: `${sagOffset}px`
              } as React.CSSProperties}
            />
          );
        })}
      </div>

      <style>{`
        @keyframes junina-sway {
          0% { transform: rotate(-8deg); }
          50% { transform: rotate(4deg) scaleY(0.98); }
          100% { transform: rotate(8deg); }
        }
      `}</style>
    </div>
  );
};

// Corner hanging decoration for section borders
export const SidewalkGarland: React.FC<{ side: 'left' | 'right', className?: string }> = ({ side, className = '' }) => {
  const flags = [
    { color: FLAG_COLORS[0], type: 'triangle' as const, size: 28 },
    { color: FLAG_COLORS[1], type: 'swallowtail' as const, size: 32 },
    { color: FLAG_COLORS[2], type: 'triangle' as const, size: 26 },
    { color: FLAG_COLORS[3], type: 'swallowtail' as const, size: 28 },
    { color: FLAG_COLORS[4], type: 'triangle' as const, size: 24 },
  ];

  return (
    <div 
      className={`absolute top-0 pointer-events-none select-none z-20 ${
        side === 'left' ? 'left-0 origin-top-left -ml-2' : 'right-0 origin-top-right -mr-2'
      } ${className}`}
    >
      <div className={`flex ${side === 'left' ? 'flex-row' : 'flex-row-reverse'} gap-0.5 pt-2`}>
        {flags.map((flag, idx) => {
          const sagValue = idx * 6;
          const delay = `${(idx * 0.3).toFixed(2)}s`;
          return (
            <div 
              key={idx} 
              style={{ transform: `translateY(${sagValue}px)` }}
              className="transition-transform duration-300"
            >
              <FestaJuninaFlag 
                color={flag.color} 
                type={flag.type} 
                size={flag.size} 
                delay={delay} 
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Floating background single flag that drifts with soft breeze animations in margins
export const DriftingBandeirinha: React.FC<{ top: string; left?: string; right?: string; delay?: number }> = ({
  top,
  left,
  right,
  delay = 0,
}) => {
  const randomColor = FLAG_COLORS[Math.floor(Math.random() * FLAG_COLORS.length)];
  const randomType = Math.random() > 0.5 ? 'triangle' : 'swallowtail';
  
  // Responsive size: 18px on mobile, around 28px on desktop
  const size = Math.floor(Math.random() * 8) + 24;

  return (
    <div
      className="absolute pointer-events-none select-none z-15 opacity-80 md:opacity-100 scale-75 md:scale-100"
      style={{
        top,
        left: left ? left : undefined,
        right: right ? right : undefined,
        animation: `junina-drift 8s ease-in-out infinite alternate`,
        animationDelay: `${delay}s`,
      }}
    >
      <FestaJuninaFlag 
        color={randomColor} 
        type={randomType} 
        size={size} 
        delay={`${delay}s`} 
      />
    </div>
  );
};

// Global Floating decorative elements component containing scattered side-flags or hanging decorations
export const FestaJuninaGlobalDecorations: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* Gentle falling/drifting animations styling */}
      <style>{`
        @keyframes junina-drift {
          0% { transform: translateY(0px) rotate(-10deg); }
          50% { transform: translateY(-12px) rotate(12deg) translateX(8px); }
          100% { transform: translateY(-24px) rotate(-12deg) translateX(-8px); }
        }
      `}</style>
      
      {/* High density of beautiful drift flags sitting in left and right margins all down the page scroll */}
      {/* 0% - 20% Top (Hero, Navigation, Pillars and Stats) */}
      <DriftingBandeirinha top="2%" left="1rem" delay={0.5} />
      <DriftingBandeirinha top="5%" right="1.5rem" delay={2.1} />
      <DriftingBandeirinha top="8%" left="1.2rem" delay={1.2} />
      <DriftingBandeirinha top="12%" right="2rem" delay={3.4} />
      <DriftingBandeirinha top="16%" left="0.8rem" delay={0.8} />
      <DriftingBandeirinha top="20%" right="1.5rem" delay={4.0} />

      {/* 20% - 40% (Approved Students, About School) */}
      <DriftingBandeirinha top="25%" left="2rem" delay={1.5} />
      <DriftingBandeirinha top="30%" right="1rem" delay={2.7} />
      <DriftingBandeirinha top="35%" left="1.5rem" delay={0.3} />
      <DriftingBandeirinha top="39%" right="2.5rem" delay={3.9} />

      {/* 40% - 60% (Differentials, Units) */}
      <DriftingBandeirinha top="45%" left="1.2rem" delay={1.9} />
      <DriftingBandeirinha top="50%" right="1.8rem" delay={2.4} />
      <DriftingBandeirinha top="55%" left="2rem" delay={0.9} />
      <DriftingBandeirinha top="60%" right="1.3rem" delay={4.2} />

      {/* 60% - 80% (Enrollment, SEO content) */}
      <DriftingBandeirinha top="65%" left="1.5rem" delay={1.7} />
      <DriftingBandeirinha top="70%" right="2rem" delay={3.1} />
      <DriftingBandeirinha top="75%" left="2.2rem" delay={0.6} />
      <DriftingBandeirinha top="80%" right="1.1rem" delay={2.3} />

      {/* 80% - 100% (Testimonials, Contact, Footer) */}
      <DriftingBandeirinha top="84%" left="1rem" delay={1.1} />
      <DriftingBandeirinha top="88%" right="1.6rem" delay={3.7} />
      <DriftingBandeirinha top="92%" left="2rem" delay={0.4} />
      <DriftingBandeirinha top="96%" right="1.2rem" delay={2.8} />
      <DriftingBandeirinha top="98%" left="1.8rem" delay={1.5} />
    </div>
  );
};
