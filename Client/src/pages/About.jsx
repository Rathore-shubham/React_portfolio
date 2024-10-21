import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import ServiceCard from "../components/serviceCard";
import { services } from "../constants";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-slate-00 text-[17px] max-w-3xl leading-[30px]"
      >
        I am a full stack developer skilled in React, Node.js, Express, and GSAP, specializing in building dynamic and responsive web applications with smooth animations and seamless interactivity across the frontend and backend.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-items-center items-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
