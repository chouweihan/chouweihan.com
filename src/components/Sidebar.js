import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { useGeneralContext } from "../context-reducers/general-context";

const Sidebar = () => {
  const { sidebar, closeSidebar } = useGeneralContext();

  return (
    <SidebarWrapper>
      <div className={`sidebar ${sidebar ? "active" : ""}`}></div>
      <div
        className={`screen ${sidebar ? "active_screen" : ""}`}
        onClick={closeSidebar}
      ></div>
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.aside`
  .sidebar {
    transform: translateX(-100%);
    position: fixed;
    min-height: 100%;
    min-width: 65vw;
    z-index: 100;
    overflow-x: hidden;
    transition: var(--transition);
    background-color: var(--color-logo-dark-2);
  }

  .screen {
    display: none;
    position: fixed;
    min-height: 100%;
    min-width: 100vw;
    background-color: var(--color-logo-dark);
    transition: var(--transition);
    opacity: 0.3;
  }

  .active {
    transform: translateX(0%);
  }

  .active_screen {
    display: block;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export default Sidebar;
