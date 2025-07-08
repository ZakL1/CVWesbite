import React from "react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="text-center py-20">
      <h1 className="text-5xl font-bold mb-4">Your Name</h1>
      <p className="text-xl mb-6">Full Stack Web Developer</p>
      <Button>Download Resume</Button>
    </section>
  );
}