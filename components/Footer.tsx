// components/Footer.js
import Image from "next/image";
import Instagram from "../public/instagram.svg";
import Facebook from "../public/facebook.svg";
import Youtube from "../public/youtube.svg";
import X from "../public/x.svg";
import Tiktok from "../public/tiktok.svg";
import Linkedin from "../public/linkedin.svg";

const Footer = () => {
  return (
    <footer className="border-white border-t text-white py-4">
      <div className="container mx-auto md:flex justify-between items-center text-center">
        <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
        <p>Designed by Taiwo Ademola</p>
        <div className="flex justify-center space-x-2 mt-2">
          <div className="bg-[#0B78F4] flex items-center justify-center cursor-pointer rounded-full w-6 h-6">
            <Image src={Linkedin} alt="linkedin" />
          </div>
          <div className="bg-[#0B78F4] flex items-center justify-center cursor-pointer rounded-full w-6 h-6">
            <Image src={Youtube} alt="youtube" />
          </div>
          <div className="bg-[#0B78F4] flex items-center justify-center cursor-pointer rounded-full w-6 h-6">
            <Image src={Instagram} alt="instagram" />
          </div>
          <div className="bg-[#0B78F4] flex items-center justify-center cursor-pointer rounded-full w-6 h-6">
            <Image src={Tiktok} alt="tiktok" />
          </div>
          <div className="bg-[#0B78F4] flex items-center justify-center cursor-pointer rounded-full w-6 h-6">
            <Image src={X} alt="x" />
          </div>
          <div className="bg-[#0B78F4] flex items-center justify-center cursor-pointer rounded-full w-6 h-6">
            <Image src={Facebook} alt="facebook" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
