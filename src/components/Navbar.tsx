'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PrismLogo } from './PrismLogo';
import { Shield, Sparkles, ChevronDown, Menu, X, ArrowRight, ExternalLink } from 'lucide-react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [policiesOpen, setPoliciesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand */}
        <PrismLogo size={42} />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
          <Link
            href="/#features"
            className="px-3.5 py-2 text-sm font-semibold text-slate-300 hover:text-white rounded-xl hover:bg-white/5 transition-colors"
          >
            Features
          </Link>
          <Link
            href="/#simulator"
            className="px-3.5 py-2 text-sm font-semibold text-slate-300 hover:text-white rounded-xl hover:bg-white/5 transition-colors flex items-center gap-1.5"
          >
            <Sparkles size={14} className="text-amber-400" />
            Ceiling Simulator
          </Link>
          <Link
            href="/#bill-splitting"
            className="px-3.5 py-2 text-sm font-semibold text-slate-300 hover:text-white rounded-xl hover:bg-white/5 transition-colors"
          >
            Bill Splitting
          </Link>
          <Link
            href="/security"
            className="px-3.5 py-2 text-sm font-semibold text-slate-300 hover:text-white rounded-xl hover:bg-white/5 transition-colors flex items-center gap-1.5"
          >
            <Shield size={14} className="text-emerald-400" />
            Zero-Server Security
          </Link>

          {/* Policies Dropdown */}
          <div className="relative">
            <button
              onClick={() => setPoliciesOpen(!policiesOpen)}
              onMouseEnter={() => setPoliciesOpen(true)}
              className="px-3.5 py-2 text-sm font-semibold text-slate-300 hover:text-white rounded-xl hover:bg-white/5 transition-colors flex items-center gap-1"
            >
              Legal & Safety
              <ChevronDown size={14} className={`transition-transform duration-200 ${policiesOpen ? 'rotate-180 text-indigo-400' : ''}`} />
            </button>

            {policiesOpen && (
              <div
                onMouseLeave={() => setPoliciesOpen(false)}
                className="absolute right-0 mt-2 w-64 rounded-2xl glass-panel-elevated p-2 shadow-2xl z-50 border border-white/15"
              >
                <Link
                  href="/privacy"
                  onClick={() => setPoliciesOpen(false)}
                  className="flex flex-col p-2.5 rounded-xl hover:bg-white/10 transition-colors"
                >
                  <span className="text-sm font-bold text-white">
                    Privacy Policy
                  </span>
                  <span className="text-xs text-slate-400 mt-0.5">Zero bytes stored outside device</span>
                </Link>

                <Link
                  href="/terms"
                  onClick={() => setPoliciesOpen(false)}
                  className="flex flex-col p-2.5 rounded-xl hover:bg-white/10 transition-colors"
                >
                  <span className="text-sm font-bold text-white">Terms of Service</span>
                  <span className="text-xs text-slate-400 mt-0.5">Transparent user agreement</span>
                </Link>

                <Link
                  href="/security"
                  onClick={() => setPoliciesOpen(false)}
                  className="flex flex-col p-2.5 rounded-xl hover:bg-white/10 transition-colors"
                >
                  <span className="text-sm font-bold text-white flex items-center gap-1">
                    Security Architecture
                  </span>
                  <span className="text-xs text-slate-400 mt-0.5">Local SQLite + Encrypted Backups</span>
                </Link>

                <Link
                  href="/contact"
                  onClick={() => setPoliciesOpen(false)}
                  className="flex flex-col p-2.5 rounded-xl hover:bg-white/10 transition-colors"
                >
                  <span className="text-sm font-bold text-white">Contact & Support</span>
                  <span className="text-xs text-slate-400 mt-0.5">Developer contact & helpdesk</span>
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://play.google.com/store/apps/details?id=com.xorvanta.tulyo"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-black uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition-all hover:scale-105 active:scale-95"
          >
            Download App
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-2xl px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-2">
            <Link
              href="/#features"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 text-base font-semibold text-slate-200"
            >
              Features
            </Link>
            <Link
              href="/#simulator"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 text-base font-semibold text-amber-300 flex items-center gap-2"
            >
              <Sparkles size={16} />
              Ceiling Simulator
            </Link>
            <Link
              href="/#bill-splitting"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 text-base font-semibold text-slate-200"
            >
              Bill Splitting
            </Link>
            <Link
              href="/security"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 text-base font-semibold text-emerald-400 flex items-center gap-2"
            >
              <Shield size={16} />
              Zero-Server Security
            </Link>
            <Link
              href="/privacy"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 text-base font-semibold text-slate-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 text-base font-semibold text-slate-200"
            >
              Terms of Service
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 text-base font-semibold text-slate-200"
            >
              Support & Contact
            </Link>
          </div>

          <div className="pt-4 border-t border-white/10">
            <a
              href="https://play.google.com/store/apps/details?id=com.xorvanta.tulyo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-xl bg-indigo-600 text-white text-center font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30"
            >
              Download on Google Play
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
