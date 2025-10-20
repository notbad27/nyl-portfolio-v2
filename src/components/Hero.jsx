import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row justify-center items-end px-6 md:px-24 pt-[100px] pb-32 md:pb-40 gap-16"
    >
      {/* 🧍‍♂️ Profile Image — radiant cyan glow */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center w-full md:w-1/2 -mb-8"
      >
        <img
          src="/nyl-profile.png"
          alt="Nyl Dagarag"
          className="w-[480px] sm:w-[550px] md:w-[600px] lg:w-[650px] h-auto object-contain animate-soft-glow transform -translate-y-8"
        />
      </motion.div>

      {/* 💬 Text Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col justify-end w-full md:w-1/2 text-center md:text-left"
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text leading-tight">
          Hi, I’m Nyl — I build automation-driven web experiences.
        </h1>

        <p className="mt-6 text-lg text-gray-400 max-w-xl leading-relaxed mx-auto md:mx-0">
          I specialize in Go High Level automation, modern funnels, and
          interactive web systems that connect design and conversion.
        </p>

        <motion.a
          href="#work"
          whileHover={{ scale: 1.05 }}
          className="mt-10 inline-block bg-white text-neutral-900 px-6 py-3 rounded-md font-medium shadow-lg hover:shadow-cyan-400/30 transition-all duration-300 mx-auto md:mx-0"
        >
          View My Work
        </motion.a>
      </motion.div>
    </section>
  );
}
