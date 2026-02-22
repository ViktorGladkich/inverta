"use client";

import { ContactInfo } from "./components/ContactInfo";
import { ContactForm } from "./components/ContactForm";

export default function ContactClient() {
  return (
    <section className="min-h-screen bg-[#f5f5f5] pt-32 pb-24 text-black selection:bg-black selection:text-white">
      <h1 className="sr-only">
        Kontaktieren Sie INVERTA – Ihre Webdesign, Webentwicklung & KI-Agentur
      </h1>
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row justify-between gap-24 lg:gap-10">
          {/* Linke Spalte: Hero Text und Kontaktinformationen */}
          <ContactInfo />

          {/* Rechte Spalte: Interaktives Kontaktformular */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
