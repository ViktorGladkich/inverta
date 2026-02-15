import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4">
      <h2 className="text-8xl font-black text-neutral-200 mb-4">404</h2>
      <h1 className="text-2xl md:text-4xl font-bold mb-4">
        Seite nicht gefunden
      </h1>
      <p className="text-neutral-500 mb-8 max-w-md mx-auto">
        Die gesuchte Seite existiert nicht oder wurde verschoben.
      </p>
      <Button asChild variant="primary">
        <Link href="/">Zurück zur Startseite</Link>
      </Button>
    </div>
  );
}
