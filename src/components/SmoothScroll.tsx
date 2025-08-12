"use client";
import Lenis from "@studio-freight/lenis";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    lenisRef.current = new Lenis({
      // Duration controls the speed of the smooth scroll
      // Increase for slower scrolling, decrease for faster
      // Try values between 1.2 - 2.4
      duration: 2.2,

      // Easing function affects the scroll animation curve
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),

      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,

      // Adjust touchMultiplier to control mobile touch scroll speed
      // Increase for faster touch scrolling, decrease for slower
      // Try values between 1 - 3
      touchMultiplier: 1.5,

      // Optional: Add wheelMultiplier to control mouse wheel speed
      // Increase for faster wheel scrolling, decrease for slower
      // Try values between 0.5 - 1.5
      wheelMultiplier: 0.8,
    });

    // GSAP ticker integration
    // The time multiplier (1000) affects the overall smoothness
    // Increase for smoother but slower scrolling
    // Decrease for faster but potentially less smooth scrolling
    gsap.ticker.add((time) => {
      lenisRef.current?.raf(time * 1000);
    });

    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  return <div>{children}</div>;
}

export default SmoothScroll;
