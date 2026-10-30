import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, MessageSquare, ArrowLeft, Shield, HelpCircle, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact & Support | Tulyo',
  description: 'Official support, helpdesk, and contact information for Tulyo by Xorvanta Technologies.',
};

export default function ContactPage() {
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-4">
            <MessageSquare size={14} />
            Helpdesk & Inquiries
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Contact & Support
          </h1>
          <p className="text-xs text-slate-400 mt-2 font-medium">
            We are here to assist with app questions, backup recovery, or developer inquiries.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {/* Card 1: User Support */}
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <Mail size={20} />
            </div>
            <h3 className="font-bold text-white text-base">User Support & Feedback</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Have a question about setting up your salary ceiling, bill splits, or encrypted backups? Reach out to our team.
            </p>
            <a
              href="mailto:support@xorvanta.com"
              className="inline-block text-xs font-black text-indigo-400 hover:text-indigo-300 transition-colors pt-2"
            >
              support@xorvanta.com →
            </a>
          </div>

          {/* Card 2: Developer & Compliance */}
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Shield size={20} />
            </div>
            <h3 className="font-bold text-white text-base">Privacy & Compliance Desk</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Google Play reviewer queries, data safety clarifications, or security audit reports.
            </p>
            <p className="text-xs text-slate-300 font-mono pt-2">
              Xorvanta Technologies Pvt. Ltd.
            </p>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="space-y-6 pt-6 border-t border-white/10">
          <h2 className="text-xl font-black text-white flex items-center gap-2">
            <HelpCircle size={20} className="text-indigo-400" />
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10">
              <h4 className="text-sm font-bold text-white">Is Tulyo free to use?</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Yes. Tulyo core personal budgeting, daily runway calculation, and group bill splitting are 100% free with zero ads and zero subscriptions.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10">
              <h4 className="text-sm font-bold text-white">Where is my financial data stored?</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                100% on your phone. Tulyo operates without remote cloud databases. Zero bytes leave your device.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10">
              <h4 className="text-sm font-bold text-white">How do I restore my records if I switch phones?</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                In your old phone, tap <strong>Vault & Backup → Dispatch Encrypted Backup Now</strong> to email your backup text to yourself. On your new phone, install Tulyo, tap <strong>Restore Vault from Backup</strong>, paste the text, and everything is instantly restored.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10">
              <h4 className="text-sm font-bold text-white">How does Tulyo handle odd currency splits?</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Tulyo uses the Hare-Niemeyer Largest Remainder algorithm with integer minor unit math. Even when splitting uneven amounts across multiple people, the total balance always sums to zero without floating point rounding error.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
