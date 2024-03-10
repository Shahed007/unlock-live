import PrimaryTitle from "@/components/title/PrimaryTitle";
import galleryImage1 from "@/assets/gallery/gallery-image-1.png";
import galleryImage2 from "@/assets/gallery/gallery-image-2.png";
import galleryImage3 from "@/assets/gallery/gallery-image-3.png";
import galleryImage4 from "@/assets/gallery/gallery-image-4.png";
import galleryImage5 from "@/assets/gallery/gallery-image-5.png";
import Image from "next/image";

const ShowCase = () => {
  return (
    <section className="my-[120px]">
      <div className="container">
        <div className="flex justify-center items-center flex-col text-center">
          <div className="text-secondary_color italic text-base font-poppins ">
            <h3>Show Case</h3>
            <div className="flex items-center">
              <span className="inline-block h-[2px] w-full bg-gradient-to-l from-secondary_color to-secondary_color/10"></span>
              <span className="inline-block h-[2px] w-full bg-gradient-to-r from-secondary_color to-secondary_color/10"></span>
            </div>
          </div>
          <PrimaryTitle>Our Chefs New Creations</PrimaryTitle>
          <p className="text-lg font-openSans text-[#031811B2] w-[60%] mt-4">
            Behold the extraordinary creations born from the synergy of our
            users&apos; ingenuity and the transformative power of AI, a
            testament to boundless innovation.
          </p>
        </div>

        <div className="py-12 flex justify-center items-center gap-4 overflow-x-auto">
          {categories.map((item, idx) => (
            <button
              key={idx}
              className="font-openSans text-[#031811] hover:bg-[#86371C08] border border-transparent shadow-sm shadow-transparent duration-300 hover:shadow-secondary_color hover:border-secondary_color text-[22px] py-3 px-[24px] rounded-full"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-4 ">
          <div className="col-span-1 h-72 overflow-hidden rounded-xl">
            <Image
              className="h-full w-full object-cover duration-500 hover:scale-125"
              src={galleryImage1}
              alt="gallery image 1"
            />
          </div>
          <div className="col-span-3 h-72 overflow-hidden rounded-xl">
            <Image
              className="h-full w-full object-cover aspect-square duration-500 hover:scale-125"
              src={galleryImage2}
              alt="gallery image 2"
            />
          </div>
          
         
          <div className="col-span-4 grid grid-cols-6 gap-6">
          <div className="col-span-1 h-72 overflow-hidden rounded-xl">
            <Image
              className="h-full w-full object-cover duration-500 hover:scale-125"
              src={galleryImage3}
              alt="gallery image 1"
            />
          </div>
          <div className="col-span-3 h-72 overflow-hidden rounded-xl">
            <Image
              className="h-full w-full object-cover duration-500 hover:scale-125"
              src={galleryImage4}
              alt="gallery image 1"
            />
          </div>
          <div className="col-span-2 h-72 overflow-hidden rounded-xl">
            <Image
              className="h-full w-full object-cover duration-500 hover:scale-125"
              src={galleryImage5}
              alt="gallery image 1"
            />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const categories: string[] = [
  "All",
  "Burger",
  "Drinks",
  "Pizza",
  "Dinner",
  "Lunch",
  "Cookies",
  "Cookies",
];

export default ShowCase;
