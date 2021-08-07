import React from "react";
import { useGeneralContext } from "../context-reducers/general-context";
import { Hero, Experience } from "../components";
const HomePage = () => {
  const { openSidebar, closeSidebar } = useGeneralContext();

  return (
    <main>
      <Hero></Hero>
      <Experience></Experience>
    </main>
  );
};

export default HomePage;
