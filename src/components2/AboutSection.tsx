"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { CheckCircle, Play } from "lucide-react";
import { Button } from "./ui/button";

const AboutSection = () => {
  const { t } = useTranslation();

  const features = [
    "feature1",
    "feature2",
    "feature3",
    "feature4",
    "feature5",
    "feature6",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground max-w-4xl mx-auto leading-tight">
            {t("about.brand")}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80"
                alt="Students learning"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-victoria-red/20 group-hover:bg-victoria-red/30 transition-all" />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-victoria-gold rounded-full flex items-center justify-center shadow-xl"
              >
                <Play
                  className="text-victoria-red ml-1"
                  size={32}
                  fill="currentColor"
                />
              </motion.button>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-victoria-gold/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-victoria-red/20 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary font-bold text-xl mb-8 leading-relaxed">
              {t("about.description")}
            </p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-4 mb-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <CheckCircle
                    className="text-victoria-gold flex-shrink-0 mt-1"
                    size={20}
                  />
                  <span className="text-victoria-gold font-semibold">
                    {t(`about.${feature}`)}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <Button
              size="lg"
              className="bg-victoria-red hover:bg-victoria-red-dark text-white font-bold px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              {t("about.moreDetails")}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
