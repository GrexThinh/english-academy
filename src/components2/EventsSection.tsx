"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";

const EventsSection = () => {
  const { t } = useTranslation();

  const events = [
    {
      title: "English Speaking Workshop",
      description:
        "Interactive workshop focused on improving speaking confidence and fluency. Interactive workshop focused on improving speaking confidence and fluency.Interactive workshop focused on improving speaking confidence and fluency.",
      date: "28 Nov",
      time: "10:00am - 12:00pm",
      location: "Bien Hoa City",
      image: "/img/galary-1.jpg",
      category: "Tin tức sự kiện",
    },
    {
      title: "IELTS Strategy Session",
      description:
        "Learn effective strategies and tips for achieving high IELTS scores.",
      date: "28 Nov",
      time: "2:00pm - 4:00pm",
      location: "Bien Hoa City",
      image: "/img/galary-2.jpg",
      category: "Quỹ Light up the future",
    },
    {
      title: "Cultural Exchange Event",
      description:
        "Practice English while learning about different cultures and traditions.",
      date: "29 Nov",
      time: "10:00am - 12:00pm",
      location: "Bien Hoa City",
      image: "/img/galary-3.jpg",
      category: "Quỹ Light up the future",
    },
    {
      title: "Speak Up 2025 – Voice in Power",
      description:
        "Khi tiếng nói trở thành sức mạnh truyền cảm hứng. Dành cho học sinh 8–15 tuổi.",
      date: "30 Nov",
      time: "3:00pm - 5:00pm",
      location: "Bien Hoa City",
      image: "/img/galary-4.jpg",
      category: "Tin tức sự kiện",
    },
    {
      title: "Khai trương trung tâm mới ở phường Trảng Dài",
      description: "Đón năm học mới hân hoan đầy quà với nhiều ưu đãi hấp dẫn.",
      date: "01 Dec",
      time: "9:00am - 11:00am",
      location: "Bien Hoa City",
      image: "/img/galary-5.jpg",
      category: "Tin tức sự kiện",
    },
  ];

  const [featured, ...rest] = events;

  return (
    <section id="events" className="pb-20">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            {t("events.title")}
          </h2>
        </div>

        {/* Parent grid: 4 cols so left takes 2, right takes 2 (then split into 2x2) */}
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Featured (left) */}
          <article className="group relative lg:col-span-2 rounded-3xl overflow-hidden bg-card border-2 border-transparent hover:border-victoria-red/30 transition cursor-pointer">
            {/* Image */}
            <div className="relative h-[360px] md:h-[420px] lg:h-[460px] overflow-hidden">
              <Image
                fill
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 rounded-3xl"
              />
            </div>

            {/* Title + meta + excerpt */}
            <div className="p-6">
              <h3 className="text-2xl md:text-3xl font-extrabold text-foreground mb-3 leading-tight">
                {featured.title}
              </h3>

              {/* Meta line */}
              <div className="flex items-center gap-2 text-[15px] text-muted-foreground mb-3">
                <span className="inline-block w-2 h-2 rounded-full bg-[#f6c900]" />
                <span>{featured.category ?? "Tin tức sự kiện"}</span>
              </div>

              {/* Excerpt */}
              <p className="text-muted-foreground leading-relaxed line-clamp-3">
                {featured.description}
              </p>
            </div>
          </article>

          {/* Right side: 2x2 small cards */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {rest.slice(0, 4).map((event, i) => (
              <article
                key={i}
                className="group relative cursor-pointer bg-card rounded-3xl overflow-hidden border-2 border-victoria-red/20 hover:border-victoria-red transition-all duration-300 hover:shadow-2xl"
              >
                {/* Image */}
                <div className="relative h-44 md:h-48 overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h4 className="text-lg font-bold text-foreground mb-2 leading-snug">
                    {event.title}
                  </h4>

                  {/* Meta (single line with dot + category) */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#f6c900]" />
                    <span>{event.category ?? "Tin tức sự kiện"}</span>
                  </div>
                </div>

                {/* Optional: time & location row (tiny, muted) */}
                <div className="px-5 pb-5 -mt-2 text-xs text-muted-foreground/80 flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {event.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    {event.location}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
