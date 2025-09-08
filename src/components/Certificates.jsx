import { certificates } from "../data/content";

export default function Certificates() {
  return (
    <section id="certificates" className="section text-center">
      <h2 className="text-4xl font-extrabold mb-10 text-sky-400">Certificates</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="relative w-full h-56 [perspective:1000px]"
          >
            {/* Hidden checkbox for mobile tap */}
            <input
              type="checkbox"
              id={`flip-${index}`}
              className="peer hidden"
            />

            <label
              htmlFor={`flip-${index}`}
              className="relative w-full h-full block transition-transform duration-700 [transform-style:preserve-3d] 
                        peer-checked:[transform:rotateY(180deg)] hover:[transform:rotateY(180deg)]"
            >
              {/* Front */}
              <div className="absolute w-full h-full flex flex-col justify-center items-center card backface-hidden">
                <img
                  src={`/logos/${cert.logo}`}
                  alt={cert.title}
                  className="w-16 h-16 object-contain mb-4"
                />
                <h3 className="text-lg font-semibold">{cert.title}</h3>
              </div>

              {/* Back */}
              <div className="absolute w-full h-full flex flex-col justify-center items-center bg-gradient-to-br from-sky-900/40 to-sky-800/30 border border-sky-500/20 rounded-xl shadow-xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-sky-500 text-white rounded-md shadow hover:bg-sky-400 transition"
                >
                  View Certificate
                </a>
              </div>
            </label>
          </div>
        ))}
      </div>
    </section>
  );
}
