import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Lock, CheckCircle2, ArrowLeft, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Tulyo',
  description:
    'Official Privacy Policy for Tulyo (com.xorvanta.tulyo). Tulyo stores zero bytes of your financial records outside your device.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Top Back Link */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors mb-8"
      >
        <ArrowLeft size={16} /> Back to Tulyo Home
      </Link>

      <div className="glass-panel-elevated rounded-3xl p-8 sm:p-12 border border-white/15">
        {/* Header */}
        <div className="border-b border-white/10 pb-8 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Shield size={14} />
            Google Play Verified Privacy Policy
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Privacy Policy for Tulyo
          </h1>
          <p className="text-xs text-slate-400 mt-2 font-medium">
            Effective Date: October 27, 2026 • Application Package: <code className="text-indigo-300 font-mono">com.xorvanta.tulyo</code> • Developer: Xorvanta Technologies
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-8 text-sm text-slate-300 leading-relaxed font-normal">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-black">1</span>
              Our Core Privacy Philosophy
            </h2>
            <p>
              At <strong>Tulyo</strong> (developed by <strong>Xorvanta Technologies</strong>), we believe financial privacy is a fundamental human right. Tulyo is architected from the ground up as a <strong>zero-server, local-first sovereign application</strong>.
            </p>
            <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/25 text-indigo-200 text-xs font-semibold">
              <strong className="text-white block font-extrabold mb-1">Zero-Server Guarantee:</strong>
              Tulyo stores zero bytes of your financial records outside your physical device. If you ever lose or change your phone, encrypted backups sent to your email are your only recovery lifeline. Set your valid email for future security.
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-black">2</span>
              What Data Is Processed and Where It Lives
            </h2>
            <p>
              All personal financial data you enter into Tulyo—including your monthly salary, fixed expenses (rent, EMIs, utilities), categories, daily expense logs, savings goals, and friend group balances—resides <strong>exclusively on your physical device</strong> in an encrypted local database.
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-300 text-xs">
              <li><strong>Zero Cloud Databases:</strong> We do not operate remote databases that store your ledger or bank credentials.</li>
              <li><strong>No Financial Scraping:</strong> Tulyo never reads your SMS inbox, never connects to open banking aggregators, and never scrapes bank account logins.</li>
              <li><strong>No Advertising or Tracking SDKs:</strong> Tulyo does not contain third-party ad networks, telemetry trackers, or profiling algorithms.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-black">3</span>
              Authentication & Contact Information
            </h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-bold text-white text-xs uppercase tracking-wider mb-1">A. Phone Number Authentication</h3>
                <p className="text-xs">
                  If you choose to link your phone number, it is verified via <strong>Google Firebase Phone Authentication</strong> solely to confirm device ownership. Your phone number is not sold, rented, monetized, or shared with third parties.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-white text-xs uppercase tracking-wider mb-1">B. Recovery Email</h3>
                <p className="text-xs">
                  If provided, your emergency recovery email is stored locally on your device and used solely as the target recipient for your self-dispatched encrypted vault backup snapshots. We never send unsolicited marketing or promotional emails.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-black">4</span>
              User-Initiated Backups & Decentralized Recovery
            </h2>
            <p>
              Because Tulyo stores zero financial data on external servers, Tulyo provides an automated <strong>Off-Device Recovery Anchor</strong>:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-300 text-xs">
              <li>When you choose to export your vault, an encrypted snapshot payload is generated locally on your phone.</li>
              <li>You control where this text snapshot is sent (such as emailing it to yourself or saving it to your private files).</li>
              <li>When restoring onto a new device, you simply paste your private backup text into Tulyo to reconstruct your complete financial ledger.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-black">5</span>
              Complete Data Deletion (Clean Slate)
            </h2>
            <p>
              You maintain total sovereignty over your data at all times. You can permanently erase all local records, goals, and friend splits by navigating to <strong>You & Plan → Vault & Backup → Clean My Records (Reset Canvas)</strong> inside the application. Because zero data is stored on remote servers, this action permanently and immediately purges all data from the device.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-black">6</span>
              Children’s Privacy
            </h2>
            <p>
              Tulyo is designed for general budgeting and personal expense management and is not directed to children under the age of 13 (or under 16 in the European Economic Area). We do not knowingly collect personal information from children.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-black">7</span>
              Updates to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this URL with an updated effective date. Continued use of Tulyo after modifications signifies your acceptance of the updated terms.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3 pt-4 border-t border-white/10">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-black">8</span>
              Contact Information
            </h2>
            <p>
              For any questions, clarifications, or feedback regarding this Privacy Policy or your data rights, please contact our privacy compliance desk:
            </p>
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-xs space-y-1">
              <p><strong>Organization:</strong> Xorvanta Technologies</p>
              <p><strong>Contact Email:</strong> <a href="mailto:support@xorvanta.com" className="text-indigo-400 font-bold hover:underline">support@xorvanta.com</a></p>
              <p><strong>Location:</strong> Bengaluru, Karnataka, India</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
