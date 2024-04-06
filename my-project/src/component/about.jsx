import React from "react";

export const About = () => {
  return (
    <>
      <div className="md:mb-5 relative top-52 py-2 md:top-96 md:px-20 md:py-10 flex flex-col md:flex-row gap-16">
        <div className="md:w-1/2  px-4">
          <div className="flex mb-4 flex-row items-center gap-5">
            <img src="./assets/line.png" alt="" />
            <p className="font-sans font-semibold text-sm text-[#27563A]">
              WHO WE ARE
            </p>
          </div>

          <h2 className="font-sans mb-2 md:mb-4 font-bold text-[#08110C] text-2xl md:text-3xl">
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
          <img src="./assets/flexImg.png" className="hidden md:flex" alt="" />
          <img
            src="./assets/flexMobile.png"
            className="md:hidden mb-10"
            alt=""
          />
        </div>
      </div>
    </>
  );
};
