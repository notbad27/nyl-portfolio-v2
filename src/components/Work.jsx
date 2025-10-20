import { motion } from "framer-motion";

const projects = [
  {
    title: "Automation Funnel Builder",
    description: "End-to-end funnel automation using GoHighLevel and React for real-time user flow tracking.",
    link: "#",
  },
  {
    title: "AI Appointment Scheduler",
    description: "Smart AI-driven appointment system integrated with Google Calendar and Twilio.",
    link: "#",
  },
  {
    title: "Conversion Dashboard",
    description: "Analytics dashboard with live conversion metrics and CRM integration.",
    link: "#",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-32 px-6 md:px-24 bg-neutral-950 text-gray-100">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-bold mb-16"
      >
        Selected Work
      </motion.h2>

      <div className="grid gap-12 md:gap-16">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="group border-b border-gray-800 pb-8 cursor-pointer"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-100 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="mt-4 text-gray-400 max-w-2xl">{project.description}</p>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
