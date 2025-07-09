import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/Skills";
import { ProjectsSection } from "@/components/sections/Projects";
import { ContactSection } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 p-8">
      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="md:w-1/4">
          <HeroSection />
        </div>
        <div className="md:w-3/4 mt-8 md:mt-0">
          <AboutSection />
        </div>
      </div>

      
      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="md:w-1/4">
          <SkillsSection />
        </div>
        <div className="md:w-3/4 mt-8 md:mt-0">
          <ProjectsSection />
        </div>
      </div>
      <ContactSection />
    </main>
  );
}
