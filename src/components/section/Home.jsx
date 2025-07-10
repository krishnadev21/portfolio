import { RevealOnScroll } from "../RevealOnScroll";

import { SiIndeed } from "react-icons/si";
import { TbBrandLeetcode } from "react-icons/tb";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaArrowDown,
} from "react-icons/fa6";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">
            Hi, I'm Krishna
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I'm a full-stack developer who loves crafting clean, scalable web
            applications. My goal is to build solutions that offer both
            exceptional performance and a delightful user experience.
          </p>

          {/* Projects & Contact */}
          <div className="flex justify-center space-x-4 mb-8">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded-full font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded-full font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
            >
              Contact
            </a>
          </div>

          <div className="flex justify-center space-x-6 flex-wrap">
            <a
              href="https://www.linkedin.com/in/krishnadev21/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={30}
                className="text-blue-600 hover:text-blue-700"
              />
            </a>
            <a
              href="https://profile.indeed.com/?hl=en_IN&co=IN&from=gnav-homepage"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiIndeed
                size={30}
                className="text-blue-500 hover:text-blue-600"
              />
            </a>
            <a
              href="https://github.com/krishnadev21"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} className="text-white hover:text-gray-500" />
            </a>
            <a
              href="https://leetcode.com/u/Krishnadev21/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TbBrandLeetcode
                size={30}
                className="text-orange-500 hover:text-orange-600"
              />
            </a>
            <a
              href="https://www.instagram.com/krishhvox/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size={30}
                className="text-pink-600 hover:text-pink-700"
              />
            </a>
          </div>
        </div>
      </RevealOnScroll>
      {/* Animated Bounce Arrow - Outside RevealOnScroll but inside section */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <FaArrowDown
          className="text-blue-400 border rounded-full p-1 animate-bounce h-8 w-8"
          aria-hidden="true"
        />
      </div>
    </section>
  );
};
