<p align="center">
  <img src="public/logo-inverta.png" alt="INVERTA DIGITAL" width="200" />
</p>

<h1 align="center">INVERTA DIGITAL</h1>

<p align="center">
  <strong>Premium Digitalagentur — Webentwicklung · Performance Marketing · KI-Automatisierung</strong>
</p>

<p align="center">
  <a href="https://invertadigital.de">Live Website</a> ·
  <a href="#features">Features</a> ·
  <a href="#tech-stack">Tech Stack</a> ·
  <a href="#projektstruktur">Projektstruktur</a> ·
  <a href="#getting-started">Getting Started</a>
</p>

---

## Über das Projekt

**INVERTA DIGITAL** ist die offizielle Website und Plattform unserer Full-Service Digitalagentur aus Dresden. Wir verbinden High-End Webdesign, skalierbare Webentwicklung, datengetriebenes Performance Marketing und intelligente KI-Automatisierung — für messbares digitales Wachstum.

Die Website selbst spiegelt unseren Qualitätsanspruch wider: eine hochperformante, animierte und SEO-optimierte Plattform, gebaut mit dem modernsten Tech-Stack der Branche.

---

## Features

### 🎨 Design & UX
- **Galaxy Hero** — Immersiver Hero-Bereich mit Partikel-Animationen und Video-Hintergrund
- **Framer Motion Animations** — Flüssige Scroll-Animationen, Fade-Ins und Page Transitions
- **Typewriter-Effekte** — Dynamische Texteinblendungen für maximale visuelle Wirkung
- **Progressive Blur** — Glasmorphism-Overlay am unteren Bildschirmrand
- **Responsive Design** — Mobile-First-Architektur, optimiert für alle Viewports
- **Cookie Consent** — DSGVO-konforme Cookie-Banner-Implementierung

### 🚀 Performance & SEO
- **Next.js App Router** — Server-Side Rendering & Static Generation für maximale Ladegeschwindigkeit
- **Dynamische Sitemap** — Automatisch generiert aus Services und Routen
- **Strukturierte Daten (JSON-LD)** — Global Schema für optimale Suchmaschinen-Indexierung
- **Open Graph & Twitter Cards** — Optimierte Social-Media-Previews
- **Security Headers** — HSTS, X-Frame-Options, CSP-ready Konfiguration
- **Vercel Analytics** — Integriertes Performance-Monitoring
- **Google Analytics** — Datengetriebene Analyse mit Consent-Management

### 📄 Seiten & Routen

| Route | Beschreibung |
|---|---|
| `/` | Startseite mit Hero, Services, Prozess, Projekte, Testimonials, FAQ & CTA |
| `/agentur` | Über uns — Team, Werte, Mission |
| `/projekte` | Portfolio mit 12+ Referenzprojekten |
| `/marketing` | Leistungsseite Performance Marketing |
| `/webentwicklung` | Leistungsseite Webentwicklung |
| `/automatisierung` | Leistungsseite KI-Automatisierung |
| `/kontakt` | Kontaktformular mit E-Mail-Versand via Resend |
| `/marketing/[slug]` | Dynamische Service-Detail-Seiten (SEO, Social Media, etc.) |
| `/webentwicklung/[slug]` | Dynamische Service-Detail-Seiten (Website, Relaunch, etc.) |
| `/automatisierung/[slug]` | Dynamische Service-Detail-Seiten (KI-Automatisierung) |
| `/impressum` | Impressum (rechtlich) |
| `/datenschutz` | Datenschutzerklärung (DSGVO) |

### 🛠 Leistungsbereiche

**Marketing**
- Neukundengewinnung & Lead-Generierung
- Suchmaschinenoptimierung (SEO)
- Social Media Marketing
- Ladezeitoptimierung & Core Web Vitals
- Support & Wartung

**Webentwicklung**
- Website & Onlineshop Erstellung
- Website Relaunch & Migration
- Sales-Funnelsysteme
- Individuelle Programmierung & API-Entwicklung

**KI-Automatisierung**
- Intelligente Chatbots & AI Agents
- Workflow-Automatisierung (n8n, Make, Zapier)
- Mitarbeiter-Training für KI-Tools

---

## Tech Stack

| Kategorie | Technologie |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) |
| **Sprache** | [TypeScript 5](https://www.typescriptlang.org/) |
| **UI Library** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) |
| **Animationen** | [Framer Motion 12](https://www.framer.com/motion/) |
| **UI Primitives** | [Radix UI](https://www.radix-ui.com/) (Navigation Menu, Tabs, Labels) |
| **Icons** | [Lucide React](https://lucide.dev/) + [Radix Icons](https://www.radix-ui.com/icons) |
| **E-Mail** | [Resend](https://resend.com/) |
| **Validierung** | [Zod 4](https://zod.dev/) |
| **Analytics** | [Vercel Analytics](https://vercel.com/analytics) + Google Analytics |
| **Deployment** | [Vercel](https://vercel.com/) |
| **Linting** | [ESLint 9](https://eslint.org/) (next config) |

---

## Projektstruktur

```
inverta/
├── public/                     # Statische Assets
│   ├── images/                 # Projekt-Screenshots & Bilder
│   │   └── projects/           # Portfolio-Bilder
│   ├── team/                   # Team-Fotos
│   ├── emails/                 # E-Mail-Templates
│   ├── hero-loop.mp4           # Hero-Video
│   └── logo-inverta.png        # Logo-Varianten
│
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx            # Startseite
│   │   ├── layout.tsx          # Root Layout + Metadata
│   │   ├── globals.css         # Globale Styles & Design Tokens
│   │   ├── template.tsx        # Page Transition Wrapper
│   │   ├── sitemap.ts          # Dynamische Sitemap-Generierung
│   │   ├── robots.ts           # Robots.txt Konfiguration
│   │   ├── not-found.tsx       # Custom 404-Seite
│   │   ├── api/                # API Routes (E-Mail etc.)
│   │   ├── agentur/            # Agentur-Seite
│   │   ├── projekte/           # Portfolio-Seite
│   │   ├── marketing/          # Marketing-Leistungen
│   │   ├── webentwicklung/     # Webentwicklung-Leistungen
│   │   ├── automatisierung/    # KI-Automatisierung
│   │   ├── kontakt/            # Kontaktformular
│   │   ├── impressum/          # Impressum
│   │   └── datenschutz/        # Datenschutz
│   │
│   ├── components/
│   │   ├── sections/           # Page Sections (Hero, Projects, FAQ, etc.)
│   │   ├── layout/             # Navbar, Footer
│   │   ├── ui/                 # Reusable UI Components
│   │   ├── seo/                # SEO & Structured Data
│   │   ├── analytics/          # Google Analytics Component
│   │   └── Viewport/           # Viewport Fix Utility
│   │
│   ├── data/
│   │   ├── projects.ts         # Portfolio-Projekte (12+ Referenzen)
│   │   └── services.ts         # Service-Definitionen & SEO-Daten
│   │
│   └── lib/                    # Utility Functions
│
├── next.config.ts              # Next.js Config + Security Headers
├── tailwind.config.ts          # Tailwind CSS Konfiguration
├── tsconfig.json               # TypeScript Config
├── postcss.config.mjs          # PostCSS Config
└── package.json
```

---

## Getting Started

### Voraussetzungen

- **Node.js** ≥ 18.x
- **npm**, **yarn**, **pnpm** oder **bun**

### Installation

```bash
# Repository klonen
git clone https://github.com/ViktorGladkich/inverta.git
cd inverta

# Abhängigkeiten installieren
npm install
```

### Umgebungsvariablen

Erstelle eine `.env.local` Datei basierend auf `.env.example`:

```bash
cp .env.example .env.local
```

Konfiguriere die notwendigen API-Keys:

```env
# Resend (E-Mail-Versand)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxx

# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Development Server starten

```bash
npm run dev
```

Die Anwendung läuft unter [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
# Build erstellen
npm run build

# Production Server starten
npm start
```

---

## Deployment

Das Projekt wird auf **Vercel** deployt. Jeder Push auf den `main`-Branch löst automatisch ein neues Deployment aus.

```bash
# Vercel CLI (optional)
npx vercel --prod
```

### Security Headers

Die Anwendung implementiert enterprise-grade Security Headers:

- `Strict-Transport-Security` (HSTS mit Preload)
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` (Kamera, Mikrofon, Geolocation deaktiviert)

---

## Scripts

| Script | Beschreibung |
|---|---|
| `npm run dev` | Development Server mit Hot Reload |
| `npm run build` | Optimierter Production Build |
| `npm start` | Production Server starten |
| `npm run lint` | ESLint Code-Analyse |

---

## Lizenz

Dieses Projekt ist proprietär und gehört **INVERTA DIGITAL**. Alle Rechte vorbehalten.

---

<p align="center">
  <sub>Entwickelt mit 🖤 von <strong>INVERTA DIGITAL</strong> — Dresden, Deutschland</sub>
</p>
