import Link from "next/link";
import React from "react";
import {
  FiGithub,
  FiInstagram,
  FiYoutube,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
import { SiLeetcode} from 'react-icons/si'

function Footer() {
  const socialLinks = [
    { name: "Github", icon: <FiGithub />, link: "https://www.github.com/awaisoem" },
    {
      name: "Leetcode",
      icon: <SiLeetcode />,
      link: "https://www.leetcode.com/awaisoem/",
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      link: "https://www.linkedin.com/in/awaisoem/",
    },
    {
      name: "Youtube",
      icon: <FiYoutube />,
      link: "https://www.youtube.com/@wowlearns/",
    },
    {
      name: "Instagram",
      icon: <FiInstagram />,
      link: "https://instagram.com/awaisoem",
    },
    {
      name: "Twitter",
      icon: <FiTwitter />,
      link: "https://twitter.com/awaisoem",
    },
  ];
  return (
    <footer style={{display : 'flex' , flexDirection : "column" , alignItems : "center"}}>
      <ul style={{width : "300px" , display : 'flex' , justifyContent  :"space-around"}}>
        {socialLinks.map(({name , icon , link})=>
          (<li key={name} title={name} className="social-icons-footer-list-item">
            <Link
              href={link}
              className="social-icons-footer-list-item-link"
              target="_blank"
              >
              {icon}
            </Link>
          </li>))}
      </ul>
      {/* <Link
        href="https://github.com/awaisoem"
        target="_blank"
        className="footer-link"
      >
        <span className="footer-info">Built by Awais Oem.</span>
      </Link> */}
    </footer>
  );
}

export default Footer;
