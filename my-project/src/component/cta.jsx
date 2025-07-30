import React from "react";

export const CTA = () => {
  return (
    <>
      <div className="md:px-20 md:py-16 bg-white relative top-72 md:top-96">
        <div className="relative bg-white flex justify-center">
          <img
            className="hidden md:flex relative"
            src="./assets/CTAScreen.png"
            alt=""
          />
          <img src="./assets/CTAMobile.png" className="md:hidden w-full" alt="" />

          <div className="absolute top-1/4 mx-4 py-6 px-8 md:px-16 md:py-10 rounded-2xl bg-white text-center">
            <h1 className="text-[#08110C] font-bold text-2xl md:text-3xl md:w-3/4 mb-4 m-auto">
              Ready to find your eco-friendly home?
            </h1>
            <p className="text-[#313131] font-medium text-base mb-4">
              We have homes in 20+ cities across the country to choose from!
            </p>
            <button className="bg-[#27563A] py-2 px-4 rounded-full text-white text-sm">
              Browse homes <img src="./assets/arrowLink/.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
