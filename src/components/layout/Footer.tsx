import Link from "next/link";
import Image from "next/image";


export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#fafafa] text-black pt-20 pb-7 overflow-hidden sm:pt-32 sm:pb-8">
      <div className="container relative z-10 mx-auto px-6 md:px-10 flex flex-col">
        <nav className="pb-10">
          <ul className="flex flex-wrap justify-between gap-6 text-sm tracking-widest md:text-base font-semibold uppercase">
            <li>
              <Link href="/" className="hover:text-black/60 transition-colors">
                HOME
              </Link>
            </li>
            <li>
              <Link
                href="/agentur"
                className="hover:text-black/60 transition-colors"
              >
                AGENTUR
              </Link>
            </li>
            <li>
              <Link
                href="/marketing"
                className="hover:text-black/60 transition-colors"
              >
                MARKETING
              </Link>
            </li>
            <li>
              <Link
                href="/webentwicklung"
                className="hover:text-black/60 transition-colors"
              >
                WEB
              </Link>
            </li>
            <li>
              <Link
                href="/ki-automatisierung"
                className="hover:text-black/60 transition-colors"
              >
                KI AUTOMATISIERUNG
              </Link>
            </li>
            <li>
              <Link
                href="/projekte"
                className="hover:text-black/60 transition-colors"
              >
                PROJEKTE
              </Link>
            </li>
            <li>
              <Link
                href="/kontakt"
                className="hover:text-black/60 transition-colors"
              >
                KONTAKT
              </Link>
            </li>
          </ul>
        </nav>

        <div className="w-full h-px bg-black/10" />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 py-10 relative">
          <p className="text-xs tracking-[0.15em] uppercase text-black/70 font-medium">
            &copy; {currentYear} INVERTA DIGITAL. ALL RIGHTS RESERVED.
          </p>

          <ul className="flex flex-wrap gap-6 md:gap-10 text-xs tracking-[0.15em] font-medium uppercase">
            <li>
              <a href="#" className="hover:text-black/60 transition-colors underline underline-offset-4 decoration-black">
                LINKEDIN
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/invertadigitall"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black/60 transition-colors underline underline-offset-4 decoration-black"
              >
                FACEBOOK
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/invertadigital/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black/60 transition-colors underline underline-offset-4 decoration-black"
              >
                INSTAGRAM
              </a>
            </li>
            <li>
              <Link
                href="/impressum"
                className="hover:text-black transition-colors underline underline-offset-4 decoration-black"
              >
                IMPRESSUM
              </Link>
            </li>
            <li>
              <Link
                href="/datenschutz"
                className="hover:text-black transition-colors underline underline-offset-4 decoration-black"
              >
                DATENSCHUTZ
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Large brand text */}
      <div className="relative w-full h-[18vw] md:h-[22vw] min-h-[120px] flex justify-center items-center overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-full bg-linear-to-t from-black/5 to-transparent blur-[80px] z-0 pointer-events-none" />

        <Image
          src="/logo-footer.png"
          alt="INVERTA Logo"
          width={2000}
          height={2000}
          className="relative z-10 w-full h-auto select-none scale-[1] md:scale-[1] translate-y-[5%]"
          priority
        />





        <div className="absolute bottom-0 left-0 right-0 h-4 bg-black/10 blur-xl z-20 pointer-events-none" />
      </div>
    </footer>
  );
}
