"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, MapPin } from 'lucide-react';

const EventsSection = () => {
  const { t } = useTranslation();

  const events = [
    {
      title: 'English Speaking Workshop',
      description: 'Interactive workshop focused on improving speaking confidence and fluency.',
      date: '28 Nov',
      time: '10:00am - 12:00pm',
      location: 'Bien Hoa City',
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80'
    },
    {
      title: 'IELTS Strategy Session',
      description: 'Learn effective strategies and tips for achieving high IELTS scores.',
      date: '28 Nov',
      time: '2:00pm - 4:00pm',
      location: 'Bien Hoa City',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80'
    },
    {
      title: 'Cultural Exchange Event',
      description: 'Practice English while learning about different cultures and traditions.',
      date: '29 Nov',
      time: '10:00am - 12:00pm',
      location: 'Bien Hoa City',
      image: '/img/program-2.jpg'
    }
  ];

  return (
    <section id="events" className="py-20">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            {t("events.title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-3xl overflow-hidden border-2 border-victoria-red/20 hover:border-victoria-red transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-victoria-red text-white px-4 py-3 rounded-2xl text-center shadow-lg">
                  <p className="text-2xl font-bold">
                    {event.date.split(" ")[0]}
                  </p>
                  <p className="text-sm">{event.date.split(" ")[1]}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-1 text-victoria-red font-medium">
                    <Calendar size={16} />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-1 text-victoria-red font-medium">
                    <MapPin size={16} />
                    <span>{event.location}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {event.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
