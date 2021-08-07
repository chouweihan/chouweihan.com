import React from "react";
import { socialLinks } from "../data/linksData";
import styled from "styled-components";

const SocialLinks = ({ hero }) => {
  return (
    <SLWrapper className="social-links">
      {socialLinks.map((link) => {
        return (
          <li key={link.id}>
            <a
              href={link.url}
              className={`icon-link fa-fw ${hero ? "border" : ""}`}
              target="_blank"
              rel="noreferrer"
            >
              {link.icon}
            </a>
          </li>
        );
      })}
    </SLWrapper>
  );
};

const SLWrapper = styled.ul`
  .icon-link {
    display: flex;
    align-items: center;
  }

  /* li::nth-child(2) {
    margin-top: 0.02rem;
  }

  li:nth-child(1) .border {
    border: 1px solid var(--color-gold);
    border-radius: 50%;
    padding: 0.1rem;
  }
  li:nth-child(2) .border {
    margin-top: 0.1rem;
    border: 1px solid var(--color-gold);
    border-radius: 5px;
  }

  li .border:hover {
    border-color: var(--color-logo);
  } */
`;

export default SocialLinks;
