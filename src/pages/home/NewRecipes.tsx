"use client";
import PrimaryTitle from "@/components/title/PrimaryTitle";
import sliderImage1 from "@/assets/images/slider-image-1.png";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { MutableRefObject, useRef, useState } from "react";

const NewRecipes = () => {
  const swiperRef: MutableRefObject<any> = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      if (swiperRef.current) {
        swiperRef.current.swiper.slidePrev();
      }
    }
  };

  const handleNext = () => {
    if (currentIndex < swiperRef.current.swiper.slides.length - 1) {
      if (swiperRef.current) {
        swiperRef.current.swiper.slideNext();
      }
    }
  };
  return (
    <section className="py-20 bg-[#FFFAF2] overflow-hidden">
      <div className=" grid grid-cols-3 gap-6 pl-16">
        <div className="col-span-1">
          <h4 className="flex items-center gap-2 before:inline-block before:h-[2px] before:w-[50px] before:bg-gradient-to-l before:from-secondary_color before:to-secondary_color/10 text-base text-secondary_color italic">
            New Recipes
          </h4>

          <PrimaryTitle>Taste Our New Recipe</PrimaryTitle>
          <div className="text-base font-openSans text-[#53565C] space-y-6 mt-8">
            <p>
              Malesuada cursus a tincidunt volutpat posuere lacinia. Congue
              malesuada lacus pharetra ut vel amet. Amet turpis suspendisse
              porttitor scelerisque amet dolor et. Nisi ac vitae tortor
              lacinirisus. Scelerisque nibh elit malesuada sodales eget iaculis
              nunc erat. Donec quis fermentum mattis aliquet gravida. Adipiscing
              eu sit ornare imperdiet viverra sit vel.
            </p>
            <p>
              There are many variations of passages of Lorem Ipsum form any
              injected humour, or randomised words which don&apos;t look
              slightly believable.
            </p>
          </div>
          <div className="flex items-center gap-6 mt-10">
            <button
              disabled={currentIndex === 0}
              onClick={handlePrev}
              id="prev-btn"
              className={`hover:bg-primary_color cursor-pointer hover:text-white duration-300 active:scale-95 h-10 w-10 border-[1.5px] text-primary_color flex justify-center items-center border-primary_color rounded-full ${
                currentIndex === 0
                  ? "disabled:bg-gray-200 disabled:cursor-not-allowed disabled:hover:text-primary_color disabled:scale-100"
                  : " "
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
            </button>
            <button
              disabled={
                currentIndex === swiperRef.current?.swiper.slides.length - 1
              }
              onClick={handleNext}
              id="next-btn"
              className={`
              hover:bg-primary_color hover:text-white duration-300 active:scale-95 h-10 w-10 border-[1.5px] text-primary_color flex justify-center items-center border-primary_color rounded-full
              ${
                currentIndex === swiperRef.current?.swiper.slides.length - 1
                  ? "disabled:bg-gray-200 disabled:cursor-not-allowed disabled:hover:text-primary_color disabled:scale-100"
                  : ""
              }
              `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="col-span-2  h-full w-full flex items-center">
          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={3}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            navigation={{ prevEl: "#prev-btn", nextEl: "#next-btn" }}
            className=" "
          >
            <SwiperSlide className="h-full w-full ml-20 ">
              <div className="relative rounded-[28px] h-full overflow-hidden group">
                <Image
                  className="h-full w-full object-cover"
                  src={sliderImage1}
                  alt="slider image 1"
                />
                <div className="absolute p-3 h-full opacity-0 group-hover:opacity-100  top-0 left-0 w-full duration-500   bg-gradient-to-l from-[#FD990000]/10 to-[#FFFFFF]">
                  <div className="bg-gradient-to-b flex flex-col justify-end rounded-[28px] from-[#101113]/10 to-[#101113] w-full h-full">
                    <ul className="text-white list-disc font-openSans text-sm space-y-3 px-5 pb-10">
                      <li>Pita bread or wraps</li>
                      <li>Toppings: tomatoes, tahini sauce, etc.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative rounded-[28px] overflow-hidden group">
                <Image
                  className="h-full w-full object-cover"
                  src={sliderImage1}
                  alt="slider image 1"
                />
                <div className="absolute p-3 h-full opacity-0 group-hover:opacity-100  top-0 left-0 w-full duration-500   bg-gradient-to-l from-[#FD990000]/10 to-[#FFFFFF]">
                  <div className="bg-gradient-to-b flex flex-col justify-end rounded-[28px] from-[#101113]/10 to-[#101113] w-full h-full">
                    <ul className="text-white list-disc font-openSans text-sm space-y-3 px-5 pb-10">
                      <li>Pita bread or wraps</li>
                      <li>Toppings: tomatoes, tahini sauce, etc.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative rounded-[28px] overflow-hidden group">
                <Image
                  className="h-full w-full object-cover"
                  src={sliderImage1}
                  alt="slider image 1"
                />
                <div className="absolute p-3 h-full opacity-0 group-hover:opacity-100  top-0 left-0 w-full duration-500   bg-gradient-to-l from-[#FD990000]/10 to-[#FFFFFF]">
                  <div className="bg-gradient-to-b flex flex-col justify-end rounded-[28px] from-[#101113]/10 to-[#101113] w-full h-full">
                    <ul className="text-white list-disc font-openSans text-sm space-y-3 px-5 pb-10">
                      <li>Pita bread or wraps</li>
                      <li>Toppings: tomatoes, tahini sauce, etc.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative rounded-[28px] overflow-hidden group">
                <Image
                  className="h-full w-full object-cover"
                  src={sliderImage1}
                  alt="slider image 1"
                />
                <div className="absolute p-3 h-full opacity-0 group-hover:opacity-100  top-0 left-0 w-full duration-500   bg-gradient-to-l from-[#FD990000]/10 to-[#FFFFFF]">
                  <div className="bg-gradient-to-b flex flex-col justify-end rounded-[28px] from-[#101113]/10 to-[#101113] w-full h-full">
                    <ul className="text-white list-disc font-openSans text-sm space-y-3 px-5 pb-10">
                      <li>Pita bread or wraps</li>
                      <li>Toppings: tomatoes, tahini sauce, etc.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative rounded-[28px] overflow-hidden group">
                <Image
                  className="h-full w-full object-cover"
                  src={sliderImage1}
                  alt="slider image 1"
                />
                <div className="absolute p-3 h-full opacity-0 group-hover:opacity-100  top-0 left-0 w-full duration-500   bg-gradient-to-l from-[#FD990000]/10 to-[#FFFFFF]">
                  <div className="bg-gradient-to-b flex flex-col justify-end rounded-[28px] from-[#101113]/10 to-[#101113] w-full h-full">
                    <ul className="text-white list-disc font-openSans text-sm space-y-3 px-5 pb-10">
                      <li>Pita bread or wraps</li>
                      <li>Toppings: tomatoes, tahini sauce, etc.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative rounded-[28px] overflow-hidden group">
                <Image
                  className="h-full w-full object-cover"
                  src={sliderImage1}
                  alt="slider image 1"
                />
                <div className="absolute p-3 h-full opacity-0 group-hover:opacity-100  top-0 left-0 w-full duration-500   bg-gradient-to-l from-[#FD990000]/10 to-[#FFFFFF]">
                  <div className="bg-gradient-to-b flex flex-col justify-end rounded-[28px] from-[#101113]/10 to-[#101113] w-full h-full">
                    <ul className="text-white list-disc font-openSans text-sm space-y-3 px-5 pb-10">
                      <li>Pita bread or wraps</li>
                      <li>Toppings: tomatoes, tahini sauce, etc.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default NewRecipes;
