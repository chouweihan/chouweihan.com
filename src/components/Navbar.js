import React, { useState } from "react";
import styled, { css } from "styled-components";
import logo_light from "../assets/logo-light.png";
import logo_dark from "../assets/logo-dark.svg";
import { Link } from "react-router-dom";
import { links } from "../data/linksData";
import { BsList } from "react-icons/bs";
import { useGeneralContext } from "../context-reducers/general-context";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const [navScroll, setNavScroll] = useState(false);
  const { openSidebar, sidebar } = useGeneralContext();

  const toggleNav = () => {
    if (window.scrollY > 10) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  };

  window.addEventListener("scroll", toggleNav);

  if(window.location.pathname === "/") {
    return null;
  }

  return (
    <Nav navScroll={navScroll}>
      <div className={`wrapper ${navScroll ? "active" : ""}`}>
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/old">
              <img src={navScroll ? logo_dark : logo_light} alt="Home" />
            </Link>
          </div>

          <button className="sidebar-btn" onClick={openSidebar}>
            {sidebar ? <IoCloseOutline /> : <BsList />}
          </button>

          <ul className="nav-links">
            {links.map((link) => {
              return (
                <li key={link.id} className="link">
                  <Link to={`/old${link.url}`}>{link.text}</Link>
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
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 3.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s linear;
  background: transparent;

  .sidebar-btn {
    padding-right: 0.8rem;
    display: flex;
    align-self: center;
    border: transparent;
    background: transparent;
    color: var(--color-logo);
    transition: var(--transition);
    font-size: 2.1rem;
  }

  .sidebar-btn:hover {
    color: var(--color-gold);
  }

  ${({ navScroll }) =>
    navScroll &&
    css`
      background-color: var(--color-background);
      box-shadow: var(--light-shadow);
      .sidebar-btn {
        color: var(--color-logo-dark);
      }

      .sidebar-btn:hover {
        color: var(--color-darker);
      }
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
    display: none;
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
    .nav-center {
      width: 80vw;
    }
    .sidebar-btn {
      display: none;
    }
    .nav-links {
      display: flex;
    }
  }

  @media screen and (min-width: 992px) {
    .nav-header {
      img {
        width: 12rem;
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
        width: 14.3rem;
      }
    }
    .nav-links {
      a {
        font-size: 1.5rem;
      }
    }
  }
`;

export default Navbar;
