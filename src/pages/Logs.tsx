import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import { Search, BarChart2, Download, Filter, Copy, Phone } from 'lucide-react';

interface LogItem {
  id: string;
  type: 'API';
  callId: string;
  cost: string;
  assistant: string;
  phoneNumber: string;
  startTime: string;
  duration: string;
}

const sampleLogs: LogItem[] = [
  {
    id: '1',
    type: 'API',
    callId: '9e4025fe-9a61-492f-ba85-a0509c6798d7',
    cost: '$NA',
    assistant: 'No Assistant Assigned',
    phoneNumber: 'NA',
    startTime: 'Jan 22, 2025, 4:58 PM',
    duration: '0.13s'
  },
  // Add more sample logs as needed
];

const Logs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [timeFilter, setTimeFilter] = useState('Last 7 days');

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // Could add a toast notification here
  };

  return (
    <div className="min-h-screen bg-[#1A1B1E] bg-gradient-to-br from-[#1A1B1E] via-[#1A1B1E] to-[#7C3AED]/5 flex">
      <Sidebar />
      
      <main className="flex-1 p-4 md:p-8">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-semibold text-white mb-2 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] rounded-xl flex items-center justify-center shadow-lg shadow-[#7C3AED]/20">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  Call Logs
                </h1>
                <p className="text-gray-400">Monitor and analyze your call history</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="px-4 py-2 bg-[#25262B]/50 text-white rounded-xl hover:bg-[#2C2D32]/50 transition-all duration-300 flex items-center gap-2 border border-[#2C2D32] hover:border-[#7C3AED]/30">
                  <BarChart2 className="w-4 h-4" />
                  <span>View Analytics</span>
                </button>
                <button className="px-4 py-2 bg-[#25262B]/50 text-white rounded-xl hover:bg-[#2C2D32]/50 transition-all duration-300 flex items-center gap-2 border border-[#2C2D32] hover:border-[#7C3AED]/30">
                  <Download className="w-4 h-4" />
                  <span>Export</span>
                </button>
              </div>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="mb-6 flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search by call ID, assistant ID, or phone number..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#25262B]/50 border border-[#2C2D32] rounded-xl py-2 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/10 transition-all duration-300"
              />
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-[#25262B]/50 text-white rounded-xl hover:bg-[#2C2D32]/50 transition-all duration-300 flex items-center gap-2 border border-[#2C2D32] hover:border-[#7C3AED]/30">
                <span>{timeFilter}</span>
              </button>
              <button className="px-4 py-2 bg-[#25262B]/50 text-white rounded-xl hover:bg-[#2C2D32]/50 transition-all duration-300 flex items-center gap-2 border border-[#2C2D32] hover:border-[#7C3AED]/30">
                <Filter className="w-4 h-4" />
                <span>Filters</span>
              </button>
            </div>
          </div>

          {/* Logs Table */}
          <div className="bg-[#25262B]/30 border border-[#2C2D32] rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#2C2D32]">
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Type</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Call ID</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Cost</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Assistant</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Phone Number</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Start Time</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {sampleLogs.map((log) => (
                    <tr key={log.id} className="border-b border-[#2C2D32] hover:bg-[#2C2D32]/30 transition-colors">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-[#7C3AED]" />
                          <span className="text-white">{log.type}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <span className="text-white font-mono text-sm">{log.callId}</span>
                          <button 
                            onClick={() => copyToClipboard(log.callId)}
                            className="p-1 hover:bg-[#7C3AED]/10 rounded transition-colors"
                          >
                            <Copy className="w-4 h-4 text-[#7C3AED]" />
                          </button>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-white">{log.cost}</td>
                      <td className="py-3 px-4 text-white">{log.assistant}</td>
                      <td className="py-3 px-4 text-white">{log.phoneNumber}</td>
                      <td className="py-3 px-4 text-white">{log.startTime}</td>
                      <td className="py-3 px-4 text-white">{log.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Logs; 