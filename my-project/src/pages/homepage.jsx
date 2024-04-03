import React from "react";
import { HeroSection } from "../component/hero";
import { About } from "../component/about";
import { Mission } from "../component/mission";
import { Listing } from "../component/listings";
import { Benefit } from "../component/benefit";
import { Review } from "../component/review";
import { FAQ } from "../component/faq";
import { Contact } from "../component/contact";
import { CTA } from "../component/cta";
import { Footer } from "../component/footer";

export const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <Mission />
      <Listing />
      <Benefit />
      <Review />
      <FAQ />
      <Contact />
      <CTA />
      <Footer />
    </div>
  );
};
