"use client";
import { useEffect } from "react";
import { gsap } from "@/lib/gsap";

export default function GsapProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    document.documentElement.classList.toggle("reduced-motion", prefersReduced);
  }, []);
  return <>{children}</>;
}
