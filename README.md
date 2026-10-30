# Tulyo Official Website & Policy Hub

High-contrast, modern, glassmorphic marketing website and legal policy hub for **Tulyo: Daily Safe Ceiling & Private Bill Splitting** (`com.xorvanta.tulyo`).

---

## 🌟 Pages & Routes

- **`/`** — Main Showcase:
  - Hero with 3D glass perspective cards & Google Play download badges
  - **Interactive Safe Daily Ceiling Runway Simulator** (live currency sliders & overspend buffering calculator)
  - 6 Architectural feature deep-dives
  - High-resolution mobile UI & Play Store graphics gallery
- **`/privacy`** — Official Privacy Policy (configured for Google Play Console submission)
- **`/terms`** — Terms of Service & User Agreement
- **`/security`** — Zero-Server Technical Architecture & Data Safety Declaration
- **`/contact`** — Support, FAQ, and publisher contact (`support@xorvanta.com`)

---

## 🚀 Instant Vercel Deployment Guide

### Option 1: Deploy with Vercel CLI (Fastest — 1 Minute)
Run this command from inside the `tulyo-web` directory:
```bash
npx vercel
```
- When asked `Set up and deploy?`, press `y`.
- Link to your Vercel account.
- It will instantly deploy and give you your live URL (e.g., `https://tulyo.vercel.app`).
- To deploy to production:
  ```bash
  npx vercel --prod
  ```

### Option 2: Deploy via GitHub (Recommended for automatic CI/CD)
1. Create a repository on GitHub (e.g. `tulyo-web` under `xorvanta`).
2. Push this directory:
   ```bash
   git init
   git add .
   git commit -m "feat: initial release of Tulyo modern website and policy hub"
   git branch -M main
   git remote add origin https://github.com/xorvanta/tulyo-web.git
   git push -u origin main
   ```
3. Open [Vercel Dashboard](https://vercel.com/new) → **Add New** → **Project** → Import `tulyo-web`.
4. Click **Deploy**. Vercel will auto-detect Next.js and deploy in ~30 seconds.

---

## 📱 Google Play Console URLs to Submit

Once your Vercel URL is live (e.g. `https://tulyo.vercel.app`):

| Google Play Console Field | URL to Paste |
| :--- | :--- |
| **Privacy Policy URL** | `https://your-vercel-domain.vercel.app/privacy` |
| **App Support Website** | `https://your-vercel-domain.vercel.app` |
| **App Support Email** | `support@xorvanta.com` |
| **Terms of Service (Optional)** | `https://your-vercel-domain.vercel.app/terms` |
| **Data Safety Documentation** | `https://your-vercel-domain.vercel.app/security` |
