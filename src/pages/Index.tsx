import React from 'react';
import Navbar from '@/components/Navbar';
import CodePreview from '@/components/CodePreview';
import Stats from '@/components/Stats';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-up">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Build Voice AI
                <span className="block text-primary">That Sounds Human</span>
              </h1>
              <p className="text-xl text-gray-600">
                Create natural voice conversations with our powerful Voice AI API. Build
                voice bots that understand context and respond naturally.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
                Start Building Free
              </Button>
            </div>
            <div className="animate-fade-up [animation-delay:200ms]">
              <CodePreview />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <Stats />
        </div>
      </section>
    </div>
  );
};

export default Index;