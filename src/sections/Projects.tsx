import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/project1.png",
      projectName: "Wowlearns",
      projectLink: "https://wowlearns.vercel.app",
      projectDescription:
        "This is a learning progressive web app that have some courses to enroll and have many resources for CS and Engineering Students. Its PWA version is uploaded on playstore.",
      projectTech: [
        "Next.js",
        "Zustand",
        "Tailwind",
        "Firebase",
        "Frammer Motion",
        "Drive/Youtube API",
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "https://wowlearns.vercel.app",
      },
    },
    {
      image: "/project2.png",
      projectName: "Al-Huda Hospital",
      projectLink: "",
      projectDescription:
        "This is a online hospital app made withb PHP apache stack. In this app you can book appoinment with doctor and have video call with him. It has medicine store where all medicines are listed and any patient can buy those medicines. It has features like cart, admin dashboard and many more",
      projectTech: [
        "PHP",
        "PostgreSQL",
        "WebRTC",
        "REST APIs",
        "Tailwind",
        "JQuery",
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "https://youtu.be/c012FPQE3F8",
      },
    },
    {
      image: "/project3.png",
      projectName: "Sparlix",
      projectLink: "https://sparlix.netlify.app",
      projectDescription:
        "I made a Movies Based Single Page web app with TMBD Api. It has infinite scrolling and lets you watch movies by genre. You can also add movies to your favorites list.",
      projectTech: [
        "HTML",
        "CSS",
        "Vanilla JS",
        "Single Page Routing",
        "TMDB API",
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "https://sparlix.netlify.app",
      },
    },
  ];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    {projectExternalLinks.github!=="" && (
                      <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    )}
                    {projectExternalLinks.externalLink!=="" && (
                    <li className="project-info-links-item">
                      <Link
                      target="_blank"
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>)}
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
