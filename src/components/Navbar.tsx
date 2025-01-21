import React from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">VoiceAI</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">Use Cases</a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">Company</a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">Pricing</a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">FAQ</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden md:inline-flex">
              Sign In
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              Free Trial
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;