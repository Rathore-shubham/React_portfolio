import React, { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaAngellist, FaInstagram } from "react-icons/fa";
import { styles } from "../styles";
import { motion } from "framer-motion";
import "../index.css";
import House from "../canvas/img";

const Home = () => {
  const [active, setActive] = useState("");
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className="w-11/12 mt-10 mr-4 lg:pt-0 pt-20 md:mb-40 mb-20 mx-auto md:grid md:grid-cols-2 lg:w-10/12 z-0 flex items-center flex-col-reverse">
        <div className="flex flex-col justify-center">
          <h4 className={`${styles.sectionSubText}`}>Hi, I am</h4>
          <h1 className={`${styles.heroHeadText} heading`}>Shubham Rathore</h1>
          <p className={`${styles.heroSubText} mt-1 text-stone-950`}>
            <span className="text-white">Full Stack Developer... </span> 
          </p>
          <ul className="list-none flex flex-row mt-4 gap-5 sm:flex">
            <li>
              <a
                target="_blank"
                href=" https://www.linkedin.com/in/shubham-rathore-380788290/"
                className="text-xl mt-1"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://github.com/Rathore-shubham"
                className="text-xl mt-1"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.instagram.com/_shubham._.17_?igsh=ZjluaWMwdDE4MzNz"
                className="text-xl mt-1"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
           
          </ul>
        </div>
        <div className="lg:h-[600px] md:h-[400px] h-[400px]  w-full flex items-center justify-center ">
          <House />
        </div>
      </div>
      
      <div className="absolute xs:bottom-10 bottom-[1rem] w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[30px] h-[50px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Home;
