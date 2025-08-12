"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import Navbar from "./Navbar";

type Props = {
  /** path in /public or external URL */
  imageSrc?: string;
  title?: string;
  blurb?: string;
  ctaLabel?: string;
};

export default function HeroMonolith({
  imageSrc = "https://videos.openai.com/vg-assets/assets%2Ftask_01k2fd89xrefkr2zeq90ng99y7%2Ftask_01k2fd89xrefkr2zeq90ng99y7_genid_97181639-4e22-414f-a642-1319740bfb4d_25_08_12_15_11_728638%2Fvideos%2F00000_539247334%2Fsource.mp4?st=2025-08-12T20%3A05%3A59Z&se=2025-08-18T21%3A05%3A59Z&sks=b&skt=2025-08-12T20%3A05%3A59Z&ske=2025-08-18T21%3A05%3A59Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=AkTLF40YWNAPAdgecFmMVDcRJ7XOXiFNPhYm2wJw69c%3D&az=oaivgprodscus",
  title = "Boostez Votre Expérience de Jeu avec Nos Cartes Cadeaux",
  blurb = "Accède instantanément à tes jeux et contenus favoris, sur toutes les plateformes, zéro attente, zéro limite !",
  ctaLabel = "Acheter maintenant",
}: Props) {
  const root = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      // Image slow zoom-out + drift
      gsap.fromTo(
        ".hero-img",
        { scale: 1.08, xPercent: -1.2, yPercent: 0.6 },
        {
          scale: 1,
          xPercent: 0,
          yPercent: 0,
          duration: 1.6,
          ease: "power3.out",
        }
      );

      // Text reveal
      gsap.from(".hero-h1 .line", {
        yPercent: 100,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.06,
      });
      gsap.from(".hero-blurb, .hero-cta", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.2,
        stagger: 0.1,
      });
    }, root);

    // Subtle parallax on mouse
    const onMove = (e: MouseEvent) => {
      const { innerWidth: w, innerHeight: h } = window;
      const rx = (e.clientX / w - 0.5) * 6;
      const ry = (e.clientY / h - 0.5) * 6;
      gsap.to(".hero-img", { x: rx, y: ry, duration: 0.6, ease: "power2.out" });
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      ctx.revert();
    };
  }, []);

  const lines = title.split("\n");

  return (
    <section
      ref={root}
      className="relative h-[100vh] min-h-[560px] w-full overflow-hidden bg-black"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <video
          className="bg-video absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          playsInline
          loop
          src={imageSrc}
        >
          <source src={imageSrc} type="video/webm" />
          <source src={imageSrc} type="video/mp4" />
        </video>
        {/* Vignette + readability gradients */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_70%_35%,transparent_0%,transparent_45%,rgba(0,0,0,0.35)_60%,rgba(0,0,0,0.75)_100%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/50 to-transparent" />
      </div>

      {/* Replace old nav with new Navbar component */}
      <Navbar />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-[calc(90vh)] grid-cols-1 items-end px-20 pb- md:grid-cols-2 md:gap-10">
        <div className="flex-[2]">
          <h1 className="hero-h1 !text-[80px] font-light leading-[1.05] tracking-tight text-white drop-shadow md:text-6xl">
            {lines.map((l, i) => (
              <span key={i} className="block overflow-hidden">
                <span className="line inline-block">{l}</span>
              </span>
            ))}
          </h1>
        </div>

        <div className="mt-6 flex flex-col items-start justify-start md:items-start md:mt-0 flex-[1]">
          <p className="hero-blurb max-w-md text-base text-white/85 md:text-left">
            {blurb}
          </p>
          <button className="hero-cta mt-4 rounded-full bg-white/90 px-5 py-2 text-sm font-medium text-black backdrop-blur hover:bg-white">
            {ctaLabel}
          </button>
        </div>
      </div>
    </section>
  );
}
