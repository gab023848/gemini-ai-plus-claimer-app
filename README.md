# Gab's Google AI Plus Portal — Web Hub

[![Live Deployment: Vercel](https://img.shields.io/badge/deployment-Vercel-000000?style=flat-square&logo=vercel)](https://gemini-ai-plus-claimer.vercel.app/)
[![Access: Web Only](https://img.shields.io/badge/access-Web%20Only%20%E2%80%94%20No%20Install-0284c7?style=flat-square&logo=googlechrome)](https://gemini-ai-plus-claimer.vercel.app/)
[![WCAG 2.1 AA Compliant](https://img.shields.io/badge/accessibility-WCAG%202.1%20AA-10b981?style=flat-square)](https://www.w3.org/WAI/WCAG21/quickref/)
[![Telemetry: Zero](https://img.shields.io/badge/telemetry-Zero%20(100%25%20Local)-10b981?style=flat-square)](#)

> **Maintained by Gab** — Original open-source project by [nmrisrl11](https://github.com/nmrisrl11). Customized & web-ified by Gab.

Official landing page for **Gab's Google AI Plus Portal** — a fully web-based tool that automates promotional student onboarding and captures the canonical Google One offer link (`https://one.google.com/offer/...`) for 12 months of complimentary Gemini Advanced and 2TB cloud storage.

🌐 **Live Web Hub**: [https://gemini-ai-plus-claimer.vercel.app](https://gemini-ai-plus-claimer.vercel.app/)
📘 **Q&A / Contact**: [Gab Tech Solutions — Facebook](https://www.facebook.com/profile.php?id=61596157970445)

---

## 📁 Repository Structure

```
gemini-ai-plus-claimer-app/
├── index.html          # Semantic, accessible landing page (Tailwind CSS CDN)
├── robots.txt          # Search engine crawler directives & sitemap reference
├── sitemap.xml         # XML sitemap for SEO discovery
├── site.webmanifest    # Web app manifest for bookmark/installable metadata
├── README.md           # Project documentation and deployment guide
├── CHANGELOG.md        # Version history & release changelog
├── .prettierrc         # Prettier code formatting rules
├── .prettierignore     # Files excluded from Prettier formatting
├── .gitignore          # Git exclusion rules
├── .vscode/
│   ├── settings.json   # Workspace editor formatting rules (formatOnSave)
│   └── extensions.json # Recommended VS Code extensions
├── css/
│   └── style.css       # Custom scrollbars, focus rings & prefers-reduced-motion
├── js/
│   └── app.js          # Mobile drawer, clipboard copy & a11y live announcer
└── images/
    ├── app_icon.ico         # Multi-resolution application icon
    ├── app_icon.png         # High-resolution brand icon (512x512)
    ├── og-image.png         # 1200x630 OpenGraph & Twitter social preview banner
    ├── qrcode-gcash-gab.jpg # Gab's GCash donation QR code
    └── shuffle.png          # UI accessory icon
```

---

## ⚡ Key Changes by Gab

- **100% Web-Based** — No desktop application to download or install. Runs entirely in the browser.
- **Gab's Branding** — Renamed to "Gab's Google AI Plus Portal" / "Gab Tech Solutions".
- **GCash Donation** — Updated QR code to Gab's personal GCash/InstaPay QR.
- **Q&A via Facebook** — All support queries directed to [Gab Tech Solutions on Facebook](https://www.facebook.com/profile.php?id=61596157970445).
- **Credits preserved** — Original work by `nmrisrl11` credited in the footer and README.

---

## 🚀 Deployment (Vercel) — How to Deploy Your Own

This is a **zero-build, plain HTML project** — the simplest possible Vercel deployment:

1. Fork or clone this repository to your GitHub account.
2. Go to [vercel.com](https://vercel.com) → **New Project** → import your repo.
3. Set Framework Preset to **Other** (Plain HTML — no build step).
4. Root directory is `/` — Vercel serves `index.html`, `css/`, `js/`, and `images/` automatically.
5. Click **Deploy**. Done! Any push to `main` auto-deploys.

> **No npm install, no build commands, no configuration needed.**

---

## 📞 Support & Q&A

For questions, bugs, or feedback — message Gab on Facebook:

👉 **[Gab Tech Solutions](https://www.facebook.com/profile.php?id=61596157970445)**

---

## ⚖️ Disclaimer & Non-Affiliation

This project is an independent utility provided strictly for convenience, personal educational testing, and research. This project is **not** affiliated with, sponsored by, or endorsed by Google LLC, Alphabet Inc., or Internshala. Google, Google One, and Gemini are trademarks of Google LLC.

Original open-source project by [nmrisrl11](https://github.com/nmrisrl11).
