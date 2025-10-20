import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row justify-center items-center px-6 md:px-24 text-center md:text-left gap-10"
    >
      {/* ✅ Profile Image (CDN absolute URL) */}
      <motion.img
        src="https://cdn.jsdelivr.net/gh/notbad27/nyl-ghl-builds@latest/nyl-profile.jpg"
        alt="Nyl Dagarag"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-[650px] h-[561px] object-cover rounded-full border-4 border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.4)]"
      />

      {/* Text Section */}
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text"
        >
          Hi, I’m Nyl — I build automation-driven web experiences.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-6 max-w-2xl text-lg text-gray-400"
        >
          I specialize in Go High Level automation, modern funnels, and
          interactive web systems that connect design and conversion.
        </motion.p>

        <motion.a
          href="#work"
          whileHover={{ scale: 1.05 }}
          className="mt-10 inline-block bg-white text-neutral-900 px-6 py-3 rounded-md font-medium"
        >
          View My Work
        </motion.a>
      </div>
    </section>
  );
}
