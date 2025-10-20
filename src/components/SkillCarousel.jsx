import React from "react";

const skills = [
  { name: "Wix", logo: "/logos/wix.png" },
  { name: "WordPress", logo: "/logos/wordpress.png" },
  { name: "Canva", logo: "/logos/canva-new.png" },
  { name: "Figma", logo: "/logos/figma.png" },
  { name: "Bootstrap", logo: "/logos/bootstrap.png" },
  { name: "Vercel", logo: "/logos/vercel.png" },
  { name: "Shopify", logo: "/logos/shopify.png" },
  { name: "GoHighLevel", logo: "/logos/ghl.png" },
  { name: "Vue", logo: "/logos/vue.png" },
  { name: "CSS", logo: "/logos/css.png" },
  { name: "HTML", logo: "/logos/html.png" },
];

export default function SkillCarousel() {
  return (
    <section className="w-full py-12 bg-gradient-to-b from-gray-950 to-gray-900 overflow-hidden">
      {/* Subheadline */}
      <p className="text-center text-sm uppercase tracking-[4px] text-cyan-300 mb-2">
        My Advantages
      </p>
      {/* Main headline */}
      <h2 className="text-center text-2xl font-semibold text-cyan-400 mb-8">
        Just a few of the platforms I work on
      </h2>

      <div className="relative w-full h-[330px] overflow-hidden">
        <div className="flex animate-infinite-scroll whitespace-nowrap">
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-12 min-w-[130px]"
            >
              <div className="w-24 h-24 flex items-center justify-center bg-transparent">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="max-w-[70%] max-h-[70%] object-contain opacity-90 animate-glow transition-all duration-500 hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
