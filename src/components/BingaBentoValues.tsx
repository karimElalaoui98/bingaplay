"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const brand = "#092a2a";

type Tile = {
  title: string;
  desc: string;
  img: string;
  chip?: string;
  span?: string;
};

const TILES: Tile[] = [
  {
    title: "Paiement en ligne (carte)",
    desc: "Visa, Mastercard, CMI — réglez en toute sécurité.",
    chip: "Sécurisé",
    img: "https://videos.openai.com/vg-assets/assets%2Ftask_01k2g78v3aezqtwkze9mrjtaya%2F1755038671_img_0.webp?st=2025-08-12T21%3A02%3A29Z&se=2025-08-18T22%3A02%3A29Z&sks=b&skt=2025-08-12T21%3A02%3A29Z&ske=2025-08-18T22%3A02%3A29Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=BeJ7vRx%2Be6A5Asfxyf%2B7n98Q62%2Bsykx7sLxitCGc9do%3D&az=oaivgprodscus",
  },
  {
    title: "Payez en cash (Wafacash)",
    desc: "Pas de carte ? Payez en agence Wafacash.",
    chip: "Cash en agence",
    img: "https://videos.openai.com/vg-assets/assets%2Ftask_01k2g7p8pmebar8kjamg4d3sap%2F1755039146_img_1.webp?st=2025-08-12T21%3A02%3A56Z&se=2025-08-18T22%3A02%3A56Z&sks=b&skt=2025-08-12T21%3A02%3A56Z&ske=2025-08-18T22%3A02%3A56Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=RFJM9c39F0xKhWydReoQ7hCjajYw6hglBtP7DZzIDPA%3D&az=oaivgprodscus",
  },
  {
    title: "Meilleurs prix",
    desc: "Tarifs compétitifs sur vos cartes et recharges.",
    chip: "Prix bas",
    img: "https://videos.openai.com/vg-assets/assets%2Ftask_01k2g7xd7rezvt9z2fpgd8xtx2%2F1755039341_img_0.webp?st=2025-08-12T21%3A04%3A54Z&se=2025-08-18T22%3A04%3A54Z&sks=b&skt=2025-08-12T21%3A04%3A54Z&ske=2025-08-18T22%3A04%3A54Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=CQ%2BHcdTpYjVUtZHI0yh8QIXKbYInRX76ld8RqkLr%2BTI%3D&az=oaivgprodscus",
  },
  {
    title: "Code instantané",
    desc: "Recevez votre code en quelques secondes.",
    chip: "Instantané",
    img: "https://videos.openai.com/vg-assets/assets%2Ftask_01k2g7yrs7fss9k4jk9zptj2h2%2F1755039442_img_0.webp?st=2025-08-12T21%3A57%3A13Z&se=2025-08-18T22%3A57%3A13Z&sks=b&skt=2025-08-12T21%3A57%3A13Z&ske=2025-08-18T22%3A57%3A13Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=jreRZKz%2FdgXPI709F%2F9SWWRICQtiV6L8c916jvm8CX0%3D&az=oaivgprodscus",
  },
];

export default function BingaBentoValues() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.to(".cards-container", {
      x: `-40%`,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=140%",
        pin: true,
        scrub: 0.5,
        anticipatePin: 1,
      },
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="bg-white h-[60vh] relative overflow-hidden"
    >
      <div className="mx-auto px-20 py-8">
        <header className="mb-8 relative z-10">
          <h2
            className="text-2xl md:text-3xl font-semibold tracking-tight"
            style={{ color: brand }}
          >
            Pourquoi choisir Binga Play ?
          </h2>
          <p className="mt-2 text-sm md:text-base text-[#092a2a]/70">
            Carte bancaire en ligne, cash en agence Wafacash et prix bas
            garantis — avec livraison de code instantanée.
          </p>
        </header>

        <div className="relative">
          <div className="cards-container flex gap-8 w-[160%]">
            {" "}
            {/* Set explicit width */}
            {TILES.map((t, i) => (
              <article
                key={i}
                className="group bg-gray-50 min-w-[20%] h-[400px] flex flex-col card" // Adjust card width
              >
                <div className="relative grow overflow-hidden">
                  <img
                    src={t.img}
                    alt={t.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="flex items-start justify-between gap-3 p-4">
                  <div>
                    <h3
                      className="text-base md:text-lg font-medium"
                      style={{ color: brand }}
                    >
                      {t.title}
                    </h3>
                    <p className="mt-1 text-sm text-[#092a2a]/70">{t.desc}</p>
                  </div>
                  {t.chip && (
                    <span className="shrink-0 rounded-full border border-black/10 bg-neutral-50 px-2.5 py-1 text-xs text-[#092a2a]/80">
                      {t.chip}
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
