import React from 'react';
import Link from 'next/link';
import { PlayStoreBadge } from '@/components/PlayStoreBadge';
import { LiveSafeCeilingSimulator } from '@/components/LiveSafeCeilingSimulator';
import {
  Shield,
  Sparkles,
  Lock,
  ArrowRight,
  CheckCircle2,
  PieChart,
  Repeat,
  Layers,
  Smartphone,
  Mail,
  Zap,
  Globe,
  Flame,
  Award,
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background radial gradients for optical prism glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-indigo-600/20 via-emerald-600/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-[800px] -left-48 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-[1400px] -right-48 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* =========================================================================
       * 1. HERO SECTION
       * ========================================================================= */}
      <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Action Badges */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-indigo-500/30 text-indigo-300 text-xs font-black uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              v1.0 Production Ready • Zero-Server Local Architecture
            </div>

            {/* Giant Title */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08]">
              Your Daily Safe Ceiling.{' '}
              <span className="shimmer-text block">Shared Without Friction.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal mx-auto lg:mx-0">
              Tulyo locks your rent, bills, EMIs, and savings goals first. What remains is your <strong className="text-white font-extrabold">daily safe ceiling</strong> — letting you spend every single day with total clarity and zero guilt. Split group bills with mathematical perfection. Zero bytes leave your device.
            </p>

            {/* Call to Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <PlayStoreBadge size="large" />
              <a
                href="#simulator"
                className="w-full sm:w-auto px-6 py-4 rounded-2xl glass-pill font-bold text-sm text-slate-200 hover:text-white flex items-center justify-center gap-2 border border-white/20"
              >
                <Sparkles size={16} className="text-amber-400" />
                Try Interactive Calculator
              </a>
            </div>

            {/* Micro Trust Proofs */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400 font-semibold">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-emerald-400" />
                <span>100% On-Device SQLite</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-emerald-400" />
                <span>Zero Cloud Servers</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-emerald-400" />
                <span>140+ World Currencies</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D High Resolution Hero Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Glass container around screenshot */}
              <div className="rounded-[36px] p-3 sm:p-4 bg-gradient-to-b from-white/20 via-white/5 to-white/10 backdrop-blur-2xl border border-white/25 shadow-2xl shadow-indigo-950/60 transition-transform duration-500 hover:scale-[1.01]">
                <div className="rounded-[28px] overflow-hidden bg-slate-950 border border-white/10 relative shadow-inner">
                  <img
                    src="/images/ui-clean-production.jpg"
                    alt="Tulyo Safe Daily Runway Cockpit Screen"
                    className="w-full h-auto object-cover"
                  />
                  {/* Floating badge over UI preview */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-white/15 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-black text-sm">
                        ₹
                      </div>
                      <div>
                        <div className="text-[10px] font-black uppercase tracking-wider text-slate-400">Safe Daily Limit</div>
                        <div className="text-sm font-black text-white">₹1,420 Remaining</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
                      Guarded
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative Floating Prism Badge */}
              <div className="absolute -top-6 -right-6 hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-2xl glass-panel-elevated border border-white/20 shadow-xl shadow-black/40">
                <img src="/images/app-icon-512.png" alt="Tulyo Icon" className="w-7 h-7 rounded-lg" />
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Brand Design</span>
                  <span className="text-xs font-black text-white">The Dynamic Prism</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
       * 2. INTERACTIVE SAFE-CEILING RUNWAY SIMULATOR
       * ========================================================================= */}
      <section id="simulator" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LiveSafeCeilingSimulator />
      </section>

      {/* =========================================================================
       * 3. CORE ARCHITECTURAL PILLARS (THE 4 PILLARS OF TULYO)
       * ========================================================================= */}
      <section id="features" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-indigo-400 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
            Engineered For Honest Math
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mt-4">
            Financial Sovereignty Without Complex Spreadsheets
          </h2>
          <p className="text-slate-400 text-base mt-3">
            Budgeting apps fail because they lecture you after you overspend. Tulyo prevents overspending before it happens by protecting your fixed commitments first.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Safe Daily Runway */}
          <div className="rounded-3xl glass-panel p-8 border border-white/10 hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                <Flame size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                1. The Daily Safe Ceiling
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Rent, grocery baselines, and loan EMIs are sequestered upfront. The remainder is divided across your calendar days. Every morning you wake up to a fresh, clean number you can spend freely.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs font-semibold text-indigo-300 flex items-center gap-1">
              Zero stress or math guilt <ArrowRight size={13} />
            </div>
          </div>

          {/* Card 2: Fair Bill Splitting (Largest Remainder) */}
          <div className="rounded-3xl glass-panel p-8 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                <PieChart size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                2. Largest Remainder Split Math
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Splitting an odd bill like ₹1,000 across 3 people usually leaves rounding pennies lost in the void. Tulyo uses the Hare-Niemeyer / Largest Remainder algorithm in pure integer arithmetic. Every cent balances to zero.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs font-semibold text-emerald-400 flex items-center gap-1">
              Exact penny precision <ArrowRight size={13} />
            </div>
          </div>

          {/* Card 3: Debt Simplification DAG */}
          <div className="rounded-3xl glass-panel p-8 border border-white/10 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
                <Repeat size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                3. Minimum-Cash-Flow Simplifier
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                When 6 friends travel together, you shouldn't have 15 confusing payment arrows. Tulyo builds a Directed Acyclic Graph (DAG) and collapses cyclic debts into the fewest possible UPI/bank transfers.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs font-semibold text-amber-300 flex items-center gap-1">
              Settle trips in 1-tap <ArrowRight size={13} />
            </div>
          </div>

          {/* Card 4: Zero-Server Privacy */}
          <div className="rounded-3xl glass-panel p-8 border border-white/10 hover:border-rose-500/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-6 group-hover:scale-110 transition-transform">
                <Lock size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                4. Zero Server Storage
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Tulyo stores zero bytes of your financial records outside your device. No cloud databases that can be breached, sold, or surveilled by advertisers. Your data lives on your silicon.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs font-semibold text-rose-300 flex items-center gap-1">
              <Link href="/security" className="hover:underline flex items-center gap-1">
                Read security architecture <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          {/* Card 5: Automated Email Recovery Anchor */}
          <div className="rounded-3xl glass-panel p-8 border border-white/10 hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                5. Off-Device Recovery Anchor
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                If your phone is lost or damaged, zero-server apps usually lose your data. Tulyo solves this with automated encrypted backup scheduling (Monthly by default). You dispatch a snapshot to your personal email in 1 tap.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs font-semibold text-indigo-300 flex items-center gap-1">
              Decentralized emergency lifeline <ArrowRight size={13} />
            </div>
          </div>

          {/* Card 6: 140+ Currencies & Device Local Calendar */}
          <div className="rounded-3xl glass-panel p-8 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                <Globe size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                6. 140+ Global Currencies
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Supports INR, USD, EUR, GBP, JPY, AED, SGD, and 130+ more. Rollovers strictly align to the phone's local timezone (New York, London, Tokyo, Mumbai) without UTC date offsets.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs font-semibold text-emerald-400 flex items-center gap-1">
              Works anywhere worldwide <ArrowRight size={13} />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
       * 4. APP SCREENSHOTS & STORE GALLERY SHOWCASE
       * ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            Clean Slate Experience
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mt-4">
            Designed for Instant Peace of Mind
          </h2>
          <p className="text-slate-400 text-sm mt-3">
            Pure white canvases, breathable typography, and bold numbers. No dark intimidating financial charts.
          </p>
        </div>

        {/* Feature Graphic Showcase */}
        <div className="rounded-3xl overflow-hidden glass-panel-elevated p-2 border border-white/20 mb-10 shadow-2xl">
          <img
            src="/images/feature-graphic.jpg"
            alt="Tulyo Feature Graphic - Your Daily Safe Ceiling. Shared Without Friction."
            className="w-full h-auto rounded-2xl object-cover"
          />
        </div>

        {/* Screenshots Suite Banner */}
        <div className="rounded-3xl overflow-hidden glass-panel p-2 border border-white/15 shadow-xl">
          <img
            src="/images/phone-screenshots-suite.jpg"
            alt="Tulyo Play Store Screenshots Showcase"
            className="w-full h-auto rounded-2xl object-cover"
          />
        </div>
      </section>

      {/* =========================================================================
       * 5. ZERO-SERVER PRIVACY GUARANTEE BANNER (PLAY STORE COMPLIANCE)
       * ========================================================================= */}
      <section id="security" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl glass-panel-elevated p-8 sm:p-14 border border-emerald-500/30 relative overflow-hidden">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <Shield size={20} className="text-emerald-400" />
              <span className="text-xs font-black uppercase tracking-widest text-emerald-400">
                Play Store Privacy & Data Safety Commitment
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              Tulyo stores zero bytes of your financial records outside your device.
            </h2>

            <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
              If you ever lose or change your phone, encrypted backups sent to your email are your only recovery lifeline. No data leaves your smartphone. No advertising trackers. No bank account scraping.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/privacy"
                className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black uppercase tracking-wider transition-all shadow-lg shadow-emerald-500/20"
              >
                Read Official Privacy Policy →
              </Link>
              <Link
                href="/security"
                className="px-6 py-3.5 rounded-xl glass-pill text-white text-xs font-bold transition-all border border-white/20"
              >
                Security & Encryption Architecture
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
       * 6. FINAL DOWNLOAD CALL TO ACTION
       * ========================================================================= */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="w-16 h-16 rounded-3xl overflow-hidden mx-auto shadow-2xl border border-white/20">
            <img src="/images/app-icon-512.png" alt="Tulyo Logo" className="w-full h-full object-cover" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Ready for Honest, Private Money Math?
          </h2>

          <p className="text-slate-400 text-sm leading-relaxed">
            Download Tulyo for Android today. Set up in 30 seconds. Unlock your safe daily ceiling and experience bill splitting without tension.
          </p>

          <div className="pt-4 flex justify-center">
            <PlayStoreBadge size="large" />
          </div>

          <p className="text-xs text-slate-500 pt-2">
            Free to use • Zero ads • Zero cloud surveillance • Offline by default
          </p>
        </div>
      </section>
    </div>
  );
}
