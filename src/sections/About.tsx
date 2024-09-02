import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">

          Welcome to my portfolio! I’m Muhammad Awais Raza, a full-stack developer with expertise in web and app development, generative AI, and system design. I specialize in creating innovative solutions that are tailored to meet the unique needs of each project.

          </p>
          <p className="about-grid-info-text">
          I am passionate about technology and dedicated to delivering quality results. From building robust web apps and cross-platform mobile applications to developing advanced AI solutions and optimizing infrastructures, I’m here to help you achieve your goals efficiently and effectively.
          </p>
          <p className="about-grid-info-text">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">React Native</li>
            <li className="about-grid-info-list-item">Flutter</li>
            <li className="about-grid-info-list-item">AI LLMs</li>
            <li className="about-grid-info-list-item">PostgreSQL</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">Flask</li>
            <li className="about-grid-info-list-item">Socket IO</li>
            <li className="about-grid-info-list-item">WebRTC</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src={"https://raw.githubusercontent.com/AwaisOem/AwaisOem/f74d0eaf8eb294819fd2c64b08d223a3913134b9/portfolio-picture-link.jpg"} alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
