"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { copy } from "@/lib/content/copy";

export default function Benefits() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context((self) => {
      gsap.from(self.selector!(".benefit"), {
        scrollTrigger: { trigger: ref.current, start: "top 80%" },
        opacity: 0,
        scale: 0.9,
        duration: 0.5,
        stagger: 0.08,
        transformOrigin: "50% 60%",
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-14">
      <div
        className="max-w-6xl mx-auto px-4 grid sm:grid-cols-3 gap-6"
        ref={ref}
      >
        {copy.benefits.map((b, i) => (
          <div
            key={i}
            className="benefit rounded-2xl border border-white/10 p-6 bg-white/5"
          >
            <div className="text-lg font-semibold">{b.title}</div>
            <p className="text-sm opacity-80 mt-2">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
