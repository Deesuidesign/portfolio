// components/common/Certificate.js
import Image from "next/image";
import Project1 from "../../public/project-1.png";
import Project2 from "../../public/project-2.png";
import Project3 from "../../public/project-3.png";

const Reviews = () => {
  return (
    <div className="my-32" id="graphics">
      <div className="ellipse flex justify-center items-center">
        <span>Graphics</span>
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
        <div className="bg-[#0B78F4] items-center">
          <Image
            className="w-full h-96 object-cover"
            src={Project1}
            alt="avatar"
          />

          <div className="p-4">
            <h3 className="font-bold text-white text-center text-2xl">
              Jumia Website Revamped{" "}
            </h3>
            <p className="font-semibold text-center text-[#190634]">Launched</p>
          </div>
        </div>
        <div className="bg-[#0B78F4] items-center">
          <Image
            className="w-full h-96 object-cover"
            src={Project2}
            alt="avatar"
          />

          <div className="p-4">
            <h3 className="font-bold text-white text-center text-2xl">
              Jumia Website Revamped{" "}
            </h3>
            <p className="font-semibold text-center text-[#190634]">Launched</p>
          </div>
        </div>
        <div className="bg-[#0B78F4] items-center">
          <Image
            className="w-full h-96 object-cover"
            src={Project3}
            alt="avatar"
          />

          <div className="p-4">
            <h3 className="font-bold text-white text-center text-2xl">
              Jumia Website Revamped{" "}
            </h3>
            <p className="font-semibold text-center text-[#190634]">Launched</p>
          </div>
        </div>
        <div className="bg-[#0B78F4] items-center">
          <Image
            className="w-full h-96 object-cover"
            src={Project1}
            alt="avatar"
          />

          <div className="p-4">
            <h3 className="font-bold text-white text-center text-2xl">
              Jumia Website Revamped{" "}
            </h3>
            <p className="font-semibold text-center text-[#190634]">Launched</p>
          </div>
        </div>
        <div className="bg-[#0B78F4] items-center">
          <Image
            className="w-full h-96 object-cover"
            src={Project2}
            alt="avatar"
          />

          <div className="p-4">
            <h3 className="font-bold text-white text-center text-2xl">
              Jumia Website Revamped{" "}
            </h3>
            <p className="font-semibold text-center text-[#190634]">Launched</p>
          </div>
        </div>
        <div className="bg-[#0B78F4] items-center">
          <Image
            className="w-full h-96 object-cover"
            src={Project3}
            alt="avatar"
          />

          <div className="p-4">
            <h3 className="font-bold text-white text-center text-2xl">
              Jumia Website Revamped{" "}
            </h3>
            <p className="font-semibold text-center text-[#190634]">Launched</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
