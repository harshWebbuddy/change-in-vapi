import React from 'react';
import { Wrench, TestTubes, Rocket, LineChart, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Build",
      description: "Utilize the voice AI API and our intuitive agent builder to create custom voice AI agents effortlessly.",
      icon: Wrench,
      gradient: "from-teal-500 to-emerald-500",
      image: "/build-interface.png",
      glowColor: "teal"
    },
    {
      number: "02",
      title: "Test",
      description: "Perform comprehensive agent testing with built-in test LLM features to ensure seamless handling of edge cases.",
      icon: TestTubes,
      gradient: "from-blue-500 to-indigo-500",
      image: "/test-interface.png",
      glowColor: "blue"
    },
    {
      number: "03",
      title: "Deploy",
      description: "Easily deploy your agents to phone calls, web calls, SMS, and more.",
      icon: Rocket,
      gradient: "from-violet-500 to-purple-500",
      image: "/deploy-interface.png",
      glowColor: "violet"
    },
    {
      number: "04",
      title: "Monitor",
      description: "Track success rates, latency, and user sentiment through call history dashboard. Quickly identify failed calls.",
      icon: LineChart,
      gradient: "from-pink-500 to-rose-500",
      image: "/monitor-interface.png",
      glowColor: "pink"
    }
  ];

  return (
    <section className="py-32 bg-zinc-950 relative overflow-hidden">
      {/* Enhanced Gradient Background with Multiple Layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-500/20 via-zinc-950 to-zinc-950 animate-pulse-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent animate-pulse-slower" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/50 via-zinc-950 to-zinc-950" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.4))]" />
      </div>

      {/* Enhanced Animated Gradient Lines */}
      <div className="absolute inset-0" style={{ opacity: 0.4 }}>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(255,255,255,0.1)_15%,transparent_30%)] animate-[gradient-slide_4s_ease-in-out_infinite]" style={{ transform: 'rotate(-45deg)', width: '200%', left: '-50%' }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(255,255,255,0.05)_25%,transparent_50%)] animate-[gradient-slide_7s_ease-in-out_infinite]" style={{ transform: 'rotate(45deg)', width: '200%', left: '-50%' }} />
      </div>

      {/* Enhanced Floating Particles with Varied Sizes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              background: `rgba(255, 255, 255, ${Math.random() * 0.1 + 0.05})`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
              transform: `scale(${Math.random() * 0.5 + 0.5})`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div 
            className="inline-flex items-center justify-center text-violet-400 font-medium mb-6 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="h-px w-12 bg-gradient-to-r from-transparent via-violet-500 to-transparent mr-4" />
            <span className="relative px-4 py-2 rounded-full bg-violet-500/5 border border-violet-500/20 backdrop-blur-sm hover:bg-violet-500/10 hover:border-violet-500/30 transition-all duration-300 cursor-default group">
              Value
              <span className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent group-hover:via-violet-400/70 transition-colors duration-300" />
            </span>
            <span className="h-px w-12 bg-gradient-to-r from-transparent via-violet-500 to-transparent ml-4" />
          </div>
          <h2 
            className="text-4xl lg:text-6xl font-bold mb-8 animate-fade-in-up bg-clip-text text-transparent relative"
            style={{ animationDelay: '0.4s' }}
          >
            <span className="absolute -inset-x-40 inset-y-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-500/20 via-transparent to-transparent blur-xl animate-pulse-slow" />
            <span className="relative bg-gradient-to-r from-white via-white to-zinc-400 bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
        </div>

        {/* Enhanced Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-8 hover:border-violet-500/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 hover:rotate-1 animate-fade-in-up overflow-hidden"
              style={{ 
                animationDelay: `${0.6 + index * 0.2}s`,
                perspective: '1000px'
              }}
            >
              {/* Enhanced Card Glow Effects */}
              <div className={`absolute -inset-x-20 -inset-y-10 bg-gradient-to-r ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 blur-2xl`} />
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              <div className={`absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--${step.glowColor}-glow),0.15),transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative">
                {/* Enhanced Step Number with 3D Glow */}
                <div className="relative transform group-hover:translate-z-10 transition-transform duration-500">
                  <span className={`absolute blur-2xl opacity-50 text-6xl font-bold bg-gradient-to-br ${step.gradient} bg-clip-text text-transparent`}>
                    {step.number}
                  </span>
                  <span className={`relative text-6xl font-bold bg-gradient-to-br ${step.gradient} bg-clip-text text-transparent opacity-40 group-hover:opacity-60 transition-all duration-300 transform group-hover:scale-110`}>
                    {step.number}
                  </span>
                </div>

                {/* Enhanced Icon with 3D Animation */}
                <div 
                  className={`absolute top-1 right-1 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${step.gradient} bg-opacity-10 border border-white/10 group-hover:border-white/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-[10deg] transform hover:shadow-lg hover:shadow-${step.glowColor}-500/20 group-hover:translate-z-12`}
                >
                  <div className="relative">
                    <step.icon className={`w-6 h-6 text-${step.glowColor}-400 group-hover:text-${step.glowColor}-300 transition-colors duration-300`} />
                    <div className={`absolute inset-0 blur-md bg-${step.glowColor}-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  </div>
                </div>

                {/* Enhanced Content with Interactive Typography */}
                <h3 className={`text-2xl font-bold text-white mt-4 mb-4 group-hover:text-${step.glowColor}-300 transition-colors duration-300 transform group-hover:translate-x-1`}>
                  {step.title}
                </h3>
                <p className="text-zinc-400 mb-6 group-hover:text-zinc-300 transition-colors duration-300 leading-relaxed">
                  {step.description}
                </p>

                {/* Enhanced Image with 3D Hover Effects */}
                <div 
                  className={`rounded-xl overflow-hidden border border-zinc-800/50 group-hover:border-${step.glowColor}-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-${step.glowColor}-500/10 transform group-hover:translate-z-6 group-hover:rotate-2`}
                >
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    <img 
                      src={step.image} 
                      alt={`${step.title} Interface`} 
                      className="w-full h-auto transform transition-all duration-500 group-hover:scale-105 group-hover:contrast-125 group-hover:brightness-110"
                    />
                    {/* Image Overlay on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-${step.glowColor}-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  </div>
                </div>

                {/* Learn More Button */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <button className={`flex items-center space-x-2 text-${step.glowColor}-400 hover:text-${step.glowColor}-300 transition-colors duration-300`}>
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Connection Lines */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent hidden lg:block animate-pulse-slow" />
      </div>
    </section>
  );
};

export default HowItWorks; 