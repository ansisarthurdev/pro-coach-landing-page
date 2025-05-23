import React from "react";

//component for the landing page
import Hero from "../components/landing/Hero";
import About from "../components/landing/About";
import Matters from "../components/landing/Matters";
import HowItWorks from "../components/landing/HowItWorks";
import Testimonials from "../components/landing/Testimonials";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <About />
      <Matters />
      <HowItWorks />
      <Testimonials />
    </>
  );
};

export default LandingPage;
