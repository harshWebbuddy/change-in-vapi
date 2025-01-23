import { motion } from "framer-motion";
import { RiPhoneLine } from "react-icons/ri";

interface LoadingBarProps {
  title?: string;
  subtitle?: string;
  icon?: React.ReactNode;
}

const LoadingBar = ({
  title = "Loading...",
  subtitle = "Please wait while we process your request",
  icon = <RiPhoneLine className="w-8 h-8 text-violet-500" />,
}: LoadingBarProps) => {
  return (
    <div className="flex items-center mx-auto justify-center min-h-screen bg-zinc-950">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl w-[400px] p-8 shadow-2xl border border-zinc-800/50"
      >
        {/* Loading Icon */}
        <div className="relative w-20 h-20 mx-auto mb-6">
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 2, repeat: Infinity, ease: "linear" },
              scale: { duration: 1, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute inset-0 rounded-full border-4 border-violet-500/30"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-4 border-t-violet-500 border-r-transparent border-b-transparent border-l-transparent"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ scale: [1, 0.9, 1] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {icon}
            </motion.div>
          </div>
        </div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-zinc-400 mb-6">{subtitle}</p>

          {/* Loading Progress */}
          <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{
                width: "100%",
                transition: { duration: 1.5, repeat: Infinity },
              }}
              className="h-full bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"
            />
          </div>

          {/* Loading Steps */}
          <div className="mt-6 flex justify-center gap-3">
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
              className="w-2 h-2 rounded-full bg-violet-500"
            />
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              className="w-2 h-2 rounded-full bg-violet-500"
            />
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
              className="w-2 h-2 rounded-full bg-violet-500"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoadingBar;
