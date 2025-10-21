"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import {
  Menu,
  X,
  Phone,
  Mail,
  Moon,
  Sun,
  ChevronDown,
  Search,
} from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { Button } from "./ui/button";
import Image from "next/image";

const Header = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lng);
    }
  };

  const navItems = [
    { key: "about", path: "#about" },
    {
      key: "programs",
      path: "#programs",
      children: [
        { key: "program-1", path: "program-1" },
        { key: "program-2", path: "program-2" },
        { key: "program-3", path: "program-3" },
      ],
    },
    {
      key: "events",
      path: "#events",
      children: [
        { key: "event-1", path: "event-1" },
        { key: "event-2", path: "event-2" },
        { key: "event-3", path: "event-3" },
      ],
    },
    {
      key: "branches",
      path: "#branch",
      children: [
        { key: "branch-1", path: "branch-1" },
        { key: "branch-2", path: "branch-2" },
        { key: "branch-3", path: "branch-3" },
      ],
    },
    { key: "contact", path: "#contact" },
  ];

  const [showTopBar, setShowTopBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down → hide top bar
        setShowTopBar(false);
      } else {
        // Scrolling up → show top bar
        setShowTopBar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* ===== Top Bar ===== */}
      <div
        className={`bg-victoria-red text-white rounded-bl-[40px] rounded-tr-[40px] max-w-7xl px-4 mx-auto transition-all duration-500 ${
          showTopBar
            ? "opacity-100 translate-y-0 h-[50px]"
            : "opacity-0 -translate-y-full h-0 overflow-hidden"
        }`}
      >
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
            <div className="flex flex-wrap items-center gap-4">
              <Image
                src={"/logos/1.png"}
                alt={"victoria-logo"}
                width={50}
                height={50}
              />
              <a
                href="tel:+84123456789"
                className="flex items-center gap-2 hover:text-victoria-gold transition-colors"
              >
                <Phone size={14} className="text-victoria-gold" />
                <span>+84 123 456 789</span>
              </a>
              <a
                href="mailto:info@victoria-academy.com"
                className="flex items-center gap-2 hover:text-victoria-gold transition-colors"
              >
                <Mail size={14} className="text-victoria-gold" />
                <span>info@victoria-academy.com</span>
              </a>
            </div>
            <div className="flex items-center gap-3 text-victoria-gold font-bold text-sm underline cursor-pointer brightness-[1.25]">
              <div>Facebook</div> |<div>Zalo</div> |<div>Vị trí</div>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="rounded-full"
                aria-label="Toggle theme"
              >
                {theme === "light" ? <Moon size={15} /> : <Sun size={15} />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Main Navigation ===== */}
      <div className="container max-w-7xl mx-auto">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center">
              <Image
                src={"/logos/1.png"}
                alt={"victoria-logo"}
                width={100}
                height={100}
              />
              <Image
                src={"/logos/2.png"}
                alt={"victoria-logo"}
                width={200}
                height={100}
                className="ml-[-20px]"
              />
            </div>
          </Link>

          {/* --- Desktop Nav --- */}
          <nav className="hidden lg:flex items-center gap-8 relative">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.key} className="group relative">
                  <button className="flex items-center gap-1 font-semibold text-foreground hover:text-victoria-red transition-colors">
                    {t(`nav.${item.key}`)}
                    <ChevronDown
                      size={16}
                      className="group-hover:rotate-180 transition-transform"
                    />
                  </button>

                  {/* Dropdown Menu */}
                  <div className="absolute left-0 top-full mt-2 w-44 rounded-lg bg-white shadow-lg border border-gray-100 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300">
                    {item.children.map((child) => (
                      <a
                        key={child.key}
                        href={child.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-victoria-red hover:text-white rounded-md transition-colors"
                      >
                        {child.key}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={item.key}
                  href={item.path}
                  className="font-semibold text-foreground hover:text-victoria-red transition-colors"
                >
                  {t(`nav.${item.key}`)}
                </a>
              )
            )}
            <Button variant="ghost">
              <Search />
            </Button>
          </nav>

          {/* --- Right Controls --- */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="hidden sm:flex items-center gap-1 bg-muted rounded-xl p-1">
              {["en", "vi"].map((lng) => (
                <button
                  key={lng}
                  onClick={() => changeLanguage(lng)}
                  className={`flex items-center justify-center px-3 py-1.5 rounded-lg transition-all ${
                    i18n.language === lng
                      ? "bg-victoria-red/80 text-white shadow-[0_0_5px_rgba(232,62,105,0.5)]"
                      : "text-muted-foreground"
                  }`}
                >
                  <Image
                    src={`https://flagicons.lipis.dev/flags/4x3/${
                      lng === "en" ? "gb" : "vn"
                    }.svg`}
                    alt={`${lng}-flag`}
                    width={22}
                    height={22}
                    className="rounded-sm"
                  />
                </button>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* ===== Mobile Dropdown ===== */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <div key={item.key}>
                  <button
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === item.key ? null : item.key
                      )
                    }
                    className="flex justify-between items-center w-full text-left text-foreground hover:text-victoria-red font-semibold transition-colors py-2"
                  >
                    {t(`nav.${item.key}`)}
                    {item.children && (
                      <ChevronDown
                        size={18}
                        className={`transition-transform ${
                          openDropdown === item.key ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {/* Mobile Submenu */}
                  {item.children && openDropdown === item.key && (
                    <div className="pl-4 flex flex-col gap-1">
                      {item.children.map((child) => (
                        <a
                          key={child.key}
                          href={child.path}
                          className="text-muted-foreground hover:text-victoria-red transition-colors py-1"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {t(`nav.${child.key}`)}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
