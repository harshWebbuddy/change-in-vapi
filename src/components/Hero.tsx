import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from 'lucide-react';
import CodePreview from '@/components/CodePreview';

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-950">
      {/* Enhanced Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-500/20 via-zinc-950 to-zinc-950 animate-gradient" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent animate-gradient-slow" />
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-violet-400/20 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left pt-10 lg:max-w-[45%]">
            <div 
              className="inline-flex items-center px-4 py-2 rounded-full border border-violet-500/20 bg-violet-500/5 backdrop-blur-sm mb-8 animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              <Sparkles className="w-4 h-4 text-violet-400 mr-2 animate-pulse" />
              <span className="text-sm font-medium text-violet-300">AI-Powered Voice Assistant</span>
            </div>
            
            <h1 
              className="text-5xl lg:text-7xl font-bold mb-8 animate-fade-in-up leading-tight"
              style={{ animationDelay: '0.4s' }}
            >
              <span className="bg-gradient-to-r from-white via-violet-200 to-indigo-300 bg-clip-text text-transparent">
                Transform Your Voice  {" "}{" "}<span className="bg-gradient-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent">
                Into Digital Magic
              </span>
              </span>
            
              
            </h1>
            
            <p 
              className="text-xl text-zinc-400 mb-10 max-w-2xl animate-fade-in-up leading-relaxed"
              style={{ animationDelay: '0.6s' }}
            >
              Experience the next generation of voice interaction. Our AI-powered platform turns your voice into seamless digital commands, making technology more intuitive than ever.
            </p>
            
            <div 
              className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start mb-16 animate-fade-in-up"
              style={{ animationDelay: '0.8s' }}
            >
              <Button className="bg-gradient-to-r from-violet-500 to-indigo-600 hover:from-violet-600 hover:to-indigo-700 text-white shadow-lg hover:shadow-violet-500/25 transition-all duration-300 h-14 px-8 text-lg rounded-full group">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" className="border-violet-500/20 text-violet-300 hover:text-white hover:bg-violet-500/10 h-14 px-8 text-lg rounded-full">
                <Zap className="mr-2 h-5 w-5" />
                See it in Action
              </Button>
            </div>
            
            {/* Stats */}
            <div 
              className="grid grid-cols-3 gap-8 max-w-3xl animate-fade-in-up"
              style={{ animationDelay: '1s' }}
            >
              {[
                { label: "Active Users", value: "100K+" },
                { label: "Voice Commands", value: "1M+" },
                { label: "Accuracy Rate", value: "99.9%" },
              ].map((stat) => (
                <div key={stat.label} className="p-6 rounded-2xl border border-violet-500/20 bg-violet-500/5 backdrop-blur-sm hover:border-violet-500/40 transition-colors duration-300">
                  <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-violet-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Content - Code Preview */}
          <div 
            className="flex-1 relative lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 w-full lg:w-[600px] animate-fade-in-up"
            style={{ animationDelay: '1.2s' }}
          >
            <div className="relative animate-float">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-lg blur-2xl opacity-20 animate-pulse" />
              <CodePreview />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 