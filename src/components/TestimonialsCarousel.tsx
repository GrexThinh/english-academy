"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TestimonialsCarousel = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: "Mai Phương Lan",
      role: "",
      rating: 5,
      text: "Học viện Victoria đã thay đổi hoàn toàn khả năng tiếng Anh của tôi. Giáo viên rất chuyên nghiệp và môi trường học tập tuyệt vời. Tôi đã đạt được điểm IELTS mục tiêu!",
    },
    {
      name: "Trần Nguyễn Ngọc Hân",
      role: "Học Sinh",
      rating: 5,
      text: "Học viện tiếng Anh tốt nhất thành phố! Lớp học nhỏ và sự quan tâm chu đáo đã giúp tôi cải thiện đáng kể sự tự tin khi nói.",
    },
    {
      name: "Lê Hoàng Minh",
      role: "Học Sinh",
      rating: 5,
      text: "Phương pháp giảng dạy chuyên nghiệp và chương trình học hiện đại. Học viện Victoria đã giúp tôi thăng tiến trong sự nghiệp với kỹ năng giao tiếp tiếng Anh tốt hơn.",
    },
    {
      name: "Phạm Thị Ngọc Duyên",
      role: "",
      rating: 5,
      text: "Trải nghiệm tuyệt vời! Các bài học tương tác và giáo viên bản ngữ đã giúp việc học tiếng Anh trở nên thú vị và hiệu quả. Rất đáng để thử!",
    },
  ];

  return (
    <section className="py-20">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Nhận xét của phụ huynh và học viên
          </h2>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <div className="relative bg-card rounded-3xl p-8 border-2 border-victoria-red/20 hover:border-victoria-red transition-all duration-300 hover:shadow-2xl h-full">
                    {/* Quote Icon */}
                    <div className="absolute -top-4 right-8">
                      <div className="w-12 h-12 bg-victoria-red rounded-full flex items-center justify-center shadow-lg">
                        <Quote className="text-white" size={24} />
                      </div>
                    </div>

                    {/* Profile */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative">
                        <div
                          className="
                            w-16 h-16 rounded-full border-4 border-victoria-gold/30
                            bg-victoria-gold/10 flex items-center justify-center
                            text-victoria-gold text-xl font-bold uppercase
                          "
                        >
                          {testimonial.name?.charAt(0) ?? "?"}
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-victoria-gold rounded-full border-2 border-background" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="text-victoria-gold fill-victoria-gold"
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-muted-foreground leading-relaxed">
                      {testimonial.text}
                    </p>

                    {/* Decorative Element */}
                    <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-victoria-gold/10 rounded-full blur-2xl -z-10" />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 bg-victoria-red text-white hover:bg-victoria-red-dark" />
          <CarouselNext className="hidden md:flex -right-12 bg-victoria-red text-white hover:bg-victoria-red-dark" />
        </Carousel>

        {/* Dots indicator for mobile */}
        <div className="flex justify-center gap-2 mt-8 md:hidden">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-victoria-red/30"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
