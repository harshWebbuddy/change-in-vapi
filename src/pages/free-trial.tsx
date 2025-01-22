import React from 'react';
import { ArrowRight, Check, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const FreeTrial = () => {
  const features = [
    'Unlimited AI voice calls',
    'Real-time transcription',
    'Custom voice cloning',
    'API access',
    '24/7 support',
    'Analytics dashboard'
  ];

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-2xl">V</span>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
            VoiceAI
          </span>
        </Link>

        {/* Free Trial Form */}
        <div className="bg-zinc-900/50 backdrop-blur-xl p-8 rounded-2xl border border-zinc-800/50">
          <h2 className="text-2xl font-bold text-white mb-2 text-center">Start your free trial</h2>
          <p className="text-zinc-400 text-center mb-6">No credit card required</p>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-zinc-400 mb-1">
                  First name
                </label>
                <input
                  id="firstName"
                  type="text"
                  required
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg py-2 px-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                  placeholder="John"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-zinc-400 mb-1">
                  Last name
                </label>
                <input
                  id="lastName"
                  type="text"
                  required
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg py-2 px-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div>
              <label htmlFor="workEmail" className="block text-sm font-medium text-zinc-400 mb-1">
                Work email
              </label>
              <input
                id="workEmail"
                type="email"
                required
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg py-2 px-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-zinc-400 mb-1">
                Company name
              </label>
              <input
                id="company"
                type="text"
                required
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg py-2 px-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                placeholder="Company Inc."
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-zinc-400 mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg py-2 px-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>Start free trial</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>

        {/* Features */}
        <div className="bg-zinc-900/30 backdrop-blur-sm rounded-xl p-6 border border-zinc-800/30">
          <h3 className="text-lg font-semibold text-white mb-4">Everything you need to get started</h3>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-zinc-400">
                <Check className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Sign In Link */}
        <p className="text-center text-zinc-500">
          Already have an account?{' '}
          <Link to="/signin" className="text-violet-500 hover:text-violet-400 transition-colors duration-200">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default FreeTrial; 