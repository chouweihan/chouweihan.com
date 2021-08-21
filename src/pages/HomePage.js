import React from "react";
import { Hero, Experience, Projects, Contact } from "../components";
import { useProjectContext } from "../context-reducers/project-context";
const HomePage = () => {
  const { featuredProjects } = useProjectContext();
  return (
    <main>
      <Hero></Hero>
      <Experience></Experience>
      <Projects projects={featuredProjects}></Projects>
      <Contact></Contact>
    </main>
  );
};

export default HomePage;
