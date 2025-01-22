import React, { useState, useEffect, useRef } from 'react';
import Sidebar from '@/components/Sidebar';
import { Copy, Settings2, Plus, Search, ChevronDown, FileText, Upload, Info, Sparkles, MessageCircle, PhoneCall, Trash2, X, Clock, Users, Gamepad2, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-[#1A1B1E] bg-gradient-to-br from-[#1A1B1E] via-[#1A1B1E] to-[#7C3AED]/5 flex">
      <Sidebar />
      
      {/* Create Assistant Column */}
      <div className="w-[280px] md:w-[320px] border-r border-[#2C2D32] p-4 md:p-6 bg-gradient-to-b from-[#1A1B1E] to-[#1A1B1E]/95 backdrop-blur-xl">
        <button 
          onClick={() => setShowCreateModal(true)}
          className="w-full bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] hover:from-[#6D28D9] hover:to-[#4C1D95] text-white rounded-2xl p-3 md:p-3.5 flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg shadow-[#7C3AED]/20 hover:shadow-xl hover:shadow-[#7C3AED]/30 transform hover:-translate-y-0.5"
        >
          <Plus className="w-4 md:w-5 h-4 md:h-5" />
          <span className="font-medium text-sm md:text-base">Create Assistant</span>
        </button>

        <div className="mt-6 md:mt-8 relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="w-4 h-4 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search assistants..."
            className="w-full bg-[#25262B]/50 text-gray-300 rounded-2xl pl-9 pr-3 py-3 md:py-3.5 border border-[#2C2D32] focus:outline-none focus:border-[#7C3AED] focus:ring-4 focus:ring-[#7C3AED]/10 placeholder-gray-500 transition-all duration-300 backdrop-blur-xl text-sm"
          />
        </div>

        <div className="mt-6 md:mt-8">
          <Link to="/phone-number" className="flex items-center space-x-3 p-3 md:p-4 bg-[#25262B]/50 rounded-2xl hover:bg-[#2C2D32]/50 transition-all duration-300 cursor-pointer group hover:shadow-lg hover:shadow-black/20 transform hover:-translate-y-0.5 border border-[#2C2D32] hover:border-[#7C3AED]/30 backdrop-blur-xl">
            <div className="w-10 md:w-12 h-10 md:h-12 bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] rounded-xl flex items-center justify-center text-white font-medium shadow-lg shadow-[#7C3AED]/20 group-hover:shadow-xl group-hover:shadow-[#7C3AED]/30">
              +1
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm text-white font-medium group-hover:text-[#7C3AED] transition-colors flex items-center space-x-2">
                <span className="truncate">+16282039605</span>
              </div>
              <div className="text-xs text-gray-400 mt-1 truncate">Keywords</div>
            </div>
          </Link>
        </div>

        <div className="mt-6 text-sm text-gray-400 px-1 flex items-center justify-between">
          <span>Recently Created</span>
          <button className="text-[#7C3AED] hover:text-[#5B21B6] transition-colors text-xs font-medium">View All</button>
        </div>
      </div>

      <main className="flex-1 p-4 md:p-8 bg-gradient-to-br from-[#1A1B1E] via-[#1A1B1E] to-[#7C3AED]/5 min-w-0">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-8 mb-6 md:mb-8">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 md:w-14 h-12 md:h-14 bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] rounded-2xl flex items-center justify-center text-white font-medium shadow-lg shadow-[#7C3AED]/20 ring-4 ring-[#7C3AED]/10 shrink-0">
                HR
              </div>
              <div className="min-w-0">
                <div className="flex items-center space-x-3 flex-wrap gap-y-2">
                  <h1 className="text-xl md:text-2xl font-semibold text-white">HR Assistant</h1>
                  <div className="px-2.5 py-1 bg-[#7C3AED]/10 rounded-full text-[#7C3AED] text-sm font-medium shrink-0">Pro</div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2 bg-[#25262B]/50 rounded-2xl px-4 py-2.5 border border-[#2C2D32] hover:border-[#7C3AED]/30 transition-all duration-300 group backdrop-blur-xl overflow-hidden">
              <span className="text-sm text-gray-400 shrink-0">ID</span>
              <code className="text-sm text-gray-300 font-mono truncate">282a506b-3fbc-46c1-bdc6-176313a36810</code>
              <button className="text-[#7C3AED] hover:text-[#5B21B6] transition-colors group-hover:animate-pulse shrink-0">
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <button className="flex-1 md:flex-none px-4 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] hover:from-[#6D28D9] hover:to-[#4C1D95] text-white rounded-2xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-[#7C3AED]/20 hover:shadow-xl hover:shadow-[#7C3AED]/30 transform hover:-translate-y-0.5 font-medium">
              <MessageCircle className="w-4 md:w-5 h-4 md:h-5" />
              <span className="text-sm md:text-base">Talk with Assistant</span>
            </button>
            <button className="flex-1 md:flex-none px-4 md:px-6 py-2.5 md:py-3 bg-[#25262B]/50 text-white rounded-2xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 transform hover:-translate-y-0.5 font-medium border border-[#2C2D32] hover:border-[#7C3AED]/30 hover:bg-[#2C2D32]/50 backdrop-blur-xl">
              <Upload className="w-4 md:w-5 h-4 md:h-5" />
              <span className="text-sm md:text-base">Publish</span>
            </button>
            <button 
              ref={buttonRef}
              className="relative p-2.5 md:p-3 text-gray-400 hover:text-white transition-all duration-300 bg-[#25262B]/50 rounded-2xl hover:bg-[#2C2D32]/50 hover:shadow-lg hover:shadow-black/20 transform hover:-translate-y-0.5 border border-[#2C2D32] hover:border-[#7C3AED]/30 backdrop-blur-xl shrink-0"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <Settings2 className="w-4 md:w-5 h-4 md:h-5" />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-[#25262B]/50 rounded-2xl h-[600px] overflow-y-auto border border-[#2C2D32] shadow-xl shadow-black/30 hover:shadow-2xl hover:shadow-black/40 transition-all duration-300 scrollbar-thin scrollbar-thumb-[#7C3AED] scrollbar-track-[#1A1B1E] scrollbar-thumb-rounded-full scrollbar-track-rounded-full backdrop-blur-xl">
          {/* Tabs */}
          <div className="border-b border-[#2C2D32] p-4 sticky top-0 bg-[#25262B]/95 backdrop-blur-xl z-10 shadow-lg">
            <div className="flex space-x-6">
              <button className="text-sm text-white relative pb-2 font-medium before:absolute before:bottom-[-9px] before:left-0 before:w-full before:h-[2px] before:bg-[#7C3AED] before:shadow-lg before:shadow-[#7C3AED]/50 hover:text-[#7C3AED] transition-colors group">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 group-hover:animate-pulse" />
                  <span>Model</span>
                </div>
              </button>
            </div>
          </div>

          {/* Content Area */}
          <div className="p-4 md:p-8">
            <div className="flex items-center space-x-3 p-4 bg-[#1A1B1E]/50 rounded-2xl border border-[#2C2D32] mb-6 md:mb-8">
              <Info className="w-5 h-5 text-[#7C3AED] shrink-0" />
              <span className="text-gray-400 text-sm">Configure the model settings and behavior for your HR assistant.</span>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr,300px] gap-6 md:gap-12">
              {/* Left Column */}
              <div className="space-y-6 md:space-y-8">
                {/* First Message */}
                <div className="group">
                  <label className="flex items-center space-x-2 text-sm mb-3">
                    <span className="text-gray-300 font-medium group-hover:text-white transition-colors">First Message</span>
                    <Info className="w-4 h-4 text-gray-500 group-hover:text-[#7C3AED] transition-colors cursor-help" />
                  </label>
                  <textarea
                    className="w-full bg-[#1A1B1E]/50 border border-[#2C2D32] rounded-2xl p-4 text-gray-300 text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-4 focus:ring-[#7C3AED]/10 transition-all duration-300 hover:border-[#2C2D32]/80 min-h-[120px] backdrop-blur-xl"
                    defaultValue="Hello! I'm your HR assistant. How can I help you today with HR-related questions or tasks?"
                  />
                </div>

                {/* System Prompt */}
                <div className="group">
                  <label className="flex items-center space-x-2 text-sm mb-3">
                    <span className="text-gray-300 font-medium group-hover:text-white transition-colors">System Prompt</span>
                    <Info className="w-4 h-4 text-gray-500 group-hover:text-[#7C3AED] transition-colors cursor-help" />
                  </label>
                  <textarea
                    className="w-full bg-[#1A1B1E]/50 border border-[#2C2D32] rounded-2xl p-4 text-gray-300 text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-4 focus:ring-[#7C3AED]/10 transition-all duration-300 hover:border-[#2C2D32]/80 min-h-[120px] backdrop-blur-xl"
                    defaultValue="You are an HR assistant with expertise in company policies, employee relations, and HR best practices. Provide helpful and accurate information while maintaining confidentiality."
                  />
                </div>

                {/* Voice Configuration */}
                <div className="pt-6 md:pt-8 border-t border-[#2C2D32] group">
                  <h3 className="text-white text-sm font-medium mb-3 flex items-center space-x-2">
                    <span className="group-hover:text-[#7C3AED] transition-colors">Voice Configuration</span>
                    <Info className="w-4 h-4 text-gray-500 group-hover:text-[#7C3AED] transition-colors cursor-help" />
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">
                    Choose from the list of voices, or sync your voice library if you aren't able to find your voice in the dropdown.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-gray-300 font-medium mb-2 block">Provider</label>
                      <button className="w-full bg-[#1A1B1E]/50 border border-[#2C2D32] rounded-2xl p-4 text-gray-300 text-sm flex justify-between items-center hover:border-[#7C3AED] hover:bg-[#1A1B1E]/80 transition-all duration-300 group hover:shadow-lg hover:shadow-black/20 backdrop-blur-xl">
                        <span>11labs</span>
                        <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-[#7C3AED] transition-colors shrink-0 ml-2" />
                      </button>
                    </div>
                    <div>
                      <label className="text-sm text-gray-300 font-medium mb-2 block">Voice</label>
                      <button className="w-full bg-[#1A1B1E]/50 border border-[#2C2D32] rounded-2xl p-4 text-gray-300 text-sm flex justify-between items-center hover:border-[#7C3AED] hover:bg-[#1A1B1E]/80 transition-all duration-300 group hover:shadow-lg hover:shadow-black/20 backdrop-blur-xl">
                        <span>Sarah</span>
                        <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-[#7C3AED] transition-colors shrink-0 ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6 md:space-y-8">
                {/* Provider Selection */}
                <div className="group">
                  <label className="flex items-center space-x-2 text-sm mb-3">
                    <span className="text-gray-300 font-medium group-hover:text-white transition-colors">Provider</span>
                    <Info className="w-4 h-4 text-gray-500 group-hover:text-[#7C3AED] transition-colors cursor-help" />
                  </label>
                  <button className="w-full bg-[#1A1B1E]/50 border border-[#2C2D32] rounded-2xl p-4 text-gray-300 text-sm flex justify-between items-center hover:border-[#7C3AED] hover:bg-[#1A1B1E]/80 transition-all duration-300 group hover:shadow-lg hover:shadow-black/20 backdrop-blur-xl">
                    <div className="flex items-center space-x-2 min-w-0">
                      <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse ring-4 ring-yellow-500/20 shrink-0"></div>
                      <span className="truncate">OpenAI</span>
                    </div>
                    <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-[#7C3AED] transition-colors shrink-0 ml-2" />
                  </button>
                </div>

                {/* Model Selection */}
                <div className="group">
                  <label className="flex items-center space-x-2 text-sm mb-3">
                    <span className="text-gray-300 font-medium group-hover:text-white transition-colors">Model</span>
                    <Info className="w-4 h-4 text-gray-500 group-hover:text-[#7C3AED] transition-colors cursor-help" />
                  </label>
                  <button className="w-full bg-[#1A1B1E]/50 border border-[#2C2D32] rounded-2xl p-4 text-gray-300 text-sm flex justify-between items-center hover:border-[#7C3AED] hover:bg-[#1A1B1E]/80 transition-all duration-300 group hover:shadow-lg hover:shadow-black/20 backdrop-blur-xl">
                    <div className="flex items-center space-x-2 min-w-0">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse ring-4 ring-green-500/20 shrink-0"></div>
                      <span className="truncate">GPT-4</span>
                    </div>
                    <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-[#7C3AED] transition-colors shrink-0 ml-2" />
                  </button>
                </div>

                {/* Knowledge Base */}
                <div className="group">
                  <label className="flex items-center space-x-2 text-sm mb-3">
                    <span className="text-gray-300 font-medium group-hover:text-white transition-colors">Knowledge Base</span>
                    <Info className="w-4 h-4 text-gray-500 group-hover:text-[#7C3AED] transition-colors cursor-help" />
                  </label>
                  <div className="bg-[#1A1B1E]/50 border border-[#2C2D32] rounded-2xl p-6 text-center hover:border-[#7C3AED] hover:bg-[#1A1B1E]/80 transition-all duration-300 group hover:shadow-lg hover:shadow-black/20 backdrop-blur-xl">
                    <div className="flex flex-col items-center justify-center space-y-3">
                      <div className="w-12 md:w-14 h-12 md:h-14 bg-[#2C2D32] rounded-2xl flex items-center justify-center group-hover:bg-[#333438] transition-colors group-hover:scale-110 transform duration-300 ring-4 ring-[#2C2D32]/50">
                        <FileText className="w-6 md:w-7 h-6 md:h-7 text-gray-500 group-hover:text-[#7C3AED] transition-colors" />
                      </div>
                      <p className="text-sm text-gray-300 font-medium">No files selected</p>
                      <p className="text-xs text-gray-500">Upload HR documents to enhance your assistant's knowledge</p>
                      <button className="mt-2 px-4 py-2.5 text-[#7C3AED] hover:text-white text-sm flex items-center space-x-2 transition-all duration-300 hover:bg-[#7C3AED] rounded-xl group">
                        <Upload className="w-4 h-4" />
                        <span>Browse files</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Max Tokens */}
                <div className="group">
                  <label className="flex items-center space-x-2 text-sm mb-3">
                    <span className="text-gray-300 font-medium group-hover:text-white transition-colors">Max Tokens</span>
                    <Info className="w-4 h-4 text-gray-500 group-hover:text-[#7C3AED] transition-colors cursor-help" />
                  </label>
                  <input
                    type="text"
                    className="w-full bg-[#1A1B1E]/50 border border-[#2C2D32] rounded-2xl p-4 text-gray-300 text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-4 focus:ring-[#7C3AED]/10 transition-all duration-300 hover:border-[#2C2D32]/80 backdrop-blur-xl"
                    defaultValue="2000"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Dropdown Menu - Moved outside button */}
      {showDropdown && (
        <div 
          ref={dropdownRef}
          className="fixed mt-2 w-48 bg-[#25262B]/95 backdrop-blur-xl border border-[#2C2D32] rounded-xl shadow-lg shadow-black/20 overflow-hidden z-[9999]"
          style={{
            top: buttonRef.current ? buttonRef.current.getBoundingClientRect().bottom + 8 : 0,
            left: buttonRef.current ? buttonRef.current.getBoundingClientRect().left : 0,
          }}
        >
          <button className="w-full px-4 py-3 text-sm text-gray-300 hover:bg-[#2C2D32]/80 flex items-center space-x-2 transition-colors">
            <PhoneCall className="w-4 h-4" />
            <span>Call Logs</span>
          </button>
          <button className="w-full px-4 py-3 text-sm text-red-400 hover:bg-[#2C2D32]/80 flex items-center space-x-2 transition-colors border-t border-[#2C2D32]">
            <Trash2 className="w-4 h-4" />
            <span>Delete</span>
          </button>
        </div>
      )}

      {/* Create Assistant Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
          <div className="bg-[#1A1B1E] rounded-3xl border border-[#2C2D32] w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl shadow-black/40 scrollbar-thin scrollbar-thumb-[#7C3AED] scrollbar-track-[#1A1B1E] scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
            {/* Modal Header */}
            <div className="p-6 md:p-8 border-b border-[#2C2D32] flex items-center justify-between sticky top-0 bg-[#1A1B1E] z-10">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#7C3AED]/20">
                  <Plus className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-semibold text-white">Create Assistant</h2>
              </div>
              <button 
                onClick={() => setShowCreateModal(false)}
                className="p-2 text-gray-400 hover:text-white transition-colors rounded-xl hover:bg-[#2C2D32]/80"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8 space-y-8">
              {/* Name Field */}
              <div className="group">
                <label className="flex items-center space-x-2 text-sm mb-3">
                  <span className="text-gray-300 font-medium group-hover:text-white transition-colors">Assistant Name</span>
                  <Info className="w-4 h-4 text-gray-500 group-hover:text-[#7C3AED] transition-colors cursor-help" />
                </label>
                <input
                  type="text"
                  placeholder="Enter assistant name..."
                  className="w-full bg-[#1A1B1E]/50 border border-[#2C2D32] rounded-2xl p-4 text-gray-300 text-sm focus:outline-none focus:border-[#7C3AED] focus:ring-4 focus:ring-[#7C3AED]/10 transition-all duration-300 hover:border-[#2C2D32]/80 backdrop-blur-xl"
                />
              </div>

              {/* Description */}
              <div>
                <h3 className="text-white font-medium mb-2">Choose a template</h3>
                <p className="text-gray-400 text-sm">Here's a few templates to get you started, or you can create your own template and use it to create a new assistant.</p>
              </div>

              {/* Blank Template */}
              <div className="group">
                <button className="w-full bg-[#25262B]/50 hover:bg-[#2C2D32]/50 border border-[#2C2D32] hover:border-[#7C3AED]/30 rounded-2xl p-4 transition-all duration-300 backdrop-blur-xl text-left flex items-start space-x-4 hover:shadow-lg hover:shadow-black/20">
                  <div className="w-10 h-10 bg-[#2C2D32] rounded-xl flex items-center justify-center group-hover:bg-[#333438] transition-colors shrink-0">
                    <Plus className="w-5 h-5 text-[#7C3AED]" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Blank Template</h4>
                    <p className="text-sm text-gray-400">This blank slate template with minimal configurations. It's a starting point for creating your custom assistant.</p>
                  </div>
                </button>
              </div>

              {/* Quick Start Templates */}
              <div>
                <h3 className="text-white font-medium mb-4">QUICKSTART</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Appointment Setter */}
                  <div className="group">
                    <button className="w-full h-full bg-[#25262B]/50 hover:bg-[#2C2D32]/50 border border-[#2C2D32] hover:border-[#7C3AED]/30 rounded-2xl p-4 transition-all duration-300 backdrop-blur-xl text-left flex items-start space-x-4 hover:shadow-lg hover:shadow-black/20">
                      <div className="w-10 h-10 bg-[#2C2D32] rounded-xl flex items-center justify-center group-hover:bg-[#333438] transition-colors shrink-0">
                        <Clock className="w-5 h-5 text-[#7C3AED]" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">Appointment Setter</h4>
                        <p className="text-sm text-gray-400">Designed for dental practices to demonstrate setting appointments. It streamlines scheduling, answers common questions, and provides service information.</p>
                      </div>
                    </button>
                  </div>

                  {/* Customer Support */}
                  <div className="group">
                    <button className="w-full h-full bg-[#25262B]/50 hover:bg-[#2C2D32]/50 border border-[#2C2D32] hover:border-[#7C3AED]/30 rounded-2xl p-4 transition-all duration-300 backdrop-blur-xl text-left flex items-start space-x-4 hover:shadow-lg hover:shadow-black/20">
                      <div className="w-10 h-10 bg-[#2C2D32] rounded-xl flex items-center justify-center group-hover:bg-[#333438] transition-colors shrink-0">
                        <Users className="w-5 h-5 text-[#7C3AED]" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">Customer Support</h4>
                        <p className="text-sm text-gray-400">A versatile template designed with a perfect mix of emotional intelligence and technical knowledge. Ideal for empathetic, efficient customer support.</p>
                      </div>
                    </button>
                  </div>

                  {/* Inbound Q/A */}
                  <div className="group">
                    <button className="w-full h-full bg-[#25262B]/50 hover:bg-[#2C2D32]/50 border border-[#2C2D32] hover:border-[#7C3AED]/30 rounded-2xl p-4 transition-all duration-300 backdrop-blur-xl text-left flex items-start space-x-4 hover:shadow-lg hover:shadow-black/20">
                      <div className="w-10 h-10 bg-[#2C2D32] rounded-xl flex items-center justify-center group-hover:bg-[#333438] transition-colors shrink-0">
                        <HelpCircle className="w-5 h-5 text-[#7C3AED]" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">Inbound Q/A</h4>
                        <p className="text-sm text-gray-400">An inbound call agent example designed to provide comprehensive support for SmartHome Innovations. With a deep understanding of product details and troubleshooting.</p>
                      </div>
                    </button>
                  </div>

                  {/* Game NPC */}
                  <div className="group">
                    <button className="w-full h-full bg-[#25262B]/50 hover:bg-[#2C2D32]/50 border border-[#2C2D32] hover:border-[#7C3AED]/30 rounded-2xl p-4 transition-all duration-300 backdrop-blur-xl text-left flex items-start space-x-4 hover:shadow-lg hover:shadow-black/20">
                      <div className="w-10 h-10 bg-[#2C2D32] rounded-xl flex items-center justify-center group-hover:bg-[#333438] transition-colors shrink-0">
                        <Gamepad2 className="w-5 h-5 text-[#7C3AED]" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">Game NPC</h4>
                        <p className="text-sm text-gray-400">An assistant for demonstrating an in-game NPC. Elenya is designed to offer guidance, lore, and insights into the mysteries of the natural world.</p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 md:p-8 border-t border-[#2C2D32] sticky bottom-0 bg-[#1A1B1E] flex justify-end space-x-3">
              <button 
                onClick={() => setShowCreateModal(false)}
                className="px-6 py-2.5 text-gray-400 hover:text-white transition-colors rounded-xl hover:bg-[#2C2D32]/80 font-medium"
              >
                Cancel
              </button>
              <button 
                className="px-6 py-2.5 bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] hover:from-[#6D28D9] hover:to-[#4C1D95] text-white rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-[#7C3AED]/20 hover:shadow-xl hover:shadow-[#7C3AED]/30 transform hover:-translate-y-0.5 font-medium"
              >
                Create Assistant
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
