import Signup from "@/components/Auth/Signup";
import React from "react";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Signup Page | Trung tâm ngoại ngữ học viện giáo dục Victoria",
  description:
    "This is Signup Page for Trung tâm ngoại ngữ học viện giáo dục Victoria",
  // other metadata
};

const SignupPage = () => {
  return (
    <main>
      <Signup />
    </main>
  );
};

export default SignupPage;
