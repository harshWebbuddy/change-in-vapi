import React from 'react';
import { Briefcase, PhoneCall, Calendar } from 'lucide-react';

const LiveDemo = () => {
  return (
    <section className="py-32 bg-zinc-950 relative">
      {/* Enhanced Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-500/20 via-zinc-950 to-zinc-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-violet-400/20 rounded-full animate-float"
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
            className="inline-flex items-center px-4 py-2 rounded-full border border-violet-500/20 bg-violet-500/5 backdrop-blur-sm mb-6 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="w-2 h-2 rounded-full bg-violet-400 mr-2 animate-pulse" />
            <span className="text-sm font-medium bg-gradient-to-r from-violet-200 to-violet-400 bg-clip-text text-transparent">Live Demos</span>
          </div>
          <h2 
            className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in-up leading-tight"
            style={{ animationDelay: '0.4s' }}
          >
            <span className="bg-gradient-to-r from-white via-violet-200 to-indigo-300 bg-clip-text text-transparent">Experience </span>
            <span className="relative">
              <span className="bg-gradient-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent">Voice AI in Action</span>
              <div className="absolute -bottom-4 left-0 right-0 h-px bg-gradient-to-r from-violet-500/0 via-violet-500/50 to-violet-500/0" />
            </span>
          </h2>
          <p 
            className="text-xl text-zinc-400 max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            Listen to real conversations powered by our human-like, empathetic AI
          </p>
        </div>

        {/* Demo Cards */}
        <div 
          className="grid md:grid-cols-3 gap-8 animate-fade-in-up"
          style={{ animationDelay: '0.8s' }}
        >
          {[
            {
              title: "Lead Qualification",
              subtitle: "Finance & Mortgage Loans",
              description: "Experience how our AI handles mortgage inquiries with precision and empathy",
              icon: Briefcase,
              waveform: "waveform-1",
              iconBg: "bg-emerald-500/10",
              iconColor: "text-emerald-400",
              borderColor: "border-emerald-500/20",
              hoverBorderColor: "hover:border-emerald-500/40",
              buttonGradient: "from-emerald-500 to-teal-600",
              buttonHoverGradient: "hover:from-emerald-600 hover:to-teal-700",
              glowColor: "bg-emerald-400/20",
              hoverTextColor: "group-hover:text-emerald-300",
              waveformColor: "bg-emerald-400/40",
            },
            {
              title: "Customer Support",
              subtitle: "Insurance",
              description: "Listen to seamless insurance claim processing and policy assistance",
              icon: PhoneCall,
              waveform: "waveform-2",
              iconBg: "bg-fuchsia-500/10",
              iconColor: "text-fuchsia-400",
              borderColor: "border-fuchsia-500/20",
              hoverBorderColor: "hover:border-fuchsia-500/40",
              buttonGradient: "from-fuchsia-500 to-purple-600",
              buttonHoverGradient: "hover:from-fuchsia-600 hover:to-purple-700",
              glowColor: "bg-fuchsia-400/20",
              hoverTextColor: "group-hover:text-fuchsia-300",
              waveformColor: "bg-fuchsia-400/40",
            },
            {
              title: "Appointment Booking",
              subtitle: "Healthcare",
              description: "See how our AI schedules medical appointments efficiently and professionally",
              icon: Calendar,
              waveform: "waveform-3",
              iconBg: "bg-cyan-500/10",
              iconColor: "text-cyan-400",
              borderColor: "border-cyan-500/20",
              hoverBorderColor: "hover:border-cyan-500/40",
              buttonGradient: "from-cyan-500 to-blue-600",
              buttonHoverGradient: "hover:from-cyan-600 hover:to-blue-700",
              glowColor: "bg-cyan-400/20",
              hoverTextColor: "group-hover:text-cyan-300",
              waveformColor: "bg-cyan-400/40",
            },
          ].map((demo, index) => (
            <div 
              key={index}
              className={`rounded-2xl border ${demo.borderColor} bg-zinc-900/50 backdrop-blur-sm p-8 ${demo.hoverBorderColor} transition-all duration-500 group hover:shadow-2xl hover:shadow-violet-500/10 hover:-translate-y-1`}
            >
              {/* Card Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`p-3.5 rounded-xl ${demo.iconBg} transition-colors duration-500 relative`}>
                  <div className={`absolute inset-0 rounded-xl ${demo.glowColor} blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100`} />
                  <demo.icon className={`w-6 h-6 ${demo.iconColor} relative z-10`} />
                </div>
                <div>
                  <h3 className={`text-xl font-semibold text-white mb-1 ${demo.hoverTextColor} transition-colors duration-300`}>{demo.title}</h3>
                  <p className={`text-sm ${demo.iconColor}`}>{demo.subtitle}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-zinc-400 mb-8 group-hover:text-zinc-300 transition-colors duration-300">
                {demo.description}
              </p>

              {/* Waveform Visualization */}
              <div className="h-28 bg-zinc-800/50 rounded-xl mb-6 overflow-hidden group-hover:bg-zinc-800/70 transition-all duration-500 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50 to-transparent" />
                <div className="w-full h-full flex items-center justify-center relative">
                  <div className="flex items-center gap-1">
                    {[...Array(32)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-1.5 ${demo.waveformColor} rounded-full transition-all duration-500`}
                        style={{
                          height: `${Math.random() * 64 + 16}px`,
                          animationDelay: `${i * 0.05}s`,
                          transform: `scaleY(${Math.random() * 0.5 + 0.5})`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Play Button */}
              <button className={`w-full py-4 px-6 rounded-xl bg-gradient-to-r ${demo.buttonGradient} ${demo.buttonHoverGradient} text-white shadow-lg hover:shadow-violet-500/25 transition-all duration-500 flex items-center justify-center gap-3 group-hover:scale-[1.02]`}>
                <span className="w-5 h-5 flex items-center justify-center text-lg">▶</span>
                <span className="font-medium">Play Demo</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveDemo; 