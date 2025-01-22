import React from 'react';
import { Twitter, Linkedin, Github, Mail, Globe, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const productLinks = [
    { name: 'Features', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'API Reference', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Release Notes', href: '#' }
  ];

  const companyLinks = [
    { name: 'About Us', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Press Kit', href: '#' },
    { name: 'Contact', href: '#' }
  ];

  const resourceLinks = [
    { name: 'Community', href: '#' },
    { name: 'Help Center', href: '#' },
    { name: 'Partners', href: '#' },
    { name: 'Status', href: '#' },
    { name: 'Terms of Service', href: '#' }
  ];

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'GitHub', href: '#', icon: Github },
    { name: 'Email', href: '#', icon: Mail }
  ];

  return (
    <footer className="bg-zinc-950 relative overflow-hidden border-t border-zinc-800/50">
      {/* Enhanced Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-violet-500/20 via-zinc-950 to-zinc-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
      </div>

      {/* Main Footer Content */}
      <div className="relative">
        <div className="mx-auto max-w-7xl px-4 pt-24 pb-12">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            {/* Brand Section */}
            <div className="space-y-8">
              <div className="flex items-center space-x-3">
                <Globe className="w-8 h-8 text-violet-500" />
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                  VoiceAI
                </span>
              </div>
              <p className="text-zinc-400 max-w-md">
                Transform your customer service with AI-powered voice agents that work 24/7, scale infinitely, and deliver consistent excellence.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group relative text-zinc-400 hover:text-white transition-colors duration-200"
                  >
                    <span className="absolute -inset-2 -z-10 rounded-full bg-zinc-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    <item.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Grid */}
            <div className="mt-16 grid grid-cols-3 gap-8 xl:col-span-2 xl:mt-0">
              <div>
                <h3 className="text-lg font-semibold text-white mb-6">Product</h3>
                <ul className="space-y-4">
                  {productLinks.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href}
                        className="group flex items-center text-zinc-400 hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                        <ArrowUpRight className="ml-1 h-4 w-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
                <ul className="space-y-4">
                  {companyLinks.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href}
                        className="group flex items-center text-zinc-400 hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                        <ArrowUpRight className="ml-1 h-4 w-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-6">Resources</h3>
                <ul className="space-y-4">
                  {resourceLinks.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href}
                        className="group flex items-center text-zinc-400 hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                        <ArrowUpRight className="ml-1 h-4 w-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-zinc-800/50">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-zinc-400 text-sm">
                © {new Date().getFullYear()} VoiceAI. All rights reserved.
              </p>
              <div className="mt-4 md:mt-0 flex items-center space-x-4">
                <a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors duration-200">
                  Privacy Policy
                </a>
                <span className="text-zinc-700">•</span>
                <a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors duration-200">
                  Terms of Service
                </a>
                <span className="text-zinc-700">•</span>
                <a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors duration-200">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 