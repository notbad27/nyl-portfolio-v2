import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

/* 🔄 Auto Scroll Image Component */
function AutoScrollImage({ src, alt }) {
  const controls = useAnimation();
  const [hovered, setHovered] = useState(false);

  const startScroll = async () => {
    setHovered(true);
    await controls.start({
      y: "-60%",
      transition: { duration: 6, ease: "easeInOut" },
    });
  };

  const stopScroll = async () => {
    setHovered(false);
    await controls.start({
      y: "0%",
      transition: { duration: 2, ease: "easeInOut" },
    });
  };

  return (
    <div
      onMouseEnter={startScroll}
      onMouseLeave={stopScroll}
      className="overflow-hidden w-full h-[420px] rounded-2xl border border-gray-800 hover:border-cyan-400 transition-all duration-500 bg-neutral-900 cursor-pointer"
    >
      <motion.img
        src={src}
        alt={alt}
        animate={controls}
        className="w-full h-auto object-cover"
      />
    </div>
  );
}

/* 🎨 Main Projects Section */
export default function Projects() {
  const projects = [
    {
      title: "Real Estate Automation Dashboard",
      src: "https://cdn.jsdelivr.net/gh/notbad27/nyl-ghl-builds@latest/project1.jpg",
    },
    {
      title: "Lead Capture Funnel Design",
      src: "https://cdn.jsdelivr.net/gh/notbad27/nyl-ghl-builds@latest/project2.jpg",
    },
    {
      title: "AI Appointment Booking System",
      src: "https://cdn.jsdelivr.net/gh/notbad27/nyl-ghl-builds@latest/project3.jpg",
    },
  ];

  return (
    <section
      id="projects"
      className="py-32 px-6 md:px-24 bg-neutral-950 text-gray-100 border-t border-gray-800"
    >
      <div className="text-center mb-16">
        <motion.h4
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="uppercase tracking-widest text-cyan-400 text-sm mb-2"
        >
          Projects I Have Worked On
        </motion.h4>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold"
        >
          My Projects
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <AutoScrollImage src={p.src} alt={p.title} />
            <h3 className="text-xl font-semibold text-center md:text-left">
              {p.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
