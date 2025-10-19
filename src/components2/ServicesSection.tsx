"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const posters = [
    { src: "/logos/POSTER2.jpg", alt: "Poster 2" },
    { src: "/logos/POSTER3.jpg", alt: "Poster 3" },
  ];

  return (
    <div className="container mx-auto px-4 py-10 relative z-10">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-victoria-gold">
          Tầm nhìn - sứ mệnh - giá trị cốt lõi
        </h2>
      </motion.div>

      {/* ✅ Full width images (no grid cropping) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center justify-center gap-8 w-full"
      >
        {posters.map((p, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="relative w-full md:w-1/2 overflow-hidden rounded-3xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.2]"
          >
            <div className="relative w-full h-[1000px]">
              <Image
                src={p.src}
                alt={p.alt}
                fill
                className="object-cover w-full h-full"
                sizes="100vw"
                priority={i === 0}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ServicesSection;
