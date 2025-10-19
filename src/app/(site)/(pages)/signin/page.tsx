import Signin from "@/components/Auth/Signin";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Signin Page | Trung tâm ngoại ngữ học viện giáo dục Victoria",
  description:
    "This is Signin Page for Trung tâm ngoại ngữ học viện giáo dục Victoria",
  // other metadata
};

const SigninPage = () => {
  return (
    <main>
      <Signin />
    </main>
  );
};

export default SigninPage;
