import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { styles } from "../styles";

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = (props) => {
  const { image, live, source, title, description, tags } = props;
  const cardRef = useRef(null); // Ref to the card element

  useEffect(() => {
    const card = cardRef.current;

    gsap.fromTo(
      card,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          scrub: true,
          toggleActions: "play none none reverse", // Play on enter, reverse on leave
        },
      }
    );
  }, []);

  return (
    <div
      ref={cardRef} // Assign the ref to the card div
      className="w-full flex flex-col gap-4 p-5 rounded-2xl project-card sm:flex-row sm:gap-8 mt-5"
    >
      <div className="w-full sm:w-2/5">
        <img
          src={image}
          alt="project image"
          className="max-w-full h-auto project-img"
        />
      </div>
      <div className="w-full sm:w-3/5 flex flex-col justify-center">
        <h2
          className={`${styles.sectionSubText} text-[20px] font-bold text-center`}
        >
          {title}
        </h2>
        <div className="mt-1 flex flex-wrap gap-2 justify-center">
          {tags.map((tag) => (
            <button
              key={`${title}-${tag.name}`} // Changed from `name` to `title`
              className={`text-[16px] ${tag.color}`}
            >
              #{tag.name}
            </button>
          ))}
        </div>
        <p className="text-white">{description}</p>
        <div className="flex flex-wrap mt-3 gap-2 justify-center">
          <button
            onClick={() => window.open(live, "_blank")}
            className="tag text-white font-bold py-2 px-4 rounded"
          >
            Live Version
          </button>
          <button
            onClick={() => window.open(source, "_blank")}
            className="tag text-white font-bold py-2 px-4 rounded"
          >
            Source
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
