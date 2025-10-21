"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const TeamSection = () => {
  const { t } = useTranslation();

  const teachers = [
    {
      name: "Ms. Linda Carlson",
      role: "IELTS 8.0",
      image: "/img/team-1.jpg",
    },
    {
      name: "Mr. Michael Brown",
      role: "IELTS 8.0",
      image: "/img/team-2.jpg",
    },
    {
      name: "Ms. Sarah Johnson",
      role: "IELTS 8.0",
      image: "/img/team-3.jpg",
    },
    {
      name: "Mr. David Wilson",
      role: "IELTS 8.0",
      image: "/img/team-4.jpg",
    },
  ];

  const autoplay = React.useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      playOnInit: true,
    })
  );

  return (
    <section className="pb-20 bg-muted/30">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Đội Ngũ Giáo Viên Chuyên Nghiệp
          </h2>
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
          <CarouselContent className="-ml-3 md:-ml-4">
            {teachers.map((teacher, idx) => (
              <CarouselItem key={idx} className="basis-full md:basis-1/3 px-4">
                <div key={idx} className="group relative">
                  <div className="relative rounded-3xl overflow-hidden border-4 border-victoria-red transition-all duration-300 h-[450px]">
                    <Image
                      src={teacher.image}
                      alt={teacher.name}
                      fill
                      className="object-cover transition-transform duration-500 opacity-90"
                    />
                  </div>

                  <div className="mt-6 text-center">
                    <h3 className="text-xl font-bold text-victoria-red mb-1">
                      {teacher.name}
                    </h3>
                    <p className="text-muted-foreground">{teacher.role}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 bg-victoria-red text-white hover:bg-victoria-red-dark" />
          <CarouselNext className="hidden md:flex -right-10 bg-victoria-red text-white hover:bg-victoria-red-dark" />
        </Carousel>
      </div>
    </section>
  );
};

export default TeamSection;
