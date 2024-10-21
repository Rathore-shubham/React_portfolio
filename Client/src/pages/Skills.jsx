import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const SkillsPage = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const skills = skillsRef.current.children;

    // Apply scrub opacity animation to each skill item
    gsap.fromTo(
      skills,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 80%", // Animation starts when the top of the skills section reaches 80% of the viewport
          end: "bottom 20%", // Animation ends when the bottom of the skills section reaches 20% of the viewport
          scrub: true, // Smooth scrubbing as the user scrolls
        },
      }
    );
  }, []);

  return (
    <div className="skills-page py-10 bg-[#161313] text-center">
      <h2 className="skills-heading text-4xl font-bold mb-10 text-white">
        My Skills
      </h2>
      <div
        className="skills-list flex flex-wrap justify-center gap-6"
        ref={skillsRef}
      >
        <div className="skill-item text-lg font-medium px-6 py-3 border-2 border-gray-300 rounded-lg shadow-lg bg-[#161313] hover:bg-zinc-900 transition transform hover:scale-105">
          Python
        </div>
        <div className="skill-item text-lg font-medium px-6 py-3 border-2 border-gray-300 rounded-lg shadow-lg bg-[#161313] hover:bg-zinc-900 transition transform hover:scale-105">
          HTML
        </div>
        <div className="skill-item text-lg font-medium px-6 py-3 border-2 border-gray-300 rounded-lg shadow-lg bg-[#161313] hover:bg-zinc-900 transition transform hover:scale-105">
          CSS
        </div>
        <div className="skill-item text-lg font-medium px-6 py-3 border-2 border-gray-300 rounded-lg shadow-lg bg-[#161313] hover:bg-zinc-900 transition transform hover:scale-105">
          React
        </div>
        <div className="skill-item text-lg font-medium px-6 py-3 border-2 border-gray-300 rounded-lg shadow-lg bg-[#161313] hover:bg-zinc-900 transition transform hover:scale-105">
          Node.js
        </div>
        <div className="skill-item text-lg font-medium px-6 py-3 border-2 border-gray-300 rounded-lg shadow-lg bg-[#161313] hover:bg-zinc-900 transition transform hover:scale-105">
          Express
        </div>
        <div className="skill-item text-lg font-medium px-6 py-3 border-2 border-gray-300 rounded-lg shadow-lg bg-[#161313] hover:bg-zinc-900 transition transform hover:scale-105">
          MongoDB
        </div>
        <div className="skill-item text-lg font-medium px-6 py-3 border-2 border-gray-300 rounded-lg shadow-lg bg-[#161313] hover:bg-zinc-900 transition transform hover:scale-105">
          Tailwind CSS
        </div>
        <div className="skill-item text-lg font-medium px-6 py-3 border-2 border-gray-300 rounded-lg shadow-lg bg-[#161313] hover:bg-zinc-900 transition transform hover:scale-105">
          JavaScript
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
