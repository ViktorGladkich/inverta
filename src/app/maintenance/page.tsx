import { Metadata } from "next";

export const metadata: Metadata = {
  title: "INVERTA DIGITAL – Bald verfügbar",
  description:
    "Unsere neue Website wird gerade erstellt. Bald sind wir für Sie da.",
  robots: { index: false, follow: false },
};

export default function MaintenancePage() {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center px-6 text-center overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-lg">
        {/* Logo or Brand */}
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-4">
          INVERTA
          <span className="text-white/20">.</span>
        </h1>

        <div className="w-16 h-[2px] bg-white/20 mx-auto mb-8" />

        <p className="text-lg md:text-xl text-white/50 font-medium leading-relaxed mb-4">
          Wir arbeiten gerade an etwas Besonderem.
        </p>
        <p className="text-sm text-white/30 font-medium leading-relaxed mb-10">
          Unsere neue Website wird derzeit entwickelt und ist bald für Sie
          verfügbar. Kontaktieren Sie uns gerne per E-Mail.
        </p>

        {/* Email CTA */}
        <a
          href="mailto:info@invertadigital.de"
          className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold text-sm hover:bg-white/90 transition-all duration-300 shadow-[0_10px_40px_rgba(255,255,255,0.08)]"
        >
          info@invertadigital.de
        </a>

        {/* Small footer */}
        <p className="mt-12 text-[11px] text-white/20 font-medium tracking-widest uppercase">
          © {new Date().getFullYear()} INVERTA DIGITAL · Dresden, Deutschland
        </p>
      </div>
    </div>
  );
}
