import { projects } from "../data/content";

export default function Projects() {
  return (
    <section id="projects" className="section text-center">
      <h2 className="text-4xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.list.map((proj, index) => (
          <div
            key={index}
            className="card text-left relative hover:shadow-cyan-500/30 hover:shadow-lg transition duration-300"
          >
            {/* Project Title */}
            <h3 className="text-2xl font-bold mb-3 text-cyan-400">
              {proj.name}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-200 mb-4 leading-relaxed">
              {proj.description}
            </p>

            {/* Technologies Used */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-sky-300 mb-2">
                Technologies Used:
              </h4>
              <div className="flex flex-wrap gap-2">
                {proj.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-white/20 border border-white/30 text-sky-300 shadow hover:shadow-cyan-400/60 transition duration-300 cursor-pointer"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Buttons (optional) */}
            <div className="flex gap-3">
              {proj.github && (
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm font-medium rounded-lg bg-sky-500 text-white hover:bg-sky-400 transition"
                >
                  View Code
                </a>
              )}
              {proj.demo && (
                <a
                  href={proj.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm font-medium rounded-lg bg-purple-500 text-white hover:bg-purple-400 transition"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
