import React from "react";
import styled from "styled-components";
import { links } from "../data/linksData";
import { Link } from "react-router-dom";
import { SocialLinks } from "../components";

const Footer = () => {
  return (
    <FooterWrapper>
      <ul className="links-container">
        {links.map((link) => {
          return (
            <li key={link.id}>
              <Link to={`/old${link.url}`} className="footer-link">
                {link.text}
              </Link>
            </li>
          );
        })}
      </ul>
      <SocialLinks />
      <p>
        Wei-Han Chou <span>&#169; chouweihan.com</span>
      </p>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  color: var(--color-light);
  height: 7.5rem;
  width: 100vw;
  background-color: var(--color-logo-dark-2);
  display: grid;
  place-items: center;
  row-gap: 0;
  padding: 0.6rem 0;

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
    padding-top: 0.5rem;
    display: flex;
  }

  .footer-link {
    color: var(--color-background);
    text-transform: capitalize;
    padding: 0 0.5rem;
    font-size: 1rem;
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
