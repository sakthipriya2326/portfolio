import { useState, useEffect, type SetStateAction } from "react";
import About from "./components/ui/About";
import Hero from "./components/ui/Hero";
import Projects from "./components/ui/Projects";
import type { Project } from "./types";
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

  const projects: Project[] = [
    {
      id: "1",
      title: "Creative Portfolio",
      description:
        "A visually rich personal portfolio showcasing design + frontend fusion.",
      tech: ["React", "Tailwind", "TypeScript"],
      live: "#",
      repo: "#",
    },
    {
      id: "2",
      title: "UI Component Library",
      description:
        "A scalable UI kit for building consistent, modern frontends.",
      tech: ["React", "Storybook", "CSS Modules"],
      live: "#",
      repo: "#",
    },
  ];

  return (
    <div className="min-h-screen font-sans bg-white dark:bg-[#0D1E4C] text-[#0D1E4C] dark:text-[#E5C9D7] transition-colors duration-500">
      {/* Header */}
      <Header dark={dark} setDark={setDark} />

      {/* Main sections */}
      <main id="home">
        <Hero />
        <About />
        <Projects projects={projects} />
      </main>

      {/* Footer / Contact section */}
      <footer
        id="contact"
        className="border-t border-[#C48CB3]/30 mt-12 py-8 text-center text-sm text-[#0D1E4C]/70 dark:text-[#E5C9D7]/70"
      >
        <p className="text-base font-medium mb-2">Let’s Connect ✨</p>
        <div className="flex justify-center gap-6 text-lg">
          <a
            href="mailto:sakthipriyas736@gmail.com"
            className="flex items-center gap-2 hover:underline"
          >
            <Mail size={18} /> Email
          </a>
          <a
            href="https://www.linkedin.com/in/sakthipriya"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
          <a
            href="https://bit.ly/sakthipriya-resume"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <FileText size={18} /> Resume
          </a>
        </div>

        <p className="mt-4">
          © {new Date().getFullYear()} Sakthi Priya S — Crafted with ❤️ using React & Tailwind.
        </p>
      </footer>
    </div>
  );
}
