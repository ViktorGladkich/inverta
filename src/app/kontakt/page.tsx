import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export default function KontaktPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
              Projekt starten
            </h1>
            <p className="text-neutral-500 text-lg">
              Erzählen Sie uns von Ihrer Vision. Wir melden uns innerhalb von 24
              Stunden.
            </p>
          </div>

          <form className="max-w-xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Ihr Name"
                  className="w-full rounded-md border border-neutral-200 p-3 text-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  E-Mail
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="name@firma.de"
                  className="w-full rounded-md border border-neutral-200 p-3 text-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="service" className="text-sm font-medium">
                Interesse an
              </label>
              <select
                id="service"
                className="w-full rounded-md border border-neutral-200 p-3 text-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black bg-white"
              >
                <option value="">Bitte wählen...</option>
                <option value="marketing">Marketing (SEO, Social Media)</option>
                <option value="web">Webentwicklung (Website, Shop)</option>
                <option value="both">Komplettpaket</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Nachricht
              </label>
              <textarea
                id="message"
                placeholder="Beschreiben Sie Ihr Projekt..."
                className="w-full h-32 rounded-md border border-neutral-200 p-3 text-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black resize-none"
                required
              />
            </div>

            <Button type="submit" size="lg" fullWidth>
              Anfrage senden
            </Button>

            <p className="text-xs text-center text-neutral-400 mt-4">
              Durch das Absenden stimmen Sie unserer{" "}
              <a href="/datenschutz" className="underline">
                Datenschutzerklärung
              </a>{" "}
              zu.
            </p>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
