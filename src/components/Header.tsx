"use client";

import React, { useEffect, useRef, useState } from "react";
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
import { useIsMobile } from "@/hooks/use-mobile";
import { Input } from "./ui/input";

type NavChild = { key: string; path: string };
type NavItem =
  | { key: string; path: string; children?: never }
  | { key: string; path: string; children: NavChild[] };

const Header = () => {
  const { t, i18n } = useTranslation();
  const isMobile = useIsMobile();
  const { theme, toggleTheme } = useTheme();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
    null
  );

  const [showTopBar, setShowTopBar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const drawerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setShowTopBar(!isMobile);
  }, [isMobile]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowTopBar(false);
      } else {
        setShowTopBar(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lng);
    }
  };

  const navItems: NavItem[] = [
    { key: "about", path: "#about" },
    {
      key: "programs",
      path: "#programs",
      children: [
        { key: "Tiếng Anh Mầm non", path: "#programs" },
        { key: "Tiếng Anh Tiểu học", path: "#programs" },
        { key: "Khóa học Luyện Thi", path: "#programs" },
      ],
    },
    {
      key: "events",
      path: "#events",
      children: [
        {
          key: "Câu lạc bộ luyện nói tiếng Anh – Tự tin giao tiếp",
          path: "#events",
        },
        {
          key: "Sự kiện giao lưu văn hóa quốc tế",
          path: "#events",
        },
        {
          key: "Khai trương trung tâm mới tại phường Trảng Dài",
          path: "#events",
        },
      ],
    },
    {
      key: "branches",
      path: "#branch",
      children: [
        { key: "Trụ sở chính", path: "#contact" },
        { key: "Chi nhánh Trảng Bom 1", path: "#contact" },
        { key: "Chi nhánh Trảng Bom 2", path: "#contact" },
        { key: "Chi nhánh Xuân Lộc", path: "#contact" },
        { key: "Chi nhánh Long Thành", path: "#contact" },
      ],
    },
    { key: "contact", path: "#contact" },
  ];

  const toHref = (p: string) => (p.startsWith("#") ? p : `#${p}`);

  // Hide/show top bar on scroll (desktop & mobile)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowTopBar(false);
      } else {
        setShowTopBar(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [mobileMenuOpen]);

  // Close mobile menu on route/hash change
  useEffect(() => {
    const handler = () => setMobileMenuOpen(false);
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  // Close mobile drawer if clicking outside
  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (
        mobileMenuOpen &&
        drawerRef.current &&
        !drawerRef.current.contains(e.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* ===== Top Bar (responsive) ===== */}
      <div
        className={`bg-victoria-red text-white rounded-bl-[40px] rounded-tr-[40px] max-w-7xl px-4 mx-auto transition-all duration-500 ${
          !isMobile && showTopBar
            ? "opacity-100 translate-y-0 h-[50px]"
            : "opacity-0 -translate-y-full h-0 overflow-hidden "
        }`}
      >
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-xs sm:text-sm">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <Image
                src={"/logos/1.png"}
                alt={"victoria-logo"}
                width={40}
                height={40}
                className="h-8 w-auto"
                priority
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

            <div className="flex items-center gap-3 text-victoria-gold font-semibold text-xs sm:text-sm underline cursor-pointer brightness-[1.25]">
              <a href="#" className="hover:brightness-150">
                Facebook
              </a>
              |
              <a href="#" className="hover:brightness-150">
                Zalo
              </a>
              |
              <a href="#contact" className="hover:brightness-150">
                Vị trí
              </a>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="rounded-full"
                aria-label={
                  theme === "light"
                    ? "Switch to dark mode"
                    : "Switch to light mode"
                }
              >
                {theme === "light" ? <Moon size={15} /> : <Sun size={15} />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Main Navigation ===== */}
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center"
            aria-label="Victoria Academy Home"
          >
            <Image
              src={"/logos/1.png"}
              alt={"victoria-logo"}
              width={100}
              height={100}
              className="w-12 sm:w-16 h-auto"
              priority
            />
            <Image
              src={"/logos/2.png"}
              alt={"victoria-text-logo"}
              width={200}
              height={100}
              className="w-32 sm:w-40 h-auto -ml-3 sm:-ml-5"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-6 xl:gap-8 relative"
            aria-label="Primary"
          >
            {navItems.map((item) =>
              "children" in item ? (
                <div
                  key={item.key}
                  className="group relative"
                  onMouseEnter={() => setOpenDropdown(item.key)}
                  onMouseLeave={() =>
                    setOpenDropdown((k) => (k === item.key ? null : k))
                  }
                >
                  <button
                    className="flex items-center gap-1 font-semibold text-foreground hover:text-victoria-red transition-colors"
                    aria-haspopup="menu"
                    aria-expanded={openDropdown === item.key}
                    onFocus={() => setOpenDropdown(item.key)}
                    onBlur={() => setOpenDropdown(null)}
                  >
                    {t(`nav.${item.key}`)}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        openDropdown === item.key ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    role="menu"
                    className={`absolute left-0 top-full mt-2 w-52 rounded-lg bg-white shadow-lg border border-gray-100 transition-all duration-200 ${
                      openDropdown === item.key
                        ? "opacity-100 translate-y-0 visible"
                        : "opacity-0 -translate-y-2 invisible"
                    }`}
                  >
                    {item.children.map((child) => (
                      <a
                        key={child.key}
                        href={toHref(child.path)}
                        role="menuitem"
                        className="block px-4 py-2 text-gray-700 hover:bg-victoria-red hover:text-white rounded-md transition-colors"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {t(`nav.${child.key}`, child.key)}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={item.key}
                  href={toHref(item.path)}
                  className="font-semibold text-foreground hover:text-victoria-red transition-colors"
                >
                  {t(`nav.${item.key}`)}
                </a>
              )
            )}

            <Button variant="ghost" aria-label="Search">
              <Search />
            </Button>

            {/* Language Switcher (desktop) */}
            <div className="hidden sm:flex items-center gap-1 bg-muted rounded-xl p-1 ml-2">
              {["en", "vi"].map((lng) => (
                <button
                  key={lng}
                  onClick={() => changeLanguage(lng)}
                  className={`flex items-center justify-center px-3 py-1.5 rounded-lg transition-all ${
                    i18n.language === lng
                      ? "bg-victoria-red/80 text-white shadow-[0_0_5px_rgba(232,62,105,0.5)]"
                      : "text-muted-foreground"
                  }`}
                  aria-pressed={i18n.language === lng}
                  aria-label={`Change language to ${lng}`}
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
          </nav>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Language quick toggle (mobile) */}
            <button
              onClick={() =>
                changeLanguage(i18n.language === "vi" ? "en" : "vi")
              }
              className="p-2 rounded-lg bg-muted"
              aria-label="Toggle language"
              title="Toggle language"
            >
              <Image
                src={`https://flagicons.lipis.dev/flags/4x3/${
                  i18n.language === "en" ? "gb" : "vn"
                }.svg`}
                alt={`${i18n.language}-flag`}
                width={20}
                height={20}
                className="rounded-sm"
              />
            </button>

            {/* Theme */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-muted"
              aria-label={
                theme === "light"
                  ? "Switch to dark mode"
                  : "Switch to light mode"
              }
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-lg bg-muted"
              aria-label="Open menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <Menu />
            </button>
          </div>
        </div>
      </div>

      {/* ===== Mobile Drawer ===== */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity lg:hidden ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      <aside
        id="mobile-menu"
        ref={drawerRef}
        className={`fixed top-0 right-0 w-[88%] max-w-sm z-[60]
  bg-background border-l border-border shadow-xl
  transition-transform duration-300 lg:hidden
  h-[100dvh] max-h-[100dvh]  /* fill dynamic viewport height */
  ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between p-4 border-b">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center"
          >
            <Image
              src={"/logos/1.png"}
              alt="logo"
              width={36}
              height={36}
              className="h-10 w-auto"
            />
            <Image
              src={"/logos/2.png"}
              alt={"victoria-text-logo"}
              width={200}
              height={100}
              className="w-35 sm:w-40 h-auto -ml-3 sm:-ml-5"
              priority
            />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 rounded-lg bg-muted"
            aria-label="Close menu"
          >
            <X />
          </button>
        </div>

        <nav
          className="flex-1 min-h-0 overflow-y-auto p-2
               overscroll-contain
               pb-[env(safe-area-inset-bottom)]"
          aria-label="Mobile primary"
        >
          <div className="p-2">
            <Input placeholder="Tìm kiếm" />
          </div>
          {navItems.map((item) =>
            "children" in item ? (
              <div key={item.key} className="mb-1">
                <button
                  onClick={() =>
                    setOpenMobileDropdown((k) =>
                      k === item.key ? null : item.key
                    )
                  }
                  className="w-full flex items-center justify-between px-3 py-3 rounded-lg hover:bg-muted text-left font-semibold"
                  aria-expanded={openMobileDropdown === item.key}
                  aria-controls={`sec-${item.key}`}
                >
                  <span>{t(`nav.${item.key}`)}</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      openMobileDropdown === item.key ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  id={`sec-${item.key}`}
                  className={`grid overflow-hidden transition-all duration-300 ${
                    openMobileDropdown === item.key
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="min-h-0">
                    {item.children.map((child) => (
                      <a
                        key={child.key}
                        href={toHref(child.path)}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block pl-6 pr-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"
                      >
                        {t(`nav.${child.key}`, child.key)}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={item.key}
                href={toHref(item.path)}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-3 rounded-lg hover:bg-muted font-semibold"
              >
                {t(`nav.${item.key}`)}
              </a>
            )
          )}

          <div className="mt-4 border-t pt-4 space-y-3">
            <div className="text-victoria-red p-2 flex flex-col gap-3 text-xs">
              <a
                href="tel:+84123456789"
                className="flex items-center gap-2 hover:text-victoria-gold transition-colors"
              >
                <Phone size={14} />
                <span>+84 123 456 789</span>
              </a>
              <a
                href="mailto:info@victoria-academy.com"
                className="flex items-center gap-2 hover:text-victoria-gold transition-colors"
              >
                <Mail size={14} />
                <span>info@victoria-academy.com</span>
              </a>
              <div className="flex items-center gap-3 text-victoria-gold font-semibold underline cursor-pointer brightness-[1.25]">
                <a href="#" className="hover:brightness-150">
                  Facebook
                </a>
                |
                <a href="#" className="hover:brightness-150">
                  Zalo
                </a>
                |
                <a href="#contact" className="hover:brightness-150">
                  Vị trí
                </a>
              </div>
            </div>
          </div>
        </nav>
      </aside>
    </header>
  );
};

export default Header;
