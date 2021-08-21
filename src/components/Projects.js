import React from "react";
import styled from "styled-components";
import { Title } from "./";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";
const Projects = ({ projects, page }) => {
  return (
    <Wrapper className="section">
      <Title color="true">{!page && "Featured"} Projects</Title>
      <div className="projects-center">
        <div className="projects-container">
          {projects.map((project) => {
            return (
              <ProjectCard key={project.id} project={project}></ProjectCard>
            );
          })}
        </div>
        {!page && (
          <div className="button-container">
            <Link to="/projects" className="button">
              SEE ALL PROJECTS
            </Link>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  max-width: 80vw;
  padding: 4rem 0;
  margin: 0 auto;

  .projects-center {
    display: grid;
    max-width: var(--max-width);
    grid-template-rows: 1fr auto;
    margin: 0 auto;
    margin-top: 3rem;
    gap: 3rem;
  }

  .projects-container {
    place-items: center;
    gap: 3rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }

  @media screen and (min-width: 992px) {
    .projects-container {
      grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    }
  }

  .button-container {
    display: grid;
    place-items: center;
  }

  .button {
    border: 1px solid var(--color-background);
    padding: 1rem 1rem;
    white-space: nowrap;
    border-radius: 5px;
    color: var(--color-background);
    font-size: 1rem;
    font-weight: 500;
    transition: var(--transition);
    :hover {
      background-color: var(--color-background);
      color: var(--color-logo-dark);
      border: 1px solid var(--color-logo-dark);
    }
  }

  @media screen and (min-width: 992px) {
    .button {
      font-size: 1.2rem;
    }
  }
`;

export default Projects;
