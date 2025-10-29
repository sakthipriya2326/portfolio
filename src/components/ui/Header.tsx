import React from "react";
import { motion } from "framer-motion";
import ToggleTheme from "./ToggleTheme";

type HeaderProps = {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header: React.FC<HeaderProps> = ({ dark, setDark }) => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 border-b border-white/10 
                 backdrop-blur-md bg-white/70 dark:bg-[#0C0F24]/70 
                 shadow-[0_1px_10px_rgba(0,0,0,0.05)] overflow-hidden"
    >
      {/* --- Glow Balls Background --- */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Light mode glow */}
        <div className="absolute -top-48 -left-40 w-[400px] h-[400px] bg-[#FDE1EC]/50 rounded-full blur-[140px] dark:hidden" />
        <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-[#FFD8E9]/40 rounded-full blur-[160px] dark:hidden" />
        {/* Dark mode glow */}
        <div className="hidden dark:block absolute -top-48 -left-40 w-[400px] h-[400px] bg-[#C48CB3]/20 rounded-full blur-[160px]" />
        <div className="hidden dark:block absolute top-1/2 right-0 w-[450px] h-[450px] bg-[#83A6CE]/15 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center relative">
        
        {/* --- Brand Signature Name --- */}
        <motion.h1
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[1.7rem] tracking-tight text-[#0D1E4C] dark:text-[#E5C9D7] select-none"
          style={{
            fontFamily: "'Playfair Display', serif",
          }}
        >
          <span className="italic font-medium">SakthiPriya</span>
          <span className="text-[#C48CB3]">.</span>
        </motion.h1>

        {/* --- Navigation Links --- */}
        <nav className="hidden md:flex gap-8 text-[15px] font-medium text-[#0D1E4C]/80 dark:text-[#E0E8FF]/80">
          {["Home", "Projects", "About", "Contact"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ y: -1 }}
              transition={{ duration: 0.2 }}
              className="relative group transition-all"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-[#C48CB3] rounded-full transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </nav>

        {/* --- Theme Toggle --- */}
        <div className="ml-4">
          <ToggleTheme dark={dark} setDark={setDark} />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
