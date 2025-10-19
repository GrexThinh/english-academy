import React from "react";
import Error from "@/components/Error";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Error Page | Trung tâm ngoại ngữ học viện giáo dục Victoria",
  description:
    "This is Error Page for Trung tâm ngoại ngữ học viện giáo dục Victoria",
  // other metadata
};

const ErrorPage = () => {
  return (
    <main>
      <Error />
    </main>
  );
};

export default ErrorPage;
