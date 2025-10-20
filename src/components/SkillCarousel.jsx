import React from "react";

const skills = [
  { name: "Wix", logo: "/logos/wix-new.png" },
  { name: "WordPress", logo: "/logos/wordpress-new.png" },
  { name: "Canva", logo: "/logos/canva-new.png" },
  { name: "Figma", logo: "/logos/figma-new.png" },
  { name: "Bootstrap", logo: "/logos/bootstrap-new.png" },
  { name: "Vercel", logo: "/logos/vercel-new.png" },
  { name: "Shopify", logo: "/logos/shopify-new.png" },
  { name: "GoHighLevel", logo: "/logos/ghl-new.png" },
  { name: "Vue", logo: "/logos/vue-new.png" },
  { name: "CSS", logo: "/logos/css-new.png" },
  { name: "HTML", logo: "/logos/html-new.png" },
];

export default function SkillCarousel() {
  return (
    <section
      id="skills"
      className="w-full py-12 bg-gradient-to-b from-gray-950 to-gray-900 overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Subheadline */}
      <p className="text-center text-sm uppercase tracking-[4px] text-cyan-300 mb-2">
        My Advantages
      </p>

      {/* Main headline */}
      <h2 className="text-center text-2xl font-semibold text-cyan-400 mb-8">
        Just a few of the platforms I work on
      </h2>

      {/* Carousel */}
      <div className="relative w-full h-[330px] overflow-hidden flex items-center justify-center">
        <div className="flex animate-scroll whitespace-nowrap">
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-10 min-w-[130px]"
            >
              <div className="w-28 h-28 flex items-center justify-center">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-[70%] h-[70%] object-contain animate-glow opacity-90 hover:opacity-100 transition-all duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
