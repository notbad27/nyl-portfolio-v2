import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-neutral-950 text-gray-400 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-6">
        {/* Left - Copyright */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold text-cyan-400">
            © {new Date().getFullYear()} Nyl Dagarag
          </h4>
          <p className="text-sm text-gray-500">
            Built with ❤️ using React, Tailwind, and Framer Motion
          </p>
        </div>

        {/* Right - Social Icons */}
        <div className="flex gap-5 text-xl">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-cyan-400 hover:scale-110 transition-transform duration-200"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-cyan-400 hover:scale-110 transition-transform duration-200"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-cyan-400 hover:scale-110 transition-transform duration-200"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-cyan-400 hover:scale-110 transition-transform duration-200"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Bottom Glow Line */}
      <div className="mt-10 h-[2px] w-3/4 mx-auto bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-40 rounded-full" />
    </footer>
  );
}
