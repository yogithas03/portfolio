import React from 'react';

const ElectricBorder = ({
  children,
  color = '#00d1f7',
  speed = 1,
  chaos = 0.12,
  thickness = 2,
  style = {},
  className = '',
}) => {
  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{
        padding: thickness,
        ...style
      }}
    >
      <style>
        {`
          @keyframes electric-spin {
            from { transform: translate(-50%, -50%) rotate(0deg); }
            to { transform: translate(-50%, -50%) rotate(360deg); }
          }
        `}
      </style>
      <div 
        className="absolute top-1/2 left-1/2 w-[200%] h-[300%]"
        style={{
          background: `conic-gradient(from 0deg, transparent 0%, transparent 70%, ${color} 100%)`,
          animation: `electric-spin ${4 / speed}s linear infinite`,
          filter: `blur(${Math.max(2, chaos * 50)}px)`
        }}
      />
      <div 
        className="absolute top-1/2 left-1/2 w-[200%] h-[300%]"
        style={{
          background: `conic-gradient(from 180deg, transparent 0%, transparent 70%, ${color} 100%)`,
          animation: `electric-spin ${3 / speed}s linear infinite reverse`,
          filter: `blur(${Math.max(2, chaos * 30)}px)`
        }}
      />
      
      <div 
        className="relative z-10 w-full h-full bg-[#060010]" 
        style={{ borderRadius: style.borderRadius ? Math.max(0, parseInt(style.borderRadius) - thickness) : 'inherit' }}
      >
        {children}
      </div>
    </div>
  );
};

export default ElectricBorder;
