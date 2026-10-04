import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ProblemSection from "@/components/sections/ProblemSection";
import FrameworkSection from "@/components/sections/FrameworkSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import OpsAuditSection from "@/components/sections/OpsAuditSection";
import FinalCTASection from "@/components/sections/FinalCTASection";

export const metadata: Metadata = {
  title: "DROVYR — Operational Intelligence & AI Automation for Growing Businesses",
  description:
    "DROVYR helps growing service businesses see what's happening across their operation, automate repetitive work, and make better decisions. Get a free ops audit.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <FrameworkSection />
      <SolutionsSection />
      <HowItWorksSection />
      <IndustriesSection />
      <OpsAuditSection />
      <FinalCTASection />
    </>
  );
}
