import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

export default function HireMeModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="relative bg-neutral-900 border border-cyan-400/30 rounded-2xl p-8 shadow-[0_0_25px_rgba(34,211,238,0.3)] w-[90%] max-w-lg text-gray-100"
          >
            {/* X Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-cyan-400 transition-all"
            >
              <FaTimes size={20} />
            </button>

            <h2 className="text-2xl md:text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Are You Planning A Project You’d Like To Discuss?
            </h2>

            <p className="text-center text-gray-400 mt-2 mb-6">
              I’d love to hear from you! Let’s build something amazing.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Form submitted! Connect this to your GHL webhook later.");
                onClose();
              }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full p-3 rounded-md border border-cyan-400 bg-neutral-800 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
                <input
                  type="email"
                  placeholder="example@email.com"
                  required
                  className="w-full p-3 rounded-md border border-cyan-400 bg-neutral-800 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              <input
                type="text"
                placeholder="Your Message Subject"
                required
                className="w-full p-3 rounded-md border border-cyan-400 bg-neutral-800 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />

              <textarea
                placeholder="Your Message Here"
                rows={4}
                required
                className="w-full p-3 rounded-md border border-cyan-400 bg-neutral-800 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              ></textarea>

              <button
                type="submit"
                className="w-full mt-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-neutral-900 font-semibold py-3 rounded-md shadow-md hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
