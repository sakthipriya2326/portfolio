import { useState, useEffect } from "react";
import About from "./components/ui/About";
import Hero from "./components/ui/Hero";
import Projects from "./components/ui/Projects";
import Header from "./components/ui/Header";
import { Mail, Linkedin, FileText } from "lucide-react";

export default function App() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);


  return (
    <div className="min-h-screen font-sans bg-white dark:bg-[#0D1E4C] text-[#0D1E4C] dark:text-[#E5C9D7] transition-colors duration-500">
      {/* Header */}
      <Header dark={dark} setDark={setDark} />

      {/* Main sections */}
      <main id="home">
        <Hero />
        <About />
        <Projects  />
      </main>

      {/* Footer / Contact section */}
    <footer
  id="contact"
  className="
    py-10 text-center text-sm
    border-t border-[#C48CB3]/20
    bg-gradient-to-b from-[#fff8fc]/80 to-[#f6f9ff]/70
    dark:from-[#0B0E1F]/80 dark:via-[#121732]/70 dark:to-[#1A1F46]/70
    backdrop-blur-lg
    text-[#0D1E4C]/80 dark:text-[#E5C9D7]/80
    transition-all duration-500
  "
>
  <p className="text-base font-semibold mb-3 text-[#0D1E4C] dark:text-[#E5C9D7]">
    Let’s Connect ✨
  </p>

  <div className="flex justify-center gap-6 text-[15px] font-medium mb-3">
    {/* --- Smart Email Button --- */}
    <button
      onClick={() => {
        const gmailLink =
          "https://mail.google.com/mail/?view=cm&fs=1&to=sakthipriyas736@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Sakthi%20Priya%2C";
        const mailtoLink =
          "mailto:sakthipriyas736@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Sakthi%20Priya%2C";
        window.open(gmailLink, "_blank");
        setTimeout(() => {
          window.location.href = mailtoLink;
        }, 500);
      }}
      className="flex items-center gap-2 hover:text-[#C48CB3] transition-colors"
    >
      <Mail size={18} /> Email
    </button>

    {/* --- LinkedIn --- */}
    <a
      href="https://www.linkedin.com/in/sakthis-profile/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 hover:text-[#C48CB3] transition-colors"
    >
      <Linkedin size={18} /> LinkedIn
    </a>

    {/* --- Resume --- */}
    <a
      href="https://bit.ly/sakthipriya-resume"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 hover:text-[#C48CB3] transition-colors"
    >
      <FileText size={18} /> Resume
    </a>
  </div>

  <p className="mt-4 text-xs opacity-80">
    © {new Date().getFullYear()} <span className="font-semibold">Sakthi Priya S</span> — Crafted with ❤️ using React & Tailwind.
  </p>
</footer>


    </div>
  );
}
