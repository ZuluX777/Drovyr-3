import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ProblemSection from "@/components/sections/ProblemSection";
import FrameworkSection from "@/components/sections/FrameworkSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import OpsAuditSection from "@/components/sections/OpsAuditSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Drovyr — AI operations for service businesses",
  description:
    "Drovyr helps service businesses fix where work breaks down, then connect their tools and apply AI and automation. Book a free assessment.",
  path: "/",
  absoluteTitle: true,
});

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
