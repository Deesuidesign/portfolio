// components/Header.tsx
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

import Logo from "../public/logo.svg";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <header className="text-white">
      <div className="lg:hidden mt-4 flex justify-between items-center">
        <Image src={Logo} alt="Logo" className="h-7 w-14 object-contain" />
        <svg
          onClick={handleMobileMenuToggle}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="14"
          viewBox="0 0 24 14"
          fill="none"
        >
          <path
            d="M0.571472 0H23.4286V2.28571H0.571472V0ZM6.28576 5.71429H23.4286V8H6.28576V5.71429ZM13.4286 11.4286H23.4286V13.7143H13.4286V11.4286Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
      <nav className={`mt-3 ${mobileMenuOpen ? "block" : "hidden"}`}>
        <ul className="lg:hidden flex p-4 bg-gray-100 border-gray-300 text-[#0B78F4] rounded border font-semibold flex-col space-y-3">
          <li>
            <Link href="#hero">Portfolio</Link>
          </li>
          <li>
            <Link href="#services">Services</Link>
          </li>
          <li>
            <Link href="#uiux">Clientele</Link>
          </li>
          <li>
            <Link href="#certification">Certification</Link>
          </li>
          <li>
            <Link href="#contact">Resources</Link>
          </li>
          <Link href="#contact">
            <button className="bg-[#0B78F4] text-white justify-center flex items-center rounded-3xl px-8 py-2">
              Hire Me{" "}
              <svg
                className="ml-3"
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5383 7.6633L9.91328 13.2883C9.73716 13.4644 9.49829 13.5634 9.24922 13.5634C9.00015 13.5634 8.76128 13.4644 8.58516 13.2883C8.40904 13.1122 8.31009 12.8733 8.31009 12.6242C8.31009 12.3752 8.40904 12.1363 8.58516 11.9602L12.6094 7.93752H1.125C0.87636 7.93752 0.637903 7.83874 0.462087 7.66293C0.286272 7.48711 0.1875 7.24866 0.1875 7.00002C0.1875 6.75137 0.286272 6.51292 0.462087 6.3371C0.637903 6.16129 0.87636 6.06252 1.125 6.06252H12.6094L8.58672 2.03751C8.4106 1.86139 8.31166 1.62252 8.31166 1.37345C8.31166 1.12438 8.4106 0.88551 8.58672 0.70939C8.76284 0.533269 9.00171 0.434326 9.25078 0.434326C9.49985 0.434326 9.73872 0.533269 9.91484 0.70939L15.5398 6.33439C15.6273 6.4216 15.6966 6.52523 15.7438 6.63931C15.7911 6.75339 15.8153 6.87569 15.8152 6.99917C15.815 7.12265 15.7905 7.24489 15.743 7.35886C15.6955 7.47283 15.6259 7.57629 15.5383 7.6633Z"
                  fill="white"
                />
              </svg>
            </button>
          </Link>
        </ul>
      </nav>
      <div className="hidden lg:flex items-center">
        <div className="flex w-full mt-4 justify-between items-center">
          <Image src={Logo} alt="Logo" className="h-14 w-36 object-contain" />
          <nav>
            <ul className="flex items-center space-x-14 font-semibold">
              <li>
                <Link href="#hero">Portfolio</Link>
              </li>
              <li>
                <Link href="#services">Services</Link>
              </li>
              <li>
                <Link href="#uiux">Clientele</Link>
              </li>
              <li>
                <Link href="#certification">Certification</Link>
              </li>
              <li>
                <Link href="#contact">Resources</Link>
              </li>
              <Link href="#contact">
              <button className="bg-[#0B78F4] flex items-center rounded-3xl px-8 py-2">
                Hire Me{" "}
                <svg
                  className="ml-3"
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.5383 7.6633L9.91328 13.2883C9.73716 13.4644 9.49829 13.5634 9.24922 13.5634C9.00015 13.5634 8.76128 13.4644 8.58516 13.2883C8.40904 13.1122 8.31009 12.8733 8.31009 12.6242C8.31009 12.3752 8.40904 12.1363 8.58516 11.9602L12.6094 7.93752H1.125C0.87636 7.93752 0.637903 7.83874 0.462087 7.66293C0.286272 7.48711 0.1875 7.24866 0.1875 7.00002C0.1875 6.75137 0.286272 6.51292 0.462087 6.3371C0.637903 6.16129 0.87636 6.06252 1.125 6.06252H12.6094L8.58672 2.03751C8.4106 1.86139 8.31166 1.62252 8.31166 1.37345C8.31166 1.12438 8.4106 0.88551 8.58672 0.70939C8.76284 0.533269 9.00171 0.434326 9.25078 0.434326C9.49985 0.434326 9.73872 0.533269 9.91484 0.70939L15.5398 6.33439C15.6273 6.4216 15.6966 6.52523 15.7438 6.63931C15.7911 6.75339 15.8153 6.87569 15.8152 6.99917C15.815 7.12265 15.7905 7.24489 15.743 7.35886C15.6955 7.47283 15.6259 7.57629 15.5383 7.6633Z"
                    fill="white"
                  />
                </svg>
              </button></Link>
              
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
