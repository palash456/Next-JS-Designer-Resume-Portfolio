import React from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";

import HeroSection from "@components/sections/Hero";
import CountersSection from "@components/sections/Counters";
import ServicesSection from "@components/sections/Services";
import EducationSection from "@/src/app/_components/sections/educaton";
import PartnersSection from "@components/sections/Partners";

const TestimonialSlider = dynamic( () => import("@components/sliders/Testimonial"), { ssr: false } );

export const metadata = {
  title: {
		default: "Home",
		template: "%s | " + AppData.settings.siteName,
	},
  description: AppData.settings.siteDescription,
}

async function Home1() {
  return (
    <>
      <HeroSection />
      <CountersSection />
      <ServicesSection />
      <EducationSection />
      {/* <TestimonialSlider /> */}
      {/* <PartnersSection /> */}
      <br />
    </>
  );
};
export default Home1;