import { about } from "../data/content";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */

export default function About() {
  return (
    <motion.section
      id="about"
      className="section pt-28 grid md:grid-cols-2 items-center gap-8" // pt-28 ensures content starts below navbar
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Profile Image */}
      <div className="flex justify-center">
        <img
          src={about.image}
          alt="Profile"
          className="w-60 h-60 object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Text Content */}
      <div>
        {/* Heading */}
        <div className="md:col-span-2 text-center mb-6">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
            {about.title}
          </h2>
        </div>

        {/* Description Paragraphs */}
        {about.description.split("\n").map((para, index) => (
          <p key={index} className="text-white/80 mb-3 leading-relaxed">
            {para}
          </p>
        ))}
      </div>
    </motion.section>
  );
}
