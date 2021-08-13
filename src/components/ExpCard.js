import React from "react";

import styled from "styled-components";

const ExpCard = ({ data }) => {
  const { name, title, description, images, year, type } = data;

  return (
    <CardWrapper>
      <div className="img-wrapper">
        <img src={images[0]} alt="location" className="main-img" />
        <img src={images[1]} alt="logo" className="small-img" />
      </div>
      <div className="card-info">
        <div className="info-header">
          <h1>{name}</h1>
          <h2>{year}</h2>
        </div>
        <h2>{title}</h2>
        <h4>{type}</h4>
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
  transition: var(--transition);
  font-family: var(--font-roboto);

  .info-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2 {
      font-size: 1rem;
      color: var(--color-p-2);
    }
  }

  h1 {
    font-size: 1.6rem;
    text-transform: capitalize;
    color: var(--color-p-2);
  }

  h2 {
    font-weight: 400;
    font-size: 1.4rem;
    color: var(--color-p-3);
  }

  h4 {
    font-size: 1.2rem;
    font-weight: 300;
  }
  p {
    font-size: 0.9rem;
  }

  .card-info {
    padding: 0 1.5rem;
    padding-top: 3.5rem;
    padding-bottom: 1.5rem;
    height: 100%;
  }

  .img-wrapper {
    position: relative;
  }

  .main-img {
    width: 100%;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom: 10px solid var(--color-gold);
    height: 12rem;
    object-fit: cover;
  }

  .small-img {
    object-fit: cover;
    height: 6rem;
    position: absolute;
    left: 50%;
    border-radius: 50%;
    border: 10px solid var(--color-gold);
    transform: translate(-50%, -50%);
  }

  @media screen and (min-width: 1300px) {
    grid-template-columns: auto 1fr;
    max-width: 80vw;

    .main-img {
      border-top-right-radius: 0;
      border-bottom-left-radius: 15px;
      border-bottom: 0;
      min-height: 100%;
      min-width: 420px;
      border-right: 5px solid var(--color-gold);
    }

    .small-img {
      top: 50%;
      left: 100%;
      border: 5px solid var(--color-gold);
      transition: var(--transition);
      opacity: 0;
    }

    :hover {
      .small-img {
        opacity: 1;
      }
    }

    .card-info {
      padding: 2rem 5rem;
    }

    .info-header {
      h2 {
        font-size: 1.1rem;
      }
    }

    h1 {
      font-size: 1.8rem;
    }

    h2 {
      font-size: 1.4rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

export default ExpCard;
