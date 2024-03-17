import React from "react";

export const About = () => {
  return (
    <>
      <div className="mb-5 relative top-96 px-20 py-10 flex flex-row gap-16">
        <div className="w-1/2">
          <div className="flex mb-4 flex-row items-center gap-5">
            <img src="./assets/line.png" alt="" />
            <p className="font-sans font-semibold text-sm text-[#27563A]">
              WHO WE ARE
            </p>
          </div>

          <h2 className="font-sans mb-4 font-bold text-[#08110C] text-3xl">
            Discover Sustainable Luxury Living with EcoHaven Realty.
          </h2>

          <p className="text-base font-medium mb-10 text-[#313131]">
            EcoHaven Realty is a real estate agency specialising in eco-friendly
            homes and sustainable living. We offer a range of eco-friendly
            properties, including energy-efficient homes, homes built with
            eco-friendly materials, and homes equipped with sustainable
            technologies such as solar panels.
          </p>

          <button className="flex flex-row bg-[#27563A] gap-2 px-4 py-2 text-sm text-white rounded-full items-center">
            Our Company <img src="./assets/arrowLink.png" alt="" />
          </button>
        </div>

        <div>
          <img src="./assets/flexImg.png" alt="" />
        </div>
      </div>
    </>
  );
};
