import React from "react";
import { Phone, ArrowUpRight, PhoneCall, ShieldCheck } from "lucide-react";

const Deploy = () => {
  return (
    <section className="py-32 bg-zinc-950 relative">
      {/* Enhanced Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-500/10 via-zinc-950 to-zinc-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent" />
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
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="mb-20">
          <div
            className="inline-flex items-center px-4 py-2 rounded-full border border-violet-500/20 bg-violet-500/5 backdrop-blur-sm mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="w-2 h-2 rounded-full bg-violet-400 mr-2 animate-pulse" />
            <span className="text-sm font-medium bg-gradient-to-r from-violet-200 to-violet-400 bg-clip-text text-transparent">
              Deploy
            </span>
          </div>
          <h2
            className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <span className="relative">
              <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                Effortlessly Deploy AI Calls
              </span>
              <div className="absolute -bottom-4 left-0 right-0 h-px bg-gradient-to-r from-violet-500/0 via-violet-500/50 to-violet-500/0" />
            </span>
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="grid gap-6">
          <div className="grid md:grid-cols-[450px_850px] gap-6">
            {/* Display Branded Call ID */}
            <div
              className="group bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-8 hover:border-violet-500/20 transition-all duration-500 w-full hover:shadow-2xl hover:shadow-violet-500/10 hover:-translate-y-1"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-violet-300 transition-colors duration-300">
                    Display Branded Call ID
                  </h3>
                  <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
                    Enable branded Call feature from Retell Numbers. Gain trust
                    for outbound call campaigns.
                  </p>
                </div>
                <div className="p-2 bg-violet-500/10 rounded-lg group-hover:bg-violet-500/20 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-violet-400" />
                </div>
              </div>
              <div className="flex justify-center items-center h-48 bg-violet-500/10 rounded-xl group-hover:bg-violet-500/20 transition-colors duration-300">
                <svg
                  className="w-24 h-24 text-violet-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h4l3 3-3 3H3v-6zm0 0V4a1 1 0 011-1h3m10 0h3a1 1 0 011 1v6m0 0h-4l-3 3 3 3h4v-6z"
                  />
                </svg>
              </div>
            </div>

            {/* Using SIP Trunking */}
            <div
              className="group bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-8 hover:border-violet-500/20 transition-all duration-500 w-full hover:shadow-2xl hover:shadow-violet-500/10 hover:-translate-y-1"
              style={{ animationDelay: "0.8s" }}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-white group-hover:text-violet-300 transition-colors duration-300">
                      Using SIP Trunking Connect to Any Telephony
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-violet-400 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
                    Use your existing phone numbers or your familiar VOIP
                    providers. You can connect to any telephony using Retell SIP
                    Trunking.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-6">
                {[
                  "Telnyx",
                  "Plivo",
                  "RingCentral",
                  "Twilio",
                  "RingCentral",
                  "Twilio",
                  "Vonage",
                  "Bandwidth",
                ].map((provider, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center p-4 bg-zinc-800/50 rounded-lg border border-transparent hover:border-violet-500/20 transition-all duration-300 hover:bg-zinc-800/70"
                  >
                    <span className="text-zinc-400 text-sm group-hover:text-zinc-300 transition-colors duration-300">
                      {provider}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-[850px_450px] gap-6">
            {/* Batch Calling */}
            <div
              className="group bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-8 hover:border-violet-500/20 transition-all duration-500 w-full h-[340px] flex flex-col hover:shadow-2xl hover:shadow-violet-500/10 hover:-translate-y-1"
              style={{ animationDelay: "1s" }}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-violet-300 transition-colors duration-300">
                    Batch Calling
                  </h3>
                  <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
                    Effortlessly send out hundreds of calls without hitting
                    concurrency limits. You could see the conversion rate
                    directly after each campaign.
                  </p>
                </div>
                <div className="p-2 bg-violet-500/10 rounded-lg group-hover:bg-violet-500/20 transition-colors duration-300">
                  <PhoneCall className="w-5 h-5 text-violet-400" />
                </div>
              </div>
              <div className="flex justify-center items-center h-48 bg-violet-500/10 rounded-xl group-hover:bg-violet-500/20 transition-colors duration-300">
                <svg
                  className="w-24 h-24 text-violet-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h4l3 3-3 3H3v-6zm0 0V4a1 1 0 011-1h3m10 0h3a1 1 0 011 1v6m0 0h-4l-3 3 3 3h4v-6z"
                  />
                </svg>
              </div>
            </div>

            {/* Verified Phone Numbers */}
            <div
              className="group bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-8 hover:border-violet-500/20 transition-all duration-500 w-full h-[340px] flex flex-col hover:shadow-2xl hover:shadow-violet-500/10 hover:-translate-y-1"
              style={{ animationDelay: "1.2s" }}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-violet-300 transition-colors duration-300">
                    Verified Phone Numbers
                  </h3>
                  <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
                    Prevent your phone number being marked as "Spam Likely".
                    Build trust with your customers.
                  </p>
                </div>
                <div className="p-2 bg-violet-500/10 rounded-lg group-hover:bg-violet-500/20 transition-colors duration-300">
                  <ShieldCheck className="w-5 h-5 text-violet-400" />
                </div>
              </div>
              <div className="flex justify-center items-center h-48 bg-violet-500/10 rounded-xl group-hover:bg-violet-500/20 transition-colors duration-300">
                <svg
                  className="w-24 h-24 text-violet-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h4l3 3-3 3H3v-6zm0 0V4a1 1 0 011-1h3m10 0h3a1 1 0 011 1v6m0 0h-4l-3 3 3 3h4v-6z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deploy;
