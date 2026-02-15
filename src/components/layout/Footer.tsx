import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-50 border-t border-neutral-100 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tighter block"
            >
              INVERTA
            </Link>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-xs">
              Wir transformieren Ihr Geschäft durch maßgeschneiderte
              Marketing-Strategien und High-End Webentwicklung.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Leistungen</h3>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>
                <Link
                  href="/marketing"
                  className="hover:text-black transition-colors"
                >
                  Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/webentwicklung"
                  className="hover:text-black transition-colors"
                >
                  Webentwicklung
                </Link>
              </li>
              <li>
                <Link
                  href="/marketing/seo"
                  className="hover:text-black transition-colors"
                >
                  SEO
                </Link>
              </li>
              <li>
                <Link
                  href="/webentwicklung/onlineshop"
                  className="hover:text-black transition-colors"
                >
                  Onlineshops
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Agentur</h3>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>
                <Link
                  href="/agentur"
                  className="hover:text-black transition-colors"
                >
                  Über uns
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="hover:text-black transition-colors"
                >
                  Kontakt
                </Link>
              </li>
              <li>
                <Link
                  href="/impressum"
                  className="hover:text-black transition-colors"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="hover:text-black transition-colors"
                >
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>
                <a
                  href="mailto:info@inverta.de"
                  className="hover:text-black transition-colors"
                >
                  info@inverta.de
                </a>
              </li>
              {/* Add Address if known, else placeholder */}
              <li>Deutschland</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-400">
          <p>&copy; {currentYear} INVERTA. Alle Rechte vorbehalten.</p>
          <div className="flex gap-4">
            <Link
              href="/impressum"
              className="hover:text-neutral-600 transition-colors"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="hover:text-neutral-600 transition-colors"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
