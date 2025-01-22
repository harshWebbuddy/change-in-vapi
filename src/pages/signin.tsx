import React from 'react';
import { ArrowRight, Github, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const SignIn = () => {
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

        {/* Sign In Form */}
        <div className="bg-zinc-900/50 backdrop-blur-xl p-8 rounded-2xl border border-zinc-800/50">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Sign in to your account</h2>
          
          {/* OAuth Buttons */}
          <div className="space-y-3 mb-6">
            <button className="w-full flex items-center justify-center space-x-2 bg-zinc-800 hover:bg-zinc-700 text-white py-3 px-4 rounded-lg transition-colors duration-200">
              <Github className="w-5 h-5" />
              <span>Continue with GitHub</span>
            </button>
            <button className="w-full flex items-center justify-center space-x-2 bg-zinc-800 hover:bg-zinc-700 text-white py-3 px-4 rounded-lg transition-colors duration-200">
              <Mail className="w-5 h-5" />
              <span>Continue with Email</span>
            </button>
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-zinc-800"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-zinc-900/50 text-zinc-500">Or continue with</span>
            </div>
          </div>

          {/* Email Form */}
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-1">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg py-2 px-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                placeholder="you@example.com"
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
              <span>Sign in</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>

        {/* Sign Up Link */}
        <p className="text-center text-zinc-500">
          Don't have an account?{' '}
          <Link to="/free-trial" className="text-violet-500 hover:text-violet-400 transition-colors duration-200">
            Start your free trial
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn; 