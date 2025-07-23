import React from "react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="bg-white py-12 m-8 rounded-lg shadow-lg">
      <h1 className="text-5xl font-bold mb-4">Your Name</h1>
      <p className="text-xl mb-6 text-gray-600">Full Stack Web Developer</p>
      <Button className="mt-4">Download Resume</Button>
        <img
          className="object-cover object-center rounded-full h-96 w-96"
          src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2832&amp;q=80"
          alt="nature image"
        />    
    </section>
  );
}