"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[app-error]", error.message, error.digest ?? "");
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4">
      <h2 className="text-7xl font-black text-neutral-200 mb-4">500</h2>
      <h1 className="text-2xl md:text-4xl font-bold mb-4">
        Etwas ist schiefgelaufen
      </h1>
      <p className="text-neutral-500 mb-8 max-w-md mx-auto">
        Es ist ein unerwarteter Fehler aufgetreten. Bitte versuchen Sie es
        erneut oder kehren Sie zur Startseite zurück.
      </p>
      <div className="flex gap-3">
        <button
          onClick={() => reset()}
          className="inline-flex items-center justify-center rounded-full font-medium bg-neutral-900 text-white hover:bg-neutral-800 h-11 px-8 text-base cursor-pointer"
        >
          Erneut versuchen
        </button>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full font-medium border border-neutral-200 bg-white hover:bg-neutral-100 text-neutral-900 h-11 px-8 text-base"
        >
          Zur Startseite
        </Link>
      </div>
    </div>
  );
}
