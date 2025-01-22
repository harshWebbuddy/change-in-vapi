import React from 'react';
import { Store, Building2, Stethoscope } from 'lucide-react';

const UseCases = () => {
  return (
    <section className="py-32 bg-zinc-950 relative overflow-hidden">
      {/* Enhanced Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-500/20 via-zinc-950 to-zinc-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-violet-500/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/50 via-zinc-950 to-zinc-950" />
      </div>

      {/* Animated Gradient Lines */}
      <div className="absolute inset-0" style={{ opacity: 0.4 }}>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(255,255,255,0.1)_15%,transparent_30%)] animate-[gradient-slide_4s_ease-in-out_infinite]" style={{ transform: 'rotate(-45deg)', width: '200%', left: '-50%' }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(255,255,255,0.05)_25%,transparent_50%)] animate-[gradient-slide_7s_ease-in-out_infinite]" style={{ transform: 'rotate(45deg)', width: '200%', left: '-50%' }} />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div 
            className="inline-flex items-center justify-center text-teal-400 font-medium mb-6 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="h-px w-12 bg-gradient-to-r from-transparent via-teal-500 to-transparent mr-4" />
            <span className="relative">
              Use Cases
              <span className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />
            </span>
            <span className="h-px w-12 bg-gradient-to-r from-transparent via-teal-500 to-transparent ml-4" />
          </div>
          <h2 
            className="text-4xl lg:text-6xl font-bold mb-8 animate-fade-in-up bg-clip-text text-transparent relative"
            style={{ animationDelay: '0.4s' }}
          >
            <span className="absolute -inset-x-40 inset-y-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-500/20 via-transparent to-transparent blur-xl" />
            <span className="relative">
              <span className="bg-gradient-to-r from-white via-white to-zinc-400 bg-clip-text text-transparent">One Platform, </span>
              <span className="bg-gradient-to-r from-teal-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">Endless Possibilities</span>
            </span>
          </h2>
          <p 
            className="text-lg text-zinc-400 max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            Discover how our Voice AI adapts to various industries and use cases
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Retail & Services */}
          <div 
            className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-8 hover:border-teal-500/20 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/10 hover:-translate-y-1 animate-fade-in-up overflow-hidden"
            style={{ animationDelay: '0.8s' }}
          >
            {/* Card Glow Effect */}
            <div className="absolute -inset-x-20 -inset-y-10 bg-gradient-to-r from-teal-500/0 via-teal-500/5 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-teal-500/10 border border-teal-500/20 mb-6 group-hover:border-teal-500/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-[10deg] transform">
                <Store className="w-8 h-8 text-teal-400 group-hover:text-teal-300 transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-teal-300 transition-colors duration-300">Retail & Services</h3>
              <p className="text-zinc-400 mb-8 group-hover:text-zinc-300 transition-colors duration-300">Transform customer interactions with AI-powered assistance</p>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">Smart appointment scheduling</span>
                  <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-teal-500/20 to-emerald-500/20 border border-teal-500/10 group-hover:border-teal-500/20 transition-all duration-300 backdrop-blur-sm hover:scale-105">
                    <span className="text-teal-300">2x faster bookings</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">Real-time product inquiries</span>
                  <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-teal-500/20 to-emerald-500/20 border border-teal-500/10 group-hover:border-teal-500/20 transition-all duration-300 backdrop-blur-sm hover:scale-105">
                    <span className="text-teal-300">90% accuracy</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">Automated support system</span>
                  <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-teal-500/20 to-emerald-500/20 border border-teal-500/10 group-hover:border-teal-500/20 transition-all duration-300 backdrop-blur-sm hover:scale-105">
                    <span className="text-teal-300">24/7 support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enterprise Solutions */}
          <div 
            className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-8 hover:border-blue-500/20 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 animate-fade-in-up overflow-hidden"
            style={{ animationDelay: '1s' }}
          >
            {/* Card Glow Effect */}
            <div className="absolute -inset-x-20 -inset-y-10 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-blue-500/10 border border-blue-500/20 mb-6 group-hover:border-blue-500/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-[10deg] transform">
                <Building2 className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">Enterprise Solutions</h3>
              <p className="text-zinc-400 mb-8 group-hover:text-zinc-300 transition-colors duration-300">Scale your business operations with intelligent automation</p>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">24/7 customer service</span>
                  <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/10 group-hover:border-blue-500/20 transition-all duration-300 backdrop-blur-sm hover:scale-105">
                    <span className="text-blue-300">100% coverage</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">Technical support automation</span>
                  <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/10 group-hover:border-blue-500/20 transition-all duration-300 backdrop-blur-sm hover:scale-105">
                    <span className="text-blue-300">85% resolution</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">Multilingual capabilities</span>
                  <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/10 group-hover:border-blue-500/20 transition-all duration-300 backdrop-blur-sm hover:scale-105">
                    <span className="text-blue-300">120+ languages</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Healthcare */}
          <div 
            className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-8 hover:border-violet-500/20 transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/10 hover:-translate-y-1 animate-fade-in-up overflow-hidden"
            style={{ animationDelay: '1.2s' }}
          >
            {/* Card Glow Effect */}
            <div className="absolute -inset-x-20 -inset-y-10 bg-gradient-to-r from-violet-500/0 via-violet-500/5 to-violet-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-violet-500/10 border border-violet-500/20 mb-6 group-hover:border-violet-500/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-[10deg] transform">
                <Stethoscope className="w-8 h-8 text-violet-400 group-hover:text-violet-300 transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-violet-300 transition-colors duration-300">Healthcare</h3>
              <p className="text-zinc-400 mb-8 group-hover:text-zinc-300 transition-colors duration-300">Streamline patient care with intelligent voice assistance</p>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">Automated appointment management</span>
                  <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/10 group-hover:border-violet-500/20 transition-all duration-300 backdrop-blur-sm hover:scale-105">
                    <span className="text-violet-300">3x efficiency</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">Patient follow-up system</span>
                  <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/10 group-hover:border-violet-500/20 transition-all duration-300 backdrop-blur-sm hover:scale-105">
                    <span className="text-violet-300">95% reach</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">Medical inquiry handling</span>
                  <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-500/20 to-purple-500/20 border border-violet-500/10 group-hover:border-violet-500/20 transition-all duration-300 backdrop-blur-sm hover:scale-105">
                    <span className="text-violet-300">HIPAA compliant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases; 