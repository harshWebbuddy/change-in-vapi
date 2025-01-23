import { useEffect, useState } from "react";
import { RiPhoneLine, RiCloseLine, RiLockLine } from "react-icons/ri";
 import axios from "axios";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion, AnimatePresence } from "framer-motion";
import { token } from "@/lib/token";

interface Country {
  name: {
    common: string;
  };
  idd: {
    root: string;
    suffixes?: string[];
  };
  flags: {
    png: string;
    svg: string;
  };
  cca2: string;
}

interface PhoneNumbersModalProps {
  showImportModal: boolean;
  setShowImportModal: (show: boolean) => void;
  onImportSuccess: () => void;
}

const PhoneNumbersModal: React.FC<PhoneNumbersModalProps> = ({
  showImportModal,
  setShowImportModal,
  onImportSuccess,
}) => {
  const [selectedProvider, setSelectedProvider] = useState("Twilio");
  const [fallbackCountryCode, setFallbackCountryCode] = useState("");
  const [formData, setFormData] = useState({
    phoneNumber: "",
    accountSID: "",
    authToken: "",
    label: "",
  });
  const [countries, setCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    const formattedPhoneNumber = formData.phoneNumber.startsWith(
      fallbackCountryCode
    )
      ? formData.phoneNumber
      : `${fallbackCountryCode}${formData.phoneNumber}`;

    const payload = {
      provider: "twilio",
      name: formData.label,
      number: formattedPhoneNumber,
      twilioAccountSid: formData.accountSID,
      twilioAuthToken: formData.authToken,
    };

    try {
      const response = await axios.post(
        "https://api.vapi.ai/phone-number",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response && response.data) {
        toast.success("Phone number successfully added!");
        setIsLoading(false);
        setShowImportModal(false);
        onImportSuccess();
        setFormData({
          phoneNumber: "",
          accountSID: "",
          authToken: "",
          label: "",
        });
      } else {
        setIsLoading(false);
        toast.error("Number Already Exists");
      }
    } catch (error) {
      setIsLoading(false);

      if (error.response && error.response.status === 403) {
        toast.error("Forbidden: Please check your token and try again.");
      } else {
        toast.error(
          error.response
            ? error.response.data
            : error.message || "Something went wrong"
        );
      }
    }
  };

  const getCountryCode = (country: Country) => {
    if (country.idd.root && country.idd.suffixes?.[0]) {
      return `${country.idd.root}${country.idd.suffixes[0]}`;
    }
    return country.idd.root || "";
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get<Country[]>(
          "https://restcountries.com/v3.1/all"
        );
        const filteredCountries = response?.data
          .filter(
            (country: Country) => country.idd?.root && country.idd?.suffixes
          )
          .sort((a: Country, b: Country) =>
            a.name.common.localeCompare(b.name.common)
          );
        setCountries(filteredCountries);
      } catch (err) {
        console.error("Error fetching countries:", err);
        toast.error("Failed to load country codes");
      }
    };

    fetchCountries();
  }, []);

  return (
    <AnimatePresence>
      {showImportModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-zinc-900/50 backdrop-blur-xl p-8 rounded-2xl border border-zinc-800/50 w-full max-w-md shadow-2xl shadow-black/30"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-lg flex items-center justify-center">
                  <RiPhoneLine className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-semibold text-white">
                  Import Phone Number
                </h2>
              </div>
              <button
                onClick={() => setShowImportModal(false)}
                className="text-gray-400 hover:text-gray-300 transition-colors p-2 hover:bg-zinc-800 rounded-lg"
              >
                <RiCloseLine className="w-6 h-6" />
              </button>
            </div>

            {/* Provider Selection */}
            <div className="mb-8">
              <label className="block text-zinc-400 text-sm font-medium mb-2">
                Select Provider
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedProvider("Twilio")}
                  className={`flex-1 py-3 rounded-xl transition-all ${
                    selectedProvider === "Twilio"
                      ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/20 ring-2 ring-violet-500 ring-offset-2"
                      : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
                  }`}
                >
                  Twilio
                </button>
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-6">
              <div>
                <label className="block text-zinc-400 text-sm font-medium mb-2">
                  Phone Number
                </label>
                <div className="flex gap-2">
                  <select
                    className="w-32 bg-zinc-800 text-white rounded-xl px-4 py-3 border border-zinc-700 hover:border-zinc-600 transition-colors focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                    value={fallbackCountryCode}
                    onChange={(e) => setFallbackCountryCode(e.target.value)}
                  >
                    <option value="">None</option>
                    {countries.map((country) => (
                      <option
                        key={country.cca2}
                        value={getCountryCode(country)}
                      >
                        {country.cca2} {getCountryCode(country)}
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Enter phone number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="flex-1 bg-zinc-800 text-white px-4 py-3 rounded-xl border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent placeholder-zinc-500 hover:border-zinc-600 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-zinc-400 text-sm font-medium mb-2">
                  Account SID
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="accountSID"
                    placeholder="Enter Twilio Account SID"
                    value={formData.accountSID}
                    onChange={handleChange}
                    className="w-full bg-zinc-800 text-white pl-11 pr-4 py-3 rounded-xl border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent placeholder-zinc-500 hover:border-zinc-600 transition-colors"
                  />
                  <RiLockLine className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 w-5 h-5" />
                </div>
              </div>

              <div>
                <label className="block text-zinc-400 text-sm font-medium mb-2">
                  Auth Token
                </label>
                <div className="relative">
                  <input
                    type="password"
                    name="authToken"
                    placeholder="Enter Twilio Auth Token"
                    value={formData.authToken}
                    onChange={handleChange}
                    className="w-full bg-zinc-800 text-white pl-11 pr-4 py-3 rounded-xl border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent placeholder-zinc-500 hover:border-zinc-600 transition-colors"
                  />
                  <RiLockLine className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 w-5 h-5" />
                </div>
              </div>

              <div>
                <label className="block text-zinc-400 text-sm font-medium mb-2">
                  Label
                </label>
                <input
                  type="text"
                  name="label"
                  placeholder="Enter a label for this number"
                  value={formData.label}
                  onChange={handleChange}
                  className="w-full bg-zinc-800 text-white px-4 py-3 rounded-xl border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent placeholder-zinc-500 hover:border-zinc-600 transition-colors"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-8">
              <button
                onClick={() => setShowImportModal(false)}
                className="flex-1 py-3 text-zinc-400 hover:text-white hover:bg-zinc-700 rounded-xl transition-all font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className={`flex-1 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl hover:from-violet-700 hover:to-indigo-700 transition-all font-medium shadow-lg shadow-violet-500/20 ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    <span>Importing...</span>
                  </div>
                ) : (
                  "Import from Twilio"
                )}
              </button>
            </div>
          </motion.div>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition={Bounce}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PhoneNumbersModal;
