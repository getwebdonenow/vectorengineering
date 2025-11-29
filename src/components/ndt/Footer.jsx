import React from "react";
import { MapPin, Phone, Mail, ChevronRight, ArrowUp } from "lucide-react";

const quickLinks = [
  { name: "About Us", href: "#about" },
  { name: "Our Services", href: "#services" },
  { name: "Industries", href: "#industries" },
  { name: "Contact", href: "#contact" },
];

const services = [
  "Ultrasonic Testing",
  "Radiographic Testing",
  "Magnetic Particle Testing",
  "Penetrant Testing",
  "Visual Inspection",
  "Hardness Testing",
];

const certifications = [
  "ISO 9001:2015",
  "ISO 17025",
  "ASNT Certified",
  "ADNOC Approved",
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0A1628] text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0EA5E9]/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4A853]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold">
                  Vector<span className="text-[#0EA5E9]">Engineering</span>
                </h3>
                <p className="text-sm text-white/60 mt-1">
                  Excellence in Testing
                </p>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Leading provider of Non-Destructive Testing solutions in the
                UAE, ensuring the integrity and safety of critical
                infrastructure across industries.
              </p>
              {/* <div className="flex gap-4">
                {certifications.slice(0, 3).map((cert, index) => (
                  <div
                    key={index}
                    className="px-3 py-1.5 bg-white/5 rounded-lg text-xs text-white/60 border border-white/10"
                  >
                    {cert}
                  </div>
                ))}
              </div> */}
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="flex items-center gap-2 text-white/70 hover:text-[#0EA5E9] transition-colors group"
                    >
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="flex items-center gap-2 text-white/70">
                      <div className="w-1.5 h-1.5 bg-[#0EA5E9] rounded-full" />
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#0EA5E9] mt-0.5" />
                  <div className="text-sm text-white/70">
                    Musaffah
                    <br />
                    Abu dhabi, United Arab Emirates
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#0EA5E9]" />
                  <span className="text-sm text-white/70">
                    +971 54 494 2878
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#0EA5E9]" />
                  <span className="text-sm text-white/70">
                    info@vectorengineeringuae.com
                  </span>
                </div>
              </div>

              {/* Newsletter */}
              <div className="mt-8">
                <p className="text-sm font-medium mb-3">Stay Updated</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm focus:outline-none focus:border-[#0EA5E9] transition-colors"
                  />
                  <button className="px-4 py-2 bg-[#0EA5E9] rounded-lg hover:bg-[#0EA5E9]/80 transition-colors">
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-white/50">
                © {new Date().getFullYear()} Vector Engineering. All rights
                reserved.
              </p>
              <div className="flex items-center gap-6 text-sm text-white/50">
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Sitemap
                </a>
              </div>
              <button
                onClick={scrollToTop}
                className="p-2 bg-white/5 border border-white/10 rounded-lg hover:bg-[#0EA5E9] hover:border-[#0EA5E9] transition-all group"
              >
                <ArrowUp className="w-5 h-5 text-white/70 group-hover:text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
