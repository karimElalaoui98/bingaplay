import Benefits from "@/components/Benefits";
import HeroMonolith from "@/components/HeroMonolith";
import Recharge from "@/components/Recharge";
import Trending from "@/components/Trending";

export default function Page() {
  return (
    <main>
      {/* <Hero /> */}
      <HeroMonolith />
      <Benefits />
      <Trending />
      <Recharge />
    </main>
  );
}
