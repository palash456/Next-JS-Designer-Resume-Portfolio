import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";

import { getSortedPostsData } from "@library/posts";
import { getSortedProjectsData } from "@/src/app/_lib/portfolio";

import HeroSection from "@components/sections/Hero";
import CountersSection from "@components/sections/Counters";
import ServicesSection from "@components/sections/Services";
import PartnersSection from "@components/sections/Partners";
import HistorySection from "@components/sections/History";
import ContactFormSection from "@components/sections/Contact";

// const TestimonialSlider = dynamic( () => import("@components/sliders/Testimonial"), { ssr: false } );
// const LatestPostsSlider = dynamic( () => import("@components/sliders/LatestPosts"), { ssr: false } );
const ProjectsMasonry = dynamic(() => import("@/src/app/_components/AkamshPortfolio"), {
  ssr: false,
});

export const metadata = {
  title: {
    default: "Portfolio",
  },
  description: AppData.settings.siteDescription,
};

async function HomeOnePage() {
  const posts = await getAllPosts();
  const projects = await getAllProjects();

  return (
    <>
      {/* Hero Section */}
      <section id="hero-section">
        <HeroSection />
      </section>

      {/* Counters Section */}
      <section id="counters-section">
        <CountersSection />
      </section>

      {/* Services Section */}
      <section id="services-section">
        <ServicesSection />
      </section>

      {/* Projects Masonry Section */}
      <section id="AkamshPortfolio">
        <Suspense fallback={<div>Loading...</div>}>
          <ProjectsMasonry
    portfolio={projects}  // Change "projects" to "portfolio"
    categories={AppData.projects.categories}  // Change "projects" to "portfolio"
          />

        </Suspense>
      </section>

      {/* History Section */}
      <section id="history-section">
        <HistorySection />
      </section>

      {/* Contact Form Section */}
      <section id="contact-form-section">
        <ContactFormSection />
      </section>

      {/* Partners Section */}
      <section id="partners-section">
        <PartnersSection />
      </section>
    </>
  );
}

export default HomeOnePage;

async function getAllPosts() {
  const allPosts = getSortedPostsData();
  return allPosts;
}

async function getAllProjects() {
  const allProjects = getSortedProjectsData();
  return allProjects;
}
