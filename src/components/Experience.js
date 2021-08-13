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

  .center {
    padding-top: 3rem;
    display: grid;
    place-items: center;
    width: 80vw;
    max-width: var(--max-width);
    gap: 3rem;
  }

  @media screen and (min-width: 992px) {
    .center {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (min-width: 1300px) {
    .center {
      grid-template-columns: 1fr;
      grid-template-rows: auto auto;
    }
  }
`;

export default Experience;
