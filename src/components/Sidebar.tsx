import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Users,
  Phone,
  FileText,
  MessageSquare,
  ChevronDown,
  HelpCircle,
  User,
  LayoutDashboard
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="w-64 bg-[#1A1B1E] border-r border-[#2C2D32] flex flex-col h-screen">
      {/* Logo */}
      <div className="p-4">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#7C3AED] rounded-lg flex items-center justify-center">
              <span className="text-white font-semibold">V</span>
            </div>
            <span className="text-white font-semibold">VoiceAI</span>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 py-4 space-y-1">
        {/* Main Navigation */}
        <div className="space-y-1">
          <div className="space-y-1">
            <Link
              to="/dashboard"
              className={`flex items-center space-x-3 px-3 py-2 text-gray-400 hover:text-white rounded-md hover:bg-[#25262B] transition-colors ${
                isActive('/dashboard') ? 'bg-[#7C3AED] text-white' : ''
              }`}
            >
              <LayoutDashboard className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>

            <Link
              to="/assistants"
              className={`flex items-center space-x-3 px-3 py-2 text-gray-400 hover:text-white rounded-md hover:bg-[#25262B] transition-colors ${
                isActive('/assistants') ? 'bg-[#7C3AED] text-white' : ''
              }`}
            >
              <Users className="w-5 h-5" />
              <span>Assistants</span>
            </Link>

            <Link
              to="/phone-number"
              className={`flex items-center space-x-3 px-3 py-2 text-gray-400 hover:text-white rounded-md hover:bg-[#25262B] transition-colors ${
                isActive('/phone-number') ? 'bg-[#7C3AED] text-white' : ''
              }`}
            >
              <Phone className="w-5 h-5" />
              <span>Phone Numbers</span>
            </Link>

            <Link
              to="/files"
              className={`flex items-center space-x-3 px-3 py-2 text-gray-400 hover:text-white rounded-md hover:bg-[#25262B] transition-colors ${
                isActive('/files') ? 'bg-[#7C3AED] text-white' : ''
              }`}
            >
              <FileText className="w-5 h-5" />
              <span>Files</span>
            </Link>

            <Link
              to="/logs"
              className={`flex items-center justify-between px-3 py-2 text-gray-400 hover:text-white rounded-md hover:bg-[#25262B] transition-colors ${
                isActive('/logs') ? 'bg-[#7C3AED] text-white' : ''
              }`}
            >
              <div className="flex items-center space-x-3">
                <MessageSquare className="w-5 h-5" />
                <span>Logs</span>
              </div>
              <ChevronDown className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t border-[#2C2D32]">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-[#25262B] rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-gray-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-white">Profile</span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2 px-3 py-2 text-[#4DB8B2] bg-[#25262B] rounded-md cursor-pointer hover:bg-[#2C2D32] transition-colors">
          <span className="text-sm">sanskar@webbuddy.co</span>
          <ChevronDown className="w-4 h-4" />
        </div>
        <button className="mt-2 flex items-center space-x-2 px-3 py-2 text-gray-400 hover:text-white rounded-md hover:bg-[#25262B] transition-colors w-full">
          <HelpCircle className="w-4 h-4" />
          <span className="text-sm">Docs and Support</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar; 