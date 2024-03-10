import coffeeCup3 from "@/assets/images/coffee-cup-3.png";
import BtnPrimary from "@/components/btn/BtnPrimary";
import PrimaryTitle from "@/components/title/PrimaryTitle";
import Image from "next/image";
import whyChooseBg from "@/assets/images/whay-choose-bg-image.svg";

const Choosing = () => {
  return (
    <section className="mt-[120px] relative">
      <Image
        className="absolute top-0 right-0 z-10"
        src={whyChooseBg}
        alt="why choose background image"
      />
      <div className="container flex lg:gap-0 gap-10 lg:flex-row flex-col items-center relative z-20">
        <div className="flex-1">
          <h4 className="flex items-center gap-2 before:inline-block before:h-[2px] before:w-[50px] before:bg-gradient-to-l before:from-secondary_color before:to-secondary_color/10 text-base text-secondary_color italic">
            Why Choose Us
          </h4>
          <PrimaryTitle>
            Choosing Unlocklive, A Taste of <br className="sm:inline-block hidden" /> Perfection
          </PrimaryTitle>
          <p className="text-base font-openSans text-primary_color mt-5">
            Unlocklive takes pride in the art of roasting, transforming raw
            coffee beans into a symphony of aromatic notes and rich flavors.
          </p>
          <div className="my-7 gap-8 grid grid-cols-1 md:grid-cols-3">
            <div className="py-3 shadow-sm border text-center flex justify-center items-center flex-col rounded-md">
              <h4 className="font-playfair_display text-[44px]">20+</h4>
              <p>Years Experience</p>
            </div>
            <div className="relative h-full w-full">
              <div className="lg:absolute lg:block hidden top-0 left-0 w-full h-full py-3 shadow-sm border rounded-md rotate-3"></div>
              <div className="lg:absolute top-0 left-0 w-full h-full py-3 shadow-sm border rounded-md flex items-center flex-col justify-center">
                <h4 className="font-playfair_display text-[44px]">100+</h4>
                <p>Master Chefs</p>
              </div>
            </div>
            <div className="py-3 shadow-sm border text-center flex justify-center items-center flex-col rounded-md">
              <h4 className="font-playfair_display text-[44px]">30+</h4>
              <p>Achievements</p>
            </div>
          </div>
          <p className="font-openSans text-base text-primary_color ">
            Your choice to savor our coffee is an invitation to experience the
            epitome of craftsmanship, flavor, and dedication.
          </p>
          <div className="mt-7">
            <BtnPrimary text="Explore Our Menus" />
          </div>
        </div>
        <div className="flex-1  flex justify-center">
          <div className="lg:w-[60%] w-full   p-3 relative">
            <Image
              className="w-full h-[400px] object-cover relative z-20"
              src={coffeeCup3}
              alt="coffee cup image 3"
            />
            <div className="absolute bottom-0  left-0 w-full h-[300px] shadow-sm border rounded-b-xl rounded-t-full p-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choosing;
