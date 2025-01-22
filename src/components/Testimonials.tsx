import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      author: "Sarah Chen",
      role: "CTO at TechFlow",
      company: "TechFlow Solutions",
      image: "/testimonials/sarah.jpg",
      content: "The voice AI platform has transformed our customer service. We've seen a 40% reduction in response times and consistently high satisfaction scores.",
      rating: 5,
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      author: "Michael Rodriguez",
      role: "Head of Operations",
      company: "Global Retail Corp",
      image: "/testimonials/michael.jpg",
      content: "Implementing this voice AI solution was seamless. Our sales team now handles 3x more leads with better conversion rates than before.",
      rating: 5,
      gradient: "from-violet-500 to-purple-500"
    },
    {
      author: "Emily Watson",
      role: "Customer Success Lead",
      company: "HealthTech Inc",
      image: "/testimonials/emily.jpg",
      content: "The platform's ability to handle appointment scheduling has been a game-changer. Our patients love the natural conversation flow.",
      rating: 5,
      gradient: "from-teal-500 to-emerald-500"
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
        {/* Section Header */}
        <div className="text-center mb-20">
          <div 
            className="inline-flex items-center justify-center text-violet-400 font-medium mb-6 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="h-px w-12 bg-gradient-to-r from-transparent via-violet-500 to-transparent mr-4" />
            <span className="relative px-4 py-2 rounded-full bg-violet-500/5 border border-violet-500/20 backdrop-blur-sm hover:bg-violet-500/10 hover:border-violet-500/30 transition-all duration-300 cursor-default group">
              Testimonials
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
              Trusted by Industry Leaders
            </span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-8 hover:border-violet-500/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${0.6 + index * 0.2}s` }}
            >
              {/* Card Glow Effects */}
              <div className={`absolute -inset-x-20 -inset-y-10 bg-gradient-to-r ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 blur-2xl`} />
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Quote Icon */}
              <div className="absolute -top-4 -right-4 w-24 h-24 text-zinc-800/50 group-hover:text-zinc-700/50 transition-colors duration-300">
                <Quote size={96} />
              </div>

              {/* Content */}
              <div className="relative">
                {/* Rating */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg text-zinc-300 mb-8 relative">
                  "{testimonial.content}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-zinc-700/50 group-hover:border-violet-500/20 transition-colors duration-300">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-white group-hover:text-violet-300 transition-colors duration-300">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
                      {testimonial.role} • {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 