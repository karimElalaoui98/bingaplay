"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "@/lib/gsap";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Reduced from 2
      easing: (t) => t, // Linear easing for more natural feel
      smoothWheel: true,
      wheelMultiplier: 0.8, // Reduced multiplier for more control
      smoothTouch: false,
      touchMultiplier: 2,
    });

    // Integrate Lenis with GSAP
    lenis.on("scroll", () => {
      gsap.ScrollTrigger.update();
    });

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Clean up
    return () => {
      lenis.destroy();
      gsap.ticker.remove(() => {});
    };
  }, []);

  return <>{children}</>;
}
