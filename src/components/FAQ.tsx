import React, { useState } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How accurate is the voice AI in understanding different accents?",
      answer: "Our voice AI is trained on diverse datasets and achieves over 95% accuracy across various English accents. It continuously learns and adapts to improve understanding of regional variations and speech patterns.",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      question: "What kind of integration support do you provide?",
      answer: "We offer comprehensive integration support including detailed API documentation, SDKs for major programming languages, sample code, and dedicated technical support. Our team assists throughout the implementation process.",
      gradient: "from-violet-500 to-purple-500"
    },
    {
      question: "How do you ensure data privacy and security?",
      answer: "We maintain strict data security protocols with end-to-end encryption, SOC 2 compliance, and GDPR adherence. All voice data is processed in secure environments with regular security audits and updates.",
      gradient: "from-teal-500 to-emerald-500"
    },
    {
      question: "Can I customize the voice AI's responses and behavior?",
      answer: "Yes, our platform offers extensive customization options. You can define custom workflows, response patterns, and conversation flows. The AI can be trained on your specific use cases and industry terminology.",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      question: "What's the typical implementation timeline?",
      answer: "Basic implementation can be completed in 1-2 weeks. More complex integrations with custom workflows typically take 3-4 weeks. Our team works closely with you to ensure smooth deployment and testing.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      question: "How do you handle call volume scaling?",
      answer: "Our infrastructure automatically scales to handle varying call volumes. We support concurrent calls with low latency and high availability. The platform can handle sudden spikes in traffic without performance degradation.",
      gradient: "from-cyan-500 to-blue-500"
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
              FAQ
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
              Frequently Asked Questions
            </span>
          </h2>
        </div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-6 hover:border-violet-500/20 transition-all duration-500 hover:shadow-lg group"
              >
                {/* Question Glow Effects */}
                <div className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${faq.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                <div className="relative flex items-center justify-between">
                  <h3 className="font-semibold text-lg text-white group-hover:text-violet-300 transition-colors duration-300 pr-8">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 ml-4 p-1 rounded-full border border-zinc-700/50 group-hover:border-violet-500/30 transition-all duration-300 ${openIndex === index ? 'bg-violet-500/10' : ''}`}>
                    {openIndex === index ? (
                      <Minus className="w-4 h-4 text-violet-400" />
                    ) : (
                      <Plus className="w-4 h-4 text-zinc-400 group-hover:text-violet-400 transition-colors duration-300" />
                    )}
                  </div>
                </div>
              </button>

              {/* Answer Panel */}
              <div 
                className={`relative mt-2 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/50 rounded-xl p-6 text-zinc-300">
                  <div className={`absolute -inset-px rounded-xl bg-gradient-to-r ${faq.gradient} opacity-5`} />
                  <p className="relative">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 