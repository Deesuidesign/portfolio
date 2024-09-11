// components/common/Reviews.js
import Image from "next/image";
import Avatar from "../../public/avatar.svg";

// Array of reviews
const reviews = [
  {
    text: "The design is absolutely stunning! The creativity and attention to detail are impressive. The visuals are striking and really capture the essence of our brand.",
    name: "Helen Davies",
    description: "Product Manager, Flowwave Inc",
  },
  {
    text: "The design communicates our message clearly and effectively. The layout is clean, and the hierarchy of information is easy to follow. Our audience will have no trouble understanding what we’re about",
    name: "Evans Thomas",
    description: "Product Manager, SG Scoot",
  },
  {
    text: "The technical support and UI/UX design they delivered are top-notch, improving our customer retention significantly.",
    name: "Amazon",
    description: "AWS Cloud Solutions Architect",
  },
  {
    text: "Working with them has been a great experience. They really understand user needs and deliver high-quality solutions.",
    name: "Spotify",
    description: "Music App Development Team",
  },
  {
    text: "Their attention to detail in UX design and SEO strategies boosted our traffic and sales enormously.",
    name: "Adobe",
    description: "Creative Cloud Team",
  },
  {
    text: "The results exceeded our expectations. They provide fast and reliable service.",
    name: "Slack",
    description: "Enterprise Communications",
  },
];

const Reviews = () => {
  return (
    <div className="my-20" id="reviews">
      <div className="ellipse flex justify-center items-center">
        <span>Reviews</span>
      </div>
      <h2 className="mt-4 text-white text-3xl md:text-4xl font-semibold">
        What Our Customer Says <span className="text-[#0B78F4]">About Us</span>
      </h2>

      <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Loop through the reviews array */}
        {reviews.map((review, index) => (
          <div key={index} className="bg-white px-6 py-8 items-center rounded-3xl">
            <div className="flex ">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.3191 0L9.35448 5.08754L14.6376 5.52786L10.6124 9.11246L11.8422 14.4721L7.3191 11.6L2.79605 14.4721L4.0258 9.11246L0.000647545 5.52786L5.28373 5.08754L7.3191 0Z"
                    fill="#FE8B75"
                  />
                </svg>
              ))}
            </div>
            <p className="mt-5">{review.text}</p>
            <div className="flex mt-4 items-center space-x-3">
              <Image src={Avatar} alt="avatar" />
              <div className="">
                <h3 className="font-bold">{review.name}</h3>
                <p className="text-sm text-gray-500">{review.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
