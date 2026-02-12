import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Building2, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import logo from "@/pages/assets/logo/50.png";

export function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { label: t("nav.home"), href: "/" },
    {
      label: t("nav.about"),
      children: [
        { label: t("nav.who_we_are"), href: "/about" },
        { label: t("nav.vision"), href: "/vision" },
        { label: t("nav.mission"), href: "/mission" },
        { label: t("nav.founder"), href: "/founder" },
      ]
    },
    {
      label: t("nav.services"),
      children: [
        { label: t("nav.commercial"), href: "/services/commercial" },
        { label: t("nav.residential"), href: "/services/residential" },
        { label: t("nav.planning"), href: "/planning" },
        { label: t("nav.estimation"), href: "/estimation" },
      ]
    },
    { label: t("nav.partners"), href: "/partners" },
    { label: t("nav.reviews"), href: "/reviews" },
    { label: t("nav.contact"), href: "/contact" },
  ];

  const toggleLanguage = () => {
    const nextLng = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(nextLng);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isOpen ? "bg-background/80 backdrop-blur-md border-b border-border/50 shadow-sm" : "bg-transparent"
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <img
              src={logo}
              alt="Tower Top"
              className="h-16 md:h-20 lg:h-24 w-auto object-contain transition-transform hover:scale-105 filter drop-shadow-md"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              item.children ? (
                <div key={item.label} className="relative group">
                  <button className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-1 transition-colors cursor-pointer ${scrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"
                    }`}>
                    {item.label}
                    <ChevronDown className="w-4 h-4 opacity-50 group-hover:rotate-180 transition-transform duration-200" />
                  </button>

                  {/* Dropdown */}
                  <div className="absolute top-full left-0 mt-2 w-48 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
                    <div className="bg-card/95 backdrop-blur-xl border border-border/50 rounded-xl shadow-xl p-1 overflow-hidden">
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href}>
                          <div className="block px-4 py-2.5 rounded-lg text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer">
                            {child.label}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={item.label} href={item.href}>
                  <div className={`px-4 py-2 rounded-lg text-sm font-medium cursor-pointer transition-colors ${location === item.href
                    ? "text-primary font-bold"
                    : scrolled
                      ? "text-foreground hover:text-primary"
                      : "text-white hover:text-white/80"
                    }`}>
                    {item.label}
                  </div>
                </Link>
              )
            ))}

            {/* Language Switcher */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className={`ml-2 flex items-center gap-2 no-default-hover-elevate hover:bg-transparent ${scrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"}`}
            >
              <Globe className="w-4 h-4" />
              <span className="font-bold">{i18n.language === 'en' ? 'AR' : 'EN'}</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className={scrolled ? "text-foreground" : "text-white"}
            >
              <Globe className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className={scrolled ? "text-foreground" : "text-white"}
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div className="space-y-1">
                      <div className="px-4 py-2 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                        {item.label}
                      </div>
                      <div className="pl-4 space-y-1">
                        {item.children.map((child) => (
                          <Link key={child.href} href={child.href}>
                            <div className="block px-4 py-3 rounded-lg text-base font-medium text-foreground hover:bg-secondary active:bg-secondary/80 transition-colors">
                              {child.label}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link href={item.href}>
                      <div className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${location === item.href
                        ? "bg-primary/10 text-primary"
                        : "text-foreground hover:bg-secondary"
                        }`}>
                        {item.label}
                      </div>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
