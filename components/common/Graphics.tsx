// components/common/Graphics.js
import Image from "next/image";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";

// Array of project data
const projects = [
  {
    title: "Loyal Milk Souvenirs Design",
    status: "Delivered",
    images: [
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726079685/Loya_Milk_1_dyp83u.png", // Cover Image
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726067437/Loya_Milk_2_ltnvdg.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726067434/Loya_Milk_3_g04ndt.png",
    ],
  },
  {
    title: "ZKTeco Marketing Material Design",
    status: "Delivered",
    images: [
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726067359/ZKTeco_drahkm.png", // Cover Image
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726067352/ZKTeco_6_ydiiuv.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726067321/ZKTeco_7_jsmbw2.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726067366/ZKTeco_4_oyq5pc.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726067358/ZKTeco_2_w8sjap.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726067365/ZKTeco_3_h21lvl.png",
    ],
  },
   {
    title: "BaoBad Plus Designs",
    status: "Delivered",
    images: [
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726070011/BaoBad_Plus_jxpoew.png", // Cover Image
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726070010/BaoBad_Plus_3_o59ulq.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726070011/BaoBad_Plus_2_wry2t5.png",
    ],
  },
  {
    title: "Noble-Mind Schools Yearbook Designs",
    status: "Delivered",
    images: [
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726067444/Noble_mind_yearbook_2024_gw7yxg.png", // Cover Image
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726067443/Noble_mind_yearbook_2022_wak4ix.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726067442/Noble_mind_yearbook_2019_uwn9n8.png",
    ],
  },
    {
    title: "Roducate Designs",
    status: "Delivered",
    images: [
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726216820/Roducate_rf58hi.png", // Cover Image
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726216818/Roducate_2_wbgqsp.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726216818/Roducate_3_rgk4uv.png",
    ],
  },
  {
    title: "RCCG Banners",
    status: "Delivered",
    images: [
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726079910/RCC_23_cwwj0j.png", // Cover Image
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726067364/RCC_5_jca9aw.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726067406/RCC_2_ujakoy.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726067365/RCC_4_d1m8zb.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726067365/RCC_3_p7z7lt.png",
    ],
  },
   {
    title: "SB Telecoms Design",
    status: "Delivered",
    images: [
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726067320/SB_Telecoms_rweibw.png", // Cover Image
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726067318/SB_Telecoms_2_pyp8gz.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726067314/SB_Telecoms_5_tjwrag.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726067315/SB_Telecoms_4_nkhdyz.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726067315/SB_Telecoms_6_eale72.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726067317/SB_Telecoms_3_mf4rvi.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726068900/SB_Telecoms_7_svcipu.png",
    ],
  },
   {
    title: " Brands Logo Design",
    status: "Delivered",
    images: [
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726218964/Sprout_logo_nnvjug.png", // Cover Image
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726218992/isource_e_trwe6i.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726218986/bavms_fczpj0.png"
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726219327/BioTime_Africa_clcdzj.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726219324/Securetech_vv2gau.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726219169/Xplorer_hhk2ik.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726219027/wearhouse_pj1lnz.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726219007/Untitled-2gfryty_di95sq.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726219118/Schoolprnuer_logo_i0hf5j.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726218994/The_Service_hhqgeu.png",
    ],
  },
  {
    title: "Other Brands Design",
    status: "Delivered",
    images: [
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726067314/other_1_yoepsw.png", // Cover Image
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726067312/other_4_bkfeoh.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726067315/other_2_fnr4ni.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726067313/other_3_g3r2n2.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726067313/other_5_z7cofm.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726067312/other_7_ghjlge.png",
    ],
  },
];

const Graphics = () => {
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
        <span>Graphics Portfolio</span>
      </div>
      <h2 className="mt-4 text-white text-3xl md:text-4xl font-semibold">
        My Graphics Design Latest <span className="text-[#0B78F4]">Projects</span>
      </h2>
      <p className="text-white my-3 opacity-85">
        I have selected and mentioned here some of my latest projects to share with you.
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
              src={project.images[0]} // Display the first image (Cover Image)
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

      {/* Modal for Image Slider */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "50%",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            outline: "none",
            maxWidth: 800,
            textAlign: "center",
          }}
        >
          <div className="flex justify-between items-center mb-4">
            <button className="bg-black text-white rounded-3xl px-3 py-2 text-xs font-semibold" onClick={handlePreviousImage}>Previous</button>
            <button className="bg-black text-white rounded-3xl px-3 py-2 text-xs font-semibold" onClick={handleNextImage}>Next</button>
          </div>
          <Image
            src={selectedImages[activeImageIndex]}
            alt={`Project Image ${activeImageIndex + 1}`}
            width={600}
            height={400}
            className="object-contain w-full h-96 rounded-2xl"
          />
        </Box>
      </Modal>
    </div>
  );
};

export default Graphics;
