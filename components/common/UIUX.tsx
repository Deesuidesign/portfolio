"use client";

import { useState } from "react";
import Image from "next/image";

import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import CloseIcon from "@mui/icons-material/Close";
import { DialogClose } from "@radix-ui/react-dialog";
import { X } from "lucide-react";

// Array of project data
const projects = [
  {
    title: "New Project",
    status: "Development Stage",
    image:
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1737529379/Captureytytytre_r_t8sozq.png",
    link: "https://www.sparkxplorer.com/",
  },
  {
    title: "Pews-Pro Church Management Software",
    status: "Development Stage",
    image:
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1737529379/Captureytytytre_r_t8sozq.png",
     link: 
       "https://www.sparkxplorer.com/",
    content: [
      {
        title: "Project Overview",
        content: [
          {
            type: "text",
            text: "Pews Pro Church Management Software is an end-to-end software solution that focuses heavily on automating key church activities such as managing church events, coordinating any church payments seamlessly, and keeping a standard database for the congregation.",
          },
          {
            type: "text",
            text: "It aims at relieving church pastors and administrative workers of the huge burden of keeping track of members, finances, and all other important records.",
          }
        ],
      },
      {
        title: "Project Prototype",
        content: [
          {
            type: "video",
            url: "https://www.youtube.com/embed/HAdROFr7VRQ?si=DgbZT9WxrDFY5KMJ",
          },
        ],
      },
      {
        title: "Project Screens",
        content: [
          {
            type: "swipper",
            img_list: [
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1737529379/Captureytytytre_r_t8sozq.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1737529379/Captureytytytre_r_t8sozq.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1737529379/Captureytytytre_r_t8sozq.png",
            ],
          },
        ],
      },
    ],
    description: [
      "Pews Pro Church Management Software is an end-to-end software solution that focuses heavily on automating key church activities such as managing church events, coordinating any church payments seamlessly, and keeping a standard database for the congregation.",
      "It aims at relieving church pastors and administrative workers of the huge burden of keeping track of members, finances, and all other important records.",
    ],
  },
  {
    title: "Xplorer EdTech Platform Design",
    status: "Live",
    image:
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1728145480/Capturetrererre_fjipre.png",
    link: "https://www.sparkxplorer.com/",
    description: [
      "SparkXplorer is an innovative US-based after-school practice platform designed to support families striving for the American Dream.",
      "It's dedicated to migrant families, everyday Americans working tirelessly to provide for their loved ones, and single parents seeking ways to keep their kids engaged and productive after school.",
    ],
  },
  {
    title: "ZKDigimax Website",
    status: "Live",
    image:
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1727177789/Capturelpoioioi_ruykwt.png",
    link: "https://www.zkdigimax.com/",
    description: [
      "ZKDigimax Website is designed to create a comprehensive solution for the retail and quick service from digital signage to AI business analysis.",
    ],
  },
  {
    title: "Hugley Dating and Friendship App",
    status: "Development Stage",
    image:
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1737530305/Captureyrrtrt_pnhqyd.png",
    link: "https://www.instagram.com/p/DFVHnYntGZ5/?img_index=1",
    description: [
      "Hugley is a unique dating app specifically for individuals with intellectual disabilities, designed to foster meaningful connections in a safe and inclusive environment.",
    ],
  },
  {
    title: "SG Scoot App Design",
    status: "Launched",
    image:
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726062138/SG_Scoot_Mobile_App_nepvaz.png",
    link: "https://www.instagram.com/p/C3w86B3tOwW/",
    description: [
      "SG Scoot App is a user-friendly and visually engaging platform designed to make scooter and bike-sharing services convenient, intuitive, and efficient for users.",
      "The app is built with a clean, modern interface, emphasizing accessibility, functionality, and seamless navigation.",
    ],
  },
  {
    title: "Home Options App Design",
    status: "Launched",
    image:
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1737031803/Home_Option_Banner_pnomeb.png",
    link: "https://www.instagram.com/p/C5D7uVrNo1K/",
    description: [
      "The app design revolves around creating an immersive and user-friendly experience for furniture shopping, blending aesthetics with functionality.",
      "It features a sleek, modern interface with clean lines, spacious layouts, and a neutral color palette that complements the visual focus on furniture products.",
    ],
  },
  {
    title: "Bondle Dating App",
    status: "Launched",
    image:
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1729586808/Capturegrrtrt_kqtrhp.png",
    link: "https://www.instagram.com/p/DA3ZeSEIsh7/",
    description: [
      "The Bondle Dating App is designed to revolutionize the way people connect, fostering meaningful relationships through an engaging, intuitive, and visually appealing interface.",
    ],
  },
  {
    title: "Xotaxi Ride Hailing App Design",
    status: "Launched",
    image:
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726058331/uvaymw6lo5l0hiuqzel2.png",
    link: "https://www.instagram.com/p/C11_YaTN79y/",
    description: [
      "Xotaxi Ride Hailing app is designed to cater to both tech-savvy users and first-time ride-hailers, ensuring an effortless and delightful experience for all.",
      "Its minimalist approach and thoughtful features make it the go-to platform for safe, reliable, and convenient transportation.",
    ],
  },
  {
    title: "FlowWave FinTech App Design",
    status: "Launched",
    image:
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726051639/yy6m80cdczygxijoh6ig.png",
    link: "https://www.instagram.com/p/C0T_Pgwov_P/",
    description: [
      "FlowWave is a cutting-edge FinTech application designed to redefine personal and business financial management with simplicity, elegance, and innovation.",
      "The app combines a sleek, modern user interface with powerful financial tools, providing users with a seamless and intuitive experience.",
    ],
  },
  {
    title: "Podium Betting App",
    status: "Development Stage",
    image:
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1737040368/Captureytytytrerer_rtfs5b.png",
    description: [
      "Podium is a cutting-edge sports betting app designed for speed, simplicity, and excitement. Whether you're into live betting, pre-match wagers, or exploring unique prop bets, Podium offers a seamless and secure platform to elevate your betting experience.",
      "With real-time odds, instant updates, and a sleek interface, Podium puts the thrill of the game at your fingertips. Stay ahead with personalized notifications, detailed stats, and quick payouts—all in one app. Bet smarter, win bigger, and take your place on the podium!",
    ],
  },
  {
    title: "Spark Bridges Website",
    status: "Live",
    image:
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726059688/Spart_Bridges_Website_pw6byi.png",
    link: "https://www.sparkbridges.com/",
    description: [
      "The platform is designed to stand as a link-bridge between donors and beneficiaries, where authenticated data collected from beneficiaries are vetted, before items(laptops) are gifted to the beneficiaries.",
    ],
  },
  {
    title: "StyleCart Ecommerce App Design",
    status: "Development Stage",
    image:
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726052549/gnrf8qxtvwqbevqde01l.png",
    link: "https://www.figma.com/proto/gfNvrjCS6lOTzsy2YAdSWL/Sneakers-UI?page-id=0%3A1&node-id=3-2446&node-type=frame&viewport=307%2C275%2C0.2&t=yvWHdNpPOlCtcUzo-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2",
    description: [
      "StyleCart is designed for tech-savvy shoppers who value convenience, aesthetics, and a personalized shopping journey. From trendsetters to budget-conscious buyers, the app caters to a broad spectrum of fashion enthusiasts.",
      "With its visually appealing design and robust features, StyleCart is the ultimate platform for discovering and shopping the latest trends with ease.",
    ],
  },
  {
    title: "NGTeco E-Commerce Website",
    status: "Live",
    image:
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726060568/NGTeco_ght9at.png",
    link: "https://ngteco.ng/",
    description: [
      "The Website is designed to explore various market segments with its cutting-edge biometric technologies and IoT concepts plus techniques to upgrade user experience of home-use electric and security appliances, and lead the trend of mobile application and terminal interaction.",
    ],
  },
  {
    title: "Bigi Animated Mobile App Design",
    status: "",
    image:
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1727175334/Capturerfdfdf_ft7dbe.png",
    link: "https://www.instagram.com/p/C3PqTGlN2kj/",
    description: [
      "Bigi App design is a playful and dynamic app design concept focused on delivering a seamless and delightful user experience with smooth animations and bold visual elements.",
    ],
  },
  {
    title: "Car Hire/Rental Animated Homepage",
    status: "",
    image:
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1727169710/Animated_Website_txzgq8.png",
    link: "https://www.instagram.com/p/C29vho5Nlsd/",
    description: [
      "It's an animated homepage design for a car hire/rental service website. The scene begins with a smooth transition from a scenic city view to a well-lit parking lot with various car models. The homepage has a clean and modern interface with a minimalist design.",
    ],
  },
  {
    title: "Animated Gaming Hompeage Website",
    status: "",
    image:
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1727172865/Gaming_Website_bixllu.png",
    link: "https://www.instagram.com/p/C2FebNqN2iH/",
    description: [
      "The design embraces a sleek, modern, and dynamic style, combining high-tech aesthetics with gaming culture. It features rich dark themes with neon accents, resembling a high-end gaming interface.",
    ],
  },
  {
    title: "Morning Mart Animated Homepage",
    status: "",
    image:
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1727176430/Capturefererer_e0nzpm.png",
    link: "https://www.instagram.com/p/C0MR9biobsw/",
    description: [
      " The homepage design balances both aesthetics and functionality, creating a delightful online shopping experience for users to enjoy every morning.",
    ],
  },
];

const UIUX = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] =
    useState<(typeof projects)[0]>();

  const handleDialogOpen = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleDialogClose = () => {
    setSelectedProject(undefined);
    setOpen(false);
    setTimeout(() => {
      document.body.style.pointerEvents = "";
    }, 200);
  };

  return (
    <div
      className="my-32"
      id="uiux"
    >
      <div className="ellipse flex justify-center items-center">
        <span>UI/UX Portfolios</span>
      </div>
      <h2 className="mt-4 text-white text-3xl md:text-4xl font-semibold">
        My Latest Product design{" "}
        <span className="text-[#0B78F4]">Projects</span>
      </h2>
      <p className="text-white my-3 opacity-85">
        I have selected and mentioned here some of my latest projects to share
        with you.
      </p>

      <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Loop through the projects array */}
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#0B78F4] items-center hover:cursor-pointer"
            onClick={() => handleDialogOpen(project)}
          >
            <Image
              className="w-full h-96 object-cover"
              src={project.image} // Use image from the project array
              alt={project.title}
              width={300}
              height={300}
            />

            <div className="p-4">
              <h3 className="font-bold text-white text-center text-xl">
                {project.title}
              </h3>
              <p className="font-semibold text-center text-[#190634]">
                {project.status}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* {open && ( */}
      <ProjectDialog
        open={open}
        setOpen={handleDialogClose}
        project={selectedProject}
      />
      {/* )} */}
    </div>
  );
};

export default UIUX;

type Props = {
  open: boolean;
  setOpen: () => void;
  project?: (typeof projects)[0];
};

const ProjectDialog = ({ open, setOpen, project }: Props) => (
  <Dialog
    open={open}
    onOpenChange={setOpen}
  >
    <DialogContent className="w-[90%] sm:max-w-xl max-h-[85%] rounded-3xl">
      <DialogHeader className="flex justify-between items-center">
        <DialogClose asChild>
          <button className="text-gray-500 hover:text-gray-700 focus:outline-none self-end">
            <X size={20}/>
          </button>
        </DialogClose>
      </DialogHeader>
      {project?.content?.map((content, index) => (
        <div
          className="max-w-lg mx-auto w-full"
          key={index}
        >
          <h2 className="font-bold text-2xl text-blue text-center mb-5">
            {content.title}
          </h2>
          <div className="space-y-4">
            {content.content.map((item, index) => (
              <>
                {item.type === "text" && "text" in item ? (
                  <p
                    key={index}
                    className="text-justify text-sm md:text-base"
                  >
                    {item.text}
                  </p>
                ) : item.type === "video" && "url" in item ? (
                  <div
                    key={index}
                    className=""
                  >
                    <iframe
                      width="100%"
                      height="315"
                      src={item.url}
                      title={project?.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : item.type === "swipper" && "img_list" in item ? (
                  <CustomSwiper images={item.img_list} />
                ) : null}
              </>
            ))}
          </div>
        </div>
      ))}

      <DialogFooter className="gap-5 sm:space-x-0 sm:justify-center items-center">
        <DialogClose asChild>
          <Button
            variant="black"
            size="lg"
            className="rounded-full w-full max-w-52 h-auto gap-2 py-3 px-6 text-sm"
          >
            Cancel
            <CloseIcon />
          </Button>
        </DialogClose>
        {project?.link && (
          <Button
            asChild
            size="lg"
            className="rounded-full gap-2 h-auto py-3 px-6 w-full max-w-52 text-sm"
          >
            <a
              href={project?.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore &rarr;
            </a>
          </Button>
        )}
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

const CustomSwiper = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-lg overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0"
          >
            <Image
              src={src}
              alt={`Slide ${index}`}
              width={300}
              height={300}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-3 py-1 rounded-full"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-3 py-1 rounded-full"
      >
        ▶
      </button>
    </div>
  );
};
