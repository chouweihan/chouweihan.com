import React, { useState } from "react";
import styled, { css } from "styled-components";
import logo_light from "../assets/logo-light.png";
import logo_dark from "../assets/logo-dark.svg";
import { Link } from "react-router-dom";
import { links } from "../data/linksData";

const Navbar = () => {
  const [navScroll, setNavScroll] = useState(false);

  const toggleNav = () => {
    if (window.scrollY > 150) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  };

  window.addEventListener("scroll", toggleNav);

  return (
    <Nav navScroll={navScroll}>
      <div className={`wrapper ${navScroll ? "active" : ""}`}>
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={navScroll ? logo_dark : logo_light} alt="Home" />
            </Link>
          </div>
          <ul className="nav-links">
            {links.map((link) => {
              return (
                <li key={link.id} className="link">
                  <Link to={link.url}>{link.text}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 3.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s linear;
  background: transparent;
  ${({ navScroll }) =>
    navScroll &&
    css`
      background-color: var(--color-background);
      box-shadow: var(--light-shadow);
    `}

  .nav-center {
    width: 95vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 11rem;
    }
  }

  .nav-links {
    display: flex;
    align-items: center;
    padding-right: 1rem;
    li {
      margin: 0 0.6rem;
    }
    a {
      text-transform: capitalize;
      color: var(--color-logo);
      font-size: 1.1rem;
      transition: var(--transition);
    }
    a:hover {
      color: var(--color-gold);
    }
    ${({ navScroll }) =>
      navScroll &&
      css`
        a {
          color: var(--color-logo-dark);
        }
        a:hover {
          color: var(--color-darker);
        }
      `}
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 992px) {
    .nav-header {
      img {
        width: 13rem;
      }
    }

    .nav-links {
      a {
        font-size: 1.3rem;
      }
    }
  }

  @media screen and (min-width: 1400px) {
    .nav-header {
      img {
        width: 15rem;
      }
    }
    .nav-links {
      padding-right: 4rem;
      a {
        font-size: 1.5rem;
      }
    }
  }
`;

export default Navbar;
