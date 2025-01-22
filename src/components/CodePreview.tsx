import React from 'react';

const CodePreview = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Window Frame */}
      <div className="rounded-lg overflow-hidden bg-zinc-900 shadow-2xl border border-zinc-800">
        {/* Window Header */}
        <div className="px-4 py-3 border-b border-zinc-800 flex items-center">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
        </div>
        
        {/* Code Content */}
        <div className="p-4 space-y-4">
          {/* Initialize Voice AI */}
          <div className="space-y-1">
            <div className="text-green-400 opacity-50">// Initialize Voice AI</div>
            <div>
              <span className="text-blue-400">const</span>{" "}
              <span className="text-violet-400">voiceAI</span>{" "}
              <span className="text-white">=</span>{" "}
              <span className="text-blue-400">new</span>{" "}
              <span className="text-violet-400">VoiceAI</span>
              <span className="text-white">{"({"}</span>
            </div>
            <div className="pl-4">
              <span className="text-violet-400">apiKey</span>
              <span className="text-white">:</span>{" "}
              <span className="text-orange-300">'your_api_key'</span>
              <span className="text-white">,</span>
            </div>
            <div className="pl-4">
              <span className="text-violet-400">voice</span>
              <span className="text-white">:</span>{" "}
              <span className="text-orange-300">'natural'</span>
              <span className="text-white">,</span>
            </div>
            <div className="pl-4">
              <span className="text-violet-400">language</span>
              <span className="text-white">:</span>{" "}
              <span className="text-orange-300">'en-US'</span>
            </div>
            <div><span className="text-white">{"});"}</span></div>
          </div>

          {/* Start Conversation */}
          <div className="space-y-1 mt-6">
            <div className="text-green-400 opacity-50">// Start conversation</div>
            <div>
              <span className="text-purple-400">await</span>{" "}
              <span className="text-violet-400">voiceAI</span>
              <span className="text-white">.</span>
              <span className="text-violet-400">speak</span>
              <span className="text-white">{"({"}</span>
            </div>
            <div className="pl-4">
              <span className="text-violet-400">text</span>
              <span className="text-white">:</span>{" "}
              <span className="text-orange-300">'Hello! How can I help you today?'</span>
              <span className="text-white">,</span>
            </div>
            <div className="pl-4">
              <span className="text-violet-400">emotion</span>
              <span className="text-white">:</span>{" "}
              <span className="text-orange-300">'friendly'</span>
            </div>
            <div><span className="text-white">{"});"}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodePreview;