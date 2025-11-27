import React from "react";
import {
  Waves,
  Radio,
  Magnet,
  Scan,
  Eye,
  Gauge,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Waves,
    title: "Ultrasonic Testing",
    shortCode: "UT",
    description:
      "High-frequency sound waves to detect internal flaws, measure thickness, and characterize materials with precision.",
    features: ["Weld Inspection", "Thickness Gauging", "Flaw Detection"],
  },
  {
    icon: Radio,
    title: "Radiographic Testing",
    shortCode: "RT",
    description:
      "X-ray and gamma-ray inspection for comprehensive internal structure analysis of welds and castings.",
    features: [
      "Digital Radiography",
      "Film Interpretation",
      "Pipeline Inspection",
    ],
  },
  {
    icon: Magnet,
    title: "Magnetic Particle Testing",
    shortCode: "MT",
    description:
      "Surface and near-surface discontinuity detection in ferromagnetic materials using magnetic fields.",
    features: ["Surface Cracks", "Weld Defects", "Forging Inspection"],
  },
  {
    icon: Eye,
    title: "Visual Inspection",
    shortCode: "VT",
    description:
      "Comprehensive visual examination using advanced optics and remote visual inspection equipment.",
    features: ["RVI Equipment", "Weld Profiles", "Corrosion Mapping"],
  },
  {
    icon: Scan,
    title: "Penetrant Testing",
    shortCode: "PT",
    description:
      "Surface-breaking defect detection in non-porous materials using fluorescent or visible dye penetrants.",
    features: ["Fluorescent PT", "Visible Dye PT", "Aerospace Standards"],
  },
  {
    icon: Gauge,
    title: "Hardness Testing",
    shortCode: "HT",
    description:
      "Material hardness measurement to verify heat treatment and ensure material specifications compliance.",
    features: ["Portable Testing", "Lab Analysis", "Certification"],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 bg-[#F8FAFC] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(10,22,40,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(10,22,40,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0EA5E9]/10 rounded-full mb-6">
            <span className="text-sm font-medium text-[#0EA5E9] tracking-wide">
              Our Expertise
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A1628] mb-6">
            Comprehensive NDT Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Industry-leading inspection methods ensuring structural integrity
            and safety compliance across all sectors
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#0EA5E9]/20 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-4 bg-gradient-to-br from-[#0A1628] to-[#0F2847] rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-4xl font-bold text-gray-100 group-hover:text-[#0EA5E9]/20 transition-colors">
                  {service.shortCode}
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#0A1628] mb-3 group-hover:text-[#0EA5E9] transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-sm text-gray-500"
                  >
                    <div className="w-1.5 h-1.5 bg-[#0EA5E9] rounded-full" />
                    {feature}
                  </div>
                ))}
              </div>

              <button className="flex items-center gap-2 text-[#0EA5E9] font-medium group/btn">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
