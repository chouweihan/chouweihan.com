import React from "react";

import styled from "styled-components";

const ExpCard = ({ data }) => {
  const { name, title, description, images, year } = data;
  console.log(name, title, description, images);
  return (
    <CardWrapper>
      <div className="img-wrapper">
        <img src={images[0]} alt="location" className="mainImg" />
        <img src={images[1]} alt="logo" className="smallImg" />
      </div>
      <div className="card-info">
        <div className="info-header">
          <h1>{name}</h1>
          <h2>{year}</h2>
        </div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  max-width: 600px;
  display: grid;
  width: 100%;
  height: 100%;
  background-color: var(--color-background);
  box-shadow: var(--custom-shadow);
  grid-template-rows: auto 1fr;
  border-radius: 15px;
  font-family: var(--font-2);

  .info-header {
    display: flex;
    /* align-items: center; */
    justify-content: space-between;
    h2 {
      color: var(--color-p-2);
    }
  }

  h1 {
    font-size: 1.6rem;
    text-transform: capitalize;
    color: var(--color-p-2);
  }

  h2 {
    font-size: 1.3rem;
    color: var(--color-p-3);
  }

  p {
    font-size: 1rem;
  }

  .card-info {
    padding: 0 1.5rem;
    padding-top: 3.5rem;
    padding-bottom: 2rem;
    height: 100%;
  }

  .img-wrapper {
    position: relative;
  }

  .mainImg {
    width: 100%;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom: 10px solid var(--color-gold);
    height: 12rem;
    object-fit: cover;
  }

  .smallImg {
    object-fit: cover;
    height: 6rem;
    position: absolute;
    left: 50%;
    border-radius: 50%;
    border: 10px solid var(--color-gold);

    transform: translate(-50%, -50%);
  }
`;

export default ExpCard;
