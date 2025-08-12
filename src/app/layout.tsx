import type { Metadata } from "next";
import "./globals.css";
import GsapProvider from "@/components/GsapProvider";
import Cursor from "@/components/Cursor";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Bingaplay — Cartes & Recharges Gaming au Maroc",
  description:
    "Achetez vos cartes cadeaux et recharges gaming instantanément, paiement sécurisé.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className=" text-gray-900 ">
        <GsapProvider>
          <Cursor />
          <SmoothScroll>{children}</SmoothScroll>
        </GsapProvider>
      </body>
    </html>
  );
}
