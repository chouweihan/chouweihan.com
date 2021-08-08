import React from "react";
import styled from "styled-components";
import { Title } from "./";

const Projects = () => {
  return (
    <Wrapper className="section">
      <Title color>Projects</Title>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--color-logo-dark-2);
`;

export default Projects;
