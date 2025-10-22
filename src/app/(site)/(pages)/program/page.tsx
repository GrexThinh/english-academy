import ProgramsSection from "@/components/ProgramsSection";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Program Page | Trung tâm ngoại ngữ học viện giáo dục Victoria",
  description:
    "This is Program Page for Trung tâm ngoại ngữ học viện giáo dục Victoria",
  // other metadata
};

const ProgramPage = () => {
  return (
    <main>
      <ProgramsSection />
    </main>
  );
};

export default ProgramPage;
