import React from "react";

export const Mission = () => {
  return (
    <>
      <div className="relative md:mb-5 top-72 md:top-96 md:px-20 md:py-10 flex flex-col md:flex-row-reverse md:gap-16">
        <div className="md:w-1/2 px-4">
          <div className="flex mb-4 flex-row items-center gap-5">
            <img src="./assets/line.png" alt="" />
            <p className="font-sans font-semibold text-sm text-[#27563A]">
              OUR MISSION
            </p>
          </div>

          <h2 className="font-sans mb-4 font-bold text-[#08110C] text-2xl md:text-3xl">
            Build a Better Future with Eco-Friendly Homes
          </h2>

          <p className="text-base font-medium mb-10 text-[#313131]">
            The agency's mission is to provide clients with a selection of
            properties that meet high environmental standards, while also
            providing a comfortable and luxurious lifestyle.
          </p>

          <button className="flex text-sm flex-row bg-[#27563A] gap-2 px-4 py-2 text-white rounded-full items-center mb-10 md:mb-0">
            Learn More <img src="./assets/arrowLink.png" alt="" />
          </button>
        </div>

        <div className="flex justify-center">
          <img src="./assets/flexImg2.png" className="hidden md:flex" alt="" />
          <img src="./assets/flexMobile2.png" className="md:hidden mb-10 md:mb-0" alt="" />
        </div>
      </div>
    </>
  );
};
