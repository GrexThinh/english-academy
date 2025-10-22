import EventsSection from "@/components/EventsSection";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Event Page | Trung tâm ngoại ngữ học viện giáo dục Victoria",
  description:
    "This is Event Page for Trung tâm ngoại ngữ học viện giáo dục Victoria",
};

const EventPage = () => {
  return (
    <main>
      <EventsSection />
    </main>
  );
};

export default EventPage;
