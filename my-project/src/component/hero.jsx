import React, { useState } from "react";
import { Navbar } from "./navbar";
import { About } from "./about";

export const HeroSection = () => {
  const [searchFilter, setSearchFilter] = useState("For Sale");

  const handleClick = () => {
    if (searchFilter === "For Sale") {
      setSearchFilter("For Rent");
    } else {
      setSearchFilter("For Sale");
    }
  };
  return (
    <>
      <div className="relative">
        <img className="h-screen md:h-screen absolute" src="./assets/Hero.png" />
        <Navbar />
        <div className="relative  flex flex-col items-center text-white top-20">
          <h1 className="text-center text-4xl md:text-6xl font-bold mb-6">
            Live Green, Live luxuriously.
          </h1>
          <p className="text-base px-4 text-center md:px-0 mb-10 font-medium">
            Discover the advantages of Eco friendly Homes with Our Real Estate
            Agency
          </p>

          <div className="flex flex-row relative  ">
            <select
              defaultValue="For Sale"
              className="flex items-center  bg-[#E5E5E5] text-[#313131] px-2 md:px-4 py-2 rounded-l-full outline-none text-base"
            >
              <option className="text-[#313131]  bg-white">For Sale</option>
              <option className="bg-white  relative">For Rent</option>
            </select>

            <div className=" relative">
              <input
                className="md:w-[30rem] h-16 px-3 text-black outline-none font-sans placeholder:text-sm md:placeholder:text-base"
                type="text"
                placeholder="Enter an address, city, neighborhood or ZIP code"
              />
            </div>

            <div className="flex items-center md:px-6 md:py-2 px-3 py-1 bg-[#27563A] rounded-r-full border-2 border-[#27563A] border-solid">
              <img src="./assets/searchIcon.png" alt="search icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
