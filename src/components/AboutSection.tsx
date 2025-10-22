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
    { src: "/logos/POSTER3.jpg", alt: "Poster 3" },
    { src: "/logos/POSTER2.jpg", alt: "Poster 2" },
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
    <section id="about" className="md:py-20 bg-muted/30 relative">
      <div className="max-w-7xl mx-auto mt-10 px-4 md:px-0">
        <div className="w-full mt-[-80px] md:mt-[-140px] lg:mt-[-200px] mb-10 md:mb-20 mx-auto">
          <div
            className="
            rounded-3xl md:rounded-[60px_25px_60px_25px]
            bg-gradient-to-br from-[#951b28]/90 to-[#951b28]
            brightness-[1.1]
            shadow-[0_20px_60px_-15px_rgba(0,0,0,0.35)]
            ring-1 ring-white/10
            overflow-hidden
          "
          >
            <div className="p-4 sm:p-5 md:px-8 md:py-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-start md:items-center gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-victoria-gold md:mt-[6px]"></span>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-2xl font-bold leading-snug text-victoria-gold/95 drop-shadow-sm flex gap-3 text-victoria-gold brightness-[1.1]">
                      <Sparkles />
                      <div>Tầm nhìn – Sứ mệnh – Giá trị cốt lõi</div>
                    </h3>
                    <p className="text-xs md:text-base leading-snug text-white/80 mt-2 max-w-2xl">
                      Victoria Academy hướng đến trở thành hệ thống giáo dục
                      Việt Nam mang đẳng cấp quốc tế, dẫn đầu trong giáo dục
                      nghề và ngoại ngữ, mang theo sứ mệnh tương lai vững chắc
                      và rực rỡ hơn, đào tạo học sinh trở thành công dân tài
                      năng và trách nhiệm.
                    </p>
                  </div>
                </div>

                <div className="hidden md:block h-12 w-px bg-white/20" />

                <div className="flex flex-wrap items-center gap-2 sm:gap-3 brightness-[1.25] md:mt-0 md:mx-0 mx-auto">
                  <button
                    type="button"
                    className="
              inline-flex items-center gap-2
              rounded-full
              text-victoria-gold
              px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3
              font-semibold text-sm md:text-base
              shadow-[0_4px_15px_rgba(246,199,0,0.3)]
              active:scale-[0.98]
              transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-offset-2
            "
                  >
                    Khám phá
                    <Search className="animate-ring" />
                  </button>

                  <button
                    type="button"
                    className="
              inline-flex items-center gap-2
              rounded-full
              text-white/80
              px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3
              font-semibold text-sm md:text-base
              shadow-[0_4px_15px_rgba(255,255,255,0.3)]
              active:scale-[0.98]
              transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-offset-2
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
          <CarouselContent className="-ml-2 sm:-ml-3 md:-ml-4">
            {posters.map((item, idx) => (
              <CarouselItem
                key={idx}
                className=" basis-full sm:basis-1/2 md:basis-1/3"
              >
                <div
                  className="relative w-full h-[520px] overflow-hidden rounded-2xl shadow-md cursor-pointer group"
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

