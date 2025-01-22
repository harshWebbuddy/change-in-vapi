import React from 'react';
import { ArrowRight, PhoneCall, Zap, Shield, Clock } from 'lucide-react';

const TimeToHire = () => {
  const features = [
    {
      icon: PhoneCall,
      title: "Instant Setup",
      description: "Get your AI call center running in minutes with our seamless onboarding process.",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      icon: Zap,
      title: "24/7 Availability",
      description: "Never miss a call with our always-on AI agents handling inquiries round the clock.",
      gradient: "from-violet-500 to-purple-500"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption and compliance with industry security standards.",
      gradient: "from-teal-500 to-emerald-500"
    },
    {
      icon: Clock,
      title: "Rapid Scaling",
      description: "Scale from 10 to 10,000 concurrent calls without missing a beat.",
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section className="py-32 bg-zinc-950 relative overflow-hidden">
      {/* Enhanced Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-500/20 via-zinc-950 to-zinc-950 animate-pulse-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent animate-pulse-slower" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/50 via-zinc-950 to-zinc-950" />
      </div>

      {/* Animated Gradient Lines */}
      <div className="absolute inset-0" style={{ opacity: 0.4 }}>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(255,255,255,0.1)_15%,transparent_30%)] animate-[gradient-slide_4s_ease-in-out_infinite]" style={{ transform: 'rotate(-45deg)', width: '200%', left: '-50%' }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(255,255,255,0.05)_25%,transparent_50%)] animate-[gradient-slide_7s_ease-in-out_infinite]" style={{ transform: 'rotate(45deg)', width: '200%', left: '-50%' }} />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div 
              className="inline-flex items-center justify-center text-violet-400 font-medium mb-6 animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              <span className="h-px w-12 bg-gradient-to-r from-transparent via-violet-500 to-transparent mr-4" />
              <span className="relative px-4 py-2 rounded-full bg-violet-500/5 border border-violet-500/20 backdrop-blur-sm hover:bg-violet-500/10 hover:border-violet-500/30 transition-all duration-300 cursor-default group">
                Ready to Start
                <span className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent group-hover:via-violet-400/70 transition-colors duration-300" />
              </span>
              <span className="h-px w-12 bg-gradient-to-r from-transparent via-violet-500 to-transparent ml-4" />
            </div>
            <h2 
              className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in-up bg-clip-text text-transparent relative"
              style={{ animationDelay: '0.4s' }}
            >
              <span className="absolute -inset-x-40 inset-y-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-500/20 via-transparent to-transparent blur-xl animate-pulse-slow" />
              <span className="relative bg-gradient-to-r from-white via-white to-zinc-400 bg-clip-text text-transparent">
                Time to Hire Your AI Call Centre
              </span>
            </h2>
            <p className="text-xl text-zinc-400 mb-12 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              Transform your customer service with AI-powered voice agents that work 24/7, scale infinitely, and deliver consistent excellence.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-6 hover:border-violet-500/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 animate-fade-in-up overflow-hidden"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                {/* Feature Card Glow Effects */}
                <div className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                <div className="relative">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} bg-opacity-10 border border-white/10 group-hover:border-white/20 transition-all duration-300 mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-violet-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
            <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-violet-600 rounded-full overflow-hidden transition-all duration-300 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-zinc-900">
              {/* Button Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-indigo-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              
              <span className="relative">
                Get Started Now
              </span>
              <ArrowRight className="ml-4 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeToHire; 