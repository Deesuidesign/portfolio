// components/common/Certificate.js
import Image from "next/image";
import Zapier from "../../public/zapier.svg";
import Spotify from "../../public/sportify.svg";
import Zoom from "../../public/zoom.svg";
import Slack from "../../public/slack.svg";
import Amazon from "../../public/amazon.svg";
import Adobe from "../../public/adobe.svg";

const Reviews = () => {
  return (
    <div className="my-20" id="trusted">
      <div className="flex justify-center items-center">
      <div className="text-white border-2 border-[#0B78F4] w-fit px-7 font-semibold py-3 rounded-3xl">
        Trusted By 100+ Companies
      </div>
      </div>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center gap-12">
        <Image src={Zapier} alt="avatar" />
        <Image src={Spotify} alt="avatar" />
        <Image src={Zoom} alt="avatar" />
        <Image src={Slack} alt="avatar" />
        <Image src={Amazon} alt="avatar" />
        <Image src={Adobe} alt="avatar" />
        <Image src={Zapier} alt="avatar" />
        <Image src={Spotify} alt="avatar" />
        <Image src={Zoom} alt="avatar" />
        <Image src={Slack} alt="avatar" />
        <Image src={Amazon} alt="avatar" />
        <Image src={Adobe} alt="avatar" />
      </div>
    </div>
  );
};

export default Reviews;
