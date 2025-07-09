import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export function SkillsSection() {
  return (
    <section className="bg-white py-12 m-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-6 text-center">Skills</h2>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card><CardContent className="text-center p-4">React</CardContent></Card>
          <Card><CardContent className="text-center p-4">Node.js</CardContent></Card>
          <Card><CardContent className="text-center p-4">Tailwind CSS</CardContent></Card>
          <Card><CardContent className="text-center p-4">MongoDB</CardContent></Card>
        </div>
      </div>
    </section>
  );
}