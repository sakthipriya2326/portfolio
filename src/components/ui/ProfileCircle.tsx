import { motion } from "framer-motion";
import React, { useState } from "react";
import profileImg from "../../assets/sp.jpg";

const ProfileCircle = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
      animate={{ scale: 1, opacity: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.3 }}
      className="relative inline-flex w-28 h-28 rounded-full overflow-hidden flex-shrink-0"
    >
      {/* Soft glowing border */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#83A6CE] to-[#EC7FAE] p-[3px] animate-pulseBlur">
        <div className="w-full h-full bg-[#0B0E1F] rounded-full"></div>
      </div>

      {/* Profile Image */}
      {!imageError ? (
        <img
          src={profileImg}
          alt="Sakthi Priya"
          className="absolute inset-[3px] rounded-full object-cover w-[calc(100%-6px)] h-[calc(100%-6px)]"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="flex items-center justify-center w-full h-full bg-gradient-to-r from-primary to-accent text-white font-semibold text-lg">
          SP
        </div>
      )}
    </motion.div>
  );
};

export default ProfileCircle;
