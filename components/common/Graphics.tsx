// components/common/Certificate.js
import Image from "next/image";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";

const projects = [
  {
    title: "Loyal Milk Souvenirs Design",
    status: "Delivered",
    images: ["https://res.cloudinary.com/delbjwwfy/image/upload/v1726067436/Loya_Milk_hy71of.png", "https://res.cloudinary.com/delbjwwfy/image/upload/v1726067437/Loya_Milk_2_ltnvdg.png", "https://res.cloudinary.com/delbjwwfy/image/upload/v1726067437/Loya_Milk_2_ltnvdg.png", "https://res.cloudinary.com/delbjwwfy/image/upload/v1726067434/Loya_Milk_3_g04ndt.png"],
  },
  {
    title: "ZKTeco Marketing Material Design",
    status: "Delivered",
    images: ["https://res.cloudinary.com/delbjwwfy/image/upload/v1726067359/ZKTeco_drahkm.png", "https://res.cloudinary.com/delbjwwfy/image/upload/v1726067352/ZKTeco_6_ydiiuv.png", "https://res.cloudinary.com/delbjwwfy/image/upload/v1726067321/ZKTeco_7_jsmbw2.png", "https://res.cloudinary.com/delbjwwfy/image/upload/v1726067366/ZKTeco_4_oyq5pc.png", "https://res.cloudinary.com/delbjwwfy/image/upload/v1726067358/ZKTeco_2_w8sjap.png", "https://res.cloudinary.com/delbjwwfy/image/upload/v1726067365/ZKTeco_3_h21lvl.png", "https://res.cloudinary.com/delbjwwfy/image/upload/v1726067366/ZKTeco_4_oyq5pc.png"],
  },
  {
    title: "TAMS Website Redesign",
    status: "In Progress",
    images: ["/project-3.png", "/project-1.png", "/project-2.png"],
  },
  // Add more projects as needed
];

const Reviews = () => {
  const [open, setOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleOpen = (images: any) => {
    setSelectedImages(images);
    setOpen(true);
    setActiveImageIndex(0); // Start at the first image
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNextImage = () => {
    setActiveImageIndex((prevIndex) =>
      prevIndex === selectedImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousImage = () => {
    setActiveImageIndex((prevIndex) =>
      prevIndex === 0 ? selectedImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="my-32" id="graphics">
      <div className="ellipse flex justify-center items-center">
        <span>Graphics Portolio</span>
      </div>
      <h2 className="mt-4 text-white text-3xl md:text-4xl font-semibold">
        My Graphics Design Latest{" "}
        <span className="text-[#0B78F4]">Projects</span>
      </h2>
      <p className="text-white my-3 opacity-85">
        I have selected and mentioned here some of my latest projects to share
        with you.
      </p>

      <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#0B78F4] items-center cursor-pointer"
            onClick={() => handleOpen(project.images)}
          >
            <Image
              className="w-full h-96 object-cover"
              src={project.images[0]} // Display the first image
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

      {/* Modal for Image Slider */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            outline: "none",
            maxWidth: 800,
            textAlign: "center",
          }}
        >
          <div className="flex justify-between items-center mb-4">
            <button onClick={handlePreviousImage}>Previous</button>
            <button onClick={handleNextImage}>Next</button>
          </div>
          <Image
            src={selectedImages[activeImageIndex]}
            alt={`Project Image ${activeImageIndex + 1}`}
            width={600}
            height={400}
            className="object-cover"
          />
        </Box>
      </Modal>
    </div>
  );
};

export default Reviews;
