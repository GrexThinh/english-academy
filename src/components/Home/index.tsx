import React from "react";
import HeroSection from "@/components2/HeroSection";
import AboutSection from "@/components2/AboutSection";
import ServicesSection from "@/components2/ServicesSection";
import ProgramsSection from "@/components2/ProgramsSection";
import EventsSection from "@/components2/EventsSection";
import TeamSection from "@/components2/TeamSection";
import TestimonialsCarousel from "@/components2/TestimonialsCarousel";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProgramsSection />
      <EventsSection />
      <TeamSection />
      <TestimonialsCarousel />
    </main>
  );
};

export default Home;
