// components/common/Certificate.js
import Image from "next/image";
import Figma from "../../public/figma.png";
import Illustrator from "../../public/illustrator.png";
import Photoshop from "../../public/photoshot.png";
import Premier from "../../public/premier.png";
import Corel from "../../public/corel.png";
import Service from "../../public/service-illustration.png";

const Reviews = () => {
  return (
    <div className="my-32 lg:flex justify-between" id="services">
      <div className="lg:w-1/2">
        <div className="ellipse flex justify-center items-center">
          <span>UI/UX Portfolio</span>
        </div>
        <h2 className="mt-4 md:w-4/6 text-white text-3xl md:text-4xl font-semibold">
          Why Hire Me For Your Next{" "}
          <span className="text-[#0B78F4]">Projects</span>
        </h2>
        <p className="text-white md:w-5/6 opacity-85 leading-loose font-normal my-3">
          I am a Graphic & Product Designer with a keen eye for user-centered,
          intuitive, and visually stimulating designs. With my distinct skill
          set in Graphic Design, user research, wireframe development,
          microinteractions and UI design, I propel startups and large
          corporations towards success by designing the perfect digital
          solutions.
        </p>
        <div className=" grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6 items-center">
          <div className="flex flex-col items-center justify-center">
            <Image src={Figma} alt="figma" />
            <p className="uppercase font-semibold mt-1 text-center text-white">
              FIGMA
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image src={Illustrator} alt="figma" />
            <p className="uppercase font-semibold mt-1 text-center text-white">
              ILLUSTRATOR
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image src={Photoshop} alt="figma" />
            <p className="uppercase font-semibold mt-1 text-center text-white">
              PHOTOSHOP
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image src={Premier} alt="figma" />
            <p className="uppercase font-semibold mt-1 text-center text-white">
              PREMIER PRO
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image src={Corel} alt="figma" />
            <p className="uppercase font-semibold mt-1 text-center text-white">
              COREL DRAW
            </p>
          </div>
        </div>
        <button className="bg-[#0B78F4] text-white mt-6 font-bold flex items-center rounded-3xl px-8 py-2">
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
      </div>

      <div className="lg:w-1/2">
        <Image src={Service} className="w-full h-full" alt="figma" />
        
      </div>
    </div>
  );
};

export default Reviews;
