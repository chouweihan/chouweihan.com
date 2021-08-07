import React from "react";
import { socialLinks } from "../data/linksData";
import { links } from "../data/linksData";

const SocialLinks = () => {
  return (
    <ul className="social-links">
      {socialLinks.map((link) => {
        return (
          <li key={link.id}>
            <a
              href={link.url}
              className="icon-link fa-fw"
              target="_blank"
              rel="noreferrer"
            >
              {link.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLinks;
