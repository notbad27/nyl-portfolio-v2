import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaUpwork } from "react-icons/fa";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Message sent! (You can connect this form to your GoHighLevel webhook later.)");
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-24 bg-neutral-950 text-gray-100 border-t border-gray-800"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <p className="uppercase tracking-widest text-cyan-400 font-semibold mb-2">
          Contact Me
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Are You Planning A Project You’d Like To Discuss?
        </h2>
        <p className="text-gray-400 mt-2">
          I’d love to hear from you! Let’s create something amazing together.
        </p>
      </div>

      {/* Layout Grid */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left - Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 bg-neutral-900 p-8 rounded-2xl border border-cyan-400/30 shadow-[0_0_25px_rgba(34,211,238,0.1)]"
        >
          <h3 className="text-lg font-semibold text-cyan-400 mb-4">
            Drop Me A Line Below:
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
            rows={5}
            required
            className="w-full p-3 rounded-md border border-cyan-400 bg-neutral-800 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-neutral-900 font-semibold py-3 rounded-md shadow-md hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all duration-300"
          >
            Send Message
          </button>
        </motion.form>

        {/* Right - Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center bg-neutral-900 p-8 rounded-2xl border border-cyan-400/30 shadow-[0_0_25px_rgba(34,211,238,0.1)]"
        >
          <h3 className="text-lg font-semibold text-cyan-400 mb-4">
            Find Me Online
          </h3>

          <ul className="space-y-4 text-gray-300 text-sm">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-cyan-400" />
              <span>nyl.dagarag@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-cyan-400" />
              <span>+63 912 345 6789</span>
            </li>
            <li className="flex items-center gap-3">
              <FaUpwork className="text-cyan-400" />
              <span>upwork.com/freelancers/nyldagarag</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
