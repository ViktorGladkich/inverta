import { Footer } from "@/components/layout/Footer";
import ContactClient from "./ContactClient";
import { Metadata } from "next";
import { FAQ } from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "Kontakt | INVERTA",
  description: "Lassen Sie uns über Ihr nächstes Projekt sprechen.",
};

export default function KontaktPage() {
  return (
    <>
      <ContactClient />
      <FAQ />
      <Footer />
    </>
  );
}
