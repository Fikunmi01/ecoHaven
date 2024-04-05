import React, { useState } from "react";

export const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const handleMenu = () => {
    setOpenNav(!openNav);
  };

  return (
    <>
      <div className="relative flex px-4 py-6 md:flex-row items-center justify-between md:px-14 md:py-8 font-sans">
        <div>
          <img src="./assets/logo.png" alt="" />
        </div>

        <div>
          <div className="md:hidden">
            {openNav ? (
              <i className="uil uil-multiply text-white text-2xl" onClick={()=> handleMenu(false)}></i>
            ) : (
              <img
                src="./assets/hamburgerIcon.png"
                onClick={() => handleMenu(true)}
                alt=""
              />
            )}
          </div>

          {openNav && (
            <>
              <ul className="md:flex absolute md:flex-row md:items-center md:gap-5 left-0 w-full h-screen z-10 bg-[#E4E5DF] text-[#0110C] top-16 px-4 text-center gap-y-10 py-10 flex flex-col font-medium">
                <li>Home</li>
                <li>Company</li>
                <li>Properties</li>
                <li>Blog</li>
                <li>Contact Us</li>
                <button className="px-3 py-1 rounded-full border-solid border-2 border-white ">
                  Login
                </button>
                <button className="border-solid border-2 px-3 border-[#27563A] bg-[#27563A] py-1 rounded-full text-white">
                  Create an account
                </button>
              </ul>
            </>
          )}

          <ul className="md:flex hidden md:flex-row md:items-center md:gap-5 text-white">
            <li>Home</li>
            <li>Company</li>
            <li>Properties</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="hidden md:flex md:gap-2 text-white">
          <button className="px-3 py-1 rounded-full border-solid border-2 border-white">
            Login
          </button>
          <button className="border-solid border-2 px-3 border-[#27563A] bg-[#27563A] py-1 rounded-full">
            Create an account
          </button>
        </div>
      </div>
    </>
  );
};
