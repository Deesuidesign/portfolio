// components/common/UIUX.js
import Image from "next/image";

// Array of project data
const projects = [
  {
    title: "Jumia Website Revamped",
    status: "Launched",
    image: "/project-1.png", // Image path
  },
  {
    title: "Jumia App Redesign",
    status: "Launched",
    image: "/project-2.png",
  },
  {
    title: "TAMS Website Revamp",
    status: "Launched",
    image: "/project-3.png",
  },
  {
    title: "Jumia Website Revamped",
    status: "Launched",
    image: "/project-1.png",
  },
  {
    title: "Jumia App Redesign",
    status: "Launched",
    image: "/project-2.png",
  },
  {
    title: "TAMS Website Revamp",
    status: "Launched",
    image: "/project-3.png",
  },
];

const UIUX = () => {
  return (
    <div className="my-32" id="uiux">
      <div className="ellipse flex justify-center items-center">
        <span>UI/UX Portfolio</span>
      </div>
      <h2 className="mt-4 text-white text-3xl md:text-4xl font-semibold">
        My UI/UX Latest <span className="text-[#0B78F4]">Projects</span>
      </h2>
      <p className="text-white my-3 opacity-85">
        I have selected and mentioned here some of my latest projects to share
        with you.
      </p>

      <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Loop through the projects array */}
        {projects.map((project, index) => (
          <div key={index} className="bg-[#0B78F4] items-center">
            <Image
              className="w-full h-96 object-cover"
              src={project.image} // Use image from the project array
              alt={project.title}
              width={300}
              height={300}
            />

            <div className="p-4">
              <h3 className="font-bold text-white text-center text-2xl">
                {project.title}
              </h3>
              <p className="font-semibold text-center text-[#190634]">
                {project.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UIUX;
