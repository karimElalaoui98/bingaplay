"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cursorRef.current) return;

    const cursor = cursorRef.current;

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX - 16,
        y: e.clientY - 16,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const onMouseEnter = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.2,
      });
    };

    const onMouseLeave = () => {
      gsap.to(cursor, {
        scale: 0,
        duration: 0.2,
      });
    };

    const onLinkHover = () => {
      cursor.classList.add("cursor-hover");
    };

    const onLinkLeave = () => {
      cursor.classList.remove("cursor-hover");
    };

    // Add listeners
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);

    // Add hover effect for all interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, .interactive"
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", onLinkHover);
      el.addEventListener("mouseleave", onLinkLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", onLinkHover);
        el.removeEventListener("mouseleave", onLinkLeave);
      });
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" />;
}
