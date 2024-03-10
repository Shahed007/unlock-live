import menuCup1 from "@/assets/images/menu-cup-1.png";
import menuCup2 from "@/assets/images/menu-cup-2.png";
import menuCup3 from "@/assets/images/menu-cup-3.png";
import menuCup4 from "@/assets/images/menu-cup-4.png";
import BtnPrimary from "@/components/btn/BtnPrimary";
import PrimaryTitle from "@/components/title/PrimaryTitle";
import Image, { StaticImageData } from "next/image";

const CoffeeMenu = () => {
  return (
    <section className="my-[120px]">
      <div className="container">
        <div className="flex flex-col mb-12 justify-center items-center">
          <h3 className="text-secondary_color font-playfair_display text-base italic before:inline-block after:inline-block before:h-[2px] after:h-[2px] before:w-[80px] flex items-center gap-3 after:w-[80px] before:bg-gradient-to-l before:from-secondary_color before:to-secondary_color/10 after:bg-gradient-to-l after:from-secondary_color/10 after:to-secondary_color">
            Coffee Menu
          </h3>
          <PrimaryTitle>Unlocklive Coffee Menu</PrimaryTitle>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {menus.map((item, idx) => (
            <div key={idx} className="shadow-sm border p-5 rounded-md  ">
              <div className="flex items-center gap-3">
                <div className="w-[12%]">
                  <Image
                    className="h-full w-full"
                    src={item.image}
                    alt="menu cup 1"
                  />
                </div>
                <div className="flex-1 flex items-center justify-between gap-4">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-semibold font-playfair_display text-primary_color">
                      {item.title}
                    </h2>
                    <p className="text-sm font-openSans">{item.description}</p>
                  </div>
                  <div
                    style={{ backgroundColor: item.bgColor }}
                    className="h-[59px] w-[59px] border-dashed flex justify-center items-center rounded-full border-[2px] overflow-visible border-secondary_color "
                  >
                    <h3
                      className={`text-xl font-openSans font-medium ${
                        item.title === "Double Espresso x2"
                          ? "text-white"
                          : "text-secondary_color"
                      }`}
                    >
                      ${item.price}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center items-center">
          <BtnPrimary text="View All Menu" />
        </div>
      </div>
    </section>
  );
};

export default CoffeeMenu;

const menus: {
  title: string;
  description: string;
  image: StaticImageData;
  price: number;
  bgColor: string;
}[] = [
  {
    title: "Double Espresso x2",
    description: "There are many variations of passages Lorem Ipsum form",
    image: menuCup1,
    price: 10,
    bgColor: "#86371C",
  },
  {
    title: "Hazelnut Heaven Latte",
    description: "There are many variations of passages Lorem Ipsum form",
    image: menuCup2,
    price: 10,
    bgColor: "#D1D5DB",
  },
  {
    title: "Salted Caramel Cold Brew",
    description: "There are many variations of passages Lorem Ipsum form",
    image: menuCup3,
    price: 10,
    bgColor: "#D1D5DB",
  },
  {
    title: "Coconut Cream Delight (Summer)",
    description: "There are many variations of passages Lorem Ipsum form",
    image: menuCup4,
    price: 10,
    bgColor: "#D1D5DB",
  },
];
