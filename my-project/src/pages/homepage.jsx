import React from "react";
import { HeroSection } from "../component/hero";
import { About } from "../component/about";
import { Mission } from "../component/mission";
import { Listing } from "../component/listing";

export const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <Mission/>
      <Listing/>
    </div>
  );
};
