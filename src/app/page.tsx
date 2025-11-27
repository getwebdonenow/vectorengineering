"use client";
import React from 'react';
import Navbar from '@/components/ndt/Navbar';
import HeroSection from '@/components/ndt/HeroSection';
import ServicesSection from '@/components/ndt/ServicesSection';
import AboutSection from '@/components/ndt/AboutSection';
import IndustriesSection from '@/components/ndt/IndustriesSection';
import WhyChooseUs from '@/components/ndt/WhyChooseUs';
import ContactSection from '@/components/ndt/ContactSection';
import Footer from '@/components/ndt/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <IndustriesSection />
      <WhyChooseUs />
      <ContactSection />
      <Footer />
    </div>
  );
}