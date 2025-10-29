import React from "react";
import { motion } from "framer-motion";
import type { Project } from "../../types";


type ProjectsProps = {
  projects: Project[];
};

const Projects: React.FC<ProjectsProps> = ({ projects }) => (
  <section id="projects" className="py-20 bg-[#E5C9D7]/10 dark:bg-[#0D1E4C]/20">
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center text-[#0D1E4C] dark:text-[#E5C9D7]">Projects</h2>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <motion.article key={p.id} whileHover={{ y: -6 }} className="p-6 rounded-xl bg-white dark:bg-[#0D1E4C]/70 border border-[#C48CB3]/50 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-[#0D1E4C] dark:text-[#E5C9D7]">{p.title}</h3>
            <p className="mt-2 text-[#0D1E4C]/70 dark:text-[#E5C9D7]/70">{p.description}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
