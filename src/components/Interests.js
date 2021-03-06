import React from "react";
import styled from "styled-components";
import Title from "./Title";
import { aboutData } from "../data/aboutData";
import AboutCard from "./AboutCard";

const Interests = () => {
  return (
    <InterestWrapper>
      <Title>Interests</Title>
      <div className="second-wrapper">
        <div className="interests-center">
          <div className="interest-container">
            {aboutData.map((item, index) => {
              return <AboutCard key={index} aboutItem={item} />;
            })}
          </div>
        </div>
      </div>
    </InterestWrapper>
  );
};

const InterestWrapper = styled.div`
  padding: 2rem 0;
  padding-bottom: 0;
  background-color: var(--color-background);

  .second-wrapper {
    width: 100vw;
    margin: 3rem 0;
    margin-bottom: 0;
    background: var(--color-background-2);
  }

  .interests-center {
    padding: 4rem 0;
    margin: 0 auto;
    max-width: var(--max-width);
    width: 80vw;
  }

  .interest-container {
    display: grid;
    place-items: center;
    margin: 0 auto;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
  }

  @media screen and (min-width: 992px) {
    .interests-container {
      grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    }
  }
`;

export default Interests;
