import React from "react";
import styled from "styled-components";
import { Title } from "./";

const Contact = () => {
  return (
    <Wrapper className="section">
      <Title>Contact</Title>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--color-background);
`;

export default Contact;
