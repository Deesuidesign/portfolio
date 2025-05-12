// components/common/Trusted.js
import Image from "next/image";

const companies = [
  { name: "Jumia", logo: "https://res.cloudinary.com/delbjwwfy/image/upload/v1726056708/iotms51iydugdan84vp0.png" },
  { name: "MTN", logo: "https://res.cloudinary.com/delbjwwfy/image/upload/v1747040018/Mtn_Logoew_rghsya.png" },
  { name: "BaoBad Plus", logo: "https://res.cloudinary.com/delbjwwfy/image/upload/v1726056450/lu6tcgjzvzbqjwoknooo.svg" },
  { name: "Roducate", logo: "https://res.cloudinary.com/delbjwwfy/image/upload/v1726056452/blqpiqqzats5astu57o8.svg" },
  { name: "ZKTeco", logo: "https://res.cloudinary.com/delbjwwfy/image/upload/v1726056454/ysycuu2eozauz1eng050.svg" },
  { name: "Simpu", logo: "https://res.cloudinary.com/delbjwwfy/image/upload/v1726056453/mcabmdfedbovaemldkzo.svg" },
  { name: "Avetium", logo: "https://res.cloudinary.com/delbjwwfy/image/upload/v1744201947/Avetium_Logo_Guide_tvatvv.png" },
  { name: "Spark Xplorer", logo: "https://res.cloudinary.com/delbjwwfy/image/upload/v1726056455/ucupwtrkswhk3yiligvi.svg" },
  { name: "Tri Edge Technologies", logo: "https://res.cloudinary.com/delbjwwfy/image/upload/v1737453334/Tri-Edge_Technologies_Logotrt_uo3o0l.png" },
  { name: "DeData Hub", logo: "https://res.cloudinary.com/delbjwwfy/image/upload/v1747039650/DeDataHub_igmxsw.png" },
  { name: "Podium App", logo: "https://res.cloudinary.com/delbjwwfy/image/upload/v1739542076/Podium_Betting_App_logo_qo3pfp.svg" },
  { name: "SB Telecoms", logo: "https://res.cloudinary.com/delbjwwfy/image/upload/v1726056453/y1j3ljfisbquayj4r2z9.svg" },
  { name: "Living", logo: "https://res.cloudinary.com/delbjwwfy/image/upload/v1726056451/cvbojlojfuqygoqrrc8v.svg" },
  { name: "AirBNB", logo: "https://res.cloudinary.com/delbjwwfy/image/upload/v1747041277/Exo_Prime_lpnnrp.png" },
  { name: "Exo Prime", logo: "https://res.cloudinary.com/delbjwwfy/image/upload/v1747042451/Exo_Prime_kvqchl.png" },
  { name: "Otiz Technology", logo: "https://res.cloudinary.com/delbjwwfy/image/upload/v1747041277/Otiz_Logo_iykkaq.png" },
  { name: "ZKDigimax", logo: "https://res.cloudinary.com/delbjwwfy/image/upload/v1747042450/digimax_qsdiwi.png" },
  { name: "SG Scoot App", logo: "https://res.cloudinary.com/delbjwwfy/image/upload/v1747041278/SG_d4d71p.png" },
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
            width={150}
            height={100}
          />
        ))}
      </div>
    </div>
  );
};

export default Trusted;

