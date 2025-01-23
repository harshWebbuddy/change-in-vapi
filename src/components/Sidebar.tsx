import React, { useState, useEffect } from "react";
import { Plus, Search, Star, ArrowRight } from "lucide-react";
import "../styles/scrollbar.css";
const SidebarAssistant = ({
  showCreateAssistant,
  setTemplates,
  setTemplates1,
  setShowCreateAssistant,
  searchQuery,
  setSearchQuery,
  assistants,
  handleAssistantClick,
}) => {
  return (
    <div className="w-[280px] md:w-[320px] border-r border-[#2C2D32] bg-gradient-to-b from-[#1A1B1E] to-[#1A1B1E]/95 backdrop-blur-xl">
      <div className="p-4 md:p-6">
        <button
          onClick={() => {
            setShowCreateAssistant(true);
            setTemplates(null);
            setTemplates1(null);
          }}
          className="w-full bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] hover:from-[#6D28D9] hover:to-[#4C1D95] text-white rounded-2xl p-3 md:p-3.5 flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          <Plus className="w-4 md:w-5 h-4 md:h-5" />
          <span className="font-medium text-sm md:text-base">
            Create Assistant
          </span>
        </button>

        <div className="mt-6 md:mt-8 relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="w-4 h-4 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search assistants..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#25262B]/50 text-gray-300 rounded-2xl pl-9 pr-3 py-3 md:py-3.5 border border-[#2C2D32] focus:outline-none focus:border-[#7C3AED] focus:ring-4 focus:ring-[#7C3AED]/10 placeholder-gray-500 transition-all duration-300 backdrop-blur-xl text-sm"
          />
        </div>
      </div>

      <AssistantList
        assistants={assistants?.filter((assistant) =>
          assistant?.name?.toLowerCase()?.includes(searchQuery?.toLowerCase())
        )}
        onAssistantClick={handleAssistantClick}
      />
    </div>
  );
};

const AssistantList = ({ assistants, onAssistantClick }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="px-4 min-h-screen overflow-y-aut  scrollbar-thin scrollbar-thumb-[#2C2D32] scrollbar-track-transparent  bg-gradient-to-br from-[#1A1B1E] via-[#1A1B1E] to-[#7C3AED]/5 scrollbar-thin scrollbar-thumb-[#7C3AED] scrollbar-track-[#1A1B1E]">
      {isLoading ? (
        <div className="text-center py-4 text-gray-400">
          <div className="animate-pulse">Fetching assistants...</div>
          <div className="mt-2 h-1 bg-[#7C3AED] rounded-full animate-progress" />
        </div>
      ) : Array.isArray(assistants) && assistants?.length > 0 ? (
        assistants.map((assistant) => (
          <AssistantCard
            key={assistant.id}
            assistant={assistant}
            onClick={() => onAssistantClick(assistant.id)}
          />
        ))
      ) : (
        <div className="text-center py-4 text-gray-400">
          <div className="flex flex-col items-center">
            <div className="animate-bounce mb-2">
              <Star className="w-6 h-6 text-[#7C3AED]" />
            </div>
            <span className="text-lg font-semibold">No assistants found</span>
            <span className="text-sm text-gray-500 mt-1">
              Try adjusting your search
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

const AssistantCard = ({ assistant, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group p-4 mb-3 bg-[#25262B]/50 rounded-2xl border border-[#2C2D32] hover:border-[#7C3AED]/30 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-black/20 transform hover:-translate-y-0.5 backdrop-blur-xl"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 md:w-12 h-10 md:h-12 bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] rounded-xl flex items-center justify-center shadow-lg text-white font-medium">
          {assistant?.name?.slice(0, 2).toUpperCase() || "AI"}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm text-white font-medium group-hover:text-[#7C3AED] transition-colors flex items-center space-x-2">
            <span className="truncate">{assistant.name || "Assistant"}</span>
            {assistant.isFavorite && (
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
            )}
          </div>
          <div className="text-xs text-gray-400 mt-1 truncate">
            {assistant.type || "AI Assistant"}
          </div>
        </div>
        <ArrowRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-300" />
      </div>
    </div>
  );
};

export default SidebarAssistant;
