import React from "react";
import HeroSection from "@/components2/HeroSection";
import AboutSection from "@/components2/AboutSection";
import ProgramsSection from "@/components2/ProgramsSection";
import EventsSection from "@/components2/EventsSection";
import TeamSection from "@/components2/TeamSection";
import TestimonialsCarousel from "@/components2/TestimonialsCarousel";
import ClassroomSection from "@/components2/ClassroomSection";
import BranchSection from "@/components2/BranchSection";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <EventsSection />
      <TeamSection />
      <ClassroomSection />
      <BranchSection />
      <TestimonialsCarousel />
    </main>
  );
};

export default Home;
