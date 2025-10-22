import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  live?: string;
  repo?: string;
};

export default function App() {
  const [dark, setDark] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
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
      description: "A visually rich personal portfolio showcasing design + frontend fusion.",
      tech: ["React", "Tailwind", "TypeScript"],
      live: "#",
      repo: "#",
    },
    {
      id: "2",
      title: "UI Component Library",
      description: "A scalable UI kit for building consistent, modern frontends.",
      tech: ["React", "Storybook", "CSS Modules"],
      live: "#",
      repo: "#",
    },
  ];

  const Toggle = () => (
    <button
      aria-label="Toggle theme"
      onClick={() => setDark((s) => !s)}
      className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition"
    >
      {dark ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6">
          <path
            fill="currentColor"
            d="M21.64 13.13A9 9 0 1 1 10.87 2.36 7 7 0 0 0 21.64 13.13z"
          />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6">
          <path
            fill="currentColor"
            d="M6.76 4.84l-1.8-1.79L3.17 4.84l1.79 1.8 1.8-1.8zm10.48 0l1.8-1.79 1.79 1.79-1.79 1.8-1.8-1.8zM12 4V1h0v3zm0 19v-3h0v3zm8-11h3v0h-3zM1 12H4v0H1zm3.24 7.16l1.8 1.79 1.79-1.79-1.79-1.8-1.8 1.8zM17.76 19.16l1.8 1.79 1.79-1.79-1.79-1.8-1.8 1.8zM12 6a6 6 0 100 12A6 6 0 0012 6z"
          />
        </svg>
      )}
    </button>
  );

  const Hero = () => (
    <section className="relative overflow-hidden">
      <div className="absolute -top-24 -right-32 w-96 h-96 rounded-full blur-3xl bg-gradient-to-br from-primary to-accent opacity-30 dark:opacity-20" />
      <div className="absolute -bottom-24 -left-32 w-96 h-96 rounded-full blur-3xl from-accent to-primary opacity-30 dark:opacity-20 bg-gradient-to-br" />

      <div className="max-w-container mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10">
        <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Hi, I'm <span className="text-primary dark:text-primary">Sakthi Priya S</span>
          </h1>
          <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-xl">
            Frontend Developer & UI/UX Designer crafting delightful and accessible interfaces —
            bridging design and code.
          </p>
          <div className="mt-6 flex gap-4">
            <a href="#projects" className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-glow hover:scale-105 transition">
              View Projects
            </a>
            <a href="mailto:sakthipriya@example.com" className="inline-block px-6 py-2 rounded-full border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.7 }} className="flex-1 flex justify-center">
          <div className="w-72 h-72 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 border border-slate-200 dark:border-slate-800 flex items-center justify-center">
            <div className="w-60 h-60 rounded-2xl bg-white dark:bg-slate-900 flex items-center justify-center border border-slate-100 dark:border-slate-800 shadow">
              <span className="text-slate-400">Your Photo</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );

  const About = () => (
    <section id="about" className="py-20">
      <div className="max-w-container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            I'm a Frontend Developer focused on building human-centered experiences. I enjoy
            transforming design problems into elegant, accessible, and maintainable user
            interfaces. My toolkit includes React, TypeScript, Tailwind CSS and an eye for visual
            detail.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">UI/UX</span>
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">Frontend</span>
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">Accessibility</span>
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">Design Systems</span>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-sm p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-lg">
            <h3 className="font-semibold">Quick Facts</h3>
            <ul className="mt-3 text-sm text-slate-600 dark:text-slate-300 space-y-2">
              <li>📍 Based in India</li>
              <li>💼 Frontend Developer</li>
              <li>🎨 Passion for UI/UX</li>
              <li>🔭 Open to collaboration</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );

  const Projects = () => (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900/40">
      <div className="max-w-container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">Projects</h2>
        <p className="text-center text-slate-600 dark:text-slate-300 mt-2">Selected projects I enjoy building</p>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <motion.article key={p.id} whileHover={{ y: -6 }} className="p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex gap-4">
                {p.live && <a href={p.live} className="text-primary underline">Live</a>}
                {p.repo && <a href={p.repo} className="text-slate-500 dark:text-slate-300 underline">Code</a>}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );

  const Contact = () => (
    <section id="contact" className="py-20">
      <div className="max-w-container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold">Let's Connect</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">Have a project or want to collaborate? Send me a message.</p>
        <div className="mt-6">
          <a href="mailto:sakthipriya@example.com" className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-glow">Say Hello</a>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen font-sans bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/60 dark:bg-slate-900/60 border-b">
        <div className="max-w-container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">SP</div>
            <div>
              <div className="text-sm font-semibold text-slate-800 dark:text-slate-100">Sakthi Priya S</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Frontend Developer</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <nav className="hidden md:flex gap-6 text-sm">
              <a href="#about" className="hover:text-primary transition">About</a>
              <a href="#projects" className="hover:text-primary transition">Projects</a>
              <a href="#contact" className="hover:text-primary transition">Contact</a>
            </nav>
            <Toggle />
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t mt-12 py-6 text-center text-sm text-slate-500 dark:text-slate-400">
        <div className="max-w-container mx-auto px-6">© {new Date().getFullYear()} Sakthi Priya S — Crafted with ❤️ using React & Tailwind.</div>
      </footer>
    </div>
  );
}
