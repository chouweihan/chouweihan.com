import React from "react";
import styled from "styled-components";
import Projects from "../components/Projects";
import { useProjectContext } from "../context-reducers/project-context";
import background from "../assets/projects-bg.jpg";
const ProjectsPage = () => {
  const { projects } = useProjectContext();
  console.log(projects);
  return (
    <PageWrapper>
      <div className="background-wrapper"></div>
      <div className="center">
        <Projects projects={projects} page="true" />
      </div>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  .background-wrapper {
    min-height: 100vh;
    width: 100%;
    top: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.7) 10%,
        rgba(0, 0, 0, 0.4) 50%,
        rgba(0, 0, 0, 0.7)
      ),
      url(${background}) center/cover no-repeat;
    position: fixed;
    z-index: -1;
  }

  .center {
    padding-top: 3rem;
  }
`;

export default ProjectsPage;
