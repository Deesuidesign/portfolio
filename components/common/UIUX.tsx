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
    image: "https://res.cloudinary.com/delbjwwfy/image/upload/v1727174764/Capturerewewewewe_fjr1ia.png",
    link: "https://www.figma.com/proto/ObKlv5lEfuk0EznE9aJNMC/Home-Options-App-Design?page-id=0%3A1&node-id=15-567&node-type=frame&viewport=943%2C315%2C0.36&t=X4VhNApiSJtT9Nsd-1&scaling=scale-down&content-scaling=fixed",
  },
   {
    title: "SG Scoot App Design",
    status: "Launched",
    image: "https://res.cloudinary.com/delbjwwfy/image/upload/v1726062138/SG_Scoot_Mobile_App_nepvaz.png",
    link: "https://www.figma.com/proto/XnNlcGJfRCa4i00VBQTCYQ/Scooter-app?page-id=0%3A1&node-id=6-3337&node-type=frame&viewport=931%2C408%2C0.36&t=7mzG3vZboe79OSkn-1&scaling=scale-down&content-scaling=fixed",
  },
 {
    title: "Xotaxi Ride Hailing App Design",
    status: "Launched",
    image: "https://res.cloudinary.com/delbjwwfy/image/upload/v1726058331/uvaymw6lo5l0hiuqzel2.png",
    link: "https://www.behance.net/gallery/191870853/Xotaxi-A-Ride-hailing-app-Case-study",
  },
  {
    title: "FlowWave FinTech App Design",
    status: "Launched",
    image: "https://res.cloudinary.com/delbjwwfy/image/upload/v1726051639/yy6m80cdczygxijoh6ig.png",
    link: "https://www.behance.net/gallery/191419067/FlowWave-Fintech-App-Design",
  },
  {
    title: "ZKDigimax Website",
    status: "Live",
    image: "https://res.cloudinary.com/delbjwwfy/image/upload/v1727177789/Capturelpoioioi_ruykwt.png",
    link: "https://www.zkdigimax.com/",
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
    link: "https://www.figma.com/proto/BO3h7OYGcjPixyin9yW2SZ/Bigi-Mobile-App?page-id=0%3A1&node-id=5-252&node-type=frame&viewport=924%2C432%2C0.29&t=pLF4TZY8vk2AGd40-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A45",
  },
   {
    title: "Car Hire/Rental Animated Homepage",
    status: "",
    image: "https://res.cloudinary.com/delbjwwfy/image/upload/v1727169710/Animated_Website_txzgq8.png",
    link: "https://www.figma.com/proto/vQCbzL7xxUURsAhzDHp1uH/Car-Rental?page-id=0%3A1&node-id=8-620&node-type=frame&viewport=763%2C383%2C0.08&t=VC0CM66uftlA7Vvz-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A2",
  },
  {
    title: "Animated Gaming Hompeage Website",
    status: "",
    image: "https://res.cloudinary.com/delbjwwfy/image/upload/v1727172865/Gaming_Website_bixllu.png",
    link: "https://www.figma.com/proto/onz2RjvPiQ01huayNMZsrp/Crest-Gaming-Website?page-id=0%3A1&node-id=5-646&node-type=frame&viewport=224%2C215%2C0.16&t=5cFMk3wDyRrjsXs2-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=5%3A269",
  },
  {
    title: "Morning Mart Animated Homepage",
    status: "",
    image: "https://res.cloudinary.com/delbjwwfy/image/upload/v1727176430/Capturefererer_e0nzpm.png",
    link: "https://www.figma.com/proto/TCfVWWqKdlAMQGsHiGDcIE/Lays-Website-Animated-Landing-Page-Design?page-id=0%3A1&node-id=1-2&node-type=frame&viewport=1038%2C395%2C0.32&t=SDTGj5Z3CwAHRv2i-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2",
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
