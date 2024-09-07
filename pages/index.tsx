// pages/dashboard/index.js

import Layout from "../components/Layout";
import Contact from "../components/common/Contact";
import Certification from "../components/common/Certification";
import Reviews from "../components/common/Reviews";
import Trusted from "../components/common/Trusted";
import Graphics from "../components/common/Graphics";
import UIUX from "../components/common/UIUX";
import Services from "../components/common/Services";
import Hero from "../components/common/Hero";


import { useRouter } from "next/router";

const Dashboard = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/accounts/send-money");
  };
  return (
    <Layout>
      <div className="mt-2">
        <div className="">
          <Hero />
          <Services />
          <UIUX />
          <Graphics />
          <Trusted />
          <Reviews />
          <Certification />
          <Contact />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
