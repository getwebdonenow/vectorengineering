"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Shield, Award, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0A1628] via-[#0F2847] to-[#0A1628]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#0EA5E9]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#D4A853]/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
              <span className="w-2 h-2 bg-[#0EA5E9] rounded-full animate-pulse" />
              <span className="text-sm text-white/80 tracking-wide">
                ISO 9001:2015 Certified
              </span>
            </div> */}

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Quality Testing You Can Depend On
              <span className="block mt-2 bg-gradient-to-r from-[#0EA5E9] to-[#D4A853] bg-clip-text text-transparent">
                Across the UAE
              </span>
            </h1>

            <p className="text-lg text-white/70 leading-relaxed max-w-xl">
              Offering comprehensive inspection solutions across the UAE,
              helping businesses maintain safer and more reliable operations.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={scrollToContact}
                className="bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-[#0EA5E9]/25 transition-all hover:shadow-xl hover:shadow-[#0EA5E9]/30 hover:-translate-y-0.5"
              >
                Request a Quote
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              {/* <Button
                variant="outline"
                onClick={scrollToServices}
                className="border-white/20 text-[#0d99d9] hover:bg-white/10 px-8 py-6 text-lg rounded-xl backdrop-blur-sm"
              >
                Our Services
              </Button> */}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-sm text-white/60">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-sm text-white/60">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-sm text-white/60">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Side - Feature Cards */}
          <div className="hidden lg:block relative">
            <div className="relative z-10 space-y-4">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 ml-12 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#0EA5E9]/20 rounded-xl">
                    <Shield className="w-6 h-6 text-[#0EA5E9]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      Safety First
                    </h3>
                    <p className="text-white/60 text-sm">
                      Rigorous safety protocols ensuring zero incidents on all
                      projects
                    </p>
                  </div>
                </div>
              </div>

              {/* <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#D4A853]/20 rounded-xl">
                    <Award className="w-6 h-6 text-[#D4A853]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      Certified Experts
                    </h3>
                    <p className="text-white/60 text-sm">
                      ASNT Level III certified technicians with global expertise
                    </p>
                  </div>
                </div>
              </div> */}

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 ml-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-500/20 rounded-xl">
                    <Clock className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      24/7 Availability
                    </h3>
                    <p className="text-white/60 text-sm">
                      Round-the-clock emergency inspection services
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-[#0EA5E9]/20 to-[#D4A853]/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
