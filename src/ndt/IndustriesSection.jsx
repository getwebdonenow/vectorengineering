import React from "react";
import {
  Fuel,
  Building2,
  Plane,
  Ship,
  Factory,
  Zap,
  ArrowUpRight,
} from "lucide-react";

const industries = [
  {
    icon: Fuel,
    name: "Oil & Gas",
    description:
      "Pipeline inspection, storage tanks, offshore platforms, and refinery equipment testing",
    image:
      "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=600&q=80",
  },
  {
    icon: Building2,
    name: "Construction",
    description:
      "Structural steel inspection, concrete testing, and building infrastructure assessment",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
  },
  {
    icon: Plane,
    name: "Aerospace",
    description:
      "Aircraft component inspection, engine parts testing, and maintenance support",
    image:
      "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=600&q=80",
  },
  {
    icon: Ship,
    name: "Marine",
    description:
      "Ship hull inspection, underwater testing, and maritime equipment certification",
    image:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&q=80",
  },
  {
    icon: Factory,
    name: "Manufacturing",
    description:
      "Quality control, weld inspection, and production line testing solutions",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
  },
  {
    icon: Zap,
    name: "Power & Energy",
    description:
      "Power plant inspection, turbine testing, and renewable energy infrastructure",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80",
  },
];

export default function IndustriesSection() {
  return (
    <section
      id="industries"
      className="py-24 bg-[#0A1628] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0EA5E9]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#D4A853]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
            <span className="text-sm font-medium text-white/80 tracking-wide">
              Industries We Serve
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Expertise Across <span className="text-[#0EA5E9]">Key Sectors</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Delivering specialized NDT solutions tailored to the unique
            requirements of each industry
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/70 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-8 h-80 flex flex-col justify-end">
                <div className="transform transition-all duration-300 group-hover:-translate-y-2">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl">
                      <industry.icon className="w-6 h-6 text-[#0EA5E9]" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-white/0 group-hover:text-white transition-all duration-300 transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">
                    {industry.name}
                  </h3>

                  <p className="text-white/60 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {industry.description}
                  </p>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#0EA5E9]/50 rounded-2xl transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
