"use client";

const brand = "#092a2a";

function IconCard() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="2"
        y="5"
        width="20"
        height="14"
        rx="3"
        stroke={brand}
        strokeWidth="1.5"
      />
      <rect x="3.5" y="9" width="17" height="2" rx="1" fill={brand} />
      <rect
        x="5"
        y="13.5"
        width="6"
        height="2.5"
        rx="1.25"
        fill={brand}
        opacity=".2"
      />
    </svg>
  );
}

function IconCash() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="2"
        y="6"
        width="20"
        height="12"
        rx="2.5"
        stroke={brand}
        strokeWidth="1.5"
      />
      <circle cx="12" cy="12" r="3" stroke={brand} strokeWidth="1.5" />
      <path
        d="M5 9h1.5M17.5 15H19"
        stroke={brand}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconPrice() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M7 3h6l6 6-9 9-6-6 3-9z" stroke={brand} strokeWidth="1.5" />
      <circle cx="10.5" cy="7.5" r="1.3" fill={brand} />
    </svg>
  );
}

export default function BingaValues() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* Title */}
        <h2
          className="text-2xl md:text-3xl font-semibold tracking-tight"
          style={{ color: brand }}
        >
          Pourquoi choisir Binga Play ?
        </h2>
        <p className="mt-2 text-sm md:text-base text-[#092a2a]/70">
          Achetez en toute simplicité : carte bancaire, cash en agence Wafacash,
          et prix bas garantis.
        </p>

        {/* Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Paiement en ligne */}
          <article className="rounded-2xl border border-black/10 bg-white p-6">
            <div className="flex items-start gap-3">
              <IconCard />
              <div>
                <h3
                  className="text-base md:text-lg font-medium"
                  style={{ color: brand }}
                >
                  Paiement en ligne (carte)
                </h3>
                <p className="mt-1 text-sm text-[#092a2a]/70">
                  Payez en toute sécurité avec votre carte bancaire (Visa,
                  Mastercard, CMI).
                </p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              <span className="rounded-full border border-black/10 bg-neutral-50 px-2.5 py-1">
                Visa
              </span>
              <span className="rounded-full border border-black/10 bg-neutral-50 px-2.5 py-1">
                Mastercard
              </span>
              <span className="rounded-full border border-black/10 bg-neutral-50 px-2.5 py-1">
                CMI
              </span>
            </div>
          </article>

          {/* Wafacash */}
          <article className="rounded-2xl border border-black/10 bg-white p-6">
            <div className="flex items-start gap-3">
              <IconCash />
              <div>
                <h3
                  className="text-base md:text-lg font-medium"
                  style={{ color: brand }}
                >
                  Payez en cash (Wafacash)
                </h3>
                <p className="mt-1 text-sm text-[#092a2a]/70">
                  Pas de carte ? Réglez directement en agence Wafacash et
                  recevez votre code.
                </p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              <span className="rounded-full border border-black/10 bg-neutral-50 px-2.5 py-1">
                Wafacash
              </span>
              <span className="rounded-full border border-black/10 bg-neutral-50 px-2.5 py-1">
                Paiement en agence
              </span>
            </div>
          </article>

          {/* Meilleurs prix */}
          <article className="rounded-2xl border border-black/10 bg-white p-6">
            <div className="flex items-start gap-3">
              <IconPrice />
              <div>
                <h3
                  className="text-base md:text-lg font-medium"
                  style={{ color: brand }}
                >
                  Meilleurs prix garantis
                </h3>
                <p className="mt-1 text-sm text-[#092a2a]/70">
                  Profitez de tarifs compétitifs sur les cartes et recharges
                  populaires.
                </p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              <span className="rounded-full border border-black/10 bg-neutral-50 px-2.5 py-1">
                Prix bas
              </span>
              <span className="rounded-full border border-black/10 bg-neutral-50 px-2.5 py-1">
                Transparence
              </span>
            </div>
          </article>
        </div>

        {/* Optional help line / micro trust */}
        <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-[#092a2a]/60">
          <span className="rounded-full bg-neutral-50 px-2.5 py-1 border border-black/10">
            Livraison de code instantanée
          </span>
          <span className="rounded-full bg-neutral-50 px-2.5 py-1 border border-black/10">
            Support réactif
          </span>
          <span className="rounded-full bg-neutral-50 px-2.5 py-1 border border-black/10">
            Transactions sécurisées
          </span>
        </div>
      </div>
    </section>
  );
}
