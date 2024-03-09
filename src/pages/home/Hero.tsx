import image1 from "@/assets/images/Leaf.svg";
import image2 from "@/assets/images/footer-image-2.png";
import image3 from "@/assets/images/hero-footer-image.png";
import image4 from "@/assets/images/coffi-cup.png";
import cup1 from "@/assets/images/cup-1.png";
import cup2 from "@/assets/images/cup-2.png";
import cup3 from "@/assets/images/cup-3.png";
import Image from "next/image";
const Hero = () => {
  return (
    <section className="hero-section-height relative  ">
      <div className="h-full   absolute left-0 top-0   w-full">
        <div className="max-w-7xl mx-auto  w-full h-full border-l border-l-[hsla(220,9%,7%,1)]"></div>
      </div>
      <Image
        className="absolute left-0 top-0 w-[300px] z-10"
        src={image1}
        alt="image 1"
      />
      <Image
        className="absolute right-0 bottom-0 w-[400px] z-10"
        src={image2}
        alt="image "
      />
      <Image
        className="absolute left-28 z-10 w-[240px]  bottom-0"
        src={image3}
        alt="image "
      />

      <div className="container h-full z-20 flex items-center relative ">
        <div className="flex-1">
          <h2 className="font-poppins italic font-medium text-base mb-10">
            WELCOME TO OUR
          </h2>
          <h1 className="text-[110px] leading-10 font-playfair_display text-primary_color">
            Unlocklive
          </h1>
          <h3 className="font-playfair_display mt-14 text-3xl mb-4 ">
            Elevating Your Coffee Experience
          </h3>
          <p className="font-openSans">
            Unlocklive embodies our commitment to transforming the simple act of
            sipping coffee into a refined and memorable journey. At Epicurean,
            we take pride in curating an exceptional coffee experience that
            transcends the ordinary.
          </p>

          <div className="mt-12 flex justify-between items-center">
            <button className="font-openSans bg-secondary_color text-white px-7 py-4 rounded-xl font-medium text-base">
              EXPLORE OUR MENU
            </button>
            <div className="flex items-center gap-6">
              <div className="flex items-center">
                <Image src={cup1} alt="Cup 1" />
                <Image src={cup2} alt="Cup 2" className="-ml-3" />
                <Image src={cup3} alt="Cup 3" className="-ml-3" />
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-primary_color font-playfair_display">
                  1200+
                </h4>
                <p className="font-openSans text-xl font-normal text-primary_color">
                  Tasty Variant Coffee
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-14">
            <span className="inline-block h-3 w-3 bg-gray-300 rounded-full"></span>
            <span className="inline-block h-3 w-3 bg-gray-300 rounded-full"></span>
            <span className="inline-block h-3 w-3 bg-gray-300 rounded-full"></span>
            <span className="inline-block h-4 w-4 bg-primary_color rounded-full"></span>
            <span className="inline-block h-3 w-3 bg-gray-300 rounded-full"></span>
          </div>
        </div>
        <div className="flex-1">
          <Image className="h-full w-full" src={image4} alt="coffee cup" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
