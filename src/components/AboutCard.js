import React from "react";
import styled from "styled-components";

const AboutCard = ({ aboutItem }) => {
  const { name, description, image } = aboutItem;
  return (
    <CardWrapper>
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="info-container">
        <h2>{name}</h2>
        {description.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>;
        })}
      </div>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  background-color: var(--color-background);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  box-shadow: var(--custom-shadow);
  height: 100%;
  width: 100%;
  max-width: 350px;

  img {
    width: 150px;
    border-radius: 15px;
  }
  .img-container {
    width: 100%;
    padding: 2rem 1rem;
    display: grid;
    justify-content: center;
  }

  .info-container {
    padding: 0 1.5rem;
    padding-bottom: 1rem;
  }

  h2 {
    color: var(--color-darker-2);
    font-weight: 400;
    margin-bottom: 1rem;
  }

  p {
    color: var(--color-logo-dark);
    font-size: 1rem;
  }

  @media screen and (min-width: 992px) {
    p {
      font-size: 1.1rem;
    }
    max-width: 400px;
  }
`;

export default AboutCard;
