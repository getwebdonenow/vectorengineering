"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Industries", href: "#industries" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href) => {
    setIsMobileMenuOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div
                className={`text-2xl font-bold transition-colors ${
                  isScrolled ? "text-[#0A1628]" : "text-white"
                }`}
              >
                Vector<span className="text-[#0EA5E9]">Engineering</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`font-medium transition-colors hover:text-[#0EA5E9] ${
                    isScrolled ? "text-gray-700" : "text-white/90"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+971 54 494 2878"
                className={`flex items-center gap-2 font-medium transition-colors ${
                  isScrolled ? "text-gray-700" : "text-white/90"
                }`}
              >
                <Phone className="w-4 h-4" />
                <span>+971 54 494 2878</span>
              </a>
              <Button
                onClick={() => scrollToSection("#contact")}
                className="bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white px-6 rounded-lg shadow-lg shadow-[#0EA5E9]/25"
              >
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 w-80 h-full bg-white shadow-2xl transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <div className="text-2xl font-bold text-[#0A1628]">
                Vector<span className="text-[#0EA5E9]">Engineering</span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-[#0EA5E9] rounded-lg font-medium transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <a
                href="tel:+971 54 494 2878"
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                <Phone className="w-5 h-5 text-[#0EA5E9]" />
                <span>+971 54 494 2878</span>
              </a>
              <Button
                onClick={() => scrollToSection("#contact")}
                className="w-full mt-4 bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white rounded-lg"
              >
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
