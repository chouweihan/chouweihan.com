import React from "react";
import styled from "styled-components";
import { socialLinks, links } from "../data/linksData";
import { Link } from "react-router-dom";
import { SocialLinks } from "../components";

const Footer = () => {
  return (
    <FooterWrapper>
      <ul className="links-container">
        {links.map((link) => {
          return (
            <li key={link.id}>
              <Link to={link.url} className="footer-link">
                {link.text}
              </Link>
            </li>
          );
        })}
      </ul>
      <SocialLinks />
      <p>
        All Rights Reserved <span>&#169; chouweihan.com</span>
      </p>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  color: var(--color-light);
  height: 6rem;
  width: 100vw;
  background-color: var(--color-logo-dark-2);
  display: grid;
  place-items: center;
  row-gap: 0;

  span {
    color: var(--color-gold);
  }
  p {
    margin: 0;
    padding: 0;
    font-size: 0.7rem;
    color: var(--color-background);
  }

  .links-container {
    display: flex;
  }

  .footer-link {
    color: var(--color-background);
    padding: 0 0.5rem;
    font-size: 1rem;
    text-transform: capitalize;
  }
  .footer-link:hover {
    color: var(--color-logo);
  }

  .social-links {
    display: flex;
  }

  .icon-link {
    font-size: 1.5rem;
    color: var(--color-background);
    padding-left: 0.3rem;
    padding-right: 0.3rem;
  }

  .icon-link:hover {
    color: var(--color-logo);
  }
`;

export default Footer;
