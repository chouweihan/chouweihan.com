import React from "react";
import styled from "styled-components";
import { Title } from "./";

const Experience = () => {
  return (
    <Wrapper className="section">
      <Title>Experience</Title>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--color-background);
`;

export default Experience;
