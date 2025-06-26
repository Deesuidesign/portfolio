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
    title: "MTN CCaaS Solution Brochure",
    status: "Delivered",
    images: [
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1747043743/Avetium_CCaaS_Solution_Sales_Cheat_Sheetrer_xwwt8s.png", // Cover Image
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1747045267/MTN_CCaaS_Solution_Sales_Cheat_Sheetrer_jreux0.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1747045268/MTN_CCaaS_Solution_Sales_Cheat_Sheetrer_2_w4ndw0.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1747045265/MTN_CCaaS_Solution_Sales_Cheat_Sheetrer_78_danqbx.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1747045265/MTN_CCaaS_Solution_Sales_Cheat_Sheetrer_65_hamrlp.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1747045265/MTN_CCaaS_Solution_Sales_Cheat_Sheetrer_5_uvgmle.png",
    ],
  },
  {
    title: "ZKTeco Social Media Banners & Marketing Material Design",
    status: "Delivered",
    images: [
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726067359/ZKTeco_drahkm.png", // Cover Image
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1739192750/sdst_vnktar.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1750923763/Good_Friday_ygjgdc.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1739192872/ZKTeco_5_cpidqf.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726067321/ZKTeco_7_jsmbw2.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1739192096/f18_f22_zpvifi.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1750923762/Happy_Easter_Day_mcqrc5.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1739192424/zkteco_workers_day_vdqipw.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1739192156/ADP_And_Partner_Bannerd_ew7aif.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1739192161/Proface_x_k35pca.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1750924263/smart_home_automation_ZSmart_2_dyo4uk.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726067366/ZKTeco_4_oyq5pc.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726067358/ZKTeco_2_w8sjap.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726067365/ZKTeco_3_h21lvl.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1739192160/EP20_AMARTURA_qjlw4n.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1739192344/D3_utgzun.png",
    ],
  },
  {
    title: "Curated Gifts Marketing Material Designs",
    status: "Delivered",
    images: [
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1750922940/Tracker_sjmjsm.png", // Cover Image
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1750922889/Card_qogaru.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1750922933/Shirt_wyz29t.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1750922933/Cap_taaaaq.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1750922926/Bag_e_xjbnvs.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1750922933/Mug_fcnuih.png",
    ],
  }, 
  {
    title: "Avetium Consult Company's Profile Design",
    status: "Delivered",
    images: [
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1745924241/Avetium_Company_Profile_rtpmym.png", // Cover Image
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1745924848/Avetium_Company_Profile_2_pvdbfs.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1745924848/Avetium_Company_Profile_3_yosojb.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1745924849/Avetium_Company_Profile_1_ugxjxf.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1745924849/Avetium_Company_Profile_5_ph00ih.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1745924849/Avetium_Company_Profile_4_kkvnkb.png",
    ],
  },
  {
    title: "Noble-Mind Schools Yearbook Designs",
    status: "Delivered",
    images: [
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1750922935/Noble_mind_e_fxpe8t.png", // Cover Image
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726067443/Noble_mind_yearbook_2022_wak4ix.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726067442/Noble_mind_yearbook_2019_uwn9n8.png",
    ],
  },
  {
    title: "BaoBad Plus Complimentary Card and ID Card Designs",
    status: "Delivered",
    images: [
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726070011/BaoBad_Plus_jxpoew.png", // Cover Image
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726070010/BaoBad_Plus_3_o59ulq.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726070011/BaoBad_Plus_2_wry2t5.png",
    ],
  },  
  {
    title: "Spark Xplorer Brand Guide and Flyer Designs",
    status: "Delivered",
    images: [
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1739193107/Spark_Xplorer_brochure_erer_fgjfbm.png", // Cover Image
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1739191570/Spark_Xplorer_brochureRE_jzjnen.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1739191512/Spark_Xplorer_brochurereer_rzjc52.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1739191529/Spark_Xplorer_brochuretrt_g9uiww.png",
    ],
  },  
  {
    title: "Roducate Complimentary Card, Access Card and ID Card Designs",
    status: "Delivered",
    images: [
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726216820/Roducate_rf58hi.png", // Cover Image
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726216818/Roducate_2_wbgqsp.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726216818/Roducate_3_rgk4uv.png",
    ],
  },  
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
    title: "RCCG Social Media Banners Designs",
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
    title: "SB Telecoms Marketing Material Design",
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
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1750925488/M_H_bdrnbi.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1736703310/Pews_Pro_Logo_k3via1.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726218986/bavms_fczpj0.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1750925488/G5_rvg0xq.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1750923613/Curated_Logo_z9cbxw.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1736703087/Designtino_Logo_vqynrw.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726219327/BioTime_Africa_clcdzj.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726219324/Securetech_vv2gau.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726219169/Xplorer_hhk2ik.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1750925488/Pyramed_hswgtu.png",
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
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1750925491/Abiru_v6xqee.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726067313/other_3_g3r2n2.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726067313/other_5_z7cofm.png",
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1750925488/Sanwo_Olu_tjlta4.png",
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
