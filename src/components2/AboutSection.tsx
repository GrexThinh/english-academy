"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Phone, Search, Sparkles } from "lucide-react";

const AboutSection = () => {
  const posters = [
    { src: "/logos/POSTER1.jpg", alt: "Poster 1" },
    { src: "/logos/POSTER2.jpg", alt: "Poster 2" },
    { src: "/logos/POSTER3.jpg", alt: "Poster 3" },
  ];

  const [zoomImg, setZoomImg] = useState<string | null>(null);

  const autoplay = React.useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      playOnInit: true,
    })
  );

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setZoomImg(null);
  }, []);

  useEffect(() => {
    if (zoomImg) {
      document.addEventListener("keydown", handleKeyDown);

      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [zoomImg, handleKeyDown]);

  const openFullscreen = async (src: string) => {
    setZoomImg(src);
    if (document.documentElement.requestFullscreen) {
      try {
        await document.documentElement.requestFullscreen();
      } catch {}
    }
  };

  const closeFullscreen = async () => {
    setZoomImg(null);
    if (document.fullscreenElement && document.exitFullscreen) {
      await document.exitFullscreen();
    }
  };

  return (
    <section id="about" className="py-20 bg-muted/30 relative">
      <div className="absolute left-1/2 -translate-x-1/2 -top-15 w-[100%] md:w-[75%]">
        <div
          className="
            rounded-tr-3xl
            rounded-bl-3xl
            rounded-tl-[50px]
            rounded-br-[50px]
            bg-victoria-red to-[#7a0c10]
            text-[#d3b83f]
            brightness-1.25
            shadow-[0_20px_60px_-15px_rgba(0,0,0,0.35)]
            ring-1 ring-white/10
            overflow-hidden
          "
        >
          <div className="px-5 py-4 md:px-8 md:py-5">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-start md:items-center gap-3 md:gap-4">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-victoria-gold md:mt-[6px]"></span>
                <div>
                  <h3 className="text-lg md:text-2xl font-bold leading-snug text-victoria-gold/95 drop-shadow-sm flex gap-3">
                    <Sparkles />
                    <div>Tầm nhìn – Sứ mệnh – Giá trị cốt lõi</div>
                  </h3>
                  <p className="text-sm md:text-base text-victoria-gold/80 leading-snug mt-1 max-w-xl">
                    Victoria Academy hướng đến trở thành hệ thống giáo dục Việt
                    Nam mang đẳng cấp quốc tế, đào tạo học sinh trở thành công
                    dân tài năng và trách nhiệm.
                  </p>
                </div>
              </div>

              <div className="hidden md:block h-12 w-px bg-white/20" />

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  className="
              inline-flex items-center gap-2
              rounded-full
              bg-gradient-to-r from-[#f9d84b] to-[#f6c700]
              text-[#7a0c10]
              px-5 py-2.5 md:px-6 md:py-3
              font-semibold text-sm md:text-base
              shadow-[0_4px_15px_rgba(246,199,0,0.45)]
              active:scale-[0.98]
              transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f6c900d5]
            "
                >
                  Khám phá
                  <Search />
                </button>

                <button
                  type="button"
                  className="
              inline-flex items-center gap-2
              rounded-full
              border border-[#f6c700]
              text-victoria-gold
              px-5 py-2.5 md:px-6 md:py-3
              font-semibold text-sm md:text-base
              bg-[#f6c700]/10 text-[#f6c700]
              active:scale-[0.98]
              transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f6c700]
            "
                >
                  Liên hệ ngay
                  <Phone className="animate-ring" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            containScroll: "trimSnaps",
            slidesToScroll: 1,
          }}
          plugins={[autoplay.current]}
          className="relative"
        >
          <CarouselContent className="-ml-3 md:-ml-4">
            {posters.map((item, idx) => (
              <CarouselItem key={idx} className=" basis-full md:basis-1/3">
                <div
                  className="relative w-full h-[400px] md:h-[600px] overflow-hidden rounded-2xl shadow-md cursor-pointer group"
                  onClick={() => openFullscreen(item.src)}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    priority={idx === 0}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition"></div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <AnimatePresence>
        {zoomImg && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeFullscreen}
          >
            <motion.div
              className="relative w-full h-[100vh]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={zoomImg}
                alt="Zoomed Image"
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
              <button
                onClick={closeFullscreen}
                className="absolute top-3 right-3 bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-md text-sm"
              >
                ✕ Close (Esc)
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AboutSection;
