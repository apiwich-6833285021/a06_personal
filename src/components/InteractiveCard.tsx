"use client";

import { useState, ReactNode } from "react";

export default function InteractiveCard({ children }: { children: ReactNode }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`rounded-lg p-4 transition-all duration-300 cursor-pointer
        ${isHovered ? "shadow-2xl bg-neutral-200" : "shadow-lg bg-white"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
}
