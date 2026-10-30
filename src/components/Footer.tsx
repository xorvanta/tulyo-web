import React from 'react';
import Link from 'next/link';
import { PrismLogo } from './PrismLogo';
import { Shield, Lock, Smartphone, Mail, Heart, Github, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#060911] text-slate-400 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Manifesto (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <PrismLogo size={40} />
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm mt-3">
              Tulyo (Sanskrit: <span className="text-indigo-300 font-bold">तुल्य</span> — equal, balanced, fair) is an ultra-clean, zero-server personal financial ceiling and bill-splitting companion. No cloud storage, no account surveillance, no mathematical leakage.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/25">
                <Shield size={12} />
                Zero-Server Local Vault
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold text-indigo-300 bg-indigo-500/10 border border-indigo-500/25">
                <Lock size={12} />
                Integer Math Engine
              </span>
            </div>
          </div>

          {/* Column 2: Product & Capabilities */}
          <div className="space-y-3">
            <p className="text-xs font-black uppercase tracking-wider text-white">
              Product
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/#features" className="hover:text-white transition-colors">
                  Daily Safe Ceiling
                </Link>
              </li>
              <li>
                <Link href="/#simulator" className="hover:text-white transition-colors">
                  Interactive Runway Simulator
                </Link>
              </li>
              <li>
                <Link href="/#bill-splitting" className="hover:text-white transition-colors">
                  Largest Remainder Bill Split
                </Link>
              </li>
              <li>
                <Link href="/#bill-splitting" className="hover:text-white transition-colors">
                  Debt Simplification DAG
                </Link>
              </li>
              <li>
                <Link href="/#recovery" className="hover:text-white transition-colors">
                  Automated Email Backup Anchor
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Trust, Legal & Google Play */}
          <div className="space-y-3">
            <p className="text-xs font-black uppercase tracking-wider text-white">
              Legal & Play Store
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/privacy" className="text-emerald-400 font-bold hover:text-emerald-300 transition-colors flex items-center gap-1">
                  Privacy Policy
                  <span className="text-[9px] bg-emerald-500/20 px-1 py-0.5 rounded">Required</span>
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-white transition-colors">
                  Security Architecture
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & Support
                </Link>
              </li>
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.xorvanta.tulyo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-400 transition-colors inline-flex items-center gap-1"
                >
                  Play Store Listing <ExternalLink size={11} />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Organization */}
          <div className="space-y-3">
            <p className="text-xs font-black uppercase tracking-wider text-white">
              Publisher
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              <strong className="text-white block font-bold">Xorvanta Technologies</strong>
              Package: <code className="text-indigo-300 font-mono text-[11px]">com.xorvanta.tulyo</code>
            </p>
            <div className="pt-2">
              <a
                href="mailto:support@xorvanta.com"
                className="inline-flex items-center gap-2 text-xs text-indigo-400 hover:text-indigo-300 font-bold transition-colors"
              >
                <Mail size={14} /> support@xorvanta.com
              </a>
            </div>
            <p className="text-[11px] text-slate-500 pt-1">
              Bengaluru, Karnataka, India
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Xorvanta Technologies. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms
            </Link>
            <Link href="/security" className="hover:text-slate-300 transition-colors">
              Security
            </Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
