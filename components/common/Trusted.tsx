// components/common/Trusted.js
import Image from "next/image";

const companies = [
  { name: "Jumia", logo: "https://res.cloudinary.com/delbjwwfy/image/upload/v1726056708/iotms51iydugdan84vp0.png" },
  { name: "BaoBad Plus", logo: "https://res.cloudinary.com/delbjwwfy/image/upload/v1726056450/lu6tcgjzvzbqjwoknooo.svg" },
  { name: "Roducate", logo: "https://res.cloudinary.com/delbjwwfy/image/upload/v1726056452/blqpiqqzats5astu57o8.svg" },
  { name: "ZKTeco", logo: "https://res.cloudinary.com/delbjwwfy/image/upload/v1726056454/ysycuu2eozauz1eng050.svg" },
  { name: "Simpu", logo: "https://res.cloudinary.com/delbjwwfy/image/upload/v1726056453/mcabmdfedbovaemldkzo.svg" },
  { name: "FlowWave Inc", logo: "https://res.cloudinary.com/delbjwwfy/image/upload/v1726056451/n4jr30qmompcmywolfla.svg" },
  { name: "Spark Xplorer", logo: "https://res.cloudinary.com/delbjwwfy/image/upload/v1726056455/ucupwtrkswhk3yiligvi.svg" },
  { name: "1401 Apartment", logo: "https://res.cloudinary.com/delbjwwfy/image/upload/v1726056449/t18vxcz2dohrhsq0qd2w.svg" },
  { name: "TSL Logistic", logo: "https://tsllimited.com/wp-content/uploads/2018/11/TSL-Limited-Logo.png" },
  { name: "Riverdean", logo: "https://res.cloudinary.com/delbjwwfy/image/upload/v1726056452/bvhbfbilhh8ufthx2gma.svg" },
  { name: "SB Telecoms", logo: "https://res.cloudinary.com/delbjwwfy/image/upload/v1726056453/y1j3ljfisbquayj4r2z9.svg" },
  { name: "Living", logo: "https://res.cloudinary.com/delbjwwfy/image/upload/v1726056451/cvbojlojfuqygoqrrc8v.svg" },
];

const Trusted = () => {
  return (
    <div className="my-20" id="trusted">
      <div className="flex justify-center items-center">
        <div className="text-white border-2 border-[#0B78F4] w-fit px-7 font-semibold py-3 rounded-3xl">
          Trusted By 50+ Companies
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
            width={150}
            height={100}
          />
        ))}
      </div>
    </div>
  );
};

export default Trusted;

