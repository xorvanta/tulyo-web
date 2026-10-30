'use client';

import React, { useState } from 'react';
import { Shield, Sparkles, Check, ArrowRight, Flame } from 'lucide-react';

interface CurrencyFormat {
  symbol: string;
  defaultIncome: number;
  maxIncome: number;
  step: number;
  defaultFixed: number;
}

const CURRENCIES: Record<string, CurrencyFormat> = {
  INR: { symbol: '₹', defaultIncome: 85000, maxIncome: 300000, step: 2000, defaultFixed: 42000 },
  USD: { symbol: '$', defaultIncome: 4500, maxIncome: 15000, step: 100, defaultFixed: 2200 },
  EUR: { symbol: '€', defaultIncome: 3800, maxIncome: 12000, step: 100, defaultFixed: 1900 },
  GBP: { symbol: '£', defaultIncome: 3400, maxIncome: 10000, step: 100, defaultFixed: 1700 },
  AED: { symbol: 'AED ', defaultIncome: 15000, maxIncome: 50000, step: 500, defaultFixed: 7500 },
};

export function LiveSafeCeilingSimulator() {
  const [selectedCurrency, setSelectedCurrency] = useState<string>('INR');
  const cfg = CURRENCIES[selectedCurrency] || CURRENCIES.INR;

  const [income, setIncome] = useState<number>(cfg.defaultIncome);
  const [fixedBills, setFixedBills] = useState<number>(cfg.defaultFixed);
  const [simulateOverspend, setSimulateOverspend] = useState(false);

  // When currency changes, reset sliders to defaults
  const handleCurrencyChange = (curr: string) => {
    setSelectedCurrency(curr);
    const target = CURRENCIES[curr] || CURRENCIES.INR;
    setIncome(target.defaultIncome);
    setFixedBills(target.defaultFixed);
  };

  const daysInMonth = 30;
  const discretionaryPool = Math.max(0, income - fixedBills);
  const baseDailyCeiling = Math.round(discretionaryPool / daysInMonth);

  // Simulated overspend: +30% above ceiling
  const testOverspendAmount = Math.round(baseDailyCeiling * 1.35);
  const overspendDeficit = testOverspendAmount - baseDailyCeiling;
  const remainingDays = 29;
  const adjustedFutureCeiling = Math.max(0, Math.round((discretionaryPool - testOverspendAmount) / remainingDays));

  const formatAmount = (num: number) => {
    return `${cfg.symbol}${num.toLocaleString('en-US')}`;
  };

  return (
    <div className="w-full rounded-3xl glass-panel-elevated p-6 sm:p-10 border border-white/15 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-indigo-600/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-emerald-600/15 blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="p-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <Sparkles size={16} />
            </span>
            <span className="text-xs font-black uppercase tracking-widest text-amber-300">
              Interactive Runway Engine
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            See Your Safe Daily Ceiling
          </h3>
          <p className="text-slate-400 text-sm mt-1 max-w-xl">
            Tulyo pre-deducts your rent, EMIs, and essential commitments first. Whatever remains is divided across the month as a safe, guilt-free daily ceiling.
          </p>
        </div>

        {/* Currency Switcher */}
        <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-slate-900/80 border border-white/10">
          {Object.keys(CURRENCIES).map((c) => (
            <button
              key={c}
              onClick={() => handleCurrencyChange(c)}
              className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all ${
                selectedCurrency === c
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Sliders Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
        {/* Sliders Column (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Slider 1: Monthly Income */}
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                1. Monthly Net In-Hand Income
              </span>
              <span className="text-lg font-black text-white px-3 py-1 rounded-xl bg-slate-900 border border-white/10">
                {formatAmount(income)}
              </span>
            </div>
            <input
              type="range"
              min={cfg.step * 10}
              max={cfg.maxIncome}
              step={cfg.step}
              value={income}
              onChange={(e) => {
                const val = Number(e.target.value);
                setIncome(val);
                if (fixedBills > val) setFixedBills(Math.round(val * 0.5));
              }}
              className="w-full accent-indigo-500 cursor-pointer h-2 bg-slate-800 rounded-lg appearance-none"
            />
            <div className="flex justify-between text-[11px] text-slate-500 font-semibold mt-2">
              <span>{formatAmount(cfg.step * 10)}</span>
              <span>Slide to match your take-home pay</span>
              <span>{formatAmount(cfg.maxIncome)}</span>
            </div>
          </div>

          {/* Slider 2: Fixed Commitments */}
          <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                <Shield size={14} className="text-indigo-400" />
                2. Pre-Locked Fixed Costs (Rent, EMIs, Bills)
              </span>
              <span className="text-lg font-black text-rose-300 px-3 py-1 rounded-xl bg-slate-900 border border-rose-500/20">
                {formatAmount(fixedBills)}
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={income}
              step={cfg.step}
              value={fixedBills}
              onChange={(e) => setFixedBills(Number(e.target.value))}
              className="w-full accent-rose-500 cursor-pointer h-2 bg-slate-800 rounded-lg appearance-none"
            />
            <div className="flex justify-between text-[11px] text-slate-500 font-semibold mt-2">
              <span>{formatAmount(0)}</span>
              <span>Automatically guarded & sequestered</span>
              <span>{formatAmount(income)}</span>
            </div>
          </div>

          {/* Overspend Simulation Toggle */}
          <div className="flex items-center justify-between p-4 rounded-2xl bg-amber-500/10 border border-amber-500/25">
            <div className="flex items-center gap-3">
              <Flame size={20} className="text-amber-400 flex-shrink-0" />
              <div>
                <p className="text-xs font-extrabold text-amber-200">
                  Simulate Weekend Splurge / Overspend
                </p>
                <p className="text-[11px] text-amber-300/70">
                  See how Tulyo cushions an impulse break without guilt.
                </p>
              </div>
            </div>
            <button
              onClick={() => setSimulateOverspend(!simulateOverspend)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all ${
                simulateOverspend
                  ? 'bg-amber-500 text-slate-950'
                  : 'bg-slate-900 text-amber-300 border border-amber-500/30'
              }`}
            >
              {simulateOverspend ? 'Active' : 'Simulate'}
            </button>
          </div>
        </div>

        {/* Live Calculation Display (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-indigo-500/30 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-full pointer-events-none" />

          <div>
            <span className="text-[11px] font-black uppercase tracking-widest text-indigo-400">
              Guaranteed Safe Runway
            </span>

            <div className="mt-3">
              <span className="text-5xl sm:text-6xl font-black tracking-tight text-white drop-shadow-md">
                {formatAmount(baseDailyCeiling)}
              </span>
              <span className="text-sm font-bold text-slate-400 ml-2">/ day</span>
            </div>

            <p className="text-xs text-slate-300 mt-3 leading-relaxed">
              You can spend up to <strong className="text-emerald-400 font-extrabold">{formatAmount(baseDailyCeiling)}</strong> every single day on dining, groceries, and leisure with zero guilt. Your rent of {formatAmount(fixedBills)} is 100% safeguarded.
            </p>
          </div>

          {/* Overspend Result Card */}
          {simulateOverspend ? (
            <div className="mt-6 p-4 rounded-2xl bg-slate-950/80 border border-amber-500/30">
              <div className="flex items-center justify-between text-xs font-bold text-amber-300 mb-1">
                <span>Logged Today: {formatAmount(testOverspendAmount)}</span>
                <span className="text-rose-400 font-extrabold">+{formatAmount(overspendDeficit)}</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Tulyo does not scold you. Instead, it buffers the {formatAmount(overspendDeficit)} deficit across the next 29 days. Your new adjusted daily runway is{' '}
                <strong className="text-white font-bold">{formatAmount(adjustedFutureCeiling)}/day</strong>.
              </p>
            </div>
          ) : (
            <div className="mt-6 p-4 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
                <span>Flexible Discretionary Pool:</span>
                <span className="font-extrabold text-white">{formatAmount(discretionaryPool)}</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-emerald-500 h-full rounded-full transition-all duration-300"
                  style={{ width: `${Math.min(100, (discretionaryPool / (income || 1)) * 100)}%` }}
                />
              </div>
            </div>
          )}

          <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-400">
              Zero servers • Pure Integer Precision
            </span>
            <span className="text-xs font-extrabold text-emerald-400 flex items-center gap-1">
              <Check size={14} /> Local Math
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
