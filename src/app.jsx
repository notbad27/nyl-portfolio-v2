import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Work from "./components/Work";
import Projects from "./components/Projects";
import SkillCarousel from "./components/SkillCarousel";
import About from "./components/About";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main
      className="
        w-screen 
        min-h-screen 
        bg-neutral-950 
        text-gray-100 
        font-sans 
        overflow-x-hidden 
        relative
      "
    >
      {/* 🌐 Header */}
      <Header />

      {/* 🏠 Hero Section */}
      <section id="home" className="min-h-screen flex flex-col">
        <Hero />
      </section>

      {/* ⚙️ Services */}
      <section id="services" className="min-h-screen flex flex-col justify-center">
        <Services />
      </section>

      {/* 💼 Work */}
      <section id="work" className="min-h-screen flex flex-col justify-center">
        <Work />
      </section>

      {/* 🧩 Projects */}
      <section id="projects" className="min-h-screen flex flex-col justify-center">
        <Projects />
      </section>

      {/* 🌀 Skill Carousel */}
      <section id="skills" className="flex flex-col justify-center">
        <SkillCarousel />
      </section>

      {/* 👤 About */}
      <section id="about" className="min-h-screen flex flex-col justify-center">
        <About />
      </section>

      {/* 💠 Gradient Divider */}
      <div className="mt-20 h-[2px] w-2/3 mx-auto bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      {/* 🦶 Footer */}
      <Footer />
    </main>
  );
}
