/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */
import { experience } from "../data/content";

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="section text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Heading with same gradient as Projects */}
      <h2 className="text-4xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
        {experience.title}
      </h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Dark glowing timeline line */}
        <div className="absolute left-6 top-0 w-1 h-full bg-gray-700 rounded-full shadow-[0_0_15px_#00f2fe]"></div>

        <div className="space-y-10">
          {experience.list.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative flex items-start gap-6"
            >
              {/* Logo */}
<div className="relative z-10 flex-shrink-0 w-20 h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shadow-lg">
  <img
    src={`/logos/${exp.logo}`}
    alt={exp.org}
    className="w-14 h-14 object-contain"
  />
</div>


              {/* Card */}
              <div className="card text-left flex-1 hover:shadow-cyan-500/30 transition">
                <h3 className="text-xl font-bold text-cyan-400">
                  {exp.name}
                </h3>
                <p className="text-sm text-gray-300 font-semibold mb-1">
                  {exp.role} @ {exp.org}
                </p>
                <p className="text-xs text-gray-400 mb-3">{exp.year}</p>
                <p className="text-sm text-gray-200 leading-relaxed mb-4">
                  {exp.desc}
                </p>

                {/* Skills */}
                {exp.skills && exp.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/20 text-sky-300 hover:shadow-[0_0_10px_#00f2fe] transition"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
