"use client";

import React from "react";
import Hero from "@/components/home/Hero";
import Brands from "@/components/home/Brands";
import Services from "@/components/home/Services";
import FeaturedCaseStudy from "@/components/home/FeaturedCaseStudy";
import SupportingProof from "@/components/home/SupportingProof";
import DevelopmentFlow from "@/components/home/DevelopmentFlow";
import ContactCTA from "@/components/home/ContactCTA";
import Hero2 from "@/components/hero2";

export default function HomePage() {
  return (
    <>
      {/* <Hero /> */}
      <Hero2 />
      <Brands />
      <Services />
      <FeaturedCaseStudy />
      <SupportingProof />
      <DevelopmentFlow />
      <ContactCTA />
    </>
  );
}
