import React from "react";

export const Footer = () => {
  return (
    <>
      <div className="relative top-72 md:top-96 md:px-20 bg-[#27563A] text-white px-4 py-10 flex flex-col md:flex-row justify-between">
        <div>
          <div className="mb-6">
            <img src="./assets/logo.png" alt="" />
          </div>
          <div className="flex gap-4 mb-10">
            <img src="./assets/facebookIcon.png" alt="" />
            <img src="./assets/linkedinIcon.png" alt="" />
            <img src="./assets/twitterIcon.png" alt="" />
            <img src="./assets/igIcon.png" alt="" />
          </div>
          <button className="py-2 px-4 rounded-full text-[#213123] bg-[#E4E5DF] mb-10 md:mb-24">
            Contact Us
          </button>
          <p className="font-medium text-sm text-[#D3D6D3] hidden md:flex">Copyright 2022. All rights reserved</p>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-4">Navigation</h2>
          <ul className="text-base font-medium text-[#D3D6D3] flex gap-y-4 flex-col mb-4 md:mb-0">
            <li>Company</li>
            <li>Home</li>
            <li>Contact Us</li>
            <li>Blog</li>
            <li>Properties</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-4">Company</h2>
          <ul className="text-base font-medium text-[#D3D6D3] flex gap-y-4 flex-col mb-4 md:mb-0">
            <li>About us</li>
            <li>Our mission and vision</li>
            <li>Our team</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-4">Support</h2>
          <ul className="text-base font-medium text-[#D3D6D3] flex gap-y-4 flex-col mb-4 md:mb-0">
            <li>Contact us</li>
            <li>Login</li>
          </ul>
        </div>
      </div>
    </>
  );
};
