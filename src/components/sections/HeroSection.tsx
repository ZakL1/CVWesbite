import React from "react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="bg-white py-12 m-8 rounded-lg shadow-lg">
      <h1 className="text-5xl font-bold mb-4">Your Name</h1>
      <p className="text-xl mb-6 text-gray-600">Full Stack Web Developer</p>
      <Button className="mt-4">Download Resume</Button>
    </section>
  );
}