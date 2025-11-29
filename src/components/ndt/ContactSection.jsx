"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Loader2,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["Musaffah", "Abu dhabi, United Arab Emirates"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+971 54 494 2878"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["info@vectorengineeringuae.com", "sales@vectorengineeringuae.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Mon - Sat: 8:00 AM - 6:00 PM", "Emergency: 24/7"],
  },
];

const services = [
  "PMI Testing",
  "Welding & Coating Inspection",
  "Safety Audits & Inspections",
  "E&I Inspection & Pre-Commissioning / Commissioning",
  "FAT & Maintenance",
  "Site Surveys & MEP",
  "Other Services",
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });

        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section
      id="contact"
      className="py-24 bg-[#F8FAFC] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(10,22,40,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(10,22,40,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4A853]/10 rounded-full mb-6">
            <span className="text-sm font-medium text-[#D4A853] tracking-wide">
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A1628] mb-6">
            Let's Discuss Your <span className="text-[#0EA5E9]">Project</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Request a quote or schedule a consultation with our expert team
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gradient-to-br from-[#0A1628] to-[#0F2847] rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-xl">
                      <info.icon className="w-5 h-5 text-[#0EA5E9]" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{info.title}</h4>
                      {info.lines.map((line, idx) => (
                        <p key={idx} className="text-white/70 text-sm">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative Element */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-sm text-white/50 mb-4">Connect with us</p>
                <div className="flex gap-4">
                  <a
                    href="https://wa.me/971544942878"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#0EA5E9] transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      fill="currentColor"
                      className="w-5 h-5 text-white"
                    >
                      <path d="M16.002 3C9.384 3 4 8.383 4 15c0 2.64.86 5.083 2.32 7.073L4.5 29l7.17-1.82A11.9 11.9 0 0 0 16 27c6.617 0 12-5.383 12-12s-5.383-12-11.998-12zm0 2c5.523 0 10 4.477 10 10 0 5.522-4.477 10-10 10-1.94 0-3.75-.572-5.266-1.55l-.376-.238-4.25 1.08 1.137-4.14-.245-.392A9.94 9.94 0 0 1 6 15c0-5.523 4.477-10 10-10zm5.104 13.29c-.278-.14-1.643-.81-1.897-.902-.254-.093-.44-.14-.626.14-.185.278-.72.902-.882 1.085-.162.185-.325.208-.603.07-.278-.14-1.176-.433-2.24-1.38-.828-.738-1.387-1.65-1.55-1.928-.162-.278-.017-.428.122-.566.125-.125.278-.325.417-.488.14-.162.185-.278.278-.463.093-.185.047-.348-.023-.488-.07-.14-.626-1.51-.858-2.067-.226-.543-.456-.47-.626-.48-.162-.007-.348-.01-.534-.01-.185 0-.488.07-.743.348-.254.278-.968.946-.968 2.303 0 1.358.994 2.67 1.133 2.855.14.185 1.957 2.99 4.85 4.187.678.292 1.207.467 1.62.598.68.216 1.296.185 1.785.112.544-.08 1.643-.67 1.876-1.317.23-.647.23-1.202.162-1.317-.07-.115-.254-.185-.532-.325z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-48">
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Dubai, UAE</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0A1628] mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600">
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Full Name *
                      </label>
                      <Input
                        required
                        placeholder=""
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="h-12 border-gray-200 focus:border-[#0EA5E9] focus:ring-[#0EA5E9]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Email Address *
                      </label>
                      <Input
                        required
                        type="email"
                        placeholder=""
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="h-12 border-gray-200 focus:border-[#0EA5E9] focus:ring-[#0EA5E9]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <Input
                        placeholder="+971 XX XXX XXXX"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="h-12 border-gray-200 focus:border-[#0EA5E9] focus:ring-[#0EA5E9]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Company Name
                      </label>
                      <Input
                        placeholder=""
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="h-12 border-gray-200 focus:border-[#0EA5E9] focus:ring-[#0EA5E9]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Service Required
                    </label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) =>
                        setFormData({ ...formData, service: value })
                      }
                    >
                      <SelectTrigger className="h-12 border-gray-200">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Project Details
                    </label>
                    <Textarea
                      placeholder="Tell us about your project requirements..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="min-h-32 border-gray-200 focus:border-[#0EA5E9] focus:ring-[#0EA5E9]"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white text-lg rounded-xl shadow-lg shadow-[#0EA5E9]/25"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
