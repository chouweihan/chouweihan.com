import React from "react";
import styled from "styled-components";
import { useGeneralContext } from "../context-reducers/general-context";
import { links, socialLinks } from "../data/linksData";
import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";

const Sidebar = () => {
  const { sidebar, closeSidebar } = useGeneralContext();

  return (
    <SidebarWrapper>
      <div className={`sidebar ${sidebar ? "active" : ""}`}>
        <div className="links-container">
          <button className="close-btn" onClick={closeSidebar}>
            <IoCloseOutline />
          </button>
          <div className="header">
            <h3>navigation</h3>
            <div className="underline"></div>
          </div>
          <ul>
            {links.map((link) => {
              return (
                <Link to={link.url} key={link.id} onClick={closeSidebar}>
                  <li className="link">
                    <p className="link-text">
                      <span className="fa-fw">{link.icon}</span>
                      {link.text}
                    </p>
                  </li>
                </Link>
              );
            })}
          </ul>
          <div className="header">
            <h3>social</h3>
            <div className="underline"></div>
          </div>
          <ul>
            {socialLinks.map((link) => {
              return (
                <a
                  href={link.url}
                  target="_blank"
                  key={link.id}
                  rel="noreferrer"
                >
                  <li className="link">
                    <p className="link-text">
                      <span className="fa-fw">{link.icon}</span>
                      {link.name}
                    </p>
                  </li>
                </a>
              );
            })}
          </ul>
        </div>
      </div>
      <div
        className={`screen ${sidebar ? "active" : ""}`}
        onClick={closeSidebar}
      ></div>
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.aside`
  .close-btn {
    font-size: 2.1rem;
    color: var(--color-gold);
    display: flex;
    align-self: center;
    background: none;
    border: none;
    margin-left: auto;
    padding: 1rem;
    :hover {
      color: var(--color-logo);
    }
  }

  .header {
    display: grid;
    place-items: center;
  }

  .underline {
    background-color: var(--color-gold);
    height: 1px;
    opacity: 0.8;
    margin-top: 0.4rem;
    width: 50%;
  }

  h3 {
    opacity: 0.9;
    font-weight: 300;
    text-transform: capitalize;
    color: var(--color-background);
    padding: 0;
    margin: 0;
  }
  p {
    padding: 0;
    margin: 0;
  }

  ul {
    padding-top: 0.2rem;
    padding-bottom: 1.5rem;
  }

  .links-container span {
    color: var(--color-background);
    font-size: 1.5rem;
    opacity: 0.9;
    display: flex;
    align-items: center;
    padding-right: 2.1rem;
  }

  .link {
    display: flex;
    align-items: center;
    padding: 0.8rem 2rem;
    transition: var(--transition);
  }

  .link-text {
    display: flex;
    font-size: 1.5rem;
    opacity: 0.9;
    letter-spacing: 1px;
    font-weight: 300;
    text-transform: capitalize;
    color: var(--color-background);
  }

  .link:hover {
    padding-left: 3rem;
    background-color: var(--color-logo-dark-light);
    .link-text {
      color: var(--color-gold);
    }
    span {
      color: var(--color-gold);
    }
  }

  .sidebar {
    transform: translateX(-100%);
    border-right: 1px solid var(--color-gold-half);
    position: fixed;
    min-height: 100%;
    min-width: 65vw;
    z-index: 105;
    overflow-x: hidden;
    transition: var(--transition);
    background-color: var(--color-logo-dark-2);
    /* background-color: var(--color-background); */
  }

  .screen {
    display: none;
    position: fixed;
    min-height: 100%;
    z-index: 104;
    min-width: 100vw;
    background-color: var(--color-logo-dark-3);
    opacity: 0.6;
  }

  .active {
    transform: translateX(0%);
    display: block;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export default Sidebar;
