import React from "react";

type ToggleProps = {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
};

const ToggleTheme = ({  setDark }: ToggleProps) => (
  <button
    onClick={() => setDark((s) => !s)}
    className="px-3 py-1 rounded-full border border-[#C48CB3]/40 bg-[#C48CB3]/10 
               text-[#0D1E4C] dark:text-[#E5C9D7] 
               hover:bg-[#C48CB3]/20 dark:hover:bg-[#C48CB3]/30 
               transition font-medium"
  >
    
  </button>
);

export default ToggleTheme;
