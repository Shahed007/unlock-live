import footerBackground from "@/assets/images/footer-background.png";
import Image from "next/image";
import footerLogo from "@/assets/footer-logo.png";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative py-14">
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={footerBackground}
        alt="footer background"
      />
      <div className="container relative z-20 ">
      <div className="flex lg:flex-row flex-col lg:gap-0 gap-6 items-center lg:justify-between">
        <Image src={footerLogo} alt="footer logo" />
        <ul className="flex items-center gap-7 text-white font-openSans">
          {footer_links.map((item, idx) => (
            <li key={idx}>
              <Link href="#">{item}</Link>
            </li>
          ))}
        </ul>
        <ul className="flex items-center gap-6">
          <li className="h-[35px] w-[35px] duration-200 hover:bg-white hover:text-primary_color text-white rounded-full border border-white flex justify-center items-center">
          <FaLinkedinIn />
          </li>
          <li className="h-[35px] w-[35px] duration-200 hover:bg-white hover:text-primary_color text-white rounded-full border border-white flex justify-center items-center">
          <FaFacebookF />
          </li>
          <li className="h-[35px] w-[35px] duration-200 hover:bg-white hover:text-primary_color text-white rounded-full border border-white flex justify-center items-center">
          <FaTwitter />
          </li>
        </ul>
      </div>
      </div>
    </footer>
  );
};

const footer_links: string[] = ["Terms", "Privacy", "Cookies"];

export default Footer;
