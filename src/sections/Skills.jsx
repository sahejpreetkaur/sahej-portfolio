import { skills } from "../data/content";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */
export default function Skills() {
  const categories = [
    {
      title: "Programming",
      icon: "💻",
      items: ["Python", "Java", "C", "JavaScript", "SQL","HTML/CSS","LaTeX"],
    },
    {
      title: "Technologies & Frameworks",
      icon: "📚",
      items: ["MySQL",
        "PyCharm",
        "Jupyter Notebook",
        "Google Colab",
        "Figma",
        "GitHub",
        "WordPress",],
    },
    {
      title: "Machine Learning & AI",
      icon: "⚙️",
      items: ["Machine Learning",
        "Deep Learning",
        "TensorFlow",
        "Scikit-learn",
        "Data Preprocessing",
        "Model Evaluation",],
    },
  ];

  return (
    <motion.section
      id="skills"
      className="section text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Title */}
      <h2 className="text-4xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
        {skills.title}
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px #00f2fe" }}
            className="card flex flex-col items-center p-6 cursor-pointer transition duration-300"
          >
            {/* Icon */}
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 mb-4">
              <span className="text-2xl">{cat.icon}</span>
            </div>

            {/* Category Title */}
            <h3 className="text-xl font-bold text-cyan-400 mb-4">
              {cat.title}
            </h3>

            {/* Skills */}
            <ul className="space-y-2 w-full">
              {cat.items.map((item, i) => (
                <li
                  key={i}
                  className="p-2 rounded-md bg-white/5 border border-white/10 hover:bg-cyan-500/20 hover:text-cyan-300 transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
