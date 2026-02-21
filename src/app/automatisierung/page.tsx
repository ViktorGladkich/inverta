import { AutomationClient } from "./AutomationClient";
import { Footer } from "@/components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automatisierung | INVERTA DIGITAL",
  description:
    "Wir transformieren Ihre Geschäftsprozesse durch intelligente KI- und Workflow-Automatisierung. Mehr Effizienz, weniger Fehler, maximales Wachstum.",
};

export default function AutomationPage() {
  return (
    <>
      <main>
        <AutomationClient />
      </main>
      <Footer />
    </>
  );
}
