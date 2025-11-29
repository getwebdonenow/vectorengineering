import React from "react";
import { CheckCircle2, Users, Target, Leaf } from "lucide-react";

const certifications = [
  "ISO 9001:2015",
  "ISO 17025",
  "ASNT Certified",
  "ADNOC Approved",
  "CNIA Approved",
  "PCN Certified",
];

const values = [
  {
    icon: Target,
    title: "Precision",
    description:
      "Accurate results through state-of-the-art equipment and rigorous methodologies",
  },
  {
    icon: Users,
    title: "Expertise",
    description:
      "Highly skilled technicians with international certifications and extensive field experience",
  },
  {
    icon: Leaf,
    title: "Integrity",
    description:
      "Honest, transparent reporting with unwavering commitment to quality and safety",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4A853]/10 rounded-full">
              <span className="text-sm font-medium text-[#D4A853] tracking-wide">
                About Us
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A1628] leading-tight">
              Your Trusted Partner in
              <span className="block text-[#0EA5E9]">Quality Assurance</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              With over 15 years of experience in the UAE, we have established
              ourselves as a premier provider of Non-Destructive Testing
              services. Our commitment to excellence, combined with cutting-edge
              technology and certified expertise, ensures the highest standards
              of inspection and quality control.
            </p>

            <p className="text-gray-600 leading-relaxed">
              We serve major oil & gas corporations, construction firms, and
              manufacturing industries across the Gulf region, delivering
              reliable testing solutions that protect assets and ensure
              regulatory compliance.
            </p>

            {/* Certifications */}
            {/* <div className="pt-6">
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Certifications & Approvals
              </h4>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 bg-[#0A1628]/5 rounded-lg"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#0EA5E9]" />
                    <span className="text-sm font-medium text-[#0A1628]">
                      {cert}
                    </span>
                  </div>
                ))}
              </div>
            </div> */}
          </div>

          {/* Right Content - Image & Stats */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80"
                alt="NDT Engineer at work"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 via-transparent to-transparent" />

              {/* Floating Stats Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-xl">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-[#0A1628]">50+</div>
                    <div className="text-xs text-gray-500">
                      Expert Engineers
                    </div>
                  </div>
                  <div className="border-x border-gray-200">
                    <div className="text-2xl font-bold text-[#0EA5E9]">
                      24/7
                    </div>
                    <div className="text-xs text-gray-500">
                      Support Available
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#D4A853]">
                      99.9%
                    </div>
                    <div className="text-xs text-gray-500">Accuracy Rate</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#0EA5E9]/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#D4A853]/10 rounded-full blur-2xl" />
          </div>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-gradient-to-b from-gray-50 to-white border border-gray-100"
            >
              <div className="inline-flex p-4 bg-[#0A1628] rounded-2xl mb-6">
                <value.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0A1628] mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
