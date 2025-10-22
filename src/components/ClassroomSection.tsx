"use client";

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const ClassroomSection = () => {
  const { t } = useTranslation();

  const images = [
    "/img/classroom/classroom-1.jpg",
    "/img/classroom/classroom-2.jpg",
    "/img/classroom/classroom-3.jpg",
    "/img/classroom/classroom-4.jpg",
    "/img/classroom/classroom-5.jpg",
    "/img/classroom/classroom-6.jpg",
    "/img/classroom/classroom-7.jpg",
    "/img/classroom/classroom-8.jpg",
    "/img/classroom/classroom-9.jpg",
    "/img/classroom/classroom-10.jpg",
  ];

  // Cycle through a set of different heights to create a staggered album look
  const heightClasses = [
    "h-40", // ~160px
    "h-64", // ~256px
    "h-80", // ~320px
    "h-56", // ~224px
    "h-72", // ~288px
    "h-96", // ~384px
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isOpen = activeIndex !== null;

  const close = () => setActiveIndex(null);
  const next = () =>
    setActiveIndex((idx) => (idx === null ? null : (idx + 1) % images.length));
  const prev = () =>
    setActiveIndex((idx) =>
      idx === null ? null : (idx - 1 + images.length) % images.length
    );

  // Close on ESC, navigate with arrows; lock body scroll when open
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.12 },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 16, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  } as const;

  const headingVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  } as const;

  return (
    <section className="bg-muted/30">
      <div className="container max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate="show"
          variants={headingVariants}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            {"Không gian học tập chuẩn quốc tế"}
          </h2>
        </motion.div>

        {/* Masonry-style layout using CSS columns */}
        <motion.div
          className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6"
          initial="hidden"
          animate="show"
          variants={containerVariants}
        >
          {images.map((src, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative overflow-hidden rounded-2xl break-inside-avoid group cursor-zoom-in ${
                heightClasses[index % heightClasses.length]
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <img
                src={src}
                alt={`Classroom ${index + 1}`}
                className="
                  w-full h-full rounded-2xl object-cover
                  transition-transform duration-500 ease-out
                  group-hover:scale-105
                "
                loading="lazy"
              />
              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 rounded-2xl" />
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox overlay */}
        {isOpen && activeIndex !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={close}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {/* Image container */}
            <motion.div
              className="relative max-w-7xl w-auto max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 220, damping: 24 }}
            >
              <img
                src={images[activeIndex]}
                alt={`Preview ${activeIndex + 1}`}
                className="max-h-[85vh] max-w-[95vw] object-contain rounded-2xl shadow-2xl"
              />

              {/* Close */}
              <button
                aria-label="Close"
                className="absolute -top-4 -right-4 bg-black/70 hover:bg-black/90 text-white p-2 rounded-full shadow-lg"
                onClick={close}
              >
                <X size={20} />
              </button>

              {/* Prev */}
              <button
                aria-label="Previous"
                className="absolute top-1/2 -translate-y-1/2 -left-12 hidden sm:flex items-center justify-center w-10 h-10 bg-black/60 hover:bg-black/80 text-white rounded-full"
                onClick={prev}
              >
                <ChevronLeft size={22} />
              </button>

              {/* Next */}
              <button
                aria-label="Next"
                className="absolute top-1/2 -translate-y-1/2 -right-12 hidden sm:flex items-center justify-center w-10 h-10 bg-black/60 hover:bg-black/80 text-white rounded-full"
                onClick={next}
              >
                <ChevronRight size={22} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ClassroomSection;
