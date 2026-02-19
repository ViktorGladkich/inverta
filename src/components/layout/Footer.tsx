import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#fafafa] text-black pt-20 pb-7 overflow-hidden sm:pt-32 sm:pb-8">
      <div className="container relative z-10 mx-auto px-6 md:px-10 flex flex-col">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 pb-10">
          <p className="text-sm md:text-base tracking-[0.2em] font-medium leading-loose uppercase max-w-sm text-black/80">
            JEDES PROJEKT IST EINE GESCHICHTE, DIE DARAUF WARTET, ERZÄHLT ZU
            WERDEN
          </p>

          <nav>
            <ul className="flex flex-wrap gap-6 md:gap-10 text-sm tracking-[0.1em] md:text-base font-semibold uppercase">
              <li>
                <Link
                  href="/"
                  className="hover:text-black/60 transition-colors"
                >
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
                  href="/kontakt"
                  className="hover:text-black/60 transition-colors"
                >
                  KONTAKT
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-black/10" />

        {/* Middle Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 py-10 relative">
          <p className="text-xs tracking-[0.15em] uppercase text-black/70 font-medium">
            &copy; {currentYear} INVERTA DIGITAL. ALL RIGHTS RESERVED.
          </p>

          <ul className="flex flex-wrap gap-6 md:gap-10 text-xs tracking-[0.15em] font-medium uppercase">
            <li>
              <a href="#" className="hover:text-black/60 transition-colors">
                LINKEDIN
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/invertadigitall"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black/60 transition-colors"
              >
                FACEBOOK
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/invertadigital/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black/60 transition-colors"
              >
                INSTAGRAM
              </a>
            </li>
            <li>
              <Link
                href="/impressum"
                className="hover:text-black/60 transition-colors"
              >
                IMPRESSUM
              </Link>
            </li>
            <li>
              <Link
                href="/datenschutz"
                className="hover:text-black/60 transition-colors"
              >
                DATENSCHUTZ
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Giant Text Section with Bottom Glow */}
      <div className="relative w-full flex justify-center items-end mt-10 md:mt-16 overflow-hidden">
        {/* Glow ambient */}
        <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-linear-to-t from-black/5 to-transparent blur-[80px] z-0 pointer-events-none" />

        {/* Giant Text */}
        <h1 className="relative z-10 font-bold tracking-[-0.03em] text-black text-center w-full uppercase m-0 leading-[0.75] select-none text-[clamp(6rem,24vw,30rem)] pl-2">
          INVERTA
        </h1>

        {/* Bottom edge sharp glow */}
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-black/10 blur-xl z-20 pointer-events-none" />
      </div>
    </footer>
  );
}
