import Choosing from "@/pages/home/Choosing";
import CoffeeMenu from "@/pages/home/CoffeeMenu";
import Hero from "@/pages/home/Hero";
import Info from "@/pages/home/Info";
import NewRecipes from "@/pages/home/NewRecipes";
import ShowCase from "@/pages/home/ShowCase";

export default function Home() {
  return (
    <main>
      <Hero />
      <Info />
      <Choosing />
      <CoffeeMenu />
      <NewRecipes />
      <ShowCase />
    </main>
  );
}
