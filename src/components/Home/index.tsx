import React from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import EventsSection from "@/components/EventsSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import ClassroomSection from "@/components/ClassroomSection";
import BranchSection from "@/components/BranchSection";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <EventsSection />
      <TeamSection />
      <ClassroomSection />
      <TestimonialsCarousel />
      <BranchSection />
    </main>
  );
};

export default Home;
