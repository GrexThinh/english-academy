"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";

const EventsSection = () => {
  const { t } = useTranslation();

  const events = [
    {
      title: "Khai trương trung tâm mới tại phường Trảng Dài",
      description:
        "Chào mừng năm học mới với nhiều phần quà và ưu đãi hấp dẫn! Hãy đến tham quan trung tâm mới của Victoria Academy và cùng trải nghiệm môi trường học tập hiện đại, năng động.",
      date: "28 Tháng 11",
      time: "10:00 - 12:00",
      location: "Thành phố Biên Hòa",
      image: "/img/event/event-1.jpg",
      category: "Tin tức & Sự kiện",
    },
    {
      title: "Chiến lược chinh phục IELTS hiệu quả",
      description:
        "Buổi chia sẻ chuyên sâu về chiến lược làm bài và mẹo đạt điểm cao trong kỳ thi IELTS. Giúp học viên hiểu rõ cấu trúc bài thi, cách quản lý thời gian và áp dụng kỹ thuật ghi điểm trong từng kỹ năng.",
      date: "28 Tháng 11",
      time: "14:00 - 16:00",
      location: "Thành phố Biên Hòa",
      image: "/img/event/event-2.jpg",
      category: "Câu lạc bộ và hoạt động phát triển",
    },
    {
      title: "Sự kiện giao lưu văn hóa quốc tế",
      description:
        "Một ngày tràn ngập sắc màu văn hóa! Học viên vừa được thực hành tiếng Anh, vừa tìm hiểu về phong tục, truyền thống của nhiều quốc gia khác nhau thông qua các hoạt động trải nghiệm thú vị.",
      date: "29 Tháng 11",
      time: "10:00 - 12:00",
      location: "Thành phố Biên Hòa",
      image: "/img/event/event-3.jpg",
      category: "Câu lạc bộ và hoạt động phát triển",
    },
    {
      title: "Speak Up 2025 – Khi tiếng nói trở thành sức mạnh",
      description:
        "Cuộc thi hùng biện tiếng Anh dành cho học sinh từ 8–15 tuổi với chủ đề “Voice in Power”. Nơi các em thể hiện tư duy sáng tạo, khả năng nói tiếng Anh và lan tỏa thông điệp tích cực đến cộng đồng.",
      date: "30 Tháng 11",
      time: "15:00 - 17:00",
      location: "Thành phố Biên Hòa",
      image: "/img/event/event-4.jpg",
      category: "Tin tức & Sự kiện",
    },
    {
      title: "Câu lạc bộ luyện nói tiếng Anh – Tự tin giao tiếp",
      description:
        "Buổi workshop tương tác giúp học viên rèn luyện kỹ năng nói, nâng cao sự tự tin và khả năng phản xạ trong giao tiếp tiếng Anh. Thông qua các trò chơi, thảo luận nhóm và tình huống thực tế, học viên được thực hành tiếng Anh một cách tự nhiên và sinh động.",
      date: "01 Tháng 12",
      time: "09:00 - 11:00",
      location: "Thành phố Biên Hòa",
      image: "/img/event/event-1.jpg",
      category: "Tin tức & Sự kiện",
    },
  ];

  const [featured, ...rest] = events;

  return (
    <section id="events" className="pb-20 bg-muted/30">
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
