import { FaGithub } from "react-icons/fa";
import { RevealOnScroll } from "../RevealOnScroll";

export const Project = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex justify-center items-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* NexChat */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                NexChat – Instant Message Redefined
              </h3>
              <p className="text-gray-400 mb-3">
                A secure, high-performance chat app inspired by WhatsApp &
                Telegram with seamless text, media sharing, and group
                conversations using modern web technologies.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "Django", "JavaScript", "TailwindCSS", "MySQL"].map(
                  (tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.1) transition-all"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="">
                <a
                  href="https://github.com/krishnadev21/NexChat"
                  target="_blank"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  view project &#8594;{" "}
                  <FaGithub size={20} className="text-white" />
                </a>
              </div>
            </div>

            {/* LinkUp */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                LinkUp – Redefining Social Networking
              </h3>
              <p className="text-gray-400 mb-3">
                Built a scalable social media app with real-time posts, stories,
                and community engagement.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "Django", "JavaScript", "TailwindCSS", "MySQL"].map(
                  (tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.1) transition-all"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="">
                <a
                  href="https://github.com/krishnadev21/LinkUp"
                  target="_blank"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  view project &#8594;{" "}
                  <FaGithub size={20} className="text-white" />
                </a>
              </div>
            </div>

            {/* Quillora */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                Quillora – Modern Blogging Platforma
              </h3>
              <p className="text-gray-400 mb-3">
                Developed a full-stack blogging platform where users can
                publish, discover, and engage with long-form content.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "Django", "DRF", "MySQL", "JWT"].map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.1) transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="">
                <a
                  href="https://github.com/krishnadev21/Quillora"
                  target="_blank"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  view project &#8594;{" "}
                  <FaGithub size={20} className="text-white" />
                </a>
              </div>
            </div>

            {/* StudyBud */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                StudBud – A Collaborative Learning Platform
              </h3>
              <p className="text-gray-400 mb-3">
                Developed a Discord-like study application where users can
                create and join topic-specific rooms for focused discussions,
                group study sessions, and academic collaboration.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "Django", "HTML", "CSS", "MySQL"].map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.1) transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="">
                <a
                  href="https://github.com/krishnadev21/StudyBud"
                  target="_blank"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  view project &#8594;{" "}
                  <FaGithub size={20} className="text-white" />
                </a>
              </div>
            </div>

            {/* ShopKart */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                ShopKart – Full-Featured E-Commerce Platform
              </h3>
              <p className="text-gray-400 mb-3">
                Implemented a responsive e-commerce web app with product
                listings, cart management, secure checkout, and user
                authentication.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "Django", "JavaScript", "HTML", "CSS", "MySQL"].map(
                  (tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.1) transition-all"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="">
                <a
                  href="https://github.com/krishnadev21/Shopkart"
                  target="_blank"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  view project &#8594;{" "}
                  <FaGithub size={20} className="text-white" />
                </a>
              </div>
            </div>

            {/* Youtube Clone */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Youtube Clone</h3>
              <p className="text-gray-400 mb-3">
                Developed a feature-rich YouTube clone supporting video uploads,
                streaming, and community engagement with modern web
                technologies.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "JavaScript"].map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.1) transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="">
                <a
                  href="https://github.com/krishnadev21/YouTube-Clone"
                  target="_blank"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  view project &#8594;{" "}
                  <FaGithub size={20} className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
