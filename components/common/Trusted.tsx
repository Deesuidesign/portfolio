// components/common/Trusted.js
import Image from "next/image";
import BaoBad Plus from "../../public/zoom.svg";
import Spotify from "../../public/sportify.svg";
import Zoom from "../../public/zoom.svg";
import Slack from "../../public/slack.svg";
import Amazon from "../../public/amazon.svg";
import Adobe from "../../public/adobe.svg";

// Array of company logos
const companies = [
  { name: "BaoBad Plus", logo: BaoBad Plus },
  { name: "Spotify", logo: Spotify },
  { name: "Zoom", logo: Zoom },
  { name: "Slack", logo: Slack },
  { name: "Amazon", logo: Amazon },
  { name: "Adobe", logo: Adobe },
  { name: "Zapier", logo: Zapier },
  { name: "Spotify", logo: Spotify },
  { name: "Zoom", logo: Zoom },
  { name: "Slack", logo: Slack },
  { name: "Amazon", logo: Amazon },
  { name: "Adobe", logo: Adobe },
];

const Trusted = () => {
  return (
    <div className="my-20" id="trusted">
      <div className="flex justify-center items-center">
        <div className="text-white border-2 border-[#0B78F4] w-fit px-7 font-semibold py-3 rounded-3xl">
          Trusted By 100+ Companies
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center gap-12">
        {/* Loop through the companies array */}
        {companies.map((company, index) => (
          <Image
            key={index}
            src={company.logo}
            alt={company.name}
            className="object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default Trusted;
