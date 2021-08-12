import React from "react";
import styled from "styled-components";
import { Title } from "./";
import { expData } from "../data/ExpData";
import ExpCard from "./ExpCard";

const Experience = () => {
  return (
    <Wrapper className="section">
      <Title>Experience</Title>
      <div className="center">
        {expData.map((data) => {
          return <ExpCard key={data.id} data={data} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--color-background);

  padding-bottom: 4rem;

  .center {
    padding-top: 3rem;
    display: grid;
    place-items: center;
    grid-template-rows: 1fr 1fr;
    gap: 3rem;
  }
`;

export default Experience;
