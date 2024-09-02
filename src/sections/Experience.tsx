import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const expereinces = [
    {
      "name": "Web Development",
      "title": "I will Build Web Apps According to Your Requirements",
      "shortDescription": [
        "Experienced in working with JavaScript frameworks, including Next.js.",
        "If you're unsure about the best tech stack for your requirements, I'll provide a robust, cost-effective solution and guide you from start to finish.",
        "Services include APIs, Authentication, Database Integrations, Real-time Services with Sockets and WebRTC, and various architectures like MVC and microservices.",
        "Proficient in Node.js, Express.js, Next.js, REST APIs, PHP, FastAPI, Socket.io, WebRTC, and more.",
        "For desktop applications, I can build solutions for Windows, macOS, and Linux using Electron.js.",
        "Available for equity-based solutions and co-founder opportunities for new startups. Feel free to discuss your ideas."
      ]
    },
    {
      "name": "Apps",
      "title": "I Will Build Android and Cross-Platform Apps",
      "shortDescription": [
        "Experienced in React Native and Flutter for cross-platform app development.",
        "I will provide quality, cost-effective solutions tailored to your needs.",
        "Open to equity-based solutions and co-founder roles for new startups. Let's discuss your ideas!"
      ]
    },
    {
      "name": "AI / ML",
      "title": "I Will Create Innovative Generative AI Solutions for Your Needs",
      "shortDescription": [
        "Specializing in developing and implementing generative AI applications, including text generation, image synthesis, and more.",
        "Expertise in utilizing advanced AI models and LLMs to create customized solutions that enhance user experience and drive innovation.",
        "I offer end-to-end solutions from model training and fine-tuning to deployment and integration into your existing systems.",
        "Available for equity-based solutions and collaborative opportunities for pioneering AI-driven projects. Let's bring your ideas to life!"
      ]
    },
    {
      "name": "System Design",
      "title": "I Will Plan, Manage, and Create Your System's Infrastructure",
      "shortDescription": [
        "Offering comprehensive planning and design of infrastructure and database schemas for complex problems.",
        "Services include managing, normalizing, and resolving redundancy issues in your databases."
      ]
    },
    {
      "name": "Custom Solutions",
      "title": "I Offer Solutions for Programming Challenges and Beyond",
      "shortDescription": [
        "Discuss your problem with me, and I'll provide effective and tailored solutions.",
        "Expertise in solving algorithmic problems and offering consultancy for better solutions and implementation possibilities.",
        "Committed to delivering quality and cost-effective solutions for your unique challenges."
      ]
    }
  ]
  
  return (
    <motion.div
      className="experience"
      id="services"
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
        <h2>What Services I Offer</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={expereince.name}
              >
                <span>{expereince.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].title}</span>
            </h3>
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
