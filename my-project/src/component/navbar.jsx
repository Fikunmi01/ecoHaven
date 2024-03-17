import React from "react";

export const Navbar = () => {
  return (
    <>
      <div className="relative flex flex-row items-center justify-between px-14 py-8 font-sans">
        <div>
          <img src="./assets/logo.png" alt="" />
        </div>

        <div>
          <ul className="flex flex-row items-center gap-5 text-white">
            <li>Home</li>
            <li>Company</li>
            <li>Properties</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="flex gap-2 text-white">
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
