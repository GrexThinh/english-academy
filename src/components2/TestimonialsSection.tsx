import React from "react";
import { useTranslation } from "react-i18next";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: "Nguyen Van A",
      role: "Business Professional",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
      rating: 5,
      text: "Victoria Academy transformed my English skills completely. The teachers are professional and the learning environment is excellent. I achieved my IELTS target score!",
    },
    {
      name: "Tran Thi B",
      role: "University Student",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
      rating: 5,
      text: "The best English academy in the city! Small class sizes and personalized attention helped me improve my speaking confidence dramatically.",
    },
    {
      name: "Le Van C",
      role: "Marketing Manager",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
      rating: 5,
      text: "Professional teaching methods and modern curriculum. Victoria Academy helped me advance my career with better English communication skills.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Nhận xét của phụ huynh
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-card rounded-3xl p-8 border-2 border-victoria-red/20 hover:border-victoria-red transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 right-8">
                <div className="w-12 h-12 bg-victoria-red rounded-full flex items-center justify-center shadow-lg">
                  <Quote className="text-white" size={24} />
                </div>
              </div>

              {/* Profile */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-victoria-gold/30"
                  />
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
