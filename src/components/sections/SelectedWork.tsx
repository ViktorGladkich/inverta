"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "EcoSolutions GmbH",
    category: "Corporate Website & SEO",
    year: "2024",
    link: "/projekte/eco",
    thumbnail: "bg-neutral-100", // Would be an image path
    textColor: "text-neutral-900",
  },
  {
    title: "Urban Architecture",
    category: "Branding & Webentwicklung",
    year: "2023",
    link: "/projekte/urban",
    thumbnail: "bg-neutral-800", // Would be an image path
    textColor: "text-white",
  },
  {
    title: "Pure Skincare",
    category: "Onlineshop (Shopify)",
    year: "2023",
    link: "/projekte/pure",
    thumbnail: "bg-neutral-200", // Would be an image path
    textColor: "text-neutral-900",
  },
  {
    title: "TechFlow SaaS",
    category: "Web App & Marketing",
    year: "2024",
    link: "/projekte/techflow",
    thumbnail: "bg-neutral-900", // Would be an image path
    textColor: "text-white",
  },
];

export function SelectedWork() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
              Ausgewählte Arbeiten
            </h2>
            <p className="text-neutral-500 text-lg mt-4 max-w-xl">
              Wir verwandeln Visionen in digitale Realität. Sehen Sie hier, wie
              wir anderen Unternehmen geholfen haben, ihre Ziele zu übertreffen.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Button
              variant="outline"
              href="/projekte"
              className="hidden md:inline-flex"
            >
              Alle Projekte ansehen
            </Button>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Link
                href={project.link}
                className="group block relative aspect-[4/3] overflow-hidden rounded-3xl mb-4"
              >
                <div
                  className={`absolute inset-0 transition-transform duration-700 group-hover:scale-105 ${project.thumbnail}`}
                />
                {/* Image Placeholder Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10 font-bold text-6xl uppercase tracking-widest pointer-events-none select-none">
                  {project.title.substring(0, 3)}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white text-black px-6 py-3 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                    Case Study ansehen <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-neutral-500 text-sm">{project.category}</p>
                </div>
                <span className="text-sm font-mono text-neutral-400 border border-neutral-200 rounded-full px-3 py-1">
                  {project.year}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Button variant="outline" href="/projekte" fullWidth>
            Alle Projekte ansehen
          </Button>
        </div>
      </div>
    </section>
  );
}
