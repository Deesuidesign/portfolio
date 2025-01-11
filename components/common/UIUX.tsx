// components/common/UIUX.js
import Image from "next/image";

// Array of project data
const projects = [
  {
    title: "Xplorer EdTech Platform Design",
    status: "Live",
    image: "https://res.cloudinary.com/delbjwwfy/image/upload/v1728145480/Capturetrererre_fjipre.png",
    link: "https://www.sparkxplorer.com/",
  },
  {
    title: "Home Options App Design",
    status: "Development Stage",
    image: "https://res.cloudinary.com/delbjwwfy/image/upload/v1728397981/CaptureOIOIOIOIO_tct6ep.png",
  },
   {
    title: "SG Scoot App Design",
    status: "Launched",
    image: "https://res.cloudinary.com/delbjwwfy/image/upload/v1726062138/SG_Scoot_Mobile_App_nepvaz.png",
    link: "https://www.instagram.com/p/C3w86B3tOwW/",
  },
  {
    title: "Bondle Dating App",
    status: "Development Stage",
    image: "https://res.cloudinary.com/delbjwwfy/image/upload/v1729586808/Capturegrrtrt_kqtrhp.png",
    link: "https://www.instagram.com/p/DA3ZeSEIsh7/",
  },
  {
    title: "ZKDigimax Website",
    status: "Live",
    image: "https://res.cloudinary.com/delbjwwfy/image/upload/v1727177789/Capturelpoioioi_ruykwt.png",
    link: "https://www.zkdigimax.com/",
  },
 {
    title: "Xotaxi Ride Hailing App Design",
    status: "Launched",
    image: "https://res.cloudinary.com/delbjwwfy/image/upload/v1726058331/uvaymw6lo5l0hiuqzel2.png",
    link: "https://www.instagram.com/p/C11_YaTN79y/",
  },
  {
    title: "FlowWave FinTech App Design",
    status: "Launched",
    image: "https://res.cloudinary.com/delbjwwfy/image/upload/v1726051639/yy6m80cdczygxijoh6ig.png",
    link: "https://www.instagram.com/p/C0T_Pgwov_P/",
  },
  {
    title: "Spark Bridges Website",
    status: "Live",
    image: "https://res.cloudinary.com/delbjwwfy/image/upload/v1726059688/Spart_Bridges_Website_pw6byi.png",
    link: "https://www.sparkbridges.com/",
  },
  {
    title: "StyleCart Ecommerce App Design",
    status: "Development Stage",
    image: "https://res.cloudinary.com/delbjwwfy/image/upload/v1726052549/gnrf8qxtvwqbevqde01l.png",
    link: "https://www.figma.com/proto/gfNvrjCS6lOTzsy2YAdSWL/Sneakers-UI?page-id=0%3A1&node-id=3-2446&node-type=frame&viewport=307%2C275%2C0.2&t=yvWHdNpPOlCtcUzo-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2",
  },
  {
    title: "NGTeco E-Commerce Website",
    status: "Live",
    image: "https://res.cloudinary.com/delbjwwfy/image/upload/v1726060568/NGTeco_ght9at.png",
    link: "https://ngteco.ng/",
  },
   {
    title: "Bigi Animated Mobile App Design",
    status: "",
    image: "https://res.cloudinary.com/delbjwwfy/image/upload/v1727175334/Capturerfdfdf_ft7dbe.png",
    link: "https://www.instagram.com/p/C3PqTGlN2kj/",
  },
   {
    title: "Car Hire/Rental Animated Homepage",
    status: "",
    image: "https://res.cloudinary.com/delbjwwfy/image/upload/v1727169710/Animated_Website_txzgq8.png",
    link: "https://www.instagram.com/p/C29vho5Nlsd/",
  },
  {
    title: "Animated Gaming Hompeage Website",
    status: "",
    image: "https://res.cloudinary.com/delbjwwfy/image/upload/v1727172865/Gaming_Website_bixllu.png",
    link: "https://www.instagram.com/p/C2FebNqN2iH/",
  },
  {
    title: "Morning Mart Animated Homepage",
    status: "",
    image: "https://res.cloudinary.com/delbjwwfy/image/upload/v1727176430/Capturefererer_e0nzpm.png",
    link: "https://www.instagram.com/p/C0MR9biobsw/",
  },
];

const UIUX = () => {
  return (
    <div className="my-32" id="uiux">
      <div className="ellipse flex justify-center items-center">
        <span>UI/UX Portfolios</span>
      </div>
      <h2 className="mt-4 text-white text-3xl md:text-4xl font-semibold">
        My Latest Product design <span className="text-[#0B78F4]">Projects</span>
      </h2>
      <p className="text-white my-3 opacity-85">
        I have selected and mentioned here some of my latest projects to share
        with you.
      </p>

      <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Loop through the projects array */}
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link} // Link to the redirected URL
            target="_blank" // Open in a new tab
            rel="noopener noreferrer" // Security attribute
          >
            <div className="bg-[#0B78F4] items-center">
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
          </a>
        ))}
      </div>
    </div>
  );
};

export default UIUX;
