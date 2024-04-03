import React from "react";

export const CTA = () => {
  return (
    <>
      <div className="px-20 py-16 bg-white relative top-96">
        <div className="relative bg-white">
          <img className="relative" src="./assets/CTAScreen.png" alt="" />

          <div className="absolute top-1/4 px-16 py-10 rounded-2xl bg-white left-1/4 text-center mx-auto">
            <h1 className="text-[#08110C] font-bold text-3xl w-3/4 mb-4 m-auto">Ready to find your eco-friendly home?</h1>
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
