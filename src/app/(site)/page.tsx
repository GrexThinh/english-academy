import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Victoria Academy | Trung tâm ngoại ngữ học viện giáo dục Victoria",
  description:
    "This is Home for Trung tâm ngoại ngữ học viện giáo dục Victoria",
  // other metadata
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
