"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";
import { Search, Star } from "lucide-react";

type Program = {
  title: string;
  subtitle?: string;
  tag: string;
  image: string;
  href?: string;
};

const ProgramsSection = () => {
  const { t } = useTranslation();

  const programs: Program[] = [
    {
      tag: "JUMPSTART",
      title: "Tiếng Anh Mầm non",
      subtitle: "(3–6 tuổi)",
      image: "/img/event-1.jpg",
      href: "#",
    },
    {
      tag: "SUPER JUNIORS",
      title: "Tiếng Anh Tiểu học",
      subtitle: "(6–11 tuổi)",
      image: "/img/event-2.jpg",
      href: "#",
    },
    {
      tag: "SMART TEENS",
      title: "Tiếng Anh Trung học",
      subtitle: "(11–16 tuổi)",
      image: "/img/event-3.jpg",
      href: "#",
    },
    {
      tag: "DU HỌC",
      title: "Du học ngắn & dài hạn",
      subtitle: "(9–17 tuổi)",
      image: "/img/event-1.jpg",
      href: "#",
    },
    {
      tag: "EXAM ENGLISH",
      title: "Khóa học Luyện thi",
      subtitle: "IELTS – SAT",
      image: "/img/event-2.jpg",
      href: "#",
    },
    {
      tag: "BUSINESS ENGLISH",
      title: "Tiếng Anh Chuyên ngành",
      subtitle: "(cho người đi làm)",
      image: "/img/event-3.jpg",
      href: "#",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="programs" className="pb-20 bg-muted/30">
      <div className="container max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
            {t("programs.label")}
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-12"
        >
          {programs.map((program, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              transition={{ duration: 0.5 }}
              className="group relative rounded-xl overflow-hidden shadow-lg ring-1 ring-black/5 cursor-pointer"
            >
              <div className="relative w-full aspect-[4/4.5] hover:scale-110 transition-all duration-500">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="absolute bottom-0 left-0 w-full h-[28%] group-hover:h-full">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-victoria-red [clip-path:ellipse(120%_100%_at_50%_100%)] group-hover:[clip-path:unset]" />

                  <div className="relative z-10 px-5 pt-8 pb-4 group-hover:hidden">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[#f6c900cb] inline-flex items-center rounded-2xl px-4 py-2 text-[12px] font-extrabold uppercase tracking-wide bg-white/10 shadow-sm">
                        {program.subtitle}
                      </span>
                      <button
                        type="button"
                        className="
                          inline-flex items-center gap-2
                          rounded-full
                          bg-gradient-to-r from-[#f9d84b] to-[#f6c700]
                          text-[#7a0c10]
                          px-4 py-3
                          font-semibold text-sm
                          shadow-[0_4px_15px_rgba(246,199,0,0.45)]
                          active:scale-[0.98]
                          transition-all duration-200
                          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f6c900d5]
                        "
                      >
                        Khám phá
                        <Search size={20} />
                      </button>
                    </div>
                    <h3 className="flex gap-2 mt-3 text-lg font-extrabold leading-snug brightness-[1.2] text-[#f6c900cb]">
                      <Star />
                      <div>{program.title}</div>
                    </h3>
                  </div>
                </div>
              </div>

              {/* Hover overlay (hidden until hover) */}
              <div
                className="
    absolute inset-0 bg-victoria-red/95
    opacity-0
    transition-all duration-500
    group-hover:opacity-100
    flex flex-col items-center justify-center text-center
    px-6
  "
              >
                <h3 className="text-2xl font-extrabold text-[#f6c900cb] mb-4">
                  {program.title}
                </h3>
                <p className="text-white/90 mb-6">
                  Fun and engaging English lessons designed for young learners.
                </p>
                <button
                  type="button"
                  className="
      inline-flex items-center gap-2
      rounded-full
      bg-gradient-to-r from-[#f9d84b] to-[#f6c700]
      text-[#7a0c10]
      px-5 py-3 font-semibold text-sm
      shadow-[0_4px_15px_rgba(246,199,0,0.45)]
      transition-transform duration-200 active:scale-95
    "
                >
                  Khám phá <Search size={20} />
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-10"
        >
          <Button
            size="lg"
            className="bg-victoria-red hover:bg-victoria-red/90 text-white font-bold px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            {t("programs.viewAll")}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsSection;
