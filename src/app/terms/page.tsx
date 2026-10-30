import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { FileText, ArrowLeft, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | Tulyo',
  description: 'Official Terms of Service for Tulyo personal budgeting and group split utility.',
};

export default function TermsPage() {
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
            <FileText size={14} />
            User Agreement
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Terms of Service
          </h1>
          <p className="text-xs text-slate-400 mt-2 font-medium">
            Last Updated: October 27, 2026 • Published by Xorvanta Technologies
          </p>
        </div>

        <div className="space-y-8 text-sm text-slate-300 leading-relaxed font-normal">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. Acceptance of Terms</h2>
            <p>
              By downloading, installing, or using the Tulyo mobile application or website, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, do not use the application.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Nature of the Service</h2>
            <p>
              Tulyo is a local calculation and organizational tool designed to assist individuals and informal groups in calculating personal daily spending ceilings, tracking voluntary savings milestones, and calculating fair shares for shared expenses.
            </p>
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-xs space-y-1 text-slate-300">
              <p><strong>Important Clarifications:</strong></p>
              <ul className="list-disc pl-5 space-y-1 mt-1">
                <li>Tulyo is <strong>not</strong> a bank, credit institution, or payment processor.</li>
                <li>Tulyo does not hold, transmit, custody, or settle monetary funds between users.</li>
                <li>Tulyo does not provide professional tax, investment, or legal advice.</li>
              </ul>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. Zero-Server Architecture & User Responsibility</h2>
            <p>
              Because Tulyo operates strictly as a zero-server local-first application, your financial data is stored solely on your device. You acknowledge and accept that:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-slate-300">
              <li>Xorvanta Technologies does not hold or maintain cloud copies of your financial records.</li>
              <li>You are solely responsible for initiating local backups and dispatching backup text to your email if you wish to preserve your data across device migrations.</li>
              <li>Loss or physical destruction of your device without an exported backup file results in unrecoverable data loss.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Intellectual Property</h2>
            <p>
              All trademarks, software source code, brand assets, design layouts, and algorithms (including our Largest Remainder calculation and minimum-cash-flow graph simplification logic) are the exclusive intellectual property of Xorvanta Technologies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">5. Disclaimer of Warranties & Limitation of Liability</h2>
            <p>
              The application is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without warranties of any kind. While our mathematical algorithms use integer arithmetic to prevent floating-point rounding errors, Xorvanta Technologies disclaims liability for any calculation discrepancies, peer-to-peer settlement disputes, device hardware failures, or incidental damages arising from your use of the app.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">6. Termination</h2>
            <p>
              You may terminate these terms at any time by uninstalling the application and executing &quot;Clean My Records&quot; within the app settings.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-white/10">
            <h2 className="text-lg font-bold text-white">7. Governing Law & Contact</h2>
            <p>
              These terms shall be governed by the laws of India. For any questions regarding these Terms, contact us at <a href="mailto:support@xorvanta.com" className="text-indigo-400 font-bold hover:underline">support@xorvanta.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
