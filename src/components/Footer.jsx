/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      className="bg-gray-900 text-gray-200 py-10 mt-16 border-t border-gray-700"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* Left Side: About / Intro */}
        <div>
          <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
            Sahejpreet Kaur
          </h3>

          <p className="mt-2 text-gray-400">
            AI & Machine Learning Engineer passionate about building innovative solutions and contributing to the future of technology.
          </p>
        </div>

        {/* Middle: Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-gray-100 mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:text-cyan-400 transition">About</a></li>
            <li><a href="#education" className="hover:text-cyan-400 transition">Education</a></li>
            <li><a href="#skills" className="hover:text-cyan-400 transition">Skills</a></li>
            <li><a href="#projects" className="hover:text-cyan-400 transition">Projects</a></li>
            <li><a href="#experience" className="hover:text-cyan-400 transition">Experience</a></li>
            <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Right Side: Contact */}
        <div>
          <h4 className="text-lg font-semibold text-gray-100 mb-3">Connect With Me</h4>
          <p className="flex items-center gap-2 justify-center md:justify-start text-gray-400">
            <FaEnvelope className="text-gray-400" /> sahejpreetkaur11019@gmail.com
          </p>
          <p className="mt-1 text-gray-400">VIT Bhopal, India</p>
          <div className="flex gap-4 mt-4 justify-center md:justify-start text-2xl">
            <a
              href="https://github.com/yourgithub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-500 transition transform hover:scale-125"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/yourlinkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition transform hover:scale-125"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:sahejpreetkaur11019@gmail.com"
              className="text-gray-400 hover:text-cyan-400 transition transform hover:scale-125"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      
     <div className="max-w-6xl mx-auto px-6 mt-10 border-t border-gray-700 pt-5 text-center text-sm text-gray-500">
  © {new Date().getFullYear()}{" "}
  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-700">
    Sahejpreet Kaur
  </span>
  <br />
  Built with React, TypeScript, and Tailwind CSS
</div>
    </motion.footer>
  );
}
