import React from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">V</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              VoiceAI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-zinc-400 hover:text-white transition-colors duration-200">
              Features
            </a>
            <a href="#pricing" className="text-zinc-400 hover:text-white transition-colors duration-200">
              Pricing
            </a>
            <a href="#docs" className="text-zinc-400 hover:text-white transition-colors duration-200">
              Documentation
            </a>
            <Link to="/signin" className="text-zinc-400 hover:text-white transition-colors duration-200">
              Sign in
            </Link>
            <Link 
              to="/free-trial"
              className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
            >
              Start free trial
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-zinc-900/90 backdrop-blur-xl border-b border-zinc-800/50">
            <a
              href="#features"
              className="block px-3 py-2 rounded-md text-base font-medium text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors duration-200"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="block px-3 py-2 rounded-md text-base font-medium text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors duration-200"
            >
              Pricing
            </a>
            <a
              href="#docs"
              className="block px-3 py-2 rounded-md text-base font-medium text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors duration-200"
            >
              Documentation
            </a>
            <Link
              to="/signin"
              className="block px-3 py-2 rounded-md text-base font-medium text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors duration-200"
            >
              Sign in
            </Link>
            <Link
              to="/free-trial"
              className="block px-3 py-2 rounded-md text-base font-medium bg-violet-600 text-white hover:bg-violet-700 transition-colors duration-200"
            >
              Start free trial
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;