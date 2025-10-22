import TeamSection from "@/components/TeamSection";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Team Page | Trung tâm ngoại ngữ học viện giáo dục Victoria",
  description:
    "This is Team Page for Trung tâm ngoại ngữ học viện giáo dục Victoria",
  // other metadata
};

const TeamPage = () => {
  return (
    <main>
      <TeamSection />
    </main>
  );
};

export default TeamPage;
