import React from "react";
import { motion } from "framer-motion";
import ProfileCircle from "./ProfileCircle";
import Button from "./Button";

const TypedText = ({ words, baseText }: { words: string[]; baseText: string }) => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % words.length), 2500);
    return () => clearInterval(timer);
  }, [words.length]);

  return (
    <span className="inline-flex items-center mt-2 md:mt-0">
      <span className="text-slate-400 dark:text-slate-500 mr-2">{baseText}</span>
      <motion.span
        key={words[index]}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
        className="font-extrabold text-[#0D1E4C]"
      >
        {words[index]}
      </motion.span>
    </span>
  );
};

const Hero = () => {
  const animatedWords = [
    "building great UI.",
    "solving user problems.",
    "creating delightful UX.",
    "bridging design & code."
  ];

  return (
    <section
      className="relative overflow-hidden min-h-screen flex flex-col justify-center items-center 
      bg-gradient-to-br from-[#E5C9D7]/30 to-[#83A6CE]/20 
      dark:from-[#0D1E4C]/40 dark:to-[#C48CB3]/30"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Fade-in animation for hero text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight inline-flex items-center justify-center flex-wrap">
            <span className="text-[#0D1E4C] dark:text-[#E5C9D7]">Hi, I'm</span>

            {/* Floating profile circle animation */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mx-2"
            >
              <ProfileCircle />
            </motion.div>

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C48CB3] to-[#83A6CE] ml-3 font-extrabold">
              Sakthi Priya S!
            </span>
          </h1>

          <h2 className="text-2xl md:text-4xl font-semibold text-[#0D1E4C] dark:text-[#E5C9D7] mt-4">
            A Frontend Developer <span className="text-slate-500 dark:text-slate-400">focused on</span>
          </h2>

          <TypedText words={animatedWords} baseText="and passionate about" />
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mt-10 flex justify-center gap-4 flex-wrap"
        >
          <Button variant="primary" size="sm" href="#projects">
            View Projects
          </Button>

          <Button
            variant="secondary"
            size="sm"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sakthipriyas736@gmail.com&su=Portfolio%20Inquiry"
            target="_blank"
          >
            Contact Me
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
