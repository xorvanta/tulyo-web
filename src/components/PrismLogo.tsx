import React from 'react';
import Link from 'next/link';

interface PrismLogoProps {
  size?: number;
  showWordmark?: boolean;
}

export function PrismLogo({ size = 36, showWordmark = true }: PrismLogoProps) {
  return (
    <Link href="/" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-xl p-1">
      <div 
        className="relative flex items-center justify-center rounded-xl overflow-hidden bg-slate-900 border border-white/15 shadow-md shadow-indigo-950/40 group-hover:border-indigo-500/50 transition-all duration-300"
        style={{ width: size, height: size }}
      >
        <img
          src="/images/app-icon-512.png"
          alt="Tulyo Dynamic Prism Icon"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      {showWordmark && (
        <div className="flex flex-col">
          <span className="text-xl font-black tracking-tight text-white flex items-center gap-1.5">
            Tulyo
            <span className="text-[10px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
              Vault
            </span>
          </span>
          <span className="text-[11px] font-medium text-slate-400 -mt-0.5">
            Zero-Server Clarity
          </span>
        </div>
      )}
    </Link>
  );
}
