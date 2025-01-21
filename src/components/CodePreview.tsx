import React from 'react';

const CodePreview = () => {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
      <div className="bg-gray-100 px-4 py-2 border-b flex items-center space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="bg-[#1E1E1E] p-6 text-white font-mono text-sm">
        <div className="space-y-4">
          <div>
            <span className="text-green-400">// Initialize Voice AI</span>
            <br />
            <span className="text-blue-400">const</span>{" "}
            <span className="text-yellow-300">voiceAI</span> ={" "}
            <span className="text-blue-400">new</span>{" "}
            <span className="text-yellow-300">VoiceAI</span>
            {"({"}
            <br />
            <span className="ml-4">apiKey: </span>
            <span className="text-orange-300">'your_api_key'</span>,
            <br />
            <span className="ml-4">voice: </span>
            <span className="text-orange-300">'natural'</span>,
            <br />
            <span className="ml-4">language: </span>
            <span className="text-orange-300">'en-US'</span>
            <br />
            {"});"}
          </div>
          <div>
            <span className="text-green-400">// Start conversation</span>
            <br />
            <span className="text-purple-400">await</span>{" "}
            <span className="text-yellow-300">voiceAI</span>.
            <span className="text-blue-400">speak</span>
            {"({"}
            <br />
            <span className="ml-4">text: </span>
            <span className="text-orange-300">'Hello! How can I help you today?'</span>,
            <br />
            <span className="ml-4">emotion: </span>
            <span className="text-orange-300">'friendly'</span>
            <br />
            {"});"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodePreview;