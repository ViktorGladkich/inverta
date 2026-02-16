"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { TracingBeam } from "@/components/ui/tracing-beam";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BorderBeam } from "@/components/ui/border-beam";

const services = [
  {
    title: "Marketing",
    description:
      "Maximale Sichtbarkeit und messbares Umsatzwachstum durch datengetriebene Strategien.",
    items: [
      { name: "Neukundengewinnung", href: "/marketing/neukundengewinnung" },
      { name: "SEO (Suchmaschinenoptimierung)", href: "/marketing/seo" },
      { name: "Social Media Marketing", href: "/marketing/social-media" },
      { name: "Ladezeitoptimierung", href: "/marketing/ladezeitoptimierung" },
    ],
    bgClass: "bg-neutral-50/50",
  },
  {
    title: "Webentwicklung",
    description:
      "Hochperformante Websites und skalierbare Systeme, die begeistern und konvertieren.",
    items: [
      { name: "Website | Onlineshop", href: "/webentwicklung/website" },
      { name: "Relaunch", href: "/webentwicklung/relaunch" },
      { name: "Funnelsysteme", href: "/webentwicklung/funnels" },
      {
        name: "Individuelle Programmierung",
        href: "/webentwicklung/programmierung",
      },
    ],
    bgClass: "bg-white",
  },
];

export function ServicesOverview() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-24 md:text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tighter mb-6"
          >
            Unser Leistungsspektrum
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-500 text-xl font-light leading-relaxed"
          >
            Wir bieten ganzheitliche Lösungen, die Design, Technologie und
            Marketing nahtlos verbinden.
          </motion.p>
        </div>

        <TracingBeam className="px-6 md:px-0">
          <div className="grid grid-cols-1 gap-12 relative">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className={cn(
                  "relative overflow-hidden border-neutral-200 shadow-sm transition-all duration-300 hover:shadow-md",
                  service.bgClass,
                )}
              >
                <BorderBeam duration={12} delay={9 + index * 2} size={400} />

                <CardHeader className="p-8 md:p-12 relative z-10">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-lg font-light leading-relaxed max-w-2xl text-neutral-500">
                        {service.description}
                      </CardDescription>
                    </div>
                    <div className="hidden md:block">
                      <div className="p-3 bg-neutral-100 rounded-full">
                        <ArrowUpRight className="w-6 h-6 text-neutral-400" />
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-8 md:p-12 pt-0 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="group/item"
                      >
                        <div className="flex items-center justify-between p-4 rounded-xl hover:bg-neutral-100/80 transition-colors border border-transparent hover:border-neutral-200">
                          <span className="font-medium text-neutral-700 group-hover/item:text-black">
                            {item.name}
                          </span>
                          <ArrowUpRight className="w-4 h-4 text-neutral-300 group-hover/item:text-neutral-900 transition-colors" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TracingBeam>
      </div>
    </section>
  );
}
