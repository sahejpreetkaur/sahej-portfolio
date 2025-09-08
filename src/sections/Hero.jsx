/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */

import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="section text-center pt-32 md:pt-36" // extra padding for fixed navbar
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent leading-tight pb-2">
        Sahejpreet Kaur
      </h1>

      <h2 className="text-xl text-gray-300 mb-6">
        <Typewriter
          words={[
            "AI/ML Engineer",
            "Software Developer",
            "Data-Driven Problem Solver",
            "Building Futuristic Solutions 🚀",
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={60}
          deleteSpeed={40}
          delaySpeed={1500}
        />
      </h2>

      <div className="flex justify-center gap-4">
        <a href="/resume.pdf" className="btn-primary px-6 py-2 rounded-lg">
          Resume
        </a>
        <a
          href="https://github.com/sahejpreetkaur"
          className="btn-ghost px-6 py-2 rounded-lg"
        >
          GitHub
        </a>
      </div>
    </motion.section>
  );
}
