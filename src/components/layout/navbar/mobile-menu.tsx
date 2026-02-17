"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { navigationItems } from "./config";

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-100 bg-white pt-24 px-6 overflow-y-auto"
        >
          <div className="flex flex-col gap-8 pb-20">
            {navigationItems.map((item) => (
              <div key={item.title} className="space-y-4">
                {item.items ? (
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-neutral-900">
                      {item.title}
                    </h3>
                    <div className="grid gap-3 pl-4 border-l border-neutral-200">
                      {item.items.map((sub) => (
                        <Link
                          key={sub.title}
                          href={sub.href}
                          onClick={onClose}
                          className="flex items-center gap-3 py-2 text-neutral-600 hover:text-black"
                        >
                          <span className="text-lg font-medium">
                            {sub.title}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block text-2xl font-bold text-neutral-900"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-8 border-t pt-8">
              <Link
                href="/kontakt"
                onClick={onClose}
                className="w-full flex items-center justify-center gap-2 bg-black text-white py-4 rounded-xl text-lg font-bold"
              >
                Start Project <MoveRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
