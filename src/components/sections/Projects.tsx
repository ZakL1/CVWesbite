import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ProjectsSection() {
  return (
    <section className="bg-white py-12 m-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-6 text-center">Projects</h2>
      <div className="space-y-6">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-2">Project Name</h3>
            <p className="mb-2">Short description of the project.</p>
            <Button variant="link">View on GitHub</Button>
          </CardContent>
        </Card>
          <Card>
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-2">Project Name</h3>
            <p className="mb-2">Short description of the project.</p>
            <Button variant="link">View on GitHub</Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}