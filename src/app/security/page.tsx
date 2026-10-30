import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Lock, Database, Cpu, CheckCircle2, ArrowLeft, RefreshCw, Smartphone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Security & Zero-Server Architecture | Tulyo',
  description:
    'Technical breakdown of Tulyos zero-server local architecture, pure integer arithmetic engine, and decentralized email recovery anchor.',
};

export default function SecurityArchitecturePage() {
  return (
    <div className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors mb-8"
      >
        <ArrowLeft size={16} /> Back to Tulyo Home
      </Link>

      <div className="glass-panel-elevated rounded-3xl p-8 sm:p-12 border border-white/15">
        <div className="border-b border-white/10 pb-8 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Lock size={14} />
            Technical Architecture
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Security & Zero-Server Architecture
          </h1>
          <p className="text-xs text-slate-400 mt-2 font-medium">
            How Tulyo guarantees complete data sovereignty and zero financial surveillance.
          </p>
        </div>

        <div className="space-y-10 text-sm text-slate-300 leading-relaxed font-normal">
          {/* Pillar 1: Silicon-Only Local Storage */}
          <section className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <Database size={18} />
              </div>
              <h2 className="text-lg font-bold text-white">1. Silicon-Only Local Storage</h2>
            </div>
            <p>
              Traditional financial applications ingest your bank credentials and maintain central relational databases of your transactions in the cloud. This creates huge honeypots vulnerable to data breaches, employee misconduct, and advertising profile aggregators.
            </p>
            <p>
              Tulyo completely removes the server from the financial equation. All database tables and state models reside exclusively within your physical device filesystem via hardened on-device SQLite / AsyncStorage.
            </p>
          </section>

          {/* Pillar 2: Pure Integer Minor Unit Arithmetic */}
          <section className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Cpu size={18} />
              </div>
              <h2 className="text-lg font-bold text-white">2. Pure Integer Minor Unit Arithmetic</h2>
            </div>
            <p>
              In standard computer science, floating point numbers suffer from IEEE 754 precision leakage (e.g. <code>0.1 + 0.2 = 0.30000000000000004</code>). Over years of daily expense tracking, this creates phantom pennies that desynchronize accounts.
            </p>
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-xs text-slate-300 space-y-1 font-mono">
              <p className="text-indigo-300 font-bold">// Tulyo Safe Integer Engine</p>
              <p>1 Rupee = 100 paise (integer: 100)</p>
              <p>1 Dollar = 100 cents (integer: 100)</p>
              <p>1 Yen = 1 yen (integer: 1)</p>
              <p className="text-emerald-400">Net Balance Invariant: Sum(debts) - Sum(credits) === 0</p>
            </div>
            <p className="text-xs">
              Every balance, split remainder, and daily runway fraction is computed using exact integer mathematics with Largest Remainder distribution.
            </p>
          </section>

          {/* Pillar 3: Recycled SIM & Device Defense */}
          <section className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Smartphone size={18} />
              </div>
              <h2 className="text-lg font-bold text-white">3. Recycled SIM Defense</h2>
            </div>
            <p>
              Under global telecom regulations, inactive mobile numbers are reassigned after 90 days. If an app relies naively on phone number verification, a new SIM owner could inherit the private spending records of the previous owner.
            </p>
            <p>
              Tulyo implements a strict <strong>Recycled SIM Guard</strong>: When a phone number login occurs on a device that detects an account migration or fresh identity, Tulyo prompts for a clean vault verification or instant canvas purge, preventing cross-user data leakage.
            </p>
          </section>

          {/* Pillar 4: Decentralized Off-Device Email Anchor */}
          <section className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-400">
                <RefreshCw size={18} />
              </div>
              <h2 className="text-lg font-bold text-white">4. Decentralized Email Recovery Anchor</h2>
            </div>
            <p>
              The fatal flaw of zero-server apps has always been: <em>&quot;What happens if I drop my phone in water?&quot;</em>
            </p>
            <p>
              Tulyo solves this without creating a central server honeypot. Tulyo provides an automated <strong>Off-Device Recovery Anchor</strong> defaulting to Monthly (or Weekly) reminders. The user exports a serialized snapshot payload and sends it to their personal email in 1 tap. When moving to a new phone, pasting that text instantly restores 100% of their ledger, groups, and life goals.
            </p>
          </section>

          {/* Google Play Data Safety Compliance */}
          <section className="pt-6 border-t border-white/10 space-y-3">
            <h2 className="text-lg font-bold text-white">Google Play Data Safety Summary</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
                <span className="text-emerald-400 font-bold block">Financial Data</span>
                <p>Not collected. Stored 100% locally on user device.</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
                <span className="text-emerald-400 font-bold block">Third-Party Tracking</span>
                <p>None. Zero advertising or marketing analytics SDKs.</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
                <span className="text-emerald-400 font-bold block">Phone Authentication</span>
                <p>Ephemeral OTP via Firebase for device ownership verification.</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
                <span className="text-emerald-400 font-bold block">Data Deletion</span>
                <p>Instant permanent wipe via in-app &quot;Clean My Records&quot; button.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
