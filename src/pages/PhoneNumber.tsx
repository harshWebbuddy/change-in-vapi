import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import { ArrowLeft, Plus, Copy, Phone, ChevronDown, ChevronUp, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const PhoneNumber = () => {
  const [selectedNumber, setSelectedNumber] = useState('+16282039605');
  const [showInboundSettings, setShowInboundSettings] = useState(true);
  const [showOutboundForm, setShowOutboundForm] = useState(true);

  return (
    <div className="min-h-screen bg-[#1A1B1E] bg-gradient-to-br from-[#1A1B1E] via-[#1A1B1E] to-[#7C3AED]/5 flex">
      <Sidebar />

      {/* Middle Column */}
      <div className="w-[280px] md:w-[320px] border-r border-[#2C2D32] p-4 md:p-6 bg-gradient-to-b from-[#1A1B1E] to-[#1A1B1E]/95 backdrop-blur-xl">
        <button className="w-full bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] hover:from-[#6D28D9] hover:to-[#4C1D95] text-white rounded-xl p-3 md:p-3.5 flex items-center justify-center space-x-2 transition-all duration-500 shadow-lg shadow-[#7C3AED]/20 hover:shadow-xl hover:shadow-[#7C3AED]/30 transform hover:-translate-y-0.5">
          <Plus className="w-4 md:w-5 h-4 md:h-5" />
          <span className="font-medium text-sm md:text-base">Import Number</span>
        </button>

        <div className="mt-6 md:mt-8">
          <Link 
            to="/phone-number" 
            className="flex items-center space-x-3 p-3 md:p-4 bg-[#25262B]/50 rounded-2xl hover:bg-[#2C2D32]/50 transition-all duration-300 cursor-pointer group hover:shadow-lg hover:shadow-black/20 transform hover:-translate-y-0.5 border border-[#2C2D32] hover:border-[#7C3AED]/30 backdrop-blur-xl"
          >
            <div className="w-10 md:w-12 h-10 md:h-12 bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] rounded-xl flex items-center justify-center text-white font-medium shadow-lg shadow-[#7C3AED]/20 group-hover:shadow-xl group-hover:shadow-[#7C3AED]/30 transition-all duration-500">
              <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm text-white font-medium group-hover:text-[#7C3AED] transition-colors flex items-center space-x-2">
                <span className="truncate">+16282039605</span>
              </div>
              <div className="text-xs text-gray-400 mt-1 truncate">Keywords</div>
            </div>
          </Link>
        </div>
      </div>

      {/* Main Content - Third Column */}
      <main className="flex-1 p-4 md:p-8 space-y-6 overflow-y-auto">
        {/* Phone Number Card */}
        <div className="bg-[#25262B]/50 backdrop-blur-xl border border-[#2C2D32] rounded-2xl p-6 md:p-8 hover:border-[#7C3AED]/30 transition-all duration-300 group">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-2xl font-semibold text-white group-hover:text-[#7C3AED] transition-colors">{selectedNumber}</h1>
              <p className="text-sm text-gray-400 mt-1">Keywords</p>
            </div>
            <button className="text-gray-400 hover:text-red-500 transition-colors p-2 hover:bg-red-500/10 rounded-xl">
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
          <div className="flex items-center justify-between bg-[#1A1B1E]/80 rounded-xl p-4 border border-[#2C2D32] group-hover:border-[#7C3AED]/30 transition-all duration-300">
            <code className="text-sm text-gray-300 font-mono select-all">d5648bc2-6373-4c88-97db-6ca869f889e4</code>
            <button className="text-gray-400 hover:text-[#7C3AED] transition-colors p-2 hover:bg-[#7C3AED]/10 rounded-lg group-hover:animate-pulse">
              <Copy className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Inbound Settings */}
        <div className="bg-[#25262B]/50 backdrop-blur-xl border border-[#2C2D32] rounded-2xl p-6 md:p-8 hover:border-[#7C3AED]/30 transition-all duration-300">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-white">Inbound Settings</h2>
              <p className="text-sm text-gray-400 mt-1">You can assign an assistant to the Phone number so that whenever someone calls this phone number, the assistant will automatically be assigned to the call.</p>
            </div>
            <button 
              onClick={() => setShowInboundSettings(!showInboundSettings)}
              className="text-[#7C3AED] hover:text-[#6D28D9] flex items-center space-x-2 p-2 hover:bg-[#7C3AED]/10 rounded-xl transition-all duration-300"
            >
              <span className="text-sm">{showInboundSettings ? 'Hide Inbound Settings' : 'Show Inbound Settings'}</span>
              {showInboundSettings ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {showInboundSettings && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Inbound Phone Number</label>
                <input
                  type="text"
                  value={selectedNumber}
                  disabled
                  className="w-full bg-[#1A1B1E]/80 border border-[#2C2D32] rounded-xl p-4 text-gray-300 focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Assistant</label>
                <select className="w-full bg-[#1A1B1E]/80 border border-[#2C2D32] rounded-xl p-4 text-gray-300 appearance-none hover:border-[#7C3AED]/30 focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20 transition-all duration-300">
                  <option>Select Assistant...</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Fallback Destination</label>
                <p className="text-sm text-gray-400 mb-3">Set a fallback destination for inbound calls when the assistant is not available.</p>
                <div className="flex space-x-3">
                  <select className="bg-[#1A1B1E]/80 border border-[#2C2D32] rounded-xl p-4 text-gray-300 w-[120px] hover:border-[#7C3AED]/30 focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20 transition-all duration-300">
                    <option>CA +1</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="Enter a phone number"
                    className="flex-1 bg-[#1A1B1E]/80 border border-[#2C2D32] rounded-xl p-4 text-gray-300 placeholder-gray-500 hover:border-[#7C3AED]/30 focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20 transition-all duration-300"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">Format: +1234567890 (include country code)</p>
              </div>

              <button className="bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] hover:from-[#6D28D9] hover:to-[#4C1D95] text-white rounded-xl px-8 py-3 font-medium transition-all duration-500 shadow-lg shadow-[#7C3AED]/20 hover:shadow-xl hover:shadow-[#7C3AED]/30 transform hover:-translate-y-0.5">
                Save
              </button>
            </div>
          )}
        </div>

        {/* Outbound Form */}
        <div className="bg-[#25262B]/50 backdrop-blur-xl border border-[#2C2D32] rounded-2xl p-6 md:p-8 hover:border-[#7C3AED]/30 transition-all duration-300">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-white">Outbound Form</h2>
              <p className="text-sm text-gray-400 mt-1">You can assign an outbound phone number and assistant to make calls.</p>
            </div>
            <button 
              onClick={() => setShowOutboundForm(!showOutboundForm)}
              className="text-[#7C3AED] hover:text-[#6D28D9] flex items-center space-x-2 p-2 hover:bg-[#7C3AED]/10 rounded-xl transition-all duration-300"
            >
              <span className="text-sm">{showOutboundForm ? 'Hide Outbound Form' : 'Show Outbound Form'}</span>
              {showOutboundForm ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {showOutboundForm && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Outbound Phone Number</label>
                <div className="flex space-x-3">
                  <select className="bg-[#1A1B1E]/80 border border-[#2C2D32] rounded-xl p-4 text-gray-300 w-[120px] hover:border-[#7C3AED]/30 focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20 transition-all duration-300">
                    <option>CA +1</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="Enter a phone number"
                    className="flex-1 bg-[#1A1B1E]/80 border border-[#2C2D32] rounded-xl p-4 text-gray-300 placeholder-gray-500 hover:border-[#7C3AED]/30 focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20 transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Assistant</label>
                <select className="w-full bg-[#1A1B1E]/80 border border-[#2C2D32] rounded-xl p-4 text-gray-300 appearance-none hover:border-[#7C3AED]/30 focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20 transition-all duration-300">
                  <option>Select Assistant...</option>
                </select>
              </div>

              <button className="w-full bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] hover:from-[#6D28D9] hover:to-[#4C1D95] text-white rounded-xl p-4 font-medium flex items-center justify-center space-x-2 transition-all duration-500 shadow-lg shadow-[#7C3AED]/20 hover:shadow-xl hover:shadow-[#7C3AED]/30 transform hover:-translate-y-0.5">
                <Phone className="w-5 h-5" />
                <span>Make Outbound Call</span>
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default PhoneNumber; 