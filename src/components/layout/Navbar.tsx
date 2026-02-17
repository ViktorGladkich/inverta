"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/shadcn-button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

import Image from "next/image";

export function Navbar() {
  const navigationItems = [
    {
      title: "Home",
      href: "/",
      description: "",
    },
    {
      title: "Marketing",
      description: "Maximale Sichtbarkeit und Umsatzwachstum.",
      items: [
        {
          title: "Neukundengewinnung",
          href: "/marketing/neukundengewinnung",
        },
        {
          title: "SEO",
          href: "/marketing/seo",
        },
        {
          title: "Social Media",
          href: "/marketing/social-media",
        },
        {
          title: "Ladezeitoptimierung",
          href: "/marketing/ladezeitoptimierung",
        },
      ],
    },
    {
      title: "Webentwicklung",
      description: "Hochperformante Websites und Systeme.",
      items: [
        {
          title: "Website | Onlineshop",
          href: "/webentwicklung/website",
        },
        {
          title: "Relaunch",
          href: "/webentwicklung/relaunch",
        },
        {
          title: "Funnelsysteme",
          href: "/webentwicklung/funnels",
        },
        {
          title: "Individuelle Programmierung",
          href: "/webentwicklung/programmierung",
        },
      ],
    },
    {
      title: "Agentur",
      href: "/agentur",
      description: "",
    },
    {
      title: "Kontakt",
      href: "/kontakt",
      description: "",
    },
  ];

  const [isOpen, setOpen] = useState(false);
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full z-40 fixed top-0 left-0 bg-white/80 backdrop-blur-md border-b border-neutral-200/50"
    >
      <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center px-4 md:px-6">
        <div className="flex lg:justify-start shrink-0">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-inverta.png"
              alt="INVERTA"
              width={140}
              height={40}
              className="h-24 md:h-20 w-auto object-contain"
              priority
            />
          </Link>
        </div>

        <div className="justify-center items-center gap-4 lg:flex hidden flex-row">
          <NavigationMenu className="flex justify-start items-start">
            <NavigationMenuList className="flex justify-start gap-4 flex-row">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.href ? (
                    <>
                      <Link href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink>
                          <Button
                            variant="ghost"
                            className="text-base font-medium text-neutral-600 hover:text-neutral-900 bg-transparent hover:bg-transparent px-2"
                          >
                            {item.title}
                          </Button>
                        </NavigationMenuLink>
                      </Link>
                    </>
                  ) : (
                    <>
                      <NavigationMenuTrigger className="font-medium text-base text-neutral-600 hover:text-neutral-900 bg-transparent hover:bg-transparent px-2">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="w-[450px]! p-4 bg-white border border-neutral-200 shadow-xl rounded-2xl">
                        <div className="flex flex-col gap-4">
                          <div className="flex flex-col h-full justify-between">
                            <div className="flex flex-col mb-4">
                              <p className="text-lg font-bold text-neutral-900">
                                {item.title}
                              </p>
                              <p className="text-neutral-500 text-sm">
                                {item.description}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-col text-sm h-full justify-end space-y-1">
                            {item.items?.map((subItem) => (
                              <Link
                                href={subItem.href}
                                key={subItem.title}
                                className="flex flex-row justify-between items-center hover:bg-neutral-50 py-3 px-4 rounded-lg transition-colors group"
                              >
                                <span className="text-neutral-600 font-medium group-hover:text-neutral-900">
                                  {subItem.title}
                                </span>
                                <MoveRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 transition-colors" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex justify-end w-full gap-4">
          <Button asChild className="hidden md:inline-flex rounded-full px-6">
            <Link href="/kontakt">Projekt starten</Link>
          </Button>
        </div>

        <div className="flex w-12 shrink lg:hidden items-end justify-end">
          <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
          {isOpen && (
            <div className="absolute top-20 border-t flex flex-col w-full left-0 bg-white shadow-lg py-4 px-4 gap-8 h-[calc(100vh-5rem)] overflow-y-auto z-50">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <div className="flex flex-col gap-2">
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="flex justify-between items-center py-2"
                        onClick={() => setOpen(false)}
                      >
                        <span className="text-lg font-medium">
                          {item.title}
                        </span>
                        <MoveRight className="w-4 h-4 stroke-1 text-neutral-400" />
                      </Link>
                    ) : (
                      <>
                        <p className="text-lg font-bold text-neutral-900 mt-2 mb-2">
                          {item.title}
                        </p>
                        {item.items &&
                          item.items.map((subItem) => (
                            <Link
                              key={subItem.title}
                              href={subItem.href}
                              className="flex justify-between items-center py-2 pl-4 border-l-2 border-neutral-100"
                              onClick={() => setOpen(false)}
                            >
                              <span className="text-neutral-600 font-medium">
                                {subItem.title}
                              </span>
                              <MoveRight className="w-4 h-4 stroke-1 text-neutral-400" />
                            </Link>
                          ))}
                      </>
                    )}
                  </div>
                </div>
              ))}
              <div className="mt-4">
                <Button asChild className="w-full rounded-full" size="lg">
                  <Link href="/kontakt" onClick={() => setOpen(false)}>
                    Projekt starten
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.header>
  );
}
