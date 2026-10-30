import React from 'react';

interface PlayStoreBadgeProps {
  className?: string;
  size?: 'normal' | 'large';
}

export function PlayStoreBadge({ className = '', size = 'normal' }: PlayStoreBadgeProps) {
  const isLarge = size === 'large';

  return (
    <a
      href="https://play.google.com/store/apps/details?id=com.xorvanta.tulyo"
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative inline-flex items-center gap-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-white border border-white/20 hover:border-indigo-400/50 shadow-xl shadow-black/60 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
        isLarge ? 'px-6 py-4' : 'px-5 py-3'
      } ${className}`}
    >
      {/* Subtle glass reflection highlight */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-transparent via-white/5 to-white/10 opacity-60 pointer-events-none" />

      {/* Google Play Vector Icon */}
      <div className="w-7 h-7 flex-shrink-0 flex items-center justify-center">
        <svg viewBox="0 0 512 512" className="w-full h-full drop-shadow-sm">
          <path
            fill="#4285F4"
            d="M325.3 234.3L10.4 485.5c2.9 10.3 12.3 18.2 24 18.2 5.9 0 11.5-2 16.1-5.7L385.9 299 325.3 234.3z"
          />
          <path
            fill="#34A853"
            d="M385.9 299L50.5 498c-4.6 3.7-10.2 5.7-16.1 5.7-1.1 0-2.2-.1-3.3-.3l294.2-269.1 60.6 64.7z"
          />
          <path
            fill="#FBBC04"
            d="M501.6 238.2L412 186.5l-86.7 47.8 86.7 64.7 89.6-51.7c8.3-4.8 13.4-13.6 13.4-23.2s-5.1-18.4-13.4-25.9z"
          />
          <path
            fill="#EA4335"
            d="M10.4 26.5l314.9 207.8 86.7-47.8L50.5 13.7c-4.6-3.7-10.2-5.7-16.1-5.7-11.7 0-21.1 7.9-24 18.2v.3z"
          />
        </svg>
      </div>

      <div className="flex flex-col text-left">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 group-hover:text-indigo-300 transition-colors">
          GET IT ON
        </span>
        <span className={`${isLarge ? 'text-lg' : 'text-base'} font-black tracking-tight text-white leading-tight`}>
          Google Play
        </span>
      </div>

      <div className="ml-1 pl-2 border-l border-white/10 flex items-center">
        <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30">
          v1.0 Ready
        </span>
      </div>
    </a>
  );
}
