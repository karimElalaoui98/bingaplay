"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { copy } from "@/lib/content/copy";

export default function Trending() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context((self) => {
      gsap.utils
        .toArray<HTMLElement>(self.selector!(".card"))
        .forEach((card, i) => {
          gsap.from(card, {
            scrollTrigger: { trigger: card, start: "top 85%" },
            opacity: 0,
            y: 24,
            rotateX: 4,
            duration: 0.6,
            delay: i * 0.05,
            ease: "power3.out",
          });
        });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="tendances" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">{copy.trending.title}</h2>
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {copy.trending.items.map((it, i) => (
            <article
              key={i}
              className="card rounded-2xl border border-white/10 p-6 bg-white/5"
            >
              <div className="text-lg font-semibold">{it.name}</div>
              <p className="text-sm opacity-80 mt-2">{it.desc}</p>
              <button className="mt-4 inline-flex px-4 py-2 rounded-xl bg-white text-black text-sm">
                Acheter
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
