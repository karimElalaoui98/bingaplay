"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { copy } from "@/lib/content/copy";

export default function Recharge() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".recharge-title", {
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      });
      gsap.from(".recharge-cta", {
        scrollTrigger: { trigger: ".recharge-cta", start: "top 85%" },
        scale: 0.94,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="recharge" className="py-16" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="recharge-title text-2xl font-bold">
          {copy.recharge.title}
        </h2>
        <p className="mt-2 opacity-80 max-w-2xl">{copy.recharge.desc}</p>
        <a className="recharge-cta inline-flex mt-6 px-5 py-3 rounded-2xl bg-white text-black font-medium">
          {copy.recharge.cta}
        </a>
      </div>
    </section>
  );
}
