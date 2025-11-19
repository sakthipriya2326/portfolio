import React from "react";
import { motion } from "framer-motion";

type Project = {
  id: number;
  title: string;
  description: string;
  link?: string;
  year: string;
};

const projectList: Project[] = [
  {
    id: 1,
    title: "Stupro – Student to Professional",
    year: "2025",
    description:
      "Designed UI in Figma and built responsive screens using React Native. Integrated PostHog for analytics and user engagement tracking. Explored Docker and CI/CD for scalable app deployment while contributing in Agile sprints.",
    link: "https://www.stupro.info",
  },
  {
    id: 2,
    title: "MERN Stack Web Application",
    year: "2025",
    description:
      "Developed a full-stack web application using the MERN stack and TypeScript (TSX). Built reusable and responsive UI components and integrated Node.js APIs for smooth backend functionality.",
  },
  {
    id: 3,
    title: "Python & AI Internship",
    year: "2025",
    description:
      "Explored Python and basic AI concepts through a project. Worked with data handling, logic building, and backend workflows to strengthen technical foundations.",
  },
];

const Projects: React.FC = () => (
  <section
    id="projects"
    className="py-24 bg-gradient-to-b from-[#f2f7ff] via-[#f9f5ff] to-[#fff6fa]
    dark:from-[#1A1F46] dark:via-[#121732] dark:to-[#0B0E1F] transition-all duration-700"
  >
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center text-[#0D1E4C] dark:text-[#E5C9D7] mb-16">
        Projects & Experience
      </h2>

      <div className="relative border-l-2 border-[#C48CB3]/40 dark:border-[#E5C9D7]/30 ml-6">
        {projectList.map((p, index) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 ml-6"
          >
            <div className="absolute w-4 h-4 bg-[#C48CB3] dark:bg-[#E5C9D7] rounded-full -left-[9px] mt-2 shadow-[0_0_10px_rgba(196,140,179,0.4)]" />
            <h3 className="text-2xl font-semibold text-[#0D1E4C] dark:text-[#E5C9D7]">
              {p.title}
            </h3>
            <p className="text-sm text-[#C48CB3] dark:text-[#E5C9D7]/70 font-medium mt-1 mb-3">
              {p.year}
            </p>
            <p className="text-[#0D1E4C]/80 dark:text-[#E5C9D7]/80 leading-relaxed max-w-3xl">
              {p.description}
            </p>
            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-[#C48CB3] font-medium hover:underline"
              >
                Visit Project →
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
