"use client";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

  // Configure ScrollTrigger
  ScrollTrigger.config({
    ignoreMobileResize: true,
  });

  // Better handling of touch devices
  ScrollTrigger.defaults({
    markers: false,
    scrub: true,
  });
}

export { gsap };
