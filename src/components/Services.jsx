import { motion } from "framer-motion";
import { FaRobot, FaFunnelDollar, FaChartLine, FaWordpressSimple } from "react-icons/fa";
import { RiMailSendFill, RiPagesLine } from "react-icons/ri";
import { MdSpeed, MdOutlineDesignServices } from "react-icons/md";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { TbSeo } from "react-icons/tb";
import { BiMessageRoundedDetail } from "react-icons/bi";

const services = [
  {
    icon: <FaRobot className="text-cyan-400 text-5xl mb-4" />,
    title: "Automation Systems",
    desc: "Custom GoHighLevel automation to streamline lead nurturing, booking, and follow-ups.",
  },
  {
    icon: <FaFunnelDollar className="text-cyan-400 text-5xl mb-4" />,
    title: "Funnel Optimization",
    desc: "Conversion-driven funnel design that boosts performance and reduces friction.",
  },
  {
    icon: <FaChartLine className="text-cyan-400 text-5xl mb-4" />,
    title: "Analytics & Scaling",
    desc: "Dashboard integrations with KPI tracking to visualize and scale your success.",
  },
  {
    icon: <RiMailSendFill className="text-cyan-400 text-5xl mb-4" />,
    title: "Email Marketing",
    desc: "Automated email campaigns and follow-up sequences to convert leads into loyal clients.",
  },
  {
    icon: <MdOutlineDesignServices className="text-cyan-400 text-5xl mb-4" />,
    title: "Web Design & Development",
    desc: "WordPress | Webflow | GHL — Modern, scalable websites tailored for conversions and branding.",
  },
  {
    icon: <HiOutlineDeviceMobile className="text-cyan-400 text-5xl mb-4" />,
    title: "Mobile-First Responsive Design",
    desc: "Optimized layouts that look stunning and perform smoothly on any device.",
  },
  {
    icon: <MdSpeed className="text-cyan-400 text-5xl mb-4" />,
    title: "Speed Optimization",
    desc: "Performance tuning to reduce load times and improve user experience metrics.",
  },
  {
    icon: <TbSeo className="text-cyan-400 text-5xl mb-4" />,
    title: "On-Page SEO",
    desc: "Proper tagging, metadata, and content structure to help your pages rank higher.",
  },
  {
    icon: <BiMessageRoundedDetail className="text-cyan-400 text-5xl mb-4" />,
    title: "Conversion-Focused Copywriting",
    desc: "Persuasive, audience-targeted messaging crafted to turn clicks into clients.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-32 px-6 md:px-24 bg-neutral-950 text-gray-100 border-t border-gray-800"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-bold mb-16 text-center"
      >
        What I Do
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="p-10 bg-neutral-900 rounded-xl border border-gray-800 hover:border-cyan-400 transition"
          >
            <div className="flex flex-col items-center text-center">
              {s.icon}
              <h3 className="text-2xl font-semibold mb-3">{s.title}</h3>
              <p className="text-gray-400">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
