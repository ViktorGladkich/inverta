"use client";

import { useSyncExternalStore } from "react";

const subscribe = (query: string) => (onChange: () => void) => {
  const mql = window.matchMedia(query);
  mql.addEventListener("change", onChange);
  return () => mql.removeEventListener("change", onChange);
};

const getSnapshot = (query: string) => () => window.matchMedia(query).matches;

/**
 * SSR-safe matchMedia hook. Returns null on the server and during the very
 * first client render (before hydration sees the real DOM), then flips to a
 * boolean once the snapshot is read. Consumers should treat null as "unknown".
 */
export function useMediaQuery(query: string): boolean | null {
  return useSyncExternalStore(
    subscribe(query),
    getSnapshot(query),
    () => null,
  );
}

export function useIsMobile(breakpointPx = 768): boolean | null {
  return useMediaQuery(`(max-width: ${breakpointPx - 1}px)`);
}
