"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Marketing",
    description: "Maximale Sichtbarkeit und Umsatzsteigerung.",
    items: [
      { name: "Neukundengewinnung", href: "/marketing/neukundengewinnung" },
      { name: "SEO (Suchmaschinenoptimierung)", href: "/marketing/seo" },
      { name: "Social Media Marketing", href: "/marketing/social-media" },
      { name: "Ladezeitoptimierung", href: "/marketing/ladezeitoptimierung" },
    ],
    bgClass: "bg-neutral-50",
  },
  {
    title: "Webentwicklung",
    description: "Moderne Websites und skalierbare Systeme.",
    items: [
      { name: "Website | Onlineshop", href: "/webentwicklung/website" },
      { name: "Relaunch", href: "/webentwicklung/relaunch" },
      { name: "Funnelsysteme", href: "/webentwicklung/funnels" },
      {
        name: "Individuelle Programmierung",
        href: "/webentwicklung/programmierung",
      },
    ],
    bgClass: "bg-neutral-100",
  },
];

export function ServicesOverview() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
            Unser Leistungsspektrum
          </h2>
          <p className="text-neutral-500 text-lg">
            Wir bieten ganzheitliche Lösungen, die Design, Technologie und
            Marketing vereinen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={cn(
                "group relative overflow-hidden rounded-3xl p-8 md:p-12 transition-colors hover:bg-neutral-900 hover:text-white",
                service.bgClass,
              )}
            >
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                <p className="text-neutral-500 group-hover:text-neutral-300 mb-8 text-lg">
                  {service.description}
                </p>
                <div className="space-y-4">
                  {service.items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-between border-b border-neutral-200/20 group-hover:border-neutral-700 py-3 text-lg font-medium transition-colors hover:pl-2"
                    >
                      <span className="group-hover:text-white text-neutral-800">
                        {item.name}
                      </span>
                      <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-white" />
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
