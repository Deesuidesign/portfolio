import { Gem, GraduationCap, Activity, Hexagon } from "lucide-react";
import Figma from "../../public/services/Frame 1321314528.png";
import Miro from "../../public/services/Frame 1321314748.png";
import PhotoShop from "../../public/services/Frame 1321314749.png";
import Effects from "../../public/services/Frame 1321314750.png";
import Corel from "../../public/services/Frame 1321314751.png";
import Filmora from "../../public/services/Frame 1321314752.png";
import Illustrator from "../../public/services/Frame 1321314753.png";
import Image from "next/image";

const images = [Figma, Miro, Illustrator, PhotoShop, Corel, Effects, Filmora];

const services = [
  {
    icon: <Gem className="text-blue w-12 h-12" strokeWidth={1} />,
    title: "UI/UX Design",
    description:
      "Crafting seamless and intuitive digital experiences through innovative UI/UX design.",
  },
  {
    icon: <GraduationCap className="text-blue w-12 h-12" strokeWidth={1} />,
    title: "Graphic Design",
    description: "Bringing ideas to life through bold and creative visuals.",
  },
  {
    icon: <Activity className="text-blue w-12 h-12" strokeWidth={1} />,
    title: "Digital Marketing",
    description:
      "Connecting brands with audiences through smart, strategic marketing.",
  },
  {
    icon: <Hexagon className="text-blue w-12 h-12" strokeWidth={1} />,
    title: "Brand Management",
    description: "Building Strong Brands, Creating Lasting Impressions.",
  },
];

function Service() {
  return (
    <div>
      <div className="my-32" id="services">
        <div className="ellipse flex justify-center items-center">
          <span>Services</span>
        </div>
        <h2 className="mt-4 md:w-4/6 text-white text-3xl md:text-4xl font-semibold">
          Why Hire Me For Your Next{" "}
          <span className="text-[#0B78F4]">Projects</span>
        </h2>
        <p className="text-white md:w-5/6 opacity-85 leading-loose font-normal my-9 text-xl text-justify">
          I am a Product & Graphic Designer with a keen eye for user-centered,
          intuitive, and visually stimulating designs. With my distinct skill
          set in Graphic Design, user research, wireframe development,
          microinteractions and UI design, I propel startups and large
          corporations towards success by designing the perfect digital
          solutions.
        </p>

        <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-9 mb-11">
          {services.map((item) => (
            <li key={item.title} className="bg-white rounded p-5">
              {item.icon}
              <h3 className="font-bold text-xl my-3">{item.title}</h3>
              <p className="text-text-color">{item.description}</p>
            </li>
          ))}
        </ul>

        <div className="px-8 py-5 bg-white rounded">
          <h2 className="text-[#0B78F4] text-xl md:text-2xl font-semibold mb-5">
            Software Skills
          </h2>

          <ul className="grid grid-cols-2 md:flex flex-wrap md:justify-center lg:justify-between gap-5">
            {images.map((item, i) => (
              <li key={i} className="w-32">
                <Image src={item} alt="image-icon" className="mx-auto" />
                {i === 0 && (
                  <p className="text-center mt-0.5 text-base font-bold">
                    Figma
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Service;
