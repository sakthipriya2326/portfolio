import React from "react";
import { motion } from "framer-motion";
import { Code, Lightbulb, User, Sparkles } from "lucide-react";

const About: React.FC = () => {
  const skills = {
    tech: [
      "React",
      "React Native",
      "Figma",
      "Tailwind CSS",
      "JavaScript",
      "UI/UX Design",
      "Git & GitHub",
    ],
    soft: [
      "Creativity",
      "Adaptability",
      "Time Management",
      "Collaboration",
      "Communication",
    ],
  };

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-[#fff6fa] via-[#f9f5ff] to-[#f2f7ff]
      dark:from-[#0B0E1F] dark:via-[#121732] dark:to-[#1A1F46] transition-all duration-700"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#f472b6] to-[#c48cb3] bg-clip-text text-transparent mb-2">
            About Me
          </h2>
          <p className="text-[#0D1E4C]/70 dark:text-[#EDEBFF]/70 text-lg">
            A quick look at who I am and what I create ✨
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {[
            {
              icon: <User className="w-6 h-6 text-[#f472b6]" />,
              title: "Who I Am",
              text: (
                <>
                  I'm{" "}
                  <span className="font-semibold text-[#f472b6]">
                    Sakthi Priya S
                  </span>
                  , a creative Frontend Developer and UI/UX enthusiast passionate
                  about designing intuitive and elegant digital experiences. I
                  love combining{" "}
                  <span className="font-medium text-[#c48cb3]">
                    creativity and logic
                  </span>{" "}
                  to craft meaningful interfaces that connect users with
                  technology beautifully.
                </>
              ),
            },
            {
              icon: <Lightbulb className="w-6 h-6 text-[#f472b6]" />,
              title: "Inspirations",
              text: (
                <>
                  I’m inspired by minimalist design and creators who use
                  technology to make a real difference. I believe great design
                  should not just look good — it should feel effortless,
                  empathetic, and human-centered.
                </>
              ),
            },
            {
              icon: <Code className="w-6 h-6 text-[#f472b6]" />,
              title: "Tech Skills",
              text: (
                <div className="flex flex-wrap gap-3 mt-4">
                  {skills.tech.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-[#f472b6]/10 dark:bg-[#1f1b3d]
                      text-[#0D1E4C] dark:text-[#EDEBFF] rounded-full text-sm font-medium
                      shadow-sm hover:scale-105 transition-transform"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              ),
            },
            {
              icon: <Sparkles className="w-6 h-6 text-[#f472b6]" />,
              title: "Soft Skills",
              text: (
                <div className="flex flex-wrap gap-3 mt-4">
                  {skills.soft.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-[#f472b6]/10 dark:bg-[#1f1b3d]
                      text-[#0D1E4C] dark:text-[#EDEBFF] rounded-full text-sm font-medium
                      shadow-sm hover:scale-105 transition-transform"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              ),
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-2xl bg-white/60 dark:bg-[#13173A]/70
              border border-[rgba(244,114,182,0.3)] shadow-[0_0_30px_-10px_rgba(244,114,182,0.2)]
              backdrop-blur-md transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                {item.icon}
                <h3 className="text-xl font-semibold text-[#0D1E4C] dark:text-[#EDEBFF]">
                  {item.title}
                </h3>
              </div>
              <p className="text-[#0D1E4C]/80 dark:text-[#EDEBFF]/80 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
