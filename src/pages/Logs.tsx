"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  RiPhoneLine,
  RiTimeLine,
  RiMoneyDollarCircleLine,
  RiRobot2Line,
  RiCalendarLine,
  RiDownload2Line,
  RiFilter3Line,
  RiSearchLine,
  RiArrowDownSLine,
  RiClipboardLine,
  RiBarChartBoxLine,
  RiFileChartLine,
  RiPieChartLine,
  RiRefreshLine,
} from "react-icons/ri";
 import axios from "axios";
import DashboardLayout from "@/components/DashboardLayout";
import LoadingBar from "@/components/LoadingBar";
import { token } from "@/lib/token";
 
interface CallLog {
  id: string;
  type: "Web" | "Phone";
  callId: string;
  cost: number;
  endReason: string;
  assistant: string | "No Assistant Assigned";
  phoneNumber: string;
  customer: string;
  requestStartedAt: string;
  requestDurationSeconds: string;
  status: "Completed" | "Failed" | "In Progress";
  recording?: boolean;
}

const CallLogsLoader = () => {
  return (
    <LoadingBar
      title="Loading Call Logs"
      subtitle="Please wait while we fetch your call history..."
      icon={<RiPhoneLine className="w-8 h-8 text-teal-500" />}
    />
  );
};

const CallLogs = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [dateRange, setDateRange] = useState("Last 7 days");
  const [showFilters, setShowFilters] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [view, setView] = useState<"list" | "analytics">("list");
  const [Loading, setLoading] = useState(false);
  const [showResponse, setShowResponse] = useState<CallLog[]>([]);
  const [selectedCallType, setSelectedCallType] = useState("All Types");
  const [selectedDuration, setSelectedDuration] = useState("All Durations");
  console.log("response", showResponse);

  useEffect(() => {
    const fetchAssistants = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://api.vapi.ai/logs", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        setShowResponse((response.data as { results: any }).results);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchAssistants();
  }, []);

  const dateRangeOptions = [
    "Today",
    "Yesterday",
    "Last 7 days",
    "Last 30 days",
    "This month",
    "Last month",
    "Custom range",
  ];

  const toggleRowSelection = (id: string) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  console.log("response", showResponse);

  const getDurationInSeconds = (duration: string) => {
    if (typeof duration === "string") {
      return parseInt(duration.replace(/[^\d]/g, ""));
    }
    return duration;
  };

  const getDateRangeFilter = (dateRange: string) => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    switch (dateRange) {
      case "Today": {
        return today;
      }
      case "Yesterday": {
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        return yesterday;
      }
      case "Last 7 days": {
        const last7Days = new Date(today);
        last7Days.setDate(last7Days.getDate() - 7);
        return last7Days;
      }
      case "Last 30 days": {
        const last30Days = new Date(today);
        last30Days.setDate(last30Days.getDate() - 30);
        return last30Days;
      }
      case "This month": {
        return new Date(today.getFullYear(), today.getMonth(), 1);
      }
      case "Last month": {
        return new Date(today.getFullYear(), today.getMonth() - 1, 1);
      }
      default:
        return null;
    }
  };

  const filteredLogs = showResponse?.filter((log) => {
    const searchLower = searchQuery.toLowerCase();
    const durationInSeconds = getDurationInSeconds(log?.requestDurationSeconds);
    const logDate = new Date(log?.requestStartedAt);
    const dateRangeStart = getDateRangeFilter(dateRange);
    const now = new Date();

    // Date range filtering
    if (dateRangeStart) {
      // For "Today", check if the log date is from today
      if (dateRange === "Today") {
        const isToday =
          logDate.getDate() === now.getDate() &&
          logDate.getMonth() === now.getMonth() &&
          logDate.getFullYear() === now.getFullYear();
        if (!isToday) return false;
      }
      // For "Yesterday", check if the log date is from yesterday
      else if (dateRange === "Yesterday") {
        const yesterday = new Date(now);
        yesterday.setDate(yesterday.getDate() - 1);
        const isYesterday =
          logDate.getDate() === yesterday.getDate() &&
          logDate.getMonth() === yesterday.getMonth() &&
          logDate.getFullYear() === yesterday.getFullYear();
        if (!isYesterday) return false;
      }
      // For "This month", check if the log is from the current month
      else if (dateRange === "This month") {
        const isThisMonth =
          logDate.getMonth() === now.getMonth() &&
          logDate.getFullYear() === now.getFullYear();
        if (!isThisMonth) return false;
      }
      // For "Last month", check if the log is from the previous month
      else if (dateRange === "Last month") {
        const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
        const isLastMonth =
          logDate.getMonth() === lastMonth.getMonth() &&
          logDate.getFullYear() === lastMonth.getFullYear();
        if (!isLastMonth) return false;
      }
      // For other ranges (Last 7 days, Last 30 days)
      else if (logDate < dateRangeStart || logDate > now) {
        return false;
      }
    }

    // Call Type filtering
    if (selectedCallType !== "All Types" && log.type !== selectedCallType) {
      return false;
    }

    // Duration filtering
    switch (selectedDuration) {
      case "Under 30s":
        if (durationInSeconds >= 30) return false;
        break;
      case "30s - 2m":
        if (durationInSeconds < 30 || durationInSeconds > 120) return false;
        break;
      case "2m - 5m":
        if (durationInSeconds < 120 || durationInSeconds > 300) return false;
        break;
      case "Over 5m":
        if (durationInSeconds <= 300) return false;
        break;
    }

    // Search filtering
    return (
      log?.id?.toLowerCase().includes(searchLower) ||
      (log?.assistant && log.assistant.toLowerCase().includes(searchLower)) ||
      (log?.phoneNumber &&
        log.phoneNumber.toLowerCase().includes(searchLower)) ||
      (log?.callId && log.callId.toLowerCase().includes(searchLower))
    );
  });

  // Show loader while loading
  if (Loading) {
    return <CallLogsLoader />;
  }

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-[#1A1B1E] bg-gradient-to-br from-[#1A1B1E] via-[#1A1B1E] to-[#7C3AED]/5 p-6">
        <div className="max-w-[1600px] mx-auto space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-white">Call Logs</h1>
              <p className="text-gray-400 mt-1">
                Monitor and analyze your call history
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={() =>
                  setView((prev) => (prev === "list" ? "analytics" : "list"))
                }
                className={`px-4 py-2 rounded-xl border flex items-center space-x-2 transition-colors ${
                  view === "analytics"
                    ? "bg-[#25262B]/50 border-[#2C2D32] text-white hover:border-[#7C3AED]/30"
                    : "bg-[#25262B]/50 border-[#2C2D32] text-white hover:bg-[#2C2D32]/50"
                }`}
              >
                {view === "list" ? (
                  <>
                    <RiBarChartBoxLine className="w-5 h-5" />
                    <span>View Analytics</span>
                  </>
                ) : (
                  <>
                    <RiFileChartLine className="w-5 h-5" />
                    <span>View Logs</span>
                  </>
                )}
              </button>
              <button className="px-4 py-2 bg-[#25262B]/50 text-white rounded-xl hover:bg-[#2C2D32]/50 transition-colors flex items-center space-x-2 border border-[#2C2D32] hover:border-[#7C3AED]/30">
                <RiDownload2Line className="w-5 h-5" />
                <span>Export</span>
              </button>
              <button className="p-2 bg-[#25262B]/50 text-white rounded-xl hover:bg-[#2C2D32]/50 transition-colors border border-[#2C2D32] hover:border-[#7C3AED]/30">
                <RiRefreshLine className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-6"></div>

          {view === "list" ? (
            <>
              {/* Filters Section */}
              <div className="bg-[#25262B]/30 rounded-xl border border-[#2C2D32] p-4">
                <div className="flex items-center space-x-4">
                  {/* Search */}
                  <div className="flex-1 relative mb-4">
                    <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                      type="text"
                      placeholder="Search by call ID, assistant ID, or phone number..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-[#25262B]/50 border border-[#2C2D32] rounded-xl py-2 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/10 transition-all duration-300"
                    />
                  </div>

                  {/* Date Range Dropdown */}
                  <div className="relative">
                    <button
                      onClick={() => setShowDatePicker(!showDatePicker)}
                      className="px-4 py-2 bg-[#25262B]/50 border border-[#2C2D32] rounded-xl text-white hover:bg-[#2C2D32]/50 transition-colors flex items-center space-x-2"
                    >
                      <RiCalendarLine className="w-5 h-5 text-gray-400" />
                      <span>{dateRange}</span>
                      <RiArrowDownSLine className="w-5 h-5 text-gray-400" />
                    </button>

                    <AnimatePresence>
                      {showDatePicker && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute right-0 mt-2 w-56 bg-[#25262B]/50 rounded-lg border border-[#2C2D32] shadow-lg z-10"
                        >
                          {dateRangeOptions.map((option) => (
                            <button
                              key={option}
                              onClick={() => {
                                setDateRange(option);
                                setShowDatePicker(false);
                              }}
                              className={`w-full px-4 py-2 text-left hover:bg-[#2C2D32]/50 ${
                                dateRange === option
                                  ? "text-[#7C3AED] bg-[#7C3AED]/10"
                                  : "text-white"
                              }`}
                            >
                              {option}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Filter Button */}
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className={`px-4 py-2 border rounded-xl flex items-center space-x-2 ${
                      showFilters || selectedFilters.length > 0
                        ? "bg-[#25262B]/50 border-[#2C2D32] text-white hover:border-[#7C3AED]/30"
                        : "bg-[#25262B]/50 border-[#2C2D32] text-white hover:bg-[#2C2D32]/50"
                    } transition-colors`}
                  >
                    <RiFilter3Line className="w-5 h-5" />
                    <span>Filters</span>
                    {selectedFilters.length > 0 && (
                      <span className="bg-[#7C3AED]/10 text-[#7C3AED] px-2 py-0.5 rounded-full text-sm">
                        {selectedFilters.length}
                      </span>
                    )}
                  </button>
                </div>

                <AnimatePresence>
                  {showFilters && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="mt-4 pt-4 border-t border-[#2C2D32]"
                    >
                      <div className="grid grid-cols-4 gap-4">
                        {/* Call Type */}
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-2">
                            Call Type
                          </label>
                          <select
                            className="w-full bg-[#25262B]/50 border border-[#2C2D32] rounded-xl px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent"
                            value={selectedCallType}
                            onChange={(e) =>
                              setSelectedCallType(e.target.value)
                            }
                          >
                            <option value="All Types">All Types</option>
                            <option value="API">API</option>
                            <option value="Phone">Phone</option>
                          </select>
                        </div>

                        {/* Duration */}
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-2">
                            Duration
                          </label>
                          <select
                            className="w-full bg-[#25262B]/50 border border-[#2C2D32] rounded-xl px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent"
                            value={selectedDuration}
                            onChange={(e) =>
                              setSelectedDuration(e.target.value)
                            }
                          >
                            <option value="All Durations">All Durations</option>
                            <option value="Under 30s">Under 30s</option>
                            <option value="30s - 2m">30s - 2m</option>
                            <option value="2m - 5m">2m - 5m</option>
                            <option value="Over 5m">Over 5m</option>
                          </select>
                        </div>

                        {/* Cost */}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Table */}
              <div className="bg-[#25262B]/30 border border-[#2C2D32] rounded-xl overflow-hidden">
                {/* Table Header */}
                <div className="grid grid-cols-9 gap-4 px-6 py-3 border-b border-[#2C2D32] bg-[#25262B]/50">
                  <div className="col-span-1 text-sm font-medium text-gray-400">
                    Type
                  </div>
                  <div className="col-span-2 text-sm font-medium text-gray-400">
                    Call ID
                  </div>
                  <div className="col-span-1 text-sm font-medium text-gray-400">
                    Cost
                  </div>

                  <div className="col-span-2 text-sm font-medium text-gray-400">
                    Assistant
                  </div>
                  <div className="col-span-1 text-sm font-medium text-gray-400">
                    Phone Number
                  </div>
                  <div className="col-span-1 text-sm font-medium text-gray-400">
                    Start Time
                  </div>
                  <div className="col-span-1 text-sm font-medium text-gray-400">
                    Duration
                  </div>
                </div>

                <div className="divide-y divide-[#2C2D32]">
                  {filteredLogs?.map((log) => (
                    <div
                      key={log.id}
                      className={`grid grid-cols-9 gap-4 px-6 py-4 hover:bg-[#2C2D32]/30 transition-colors ${
                        selectedRows.includes(log.id) ? "bg-[#7C3AED]/10" : ""
                      }`}
                      onClick={() => toggleRowSelection(log.id)}
                    >
                      <div className="col-span-1 flex items-center">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-[#25262B]/50 text-white">
                          {log.type === "Web" ? (
                            <RiRobot2Line className="w-4 h-4 mr-1 text-[#7C3AED]" />
                          ) : (
                            <RiPhoneLine className="w-4 h-4 mr-1 text-[#7C3AED]" />
                          )}
                          {log?.type}
                        </span>
                      </div>
                      <div className="col-span-2 flex items-center space-x-2">
                        <span className="text-sm text-white font-mono">
                          {log?.id}
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            navigator.clipboard.writeText(log.callId);
                          }}
                          className="p-1 hover:bg-[#7C3AED]/10 rounded transition-colors"
                        >
                          <RiClipboardLine className="w-4 h-4 text-[#7C3AED]" />
                        </button>
                      </div>
                      <div className="col-span-1 flex items-center text-sm text-white">
                        <RiMoneyDollarCircleLine className="w-4 h-4 text-gray-400 mr-1" />
                        ${log?.cost?.toFixed(2) || "NA"}
                      </div>

                      <div className="col-span-2 flex items-center space-x-2">
                        {log.assistant === "No Assistant Assigned" ? (
                          <span className="text-sm text-gray-500">
                            {log?.assistant || "No Assistant Assigned"}
                          </span>
                        ) : (
                          <>
                            <span className="text-sm text-white font-mono">
                              {log?.assistant || "No Assistant Assigned"}
                            </span>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                navigator.clipboard.writeText(log.assistant);
                              }}
                              className="p-1 hover:bg-[#7C3AED]/10 rounded transition-colors"
                            >
                              <RiClipboardLine className="w-4 h-4 text-[#7C3AED]" />
                            </button>
                          </>
                        )}
                      </div>
                      <div className="col-span-1 text-sm text-white">
                        {log?.phoneNumber || "NA"}
                      </div>
                      <div className="col-span-1 text-sm text-white">
                        {new Date(log?.requestStartedAt)?.toLocaleString(
                          "en-US",
                          {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                            hour: "numeric",
                            minute: "numeric",
                            hour12: true,
                          }
                        )}
                      </div>
                      <div className="col-span-1 flex items-center text-sm text-white">
                        <RiTimeLine className="w-4 h-4 text-gray-400 mr-1" />
                        {typeof log?.requestDurationSeconds === "string"
                          ? `${parseInt(
                              log.requestDurationSeconds.replace(/[^\d]/g, "")
                            )} seconds`
                          : log?.requestDurationSeconds}
                        s
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            // Analytics View
            <div className="bg-[#25262B]/30 border border-[#2C2D32] p-6 rounded-xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-white">
                  Call Analytics
                </h2>
                <div className="flex items-center space-x-4">
                  <select className="bg-[#25262B]/50 border border-[#2C2D32] rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#7C3AED]">
                    <option>Last 7 days</option>
                    <option>Last 30 days</option>
                    <option>This month</option>
                    <option>Last month</option>
                  </select>
                  <button className="p-2 text-gray-400 hover:text-gray-600">
                    <RiRefreshLine className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {/* Placeholder for charts */}
                <div className="aspect-[4/3] bg-[#25262B]/50 rounded-lg border border-[#2C2D32] flex items-center justify-center">
                  <RiBarChartBoxLine className="w-12 h-12 text-gray-300" />
                </div>
                <div className="aspect-[4/3] bg-[#25262B]/50 rounded-lg border border-[#2C2D32] flex items-center justify-center">
                  <RiPieChartLine className="w-12 h-12 text-gray-300" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CallLogs;
