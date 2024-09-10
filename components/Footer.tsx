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
          <a href="https://www.linkedin.com/in/taiwo-ademola-218b33155/">
            <div className="bg-[#0B78F4] flex items-center justify-center cursor-pointer rounded-full w-6 h-6">
              <Image src={Linkedin} alt="linkedin" />
            </div>
          </a>
          <a href="https://www.youtube.com/@Dees_UI">
            <div className="bg-[#0B78F4] flex items-center justify-center cursor-pointer rounded-full w-6 h-6">
              <Image src={Youtube} alt="youtube" />
            </div>
          </a>
          <a href="https://www.instagram.com/dees_ui_/">
            <div className="bg-[#0B78F4] flex items-center justify-center cursor-pointer rounded-full w-6 h-6">
              <Image src={Instagram} alt="instagram" />
            </div>
          </a>
          <a href="https://www.tiktok.com/@dees_ui?_t=8jgROlslvhm&_r=1">
            <div className="bg-[#0B78F4] flex items-center justify-center cursor-pointer rounded-full w-6 h-6">
              <Image src={Tiktok} alt="tiktok" />
            </div>
          </a>

          <a href="https://www.behance.net/taiwoademola">
            <div className="bg-[#0B78F4] flex items-center justify-center cursor-pointer rounded-full w-6 h-6">
              <Image src={X} alt="x" />
            </div>
          </a>
          <a href="https://www.facebook.com/demotivoconcept">
            <div className="bg-[#0B78F4] flex items-center justify-center cursor-pointer rounded-full w-6 h-6">
              <Image src={Facebook} alt="facebook" />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
