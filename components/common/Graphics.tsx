// components/common/Graphics.js
import Image from "next/image";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import { CustomSwiper } from "./UIUX";
import { Button } from "../ui/button";

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
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1739192750/sdst_vnktar.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1739192872/ZKTeco_5_cpidqf.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726067321/ZKTeco_7_jsmbw2.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1739192096/f18_f22_zpvifi.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1739192424/zkteco_workers_day_vdqipw.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1739192156/ADP_And_Partner_Bannerd_ew7aif.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1739192161/Proface_x_k35pca.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726067366/ZKTeco_4_oyq5pc.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726067358/ZKTeco_2_w8sjap.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726067365/ZKTeco_3_h21lvl.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1739192160/EP20_AMARTURA_qjlw4n.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1739192344/D3_utgzun.png",
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
    title: "Spark Xplorer Designs",
    status: "Delivered",
    images: [
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1739193107/Spark_Xplorer_brochure_erer_fgjfbm.png", // Cover Image
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1739191570/Spark_Xplorer_brochureRE_jzjnen.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1739191512/Spark_Xplorer_brochurereer_rzjc52.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1739191529/Spark_Xplorer_brochuretrt_g9uiww.png",
    ],
  },
  {
    title: "Noble-Mind Schools Yearbook Designs",
    status: "Delivered",
    images: [
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726067443/Noble_mind_yearbook_2022_wak4ix.png", // Cover Image
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726067444/Noble_mind_yearbook_2024_gw7yxg.png",
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
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1736702678/Tri-Edge_Technologies_Logo_zlx0cp.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726218992/isource_e_trwe6i.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1736703310/Pews_Pro_Logo_k3via1.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726218986/bavms_fczpj0.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1736703087/Designtino_Logo_vqynrw.png",
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

  const [show, setShow] = useState(false);

  const displayProjects = show ? projects : projects.slice(0, 6);

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
        <span>Graphics Portfolios</span>
      </div>
      <h2 className="mt-4 text-white text-3xl md:text-4xl font-semibold">
        My Latest Graphics Design{" "}
        <span className="text-[#0B78F4]">Projects</span>
      </h2>
      <p className="text-white my-3 opacity-85">
        I have selected and mentioned here some of my latest projects to share
        with you.
      </p>

      <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {displayProjects.map((project, index) => (
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

      <Button
        className="my-12 block mx-auto text-base w-1/2 rounded-full h-14"
        size="lg"
        onClick={() => setShow((show) => !show)}
      >
        {show ? "Show less" : "Show more"}
      </Button>

      {/* Modal for Image Slider */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "fit-content",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            outline: "none",
            maxWidth: 800,
            textAlign: "center",
          }}
        >
          <CustomSwiper images={selectedImages} />
        </Box>
      </Modal>
    </div>
  );
};

export default Graphics;
