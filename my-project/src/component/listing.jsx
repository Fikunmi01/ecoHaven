import React from "react";
import bullet from "../../public/assets/bullet.png";

export const Listing = () => {
  const saleArray = [
    {
      price: "450,000",
      tag: "FOR SALE",
      bed: "4",
      baths: "1",
      size: 1931,
      postedAt: 2,
      address: "Plot 16 Chief Nwuke Street Trans Amadi Industrial Layout",
      imgSrc:'./assets/Rectangle1.png'
    },
    {
      price: "450,000",
      tag: "FOR SALE",
      bed: "4",
      baths: "1",
      size: 1931,
      postedAt: 2,
      address: "Plot 16 Chief Nwuke Street Trans Amadi Industrial Layout",
      imgSrc:'./assets/Rectangle2.png'

    },
    {
      price: "450,000",
      tag: "FOR SALE",
      bed: "4",
      baths: "1",
      size: 1931,
      postedAt: 2,
      address: "Plot 16 Chief Nwuke Street Trans Amadi Industrial Layout",
      imgSrc:'./assets/Rectangle3.png'

    },
    {
      price: "450,000",
      tag: "FOR SALE",
      bed: "4",
      baths: "1",
      size: 1931,
      postedAt: 2,
      address: "Plot 16 Chief Nwuke Street Trans Amadi Industrial Layout",
      imgSrc:'./assets/Rectangle4.png'

    },
    {
      price: "450,000",
      tag: "FOR SALE",
      bed: "4",
      baths: "1",
      size: 1931,
      postedAt: 2,
      address: "Plot 16 Chief Nwuke Street Trans Amadi Industrial Layout",
      imgSrc:'./assets/Rectangle5.png'

    },

    {
      price: "450,000",
      tag: "FOR SALE",
      bed: "4",
      baths: "1",
      size: 1931,
      postedAt: 2,
      address: "Plot 16 Chief Nwuke Street Trans Amadi Industrial Layout",
      imgSrc:'./assets/Rectangle6.png'

    },
  ];

  const nearbyArray = [{}, {}, {}];

  const mostViewed = [{}, {}, {}];

  return (
    <>
      <div className="top-96 relative px-20 py-10 font-sans">
        <h1 className="font-bold text-3xl text-[#08110C] mb-4">
          Explore Eco-friendly Homes Near You.
        </h1>

        <div className="flex flex-row text-base font-semibold gap-5 text-[#27563A] mb-4">
          <p className="">New to market</p>
          <p>Nature Nearby</p>
          <p>Most viewed homes</p>
        </div>

        <div className="grid grid-cols-3 gap-x-10 gap-y-10">
          {saleArray.map((item) => {
            return (
              <div className="border-solid border-t-2 border-b-2 border-[#ccc] py-3 font-sans">
                <div className="flex flex-row justify-between mb-4">
                  <p className="font-bold text-lg text-[#08110C]">
                    ${item.price}
                  </p>
                  <p className="text-xs font-bold bg-[#27563A] px-2 py-1 text-white flex items-center rounded-full">
                    FOR SALE
                  </p>
                </div>

                <div className="flex flex-row justify-between items-center mb-4">
                  <p className="flex items-center text-sm text-[#313131] gap-1 font-medium">
                    {item.bed}beds <img src={bullet} alt="" /> {item.baths}
                    baths <img src={bullet} alt="" /> {item.size}sqft{" "}
                    <img src={bullet} alt="" /> Eco-friendly
                  </p>

                  <p className="font-medium text-sm text-[#313131] flex items-center gap-1">
                    <img src="./assets/clockIcon.png" alt="" />
                    2years ago
                  </p>
                </div>

                <div className="mb-4">
                  <img src={item.imgSrc} alt="" />
                </div>

                <div className="flex flex-row items-center justify-between">
                  <p className="w-2/3 text-base font-medium text-[#27563A] underline">
                    Plot 16 Chief Nwuke Street Trans Amadi Industrial Layout
                  </p>

                  <img src="./assets/likeIcon.png" alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
