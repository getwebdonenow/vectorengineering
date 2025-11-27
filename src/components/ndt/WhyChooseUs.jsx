"use client";
import React from "react";
import {
  Zap,
  Shield,
  Clock,
  Award,
  Headphones,
  FileCheck,
  ArrowRight,
} from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Advanced Technology",
    description:
      "State-of-the-art equipment including phased array ultrasonics, digital radiography, and automated inspection systems",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Shield,
    title: "Safety Excellence",
    description:
      "Zero-incident track record with comprehensive HSE protocols and trained safety personnel on every project",
    color: "from-emerald-500 to-green-500",
  },
  {
    icon: Clock,
    title: "Rapid Turnaround",
    description:
      "Efficient project execution with same-day reporting capabilities and minimal downtime for your operations",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Award,
    title: "Certified Expertise",
    description:
      "ASNT Level III certified inspectors with specialized training across multiple NDT methods",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Round-the-clock availability for emergency inspections and technical consultations",
    color: "from-red-500 to-rose-500",
  },
  {
    icon: FileCheck,
    title: "Comprehensive Reports",
    description:
      "Detailed documentation with digital records, analysis, and actionable recommendations",
    color: "from-indigo-500 to-blue-500",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0EA5E9]/10 rounded-full mb-6">
            <span className="text-sm font-medium text-[#0EA5E9] tracking-wide">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A1628] mb-6">
            The NDT Advantage
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the difference of working with a team that prioritizes
            quality, safety, and customer satisfaction
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${reason.color} mb-6 shadow-lg`}
                >
                  <reason.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold text-[#0A1628] mb-3 group-hover:text-[#0EA5E9] transition-colors">
                  {reason.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>

              {/* Corner Decoration */}
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gray-50 rounded-tl-3xl transition-all duration-300 group-hover:bg-[#0EA5E9]/5" />
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-20 bg-gradient-to-r from-[#0A1628] to-[#0F2847] rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#0EA5E9]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4A853]/10 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Ready to Ensure Your Asset Integrity?
              </h3>
              <p className="text-white/70 max-w-xl">
                Contact us today for a free consultation and discover how our
                NDT solutions can protect your investments.
              </p>
            </div>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex items-center gap-2 bg-white text-[#0A1628] px-8 py-4 rounded-xl font-semibold hover:bg-[#0EA5E9] hover:text-white transition-all duration-300 whitespace-nowrap shadow-xl"
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
