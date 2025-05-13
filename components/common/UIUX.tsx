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
    title: "DeDataHub Learning Management System (LMS)",
    status: "Live",
    image:
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1747049786/Dedata_Hub_UI_ukp2oa.png",
    link: "https://staging.dedatahub.io/",
    content: [
      {
        title: "Project Overview",
        content: [
          {
            type: "text",
            text: "DeDatahub is developing a cutting-edge Learning Management System (LMS) tailored to academic institutions, corporate training environments, and independent educators seeking an intuitive, data-driven platform to manage, deliver, and track learning experiences.",
          },
          {
            type: "text",
            text: "The objective of this UI/UX design project is to create a seamless, engaging, and accessible user interface that empowers users to interact efficiently with DeDatahub LMS, while maximizing learning outcomes through clear navigation and smart data integration.",
          },
        ],
      },
      {
        title: "Problem Statement",
        content: [
          {
            type: "text",
            text: "Learners and educators using DeDatahub’s current Learning Management System (LMS) face challenges with fragmented navigation, unintuitive content discovery, and limited engagement features, which impede efficient course management, collaborative learning, and seamless access to decentralized academic data.",
          },
          {
            type: "text",
            text: "Additionally, the interface lacks accessibility optimizations and responsive adaptability, limiting its effectiveness across diverse devices and user groups.",
          },
        ],
      },
      {
        title: "Solution Statement",
        content: [
          {
            type: "text",
            text: "By redesigning the UI/UX of DeDatahub’s LMS, we aim to deliver an intuitive, accessible, and visually engaging platform that simplifies navigation, enhances content discovery, and facilitates collaboration through decentralized data management tools.",
          },
          {
            type: "text",
            text: "The new design will feature a streamlined dashboard, adaptive layouts for multiple devices, personalized learning pathways, and integrated decentralized credentialing—all while ensuring accessibility compliance and data transparency to empower both learners and educators.",
          },
        ],
      },
      {
        title: "Project Screens",
        content: [
          {
            type: "swipper",
            img_list: [
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1747049405/Dedatahub_1_vpdwcv.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1747049405/Dedatahub_2_n8a0st.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1747049405/Dedatahub_3_j3srst.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1747049406/Dedatahub_4_q6aod3.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1747049406/Dedatahub_5_s0vaeh.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1747049406/Dedatahub_6_qxscdp.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1747049406/Dedatahub_7_ypgqhz.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1747049406/Dedatahub_8_f2rfzk.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1747049408/Dedatahub_9_zu4sic.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1747049406/Dedatahub_10_rs2nds.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1747049407/Dedatahub_11_ktxsnc.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1747049406/Dedatahub_12_gqk0bm.png",
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
    title: "PaySphere FinTech App",
    status: "Development Stage",
    image:
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1740750567/Frame_1618875465_hxp4qm.png",
    content: [
      {
        title: "Project Overview",
        content: [
          {
            type: "text",
            text: "The goal of PaySphere is to create a seamless, secure, and user-friendly fintech application that simplifies digital payments, expense tracking, and financial management.",
          },
          {
            type: "text",
            text: "Whether you're seeking friendship, companionship, or love, Hugley provides a supportive space where users can interact comfortably and authentically.",
          },
        ],
      },
      {
        title: "Problem Statement",
        content: [
          {
            type: "text",
            text: "Managing personal and business finances can be overwhelming, especially with multiple payment methods, scattered expense tracking, and the risk of financial mismanagement.",
          },
          {
            type: "text",
            text: "There is a lack of platforms catering to their unique needs, making it difficult for them to form meaningful relationships. Hugley was developed to bridge this gap by offering an intuitive and secure dating experience tailored to their needs.",
          },
        ],
      },
      {
        title: "Solution Statement",
        content: [
          {
            type: "text",
            text: "PaySphere aims to bridge these gaps by providing a well-designed, easy-to-use fintech app that enhances financial management through a user-friendly interface, intelligent insights, and seamless functionality.",
          },
          {
            type: "text",
            text: "Through thoughtful UI/UX design, Hugley fosters a secure and welcoming environment for building meaningful relationships.",
          },
        ],
      },
      {
        title: "Project Screens",
        content: [
          {
            type: "swipper",
            img_list: [
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1740753890/PaySphere_1_yhsaon.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1740753891/PaySphere_2_uhywcd.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1740753891/PaySphere_3_ld4srv.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1740753891/PaySphere_4_kotb5a.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1740753891/PaySphere_5_q0sp4u.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1740753891/PaySphere_6_qyn2oz.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1740753892/PaySphere_7_d6bbm9.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1740753892/PaySphere_8_vvnr8h.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1740753894/PaySphere_9_advhv6.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1740753894/PaySphere_10_bi89vs.png",
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
    title: "Spark Xplorer EdTech Platform Design",
    status: "Live",
    image:
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1738839634/Frame_1321314748_h0yi5k.png",
    link: "https://www.sparkxplorer.com/",
    content: [
      {
        title: "Project Overview",
        content: [
          {
            type: "text",
            text: "Spark Xplorer is an innovative US-based after-school practice platform designed to support families striving for the American Dream.",
          },
          {
            type: "text",
            text: "The goal is to create an intuitive, engaging, and scalable platform that enhances student learning, educator efficiency, and institutional growth.",
          },
        ],
      },
      {
        title: "Problem Statement",
        content: [
          {
            type: "text",
            text: "Many working parents struggle to find high-quality after-school educational resources that provide structured learning opportunities for their children. Traditional tutoring services are expensive and often inaccessible, leaving a gap in after-school education.",
          },
          {
            type: "text",
            text: "SparkXplorer was created to bridge this gap by offering an interactive, affordable, and accessible digital learning experience.",
          },
        ],
      },
      {
        title: "Solution Statement",
        content: [
          {
            type: "text",
            text: "To address the challenges faced by working families and students, the design focuses on delivering an intuitive, engaging, and accessible e-learning experience.",
          },
          {
            type: "text",
            text: "Through an empathetic and research-driven design approach, SparkXplorer enhances accessibility, fosters engagement, and empowers families in their educational journey, ensuring a more equitable and effective after-school learning experience.",
          },
        ],
      },
      {
        title: "Project Prototype",
        content: [
          {
            type: "video",
            url: "https://www.youtube.com/embed/Oui04QdQEFg?si=oyCBA2Uvech23Hu3",
          },
        ],
      },
      {
        title: "Project Screens",
        content: [
          {
            type: "swipper",
            img_list: [
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1738839497/Spark_1_wtamcn.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1738839498/Spark_2_jjwwnj.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1738839497/Spark_3_umnc61.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1738839497/Spark_4_hvhxxn.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1738839498/Spark_6_gw5md4.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1738839497/Spark_5_lnm0sz.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1738842168/Spark_10_vgzxhp.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1738839498/Spark_7_a4fswy.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1738842168/Spark_9_vabhzd.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1738839497/Spark_8_vivujr.png",
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
    title: "Trace Fleet & Logistic Management Solution",
    status: "Development Stage",
    image:
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1741075253/Trace_vmivvs.png",
    content: [
      {
        title: "Project Overview",
        content: [
          {
            type: "text",
            text: "Transportation and logistics are essential for any business that needs to move goods from one place to another. However, managing the complex processes involved in transportation and logistics can be challenging, time-consuming, and costly.",
          },
          {
            type: "text",
            text: "That’s why you Trace exist as an all-in-one platform that simplifies and streamlines your transportation and logistics operations.",
          },
        ],
      },
      {
        title: "Problem Statement",
        content: [
          {
            type: "text",
            text: "Traditional fleet management systems often lack real-time tracking, predictive maintenance insights, and user-friendly interfaces.",
          },
          {
            type: "text",
            text: "Companies struggle with route inefficiencies, high fuel consumption, and vehicle downtime, leading to increased operational costs and delays.",
          },
        ],
      },
      {
        title: "Solution Statement",
        content: [
          {
            type: "text",
            text: "Managing a fleet efficiently requires real-time visibility, predictive insights, and user-friendly tools that simplify complex logistics. Many existing fleet management systems are cluttered, unintuitive, and lack actionable insights, leading to inefficiencies, high operational costs, and compliance risks.",
          },
          {
            type: "text",
            text: "Trace as a platform is a long-term project, dream and passion that emanated from deep field experience and challenges recognized after year of working to optimize logistics, transportation and fleet management challenges in whatever organization or group we’ve been involved with, and looking back at the process and tooling available one word that comes to mind every time is chaotic.",
          },
        ],
      },
      {
        title: "Project Screens",
        content: [
          {
            type: "swipper",
            img_list: [
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1741079489/Trace_1_owexsf.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1741079489/Trace_2_o8e0be.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1741079489/Trace_3_n3xern.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1741079489/Trace_4_ibavzf.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1741079489/Trace_5_ku36hv.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1741079489/Trace_6_iurpdc.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1741079490/Trace_7_dp6rpe.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1741079490/Trace_8_r5vl7y.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1741079490/Trace_9_sso9rd.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1741079490/Trace_10_ibyftv.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1741079490/Trace_11_lhkupr.png",
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
    title: "ExoPrime Exosome Website Design",
    status: "Live",
    image:
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1739286356/Exo-Prime_Cover_r7w5ou.png",
    link: "https://www.exo-prime.com/",    
    content: [
      {
        title: "Project Overview",
        content: [
          {
            type: "text",
            text: "ExoPrime International develops groundbreaking skin rejuvenation solutions based on advanced exosome technology. Nestled in the outskirts of ancient Rome, ExoPrime International is on the cutting edge of exosome-based mesotherapy and bioscience.",
          },
          {
            type: "text",
            text: "The website will serve as an engaging platform for customers to explore products, access beauty tips, and make purchases effortlessly.",
          },
        ],
      },
      {
        title: "Problem Statement",
        content: [
          {
            type: "text",
            text: "Despite offering high-quality cosmetic products, ExoPrime’s previous website faced challenges such as complicated navigation, lack of personalization, and suboptimal mobile performance.",
          },
          {
            type: "text",
            text: "Customers struggled with product discovery, and the checkout process led to high cart abandonment rates. The goal was to revamp the website to create a seamless, immersive, and conversion-driven shopping experience.",
          },
        ],
      },
      {
        title: "Solution Statement",
        content: [
          {
            type: "text",
            text: "ExoPrime’s website redesign successfully elevated the online shopping experience, blending aesthetics with functionality.",
          },
          {
            type: "text",
            text: "By focusing on user-centric design, AI-driven personalization, and seamless mobile integration, the platform now delivers a high-end digital shopping journey that aligns with modern consumer expectations.",
          },
        ],
      },
      {
        title: "Project Prototype",
        content: [
          {
            type: "video",
            url: "https://www.youtube.com/embed/wNS6NQQjNAQ?si=Lxh6hJocbzxT0bB7",
          },
        ],
      },
      {
        title: "Project Screens",
        content: [
          {
            type: "swipper",
            img_list: [
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1739285478/Exo-Prime_1_wfzrvi.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1739285488/Exo-Prime_2_hxbsmn.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1739285490/Exo-Prime_4_tcwntw.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1739285486/Exo-Prime_3_s3jay4.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1739285484/Exo-Prime_5_onfjjb.png",
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
    title: "ZKDigimax Website",
    status: "Live",
    image:
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1727177789/Capturelpoioioi_ruykwt.png",
    link: "https://www.zkdigimax.com/",
    content: [
      {
        title: "Project Overview",
        content: [
          {
            type: "text",
            text: "The ZKDigimax website will serve as a dynamic, user-friendly platform showcasing the company’s AI-powered digital signage solutions.",
          },
          {
            type: "text",
            text: "The goal is to create an engaging, informative, and visually compelling website that highlights ZKDigimax’s innovative technology, industry applications, and business benefits while driving lead generation and customer engagement.",
          },
        ],
      },
      {
        title: "Problem Statement",
        content: [
          {
            type: "text",
            text: "ZKDigimax’s previous website faced several challenges, including complex navigation, lack of product clarity, and an outdated design. Users struggled to find relevant information, and the absence of interactive elements made it difficult for potential clients to understand the benefits of digital signage solutions.",
          },
          {
            type: "text",
            text: "Additionally, poor mobile responsiveness and slow loading speeds negatively impacted user experience and conversion rates.",
          },
        ],
      },
      {
        title: "Solution Statement",
        content: [
          {
            type: "text",
            text: "The ZKDigimax website revamp successfully transformed the user experience by integrating modern UI/UX principles, improving content clarity, and enhancing engagement through interactive elements.",
          },
          {
            type: "text",
            text: "The new website effectively positions ZKDigimax as an industry leader in digital signage solutions.",
          },
        ],
      },
      {
        title: "Project Screens",
        content: [
          {
            type: "swipper",
            img_list: [
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1738848216/Digimax_1_jy3xep.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1738848214/Digimax_2_vliirx.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1738848214/Digimax_3_hk9naw.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1738848214/Digimax_5_rkdxtt.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1738848213/Digimax_6_qpp90q.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1738848213/Digimax_4_bzrhzn.png",
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
    title: "Pews Pro Church Management Software",
    status: "Development Stage",
    image:
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1737529379/Captureytytytre_r_t8sozq.png",
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
          },
        ],
      },
      {
        title: "Problem Statement",
        content: [
          {
            type: "text",
            text: "Managing church operations, member engagement, and event coordination can be overwhelming for religious organizations. Many churches rely on outdated software or manual processes, leading to inefficiencies, communication gaps, and difficulty in tracking finances, attendance, and volunteer activities.",
          },
          {
            type: "text",
            text: "Existing church management solutions often lack user-friendly interfaces, making them challenging for church staff and members to navigate effectively.",
          },
        ],
      },
      {
        title: "Solution Statement",
        content: [
          {
            type: "text",
            text: "Pews Pro is designed to simplify and streamline church management through an intuitive and accessible digital platform.",
          },
          {
            type: "text",
            text: "By implementing a research-driven, user-centric design, Pews Pro enhances church operations, fosters community engagement, and provides a seamless digital experience for church administrators, members, and volunteers.",
          },
        ],
      },
      {
        title: "Project Screens",
        content: [
          {
            type: "swipper",
            img_list: [
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1738844986/Pews_Pro_1_ywnh2a.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1738844986/Pews_Pro_2_co2vwe.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1738844987/Pews_Pro_3_lpyl7p.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1738844985/Pews_Pro_4_sty8om.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1738844984/Pews_Pro_6_q9ed2j.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1738844984/Pews_Pro_5_xklgw0.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1738844984/Pews_Pro_7_dqa9wh.png",
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
    title: "Hugley Dating App Design",
    status: "Development Stage",
    image:
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1738840462/Captureyrrtrt_pnhqyd_mbhtao.png",
    content: [
      {
        title: "Project Overview",
        content: [
          {
            type: "text",
            text: "Hugley is a unique dating app specifically for individuals with intellectual disabilities, designed to foster meaningful connections in a safe and inclusive environment.",
          },
          {
            type: "text",
            text: "Whether you're seeking friendship, companionship, or love, Hugley provides a supportive space where users can interact comfortably and authentically.",
          }
        ],
      },
      {
        title: "Project Overview",
        content: [
          {
            type: "text",
            text: "Hugley is a unique dating app specifically for individuals with intellectual disabilities, designed to foster meaningful connections in a safe and inclusive environment.",
          },
          {
            type: "text",
            text: "Whether you're seeking friendship, companionship, or love, Hugley provides a supportive space where users can interact comfortably and authentically.",
          }
        ],
      },
      {
        title: "Project Overview",
        content: [
          {
            type: "text",
            text: "Hugley is a unique dating app specifically for individuals with intellectual disabilities, designed to foster meaningful connections in a safe and inclusive environment.",
          },
          {
            type: "text",
            text: "Whether you're seeking friendship, companionship, or love, Hugley provides a supportive space where users can interact comfortably and authentically.",
          }
        ],
      },     
      {
        title: "Project Screens",
        content: [
          {
            type: "swipper",
            img_list: [
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1738833832/Hugley_5_hkaat7.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1738833833/Hugley_2_drmt4r.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1738833833/Hugley_3_aicwtg.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1738833874/Hugley_90_v93hik.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1738833836/Hugley_4_ietcvt.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1738833831/Hugley_6_tiorxt.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1738833831/Hugley_8_jlwhrg.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1738833831/Hugley_7_ul3pfh.png",
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
    title: "SG Scoot App Design",
    status: "Development Stage",
    image:
      "https://res.cloudinary.com/delbjwwfy/image/upload/v1726062138/SG_Scoot_Mobile_App_nepvaz.png",
    content: [
      {
        title: "Project Overview",
        content: [
          {
            type: "text",
            text: "SG Scoot App is a user-friendly and visually engaging platform designed to make scooter and bike-sharing services convenient, intuitive, and efficient for users.",
          },
          {
            type: "text",
            text: "The app is built with a clean, modern interface, emphasizing accessibility, functionality, and seamless navigation.",
          },
        ],
      },
      {
        title: "Problem Statement",
        content: [
          {
            type: "text",
            text: "Urban commuters in Singapore face challenges such as heavy traffic congestion, last-mile connectivity issues, and expensive transportation costs.",
          },
          {
            type: "text",
            text: "Existing scooter-sharing services lack intuitive navigation, real-time availability updates, and streamlined payment processes.",
          },
        ],
      },
      {
        title: "Solution Statement",
        content: [
          {
            type: "text",
            text: "The SG Scoot app redesign successfully addressed user pain points, improving usability and engagement.",
          },
          {
            type: "text",
            text: "With a user-friendly interface and intuitive ride-booking experience, the app promotes eco-friendly urban commuting and enhances convenience for all users.",
          },
        ],
      },
      {
        title: "Project Prototype",
        content: [
          {
            type: "video",
            url: "https://www.youtube.com/embed/a5f7l8BIsGs?si=EIt2MwJO7CjhaV15",
          },
        ],
      },
      {
        title: "Project Screens",
        content: [
          {
            type: "swipper",
            img_list: [
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1738933454/iPhone_14_15_Pro_Max_-_43_vqbrca.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1738933455/Frame_67_p2jfn0.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1738933453/Frame_68_pqyjuf.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1738933457/Frame_69_qy6blx.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1738933456/iPhone_14_15_Pro_Max_-_45_r6d76b.png",
              "https://res.cloudinary.com/delbjwwfy/image/upload/v1738933463/iPhone_14_15_Pro_Max_-_44_jxu51c.png",
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
  const [show, setShow] = useState(false);

  const displayProjects = show ? projects : projects.slice(0, 6);

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
    <div className="my-32" id="uiux">
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
        {displayProjects.map((project, index) => (
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
      <Button
        className="my-12 block mx-auto text-base w-1/2 rounded-full h-14"
        size="lg"
        onClick={() => setShow((show) => !show)}
      >
        {show ? "Show less" : "Show more"}
      </Button>
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
  <Dialog open={open} onOpenChange={setOpen}>
    <DialogContent className="w-[90%] sm:max-w-xl max-h-[85%] rounded-3xl">
      <DialogHeader className="flex justify-between items-center">
        <DialogClose asChild>
          <button className="text-gray-500 hover:text-gray-700 focus:outline-none self-end">
            <X size={20} />
          </button>
        </DialogClose>
      </DialogHeader>
      {project?.content?.map((content, index) => (
        <div className="max-w-lg mx-auto w-full" key={index}>
          <h2 className="font-bold text-2xl text-blue text-center mb-5">
            {content.title}
          </h2>
          <div className="space-y-4">
            {content.content.map((item, index) => (
              <>
                {item.type === "text" && "text" in item ? (
                  <p key={index} className="text-justify text-sm md:text-base">
                    {item.text}
                  </p>
                ) : item.type === "video" && "url" in item ? (
                  <div key={index} className="">
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
            <a href={project?.link} target="_blank" rel="noopener noreferrer">
              Explore &rarr;
            </a>
          </Button>
        )}
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export const CustomSwiper = ({ images }: { images: string[] }) => {
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
          <div key={index} className="w-full flex-shrink-0">
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
