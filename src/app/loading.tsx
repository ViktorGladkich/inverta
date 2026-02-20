import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-9999 bg-[#f5f5f5] flex items-center justify-center overflow-hidden">
      <span className="sr-only">INVERTA DIGITAL - Seite lädt...</span>

      <div className="relative flex flex-col items-center justify-center">
        <div className="w-[200px] h-[2px] bg-black/10 rounded-full overflow-hidden relative">
          <div className="absolute top-0 left-0 h-full w-full bg-black origin-left animate-load-bar" />
        </div>

        <div className="mt-6 flex items-center gap-2 text-black/40 font-semibold tracking-[0.2em] uppercase text-xs">
          <span>Loading</span>
          <span className="flex gap-[2px]">
            <span className="w-1 h-1 rounded-full bg-black/40 animate-bounce [animation-delay:-0.3s]" />
            <span className="w-1 h-1 rounded-full bg-black/40 animate-bounce [animation-delay:-0.15s]" />
            <span className="w-1 h-1 rounded-full bg-black/40 animate-bounce" />
          </span>
        </div>
      </div>
    </div>
  );
}
