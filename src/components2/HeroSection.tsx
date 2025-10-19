"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const HeroSection = () => {
  const { t } = useTranslation();

  const banners = ["/img/hero-img.jpg", "/img/about.jpg", "/img/program-1.jpg"];

  const autoplay = React.useRef(
    Autoplay({
      delay: 4000, // time between slides
      stopOnInteraction: false, // keep playing after drag/click
      stopOnMouseEnter: true, // pause on hover (set false if you don't want this)
      playOnInit: true, // start automatically
    })
  );

  return (
    <section className="relative min-h-[78vh] md:min-h-screen flex items-center justify-start overflow-hidden pt-28 md:pt-32 pb-12 md:pb-20">
      {/* Background Image + overlay */}
      <div className="absolute inset-0 -z-10">
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[autoplay.current]}
          className="absolute inset-0 h-full w-full"
        >
          <CarouselContent className="h-full !-ml-0">
            {banners.map((src, idx) => (
              <CarouselItem key={idx} className="basis-full h-full !pl-0">
                <div className="relative h-full md:min-h-screen w-full">
                  <Image
                    src={src}
                    alt="Hero background"
                    fill
                    priority={idx === 0}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/10 pointer-events-none z-[1]" />
      </div>

      {/* Content ON TOP (left aligned) */}
      <div className="container mx-auto px-4 z-10 max-w-7xl">
        {/* keep content block on the left */}
        <div className="max-w-[920px] text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-victoria-gold text-lg md:text-3xl font-semibold tracking-wide mb-3 md:mb-5"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="
              text-white font-extrabold drop-shadow-sm
              text-4xl sm:text-5xl md:text-6xl
              leading-[1.2] md:leading-[1.1] lg:leading-[1.2]
            "
          >
            {t("hero.title")}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-5"
          >
            <Button
              size="lg"
              className="
                relative group overflow-hidden
                rounded-[30px_12px_30px_12px]
                bg-victoria-red text-victoria-gold
                font-bold text-lg
                h-14 md:h-16 px-8
                shadow-[0_12px_24px_rgba(232,62,105,0.20)]
                transition-all duration-300
                hover:shadow-[0_18px_32px_rgba(232,62,105,0.28)]
                hover:scale-[1.02] active:scale-[0.99]
              "
            >
              <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.35),rgba(255,255,255,0)_45%)]" />
              <span className="relative flex items-center">
                {t("hero.getStarted")}
                <ArrowRight className="ml-2" size={20} />
              </span>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="
                rounded-[30px_12px_30px_12px]
                border-2 border-white bg-white text-victoria-red
                font-bold text-lg
                h-14 md:h-16 px-8 md:px-12
                backdrop-blur-[1px]
                transition-all duration-300
                hover:bg-white hover:text-victoria-red
                hover:scale-[1.02] active:scale-[0.99]
              "
            >
              {t("hero.learnMore")}
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 z-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto fill-background">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
