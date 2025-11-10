import React from "react";
import { motion } from "framer-motion";
import ProfileCircle from "./ProfileCircle";
import Button from "./Button";

const Hero = () => {
  return (
<section
  id="home"
  className="
    relative overflow-hidden 
    flex flex-col justify-center items-center 
    min-h-[90vh] sm:min-h-screen
    pt-12 sm:pt-20
    bg-gradient-to-b from-[#fff6fa] via-[#f9f5ff] to-[#f2f7ff]
    dark:from-[#0B0E1F] dark:via-[#121732] dark:to-[#1A1F46]
    text-slate-800 dark:text-white font-sans transition-all duration-700
  "
>

  {/* Soft Glow Background */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-[-180px] left-[-150px] w-[550px] h-[550px] bg-pink-400/15 rounded-full blur-[220px]" />
    <div className="absolute bottom-[-180px] right-[-120px] w-[550px] h-[550px] bg-pink-300/20 rounded-full blur-[220px]" />
  </div>

  {/* Main Content */}
  <motion.div
    initial={{ opacity: 0, scale: 0.97 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    className="max-w-5xl mx-auto px-6 text-center relative z-10"
  >
    {/* Intro Line */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex justify-center items-center gap-3 sm:gap-4 mb-10 flex-wrap leading-none"
    >
      <p className="text-[clamp(1rem,2vw,1.25rem)] text-gray-500 dark:text-gray-300 font-medium">
        Hi, I’m
      </p>

      <motion.div
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="relative z-30"
      >
        <ProfileCircle />
      </motion.div>

      <h1 className="font-semibold bg-gradient-to-r from-[#83A6CE] to-[#EC7FAE] bg-clip-text text-transparent text-[clamp(1.5rem,3vw,2.25rem)] sm:text-[clamp(2rem,3vw,2.5rem)]">
        Sakthi Priya S
      </h1>
    </motion.div>

    {/* Title */}
    <motion.h2
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="font-semibold leading-snug sm:leading-[1.35] mb-5 tracking-tight text-primary dark:text-accentLight text-[clamp(1.5rem,3.5vw,2.75rem)] sm:text-[clamp(2rem,3.5vw,3rem)]"
    >
      Frontend Developer passionate about
      <span className="text-[#f472b6] font-semibold block mt-2 mb-7 leading-snug pb-[2px]">
        UI & UX Design
      </span>
    </motion.h2>

    {/* Quote */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.6 }}
      className="max-w-2xl mx-auto mb-10"
    >
      <p className="text-[clamp(0.95rem,1.8vw,1.25rem)] text-primary dark:text-accentLight tracking-wide leading-relaxed">
        Truth roots me. Compassion guides me. Humanity defines me.
      </p>
    </motion.div>

    {/* Buttons */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.9 }}
      className="flex justify-center gap-4 flex-wrap"
    >
      <Button variant="primary" size="sm" href="#projects">
        View My Work
      </Button>
      <Button
        variant="secondary"
        size="sm"
        href="mailto:sakthipriyas736@gmail.com?subject=Portfolio%20Inquiry"
      >
        Get In Touch
      </Button>
    </motion.div>
  </motion.div>

  {/* Signature */}
  <div className="absolute bottom-6 sm:bottom-10 text-gray-400 dark:text-gray-500 text-sm tracking-[0.2em] font-light select-none">
    sakthipriya<span className="text-accent font-semibold">.design</span>
  </div>
</section>

  );
};

export default Hero;
