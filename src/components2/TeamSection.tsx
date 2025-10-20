"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { Linkedin } from "lucide-react";

const TeamSection = () => {
  const { t } = useTranslation();

  const teachers = [
    {
      name: "Linda Carlson",
      role: "English Teacher",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    },
    {
      name: "Michael Brown",
      role: "IELTS Specialist",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    },
    {
      name: "Sarah Johnson",
      role: "Business English Expert",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    },
    {
      name: "David Wilson",
      role: "Conversation Coach",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Đội Ngũ Giáo Viên Chuyên Nghiệp
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <div key={index} className="group relative">
              <div className="relative rounded-3xl overflow-hidden border-4 border-victoria-red/20 group-hover:border-victoria-red transition-all duration-300">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-victoria-red/90 via-victoria-red/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Social Icon */}
                <button className="absolute top-4 right-4 w-12 h-12 bg-victoria-gold rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-lg">
                  <Linkedin className="text-victoria-red" size={20} />
                </button>
              </div>

              {/* Info Card */}
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold text-victoria-red mb-1">
                  {teacher.name}
                </h3>
                <p className="text-muted-foreground">{teacher.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
