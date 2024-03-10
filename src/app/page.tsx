import Choosing from "@/pages/home/Choosing";
import CoffeeMenu from "@/pages/home/CoffeeMenu";
import Hero from "@/pages/home/Hero";
import Info from "@/pages/home/Info";

export default function Home() {
  return (
    <main>
      <Hero />
      <Info />
      <Choosing />
      <CoffeeMenu />
    </main>
  );
}
