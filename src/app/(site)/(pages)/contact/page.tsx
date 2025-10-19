import AboutSection from "@/components2/AboutSection";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact Page | Trung tâm ngoại ngữ học viện giáo dục Victoria",
  description:
    "This is Contact Page for Trung tâm ngoại ngữ học viện giáo dục Victoria",
  // other metadata
};

const ContactPage = () => {
  return (
    <main>
      <AboutSection />
    </main>
  );
};

export default ContactPage;
