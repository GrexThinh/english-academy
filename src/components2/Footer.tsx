"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Send,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Image from "next/image";

const Footer = () => {
  const { t } = useTranslation();

  const galleryImages = [
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=200&q=80",
    "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=200&q=80",
    "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=200&q=80",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200&q=80",
    "/img/program-1.jpg",
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=200&q=80",
  ];

  return (
    <footer className="bg-victoria-red text-white pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex justify-center">
              <Image
                src={"/logos/logo1.png"}
                alt={"victoria-logo"}
                width={100}
                height={100}
                className="scale-150 text-center"
              />
            </div>

            <p className="text-white/80 leading-relaxed mt-2 mb-6">
              {t("footer.description")}
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-victoria-gold rounded-full flex items-center justify-center transition-all hover:scale-110"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-victoria-gold rounded-full flex items-center justify-center transition-all hover:scale-110"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-victoria-gold rounded-full flex items-center justify-center transition-all hover:scale-110"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-victoria-gold rounded-full flex items-center justify-center transition-all hover:scale-110"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6">{t("footer.newsletter")}</h3>
            <p className="text-white/80 mb-4">
              Đăng ký để nhận thông tin cập nhật và tin tức mới nhất
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button className="bg-victoria-gold hover:bg-victoria-gold/90 text-victoria-red">
                <Send size={18} />
              </Button>
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-xl font-bold mb-6">{t("footer.location")}</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin
                  className="text-victoria-gold flex-shrink-0 mt-1"
                  size={20}
                />
                <p className="text-white/80">{t("contact.address")}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-victoria-gold flex-shrink-0" size={20} />
                <a
                  href="tel:+84123456789"
                  className="text-white/80 hover:text-victoria-gold transition-colors"
                >
                  +84 123 456 789
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-victoria-gold flex-shrink-0" size={20} />
                <a
                  href="mailto:info@victoria-academy.com"
                  className="text-white/80 hover:text-victoria-gold transition-colors"
                >
                  info@victoria-academy.com
                </a>
              </div>
            </div>
          </div>

          {/* Gallery */}
          <div>
            <h3 className="text-xl font-bold mb-6">{t("footer.ourGallery")}</h3>
            <div className="grid grid-cols-3 gap-2">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-lg aspect-square"
                >
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-victoria-gold/0 group-hover:bg-victoria-gold/30 transition-all" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20 text-center">
          <p className="text-white/60">
            © 2025 Victoria Academy. All rights reserved. | Powered by Grex
            Solution
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
