import line0 from "@/assets/icon/line-0.png";
import Image from "next/image";
const Info = () => {
  return (
    <section className=" bg-[#FFFAF2]  mb-20 lg:h-[200px]">
      <div className="lg:max-w-5xl lg:px-0 px-4 mx-auto grid w-full items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 h-full ">
        <div className="bg-secondary_color h-full px-4 pt-4 pb-8  rounded-b-lg">
          <div>
            <Image src={line0} alt="line" />
          </div>
          <h3 className="flex items-center gap-2 text-white font-playfair_display font-semibold ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-[60px] h-[60px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
              />
            </svg>
            Play Intro Video
          </h3>
        </div>
        <div className="border-r pr-4 text-primary_color text-center lg:text-start">
          <h3 className="font-playfair_display font-semibold mb-4 text-xl ">
            Our Opening Hours
          </h3>
          <p className="text-base font-openSans">Mon - Sat: 07:00 - 18:00</p>
          <p className="text-base font-openSans">Only Sun: 09:00 - 14:00</p>
        </div>
        <div className="border-r pr-4 text-primary_color text-center flex flex-col items-center justify-center">
          <h3 className="font-playfair_display font-semibold mb-4 text-xl ">
          Our Live Location
          </h3>
          <p className="text-base font-openSans">
          848 A 28TH ST, Brooklyn New York, UK
          </p>
        </div>
        <div className=" pr-4 text-primary_color lg:text-right text-center lg:pb-0 pb-5">
          <h3 className="font-playfair_display font-semibold mb-4 text-xl ">
          Book A Table Now
          </h3>
          <p className="text-base font-openSans">+1 318-254-6849</p>
          <p className="text-base font-openSans">+1 452-754-6579</p>
        </div>
      </div>
    </section>
  );
};

export default Info;
