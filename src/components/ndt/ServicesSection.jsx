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
    title: "PMI Testing",
    shortCode: "PMI",
    description:
      "Positive Material Identification to verify alloy composition and ensure compliance with required material specifications.",
    features: ["Alloy Verification", "On-site Analysis", "Material Compliance"],
  },
  {
    icon: Radio,
    title: "Welding & Coating Inspection",
    shortCode: "WCI",
    description:
      "Comprehensive inspection of welding and coating applications to ensure structural integrity and long-term protection.",
    features: [
      "Weld Quality Assessment",
      "Coating Thickness Testing",
      "Surface Preparation Checks",
    ],
  },
  {
    icon: Magnet,
    title: "Safety Audits & Inspections",
    shortCode: "SAI",
    description:
      "Systematic evaluation of workplace safety practices to identify hazards, ensure compliance, and enhance safety culture.",
    features: [
      "Workplace Risk Assessment",
      "Compliance Verification",
      "Corrective Action Planning",
    ],
  },
  {
    icon: Eye,
    title: "E&I Inspection & Pre-Commissioning / Commissioning",
    shortCode: "EI",
    description:
      "Inspection and validation of electrical and instrumentation systems during installation, pre-commissioning, and commissioning stages.",
    features: ["Loop Checks", "Functional Testing", "System Verification"],
  },
  {
    icon: Scan,
    title: "FAT & Maintenance",
    shortCode: "FAT",
    description:
      "Factory Acceptance Testing and maintenance services to ensure equipment performance, reliability, and operational readiness.",
    features: [
      "Factory Acceptance Testing",
      "Predictive Maintenance",
      "Performance Validation",
    ],
  },
  {
    icon: Gauge,
    title: "Site Surveys & MEP",
    shortCode: "MEP",
    description:
      "Detailed site surveys and MEP inspection services to support design accuracy, installation quality, and project execution.",
    features: [
      "Mechanical Systems Review",
      "Electrical Compliance",
      "Plumbing & HVAC Assessment",
    ],
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
