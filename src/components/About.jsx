import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-24 bg-neutral-950 text-gray-100 border-t border-gray-800">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-bold mb-10"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl"
      >
        I'm <span className="text-cyan-400 font-medium">Nyl</span>, a creative automation engineer and web developer 
        passionate about building high-performance digital systems.  
        I mix design, conversion strategy, and automation to help businesses scale with GoHighLevel and modern front-end stacks.
      </motion.p>
    </section>
  );
}
