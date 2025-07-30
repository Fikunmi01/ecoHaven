import React, { useState } from "react";

const saleArray = [
  {
    id: 0,
    price: "450,000",
    tag: "FOR SALE",
    bed: "4",
    baths: "1",
    size: 1931,
    postedAt: 2,
    address: "Plot 16 Chief Nwuke Street Trans Amadi Industrial Layout",
    imgSrc: "./assets/Rectangle1.png",
    status: "",
  },
  {
    id: 1,
    price: "450,000",
    tag: "FOR SALE",
    bed: "4",
    baths: "1",
    size: 1931,
    postedAt: 3,
    address: "44, Arinola Street, Ori Okuta. Ikorodu",
    imgSrc: "./assets/Rectangle2.png",
    status: "New",
  },
  {
    id: 2,
    price: "450,000",
    tag: "FOR SALE",
    bed: "4",
    baths: "1",
    size: 1931,
    postedAt: 1,
    address: "5 Olaide Tomori Street, off Simbiat Abiola Road, Ikeja",
    imgSrc: "./assets/Rectangle3.png",
    status: "New",
  },
  {
    id: 3,
    price: "450,000",
    tag: "FOR SALE",
    bed: "4",
    baths: "1",
    size: 1931,
    postedAt: 4,
    address: "31,Herbert Macaulay Way, Sabo, Yaba",
    imgSrc: "./assets/Rectangle4.png",
    status: "",
  },
  {
    id: 4,
    price: "450,000",
    tag: "FOR SALE",
    bed: "4",
    baths: "1",
    size: 1931,
    postedAt: 2,
    address: "5, Dele Ogundele Street, Oregun, Ikeja",
    imgSrc: "./assets/Rectangle5.png",
    status: "New",
  },

  {
    id: 5,
    price: "450,000",
    tag: "FOR SALE",
    bed: "4",
    baths: "1",
    size: 1931,
    postedAt: 3,
    address: "10 Lekki Phase 1, P.O. Box 10141, Marina",
    imgSrc: "./assets/Rectangle6.png",
    status: "New",
  },
];

const nearbyArray = [
  {
    id: 0,
    price: "450,000",
    tag: "FOR SALE",
    bed: "4",
    baths: "1",
    size: 1931,
    postedAt: 2,
    address: "Plot 16 Chief Nwuke Street Trans Amadi Industrial Layout",
    imgSrc: "./assets/Rectangle3.png",
    status: "",
  },
  {
    id: 1,
    price: "450,000",
    tag: "FOR SALE",
    bed: "4",
    baths: "1",
    size: 1931,
    postedAt: 3,
    address: "44, Arinola Street, Ori Okuta. Ikorodu",
    imgSrc: "./assets/Rectangle2.png",
    status: "New",
  },
  {
    id: 2,
    price: "450,000",
    tag: "FOR SALE",
    bed: "4",
    baths: "1",
    size: 1931,
    postedAt: 1,
    address: "5 Olaide Tomori Street, off Simbiat Abiola Road, Ikeja",
    imgSrc: "./assets/Rectangle3.png",
    status: "New",
  },
  {
    id: 3,
    price: "450,000",
    tag: "FOR SALE",
    bed: "4",
    baths: "1",
    size: 1931,
    postedAt: 4,
    address: "31,Herbert Macaulay Way, Sabo, Yaba",
    imgSrc: "./assets/Rectangle1.png",
    status: "",
  },
  {
    id: 4,
    price: "450,000",
    tag: "FOR SALE",
    bed: "4",
    baths: "1",
    size: 1931,
    postedAt: 2,
    address: "5, Dele Ogundele Street, Oregun, Ikeja",
    imgSrc: "./assets/Rectangle5.png",
    status: "New",
  },

  {
    id: 5,
    price: "450,000",
    tag: "FOR SALE",
    bed: "4",
    baths: "1",
    size: 1931,
    postedAt: 3,
    address: "10 Lekki Phase 1, P.O. Box 10141, Marina",
    imgSrc: "./assets/Rectangle6.png",
    status: "New",
  },
];


const mostViewed = [
  {
    id: 0,
    price: "450,000",
    tag: "FOR SALE",
    bed: "4",
    baths: "1",
    size: 1931,
    postedAt: 2,
    address: "Plot 16 Chief Nwuke Street Trans Amadi Industrial Layout",
    imgSrc: "./assets/Rectangle6.png",
    status: "",
  },
  {
    id: 1,
    price: "450,000",
    tag: "FOR SALE",
    bed: "4",
    baths: "1",
    size: 1931,
    postedAt: 3,
    address: "44, Arinola Street, Ori Okuta. Ikorodu",
    imgSrc: "./assets/Rectangle2.png",
    status: "New",
  },
  {
    id: 2,
    price: "450,000",
    tag: "FOR SALE",
    bed: "4",
    baths: "1",
    size: 1931,
    postedAt: 1,
    address: "5 Olaide Tomori Street, off Simbiat Abiola Road, Ikeja",
    imgSrc: "./assets/Rectangle3.png",
    status: "New",
  },
  {
    id: 3,
    price: "450,000",
    tag: "FOR SALE",
    bed: "4",
    baths: "1",
    size: 1931,
    postedAt: 4,
    address: "31,Herbert Macaulay Way, Sabo, Yaba",
    imgSrc: "./assets/Rectangle4.png",
    status: "",
  },
  {
    id: 4,
    price: "450,000",
    tag: "FOR SALE",
    bed: "4",
    baths: "1",
    size: 1931,
    postedAt: 2,
    address: "5, Dele Ogundele Street, Oregun, Ikeja",
    imgSrc: "./assets/Rectangle5.png",
    status: "New",
  },

  {
    id: 5,
    price: "450,000",
    tag: "FOR SALE",
    bed: "4",
    baths: "1",
    size: 1931,
    postedAt: 3,
    address: "10 Lekki Phase 1, P.O. Box 10141, Marina",
    imgSrc: "./assets/Rectangle1.png ",
    status: "New",
  },
];




export const Listing = () => {
  const [activeTab, setActiveTab] = useState("new");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className=" top-72 px-4 py-2 md:top-96 relative md:px-20 md:py-10 font-sans bg-[#fff]">
        <h1 className="font-bold text-2xl md:text-3xl text-[#08110C] mb-4">
          Explore Eco-friendly Homes Near You.
        </h1>

        <div className=" flex text-sm border-b-2 md:flex-row md:text-base font-semibold overflow-x-scroll md:overflow-hidden scroll scrollbar-hide gap-6 md:gap-5 border-[#ccc] md:pb-8 text-[#27563A] ">
          <p
            className={`border-b-2 cursor-pointer flex-none ${
              activeTab === "new" ? "border-[#27563A]  pb-1" : "border-none"
            }`}
            onClick={() => handleTabChange("new")}
          >
            New to market
          </p>
          <p
            className={`border-b-2 cursor-pointer md:w-fit flex-none ${
              activeTab === "nearby" ? "border-[#27563A] pb-1" : "border-none"
            }`}
            onClick={() => handleTabChange("nearby")}
          >
            Nature Nearby
          </p>

          <p
            className={`border-b-2 cursor-pointer flex-none md:w-fit  ${
              activeTab === "mostViewed" ? "border-[#27563A] pb-1" : "border-none"
            }`}
            onClick={() => handleTabChange("mostViewed")}
          >
            Most viewed homes
          </p>
        </div>

        <div className="md:grid md:grid-cols-3 md:gap-x-10 gap-y-2">
          {activeTab === "new" &&
            saleArray.map((item, id) => {
              return (
                <div
                  key={item.id}
                  className="border-solid border-b-2 border-[#ccc] py-3 font-sans"
                >
                  <div className="flex flex-row justify-between mb-4">
                    <div className="flex items-center gap-2 text-[#08110C]">
                      <p className="font-bold text-lg">${item.price}</p>
                      <p className="text text-sm">{item.status}</p>
                    </div>
                    <p className="text-xs font-bold bg-[#27563A] px-2 py-1 text-white flex items-center rounded-full">
                      FOR SALE
                    </p>
                  </div>

                  <div className="flex flex-row justify-between items-center mb-4">
                    <p className="flex items-center text-xs text-[#313131] gap-1 font-medium">
                      {item.bed}beds <img src="./assets/bullet.png" alt="" />{" "}
                      {item.baths}
                      baths <img src="./assets/bullet.png" alt="" /> {item.size}
                      sqft <img src="./assets/bullet.png" alt="" /> Eco-friendly
                    </p>

                    <p className="font-medium text-sm text-[#313131] flex items-center gap-1">
                      <img src="./assets/clockIcon.png" alt="" />
                      {item.postedAt}year ago
                    </p>
                  </div>

                  <div className="mb-4">
                    <img src={item.imgSrc} alt="" />
                  </div>

                  <div className="flex flex-row items-center justify-between">
                    <p className="w-2/3 text-base font-medium text-[#27563A] underline">
                      {item.address}
                    </p>

                    <img src="./assets/likeIcon.png" alt="" />
                  </div>
                </div>
              );
            })}

          {activeTab === "nearby" &&
            nearbyArray.map((item, id) => {
              return (
                <div
                  key={item.id}
                  className="border-solid border-b-2 border-[#ccc] py-3 font-sans"
                >
                  <div className="flex flex-row justify-between mb-4">
                    <div className="flex items-center gap-2 text-[#08110C]">
                      <p className="font-bold text-lg">${item.price}</p>
                      <p className="text text-sm">{item.status}</p>
                    </div>
                    <p className="text-xs font-bold bg-[#27563A] px-2 py-1 text-white flex items-center rounded-full">
                      FOR SALE
                    </p>
                  </div>

                  <div className="flex flex-row justify-between items-center mb-4">
                    <p className="flex items-center text-xs text-[#313131] gap-1 font-medium">
                      {item.bed}beds <img src="./assets/bullet.png" alt="" />{" "}
                      {item.baths}
                      baths <img src="./assets/bullet.png" alt="" /> {item.size}
                      sqft <img src="./assets/bullet.png" alt="" /> Eco-friendly
                    </p>

                    <p className="font-medium text-sm text-[#313131] flex items-center gap-1">
                      <img src="./assets/clockIcon.png" alt="" />
                      {item.postedAt}year ago
                    </p>
                  </div>

                  <div className="mb-4">
                    <img src={item.imgSrc} alt="" />
                  </div>

                  <div className="flex flex-row items-center justify-between">
                    <p className="w-2/3 text-base font-medium text-[#27563A] underline">
                      {item.address}
                    </p>

                    <img src="./assets/likeIcon.png" alt="" />
                  </div>
                </div>
              );
            })}

          {activeTab === "mostViewed" &&
            mostViewed.map((item, id) => {
              return (
                <div
                  key={item.id}
                  className="border-solid border-b-2 border-[#ccc] py-3 font-sans"
                >
                  <div className="flex flex-row justify-between mb-4">
                    <div className="flex items-center gap-2 text-[#08110C]">
                      <p className="font-bold text-lg">${item.price}</p>
                      <p className="text text-sm">{item.status}</p>
                    </div>
                    <p className="text-xs font-bold bg-[#27563A] px-2 py-1 text-white flex items-center rounded-full">
                      FOR SALE
                    </p>
                  </div>

                  <div className="flex flex-row justify-between items-center mb-4">
                    <p className="flex items-center text-xs text-[#313131] gap-1 font-medium">
                      {item.bed}beds <img src="./assets/bullet.png" alt="" />{" "}
                      {item.baths}
                      baths <img src="./assets/bullet.png" alt="" /> {item.size}
                      sqft <img src="./assets/bullet.png" alt="" /> Eco-friendly
                    </p>

                    <p className="font-medium text-sm text-[#313131] flex items-center gap-1">
                      <img src="./assets/clockIcon.png" alt="" />
                      {item.postedAt}year ago
                    </p>
                  </div>

                  <div className="mb-4">
                    <img src={item.imgSrc} alt="" />
                  </div>

                  <div className="flex flex-row items-center justify-between">
                    <p className="w-2/3 text-base font-medium text-[#27563A] underline">
                      {item.address}
                    </p>

                    <img src="./assets/likeIcon.png" alt="" />
                  </div>
                </div>
              );
            })}
        </div>

        <div className="relative top-6 mb-20 md:mb-5 text-center">
          <p className="bg-[#27563A] flex items-center gap-3 w-40 py-2 text-white rounded-full m-auto justify-center px-4">
            Browse Now <img src="./assets/arrowLink.png" />
          </p>
        </div>
      </div>
    </>
  );
};
