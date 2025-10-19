"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Clock, Users, Star } from 'lucide-react';
import { Button } from './ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components2/ui/carousel";

const ProgramsSection = () => {
  const { t } = useTranslation();

  const programs = [
    {
      title: 'English For Today',
      description: 'Comprehensive English course for daily communication and practical usage.',
      price: '3+ tuổi',
      image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&q=80',
      instructor: 'Mary Morrison',
      role: 'Lead Teacher',
      duration: '30 Hours',
      students: '82 Students',
      rating: 4.8
    },
    {
      title: 'Business English',
      description: 'Professional English skills for workplace and business communication.',
      price: '12+ tuổi',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80',
      instructor: 'John Anderson',
      role: 'Business Expert',
      duration: '40 Hours',
      students: '65 Students',
      rating: 4.9
    },
    {
      title: 'IELTS Preparation',
      description: 'Intensive IELTS training to achieve your target band score.',
      price: '15+ tuổi',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80',
      instructor: 'Sarah Williams',
      role: 'IELTS Specialist',
      duration: '50 Hours',
      students: '90 Students',
      rating: 5.0
    },
    {
      title: 'Kids English',
      description: 'Fun and engaging English lessons designed specifically for children.',
      price: '5+ tuổi',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80',
      instructor: 'Emma Davis',
      role: 'Kids Specialist',
      duration: '25 Hours',
      students: '120 Students',
      rating: 4.9
    }
  ];

  return (
    <section id="programs" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-victoria-red font-bold text-lg mb-2">{t('programs.label')}</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground max-w-4xl mx-auto leading-tight">
            {t('programs.title')}
          </h2>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-7xl mx-auto mb-12"
        >
          <CarouselContent>
            {programs.map((program, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="group bg-card rounded-3xl overflow-hidden border-2 border-victoria-red/20 hover:border-victoria-red transition-all duration-300 hover:shadow-2xl h-full"
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-victoria-red text-white px-4 py-2 rounded-full font-bold shadow-lg">
                        {program.price}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {program.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {program.description}
                      </p>

                      {/* Stats */}
                      <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock size={16} className="text-victoria-red" />
                          <span>{program.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users size={16} className="text-victoria-red" />
                          <span>{program.students}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star size={16} className="text-victoria-gold fill-victoria-gold" />
                          <span>{program.rating}</span>
                        </div>
                      </div>

                      {/* Instructor */}
                      <div className="flex items-center gap-3 pt-6 border-t border-border">
                        <div className="w-12 h-12 bg-victoria-red/10 rounded-full flex items-center justify-center">
                          <span className="text-victoria-red font-bold">{program.instructor.charAt(0)}</span>
                        </div>
                        <div>
                          <p className="font-bold text-foreground">{program.instructor}</p>
                          <p className="text-sm text-muted-foreground">{program.role}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex -left-12 bg-victoria-red text-white hover:bg-victoria-red-dark" />
          <CarouselNext className="hidden lg:flex -right-12 bg-victoria-red text-white hover:bg-victoria-red-dark" />
        </Carousel>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-victoria-red hover:bg-victoria-red-dark text-white font-bold px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            {t('programs.viewAll')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsSection;
