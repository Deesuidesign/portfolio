// components/common/Certificate.js
import Image from "next/image";
import Avatar from "../../public/avatar.svg";

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
        <div className="bg-white px-6 py-8 items-center rounded-3xl">
          <div className="flex ">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
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
          <p className="mt-5">
            We will also facilitate the business marketing of these products
            with our SEO experts so that they become a ready to use website &
            help sell product from company
          </p>
          <div className="flex mt-4 items-center space-x-3">
            <Image src={Avatar} alt="avatar" />
            <div className="">
              <h3 className="font-bold">Google</h3>
              <p className="text-sm text-gray-500">
                Foundation of User Experience Design
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white px-6 py-8 items-center rounded-3xl">
          <div className="flex ">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
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
          <p className="mt-5">
            We will also facilitate the business marketing of these products
            with our SEO experts so that they become a ready to use website &
            help sell product from company
          </p>
          <div className="flex mt-4 items-center space-x-3">
            <Image src={Avatar} alt="avatar" />
            <div className="">
              <h3 className="font-bold">Google</h3>
              <p className="text-sm text-gray-500">
                Foundation of User Experience Design
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white px-6 py-8 items-center rounded-3xl">
          <div className="flex ">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
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
          <p className="mt-5">
            We will also facilitate the business marketing of these products
            with our SEO experts so that they become a ready to use website &
            help sell product from company
          </p>
          <div className="flex mt-4 items-center space-x-3">
            <Image src={Avatar} alt="avatar" />
            <div className="">
              <h3 className="font-bold">Google</h3>
              <p className="text-sm text-gray-500">
                Foundation of User Experience Design
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white px-6 py-8 items-center rounded-3xl">
          <div className="flex ">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
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
          <p className="mt-5">
            We will also facilitate the business marketing of these products
            with our SEO experts so that they become a ready to use website &
            help sell product from company
          </p>
          <div className="flex mt-4 items-center space-x-3">
            <Image src={Avatar} alt="avatar" />
            <div className="">
              <h3 className="font-bold">Google</h3>
              <p className="text-sm text-gray-500">
                Foundation of User Experience Design
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white px-6 py-8 items-center rounded-3xl">
          <div className="flex ">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
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
          <p className="mt-5">
            We will also facilitate the business marketing of these products
            with our SEO experts so that they become a ready to use website &
            help sell product from company
          </p>
          <div className="flex mt-4 items-center space-x-3">
            <Image src={Avatar} alt="avatar" />
            <div className="">
              <h3 className="font-bold">Google</h3>
              <p className="text-sm text-gray-500">
                Foundation of User Experience Design
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white px-6 py-8 items-center rounded-3xl">
          <div className="flex ">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
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
          <p className="mt-5">
            We will also facilitate the business marketing of these products
            with our SEO experts so that they become a ready to use website &
            help sell product from company
          </p>
          <div className="flex mt-4 items-center space-x-3">
            <Image src={Avatar} alt="avatar" />
            <div className="">
              <h3 className="font-bold">Google</h3>
              <p className="text-sm text-gray-500">
                Foundation of User Experience Design
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
