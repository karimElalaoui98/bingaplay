"use client";
import { ReactNode } from "react";
import { gsap } from "@/lib/gsap";

export default function Magnetic({ children }: { children: ReactNode }) {
  return (
    <span
      className="inline-block will-change-transform"
      onMouseMove={(e) => {
        const el = e.currentTarget as HTMLSpanElement;
        const r = el.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        gsap.to(el, {
          rotateY: (dx / r.width) * 6,
          rotateX: (-dy / r.height) * 6,
          x: dx * 0.06,
          y: dy * 0.06,
          transformPerspective: 700,
          duration: 0.3,
          ease: "power2.out",
        });
      }}
      onMouseLeave={(e) => {
        gsap.to(e.currentTarget, {
          rotateX: 0,
          rotateY: 0,
          x: 0,
          y: 0,
          duration: 0.4,
          ease: "power3.out",
        });
      }}
    >
      {children}
    </span>
  );
}
