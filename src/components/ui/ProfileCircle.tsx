import { motion } from "framer-motion";
import React from "react";

const ProfileCircle = () => (
  <motion.div
    initial={{ scale: 0.8, opacity: 0, rotate: -15 }}
    animate={{ scale: 1, opacity: 1, rotate: 0 }}
    transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.5 }}
    className="inline-flex w-14 h-14 rounded-full border-4 border-white dark:border-slate-900 overflow-hidden shadow-lg items-center justify-center ml-3 flex-shrink-0"
  >
    <div className="w-full h-full bg-[#C48CB3] flex items-center justify-center">
      <span className="text-white font-bold text-lg">SP</span>
    </div>
  </motion.div>
);

export default ProfileCircle;
