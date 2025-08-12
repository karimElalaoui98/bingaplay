import BingaBentoValues from "@/components/BingaBentoValues";
import HeroMonolith from "@/components/HeroMonolith";
import TrendingMinimal from "@/components/TrendingMinimal";

export default function Page() {
  return (
    <main>
      {/* <Hero /> */}
      <HeroMonolith />
      <TrendingMinimal />

      <BingaBentoValues />
      <TrendingMinimal />
    </main>
  );
}
