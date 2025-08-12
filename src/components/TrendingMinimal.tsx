"use client";

import Image from "next/image";

type Item = {
  name: string;
  blurb: string;
  price: string;
  img: string;
};

const ITEMS: Item[] = [
  {
    name: "PlayStation Network",
    blurb: "Recharger votre portefeuille PSN",
    price: "110,00 MAD – 1100,00 MAD",
    img: "/test.png",
  },
  {
    name: "Xbox / Game Pass",
    blurb: "Accédez à des centaines de jeux",
    price: "90,00 MAD – 1000,00 MAD",
    img: "/test.png",
  },
  {
    name: "Steam Wallet",
    blurb: "Achetez jeux, DLC et objets",
    price: "50,00 MAD – 1000,00 MAD",
    img: "/test.png",
  },
];

export default function TrendingMinimal() {
  return (
    <section id="tendances" className="bg-white py-16">
      <div className="mx-auto  px-20">
        {/* Title & subtitle */}
        <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[#092a2a]">
          Cartes Cadeaux Tendances
        </h2>
        <p className="mt-2 text-sm md:text-base text-[#092a2a]/70">
          Les plus convoitées par les gamers, recharge instantanée, prêt à
          jouer&nbsp;!
        </p>

        {/* Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((it, i) => (
            <article key={i} className="bg-white card">
              {/* Big image canvas */}
              <div className="aspect-[4/3] w-full overflow-hidden  bg-neutral-50">
                <Image
                  src={it.img}
                  alt={it.name}
                  className="h-full w-full object-cover"
                  width={500}
                  height={500}
                />
              </div>

              {/* Text block */}
              <div className="px-2 pb-4 pt-4 md:px-3">
                <h3 className="text-base md:text-lg font-medium text-[#092a2a]">
                  {it.name}
                </h3>
                <p className="mt-1 line-clamp-1 text-sm text-[#092a2a]/70">
                  {it.blurb}
                </p>
                <p className="mt-2 text-sm font-semibold text-teal-700">
                  {it.price}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
