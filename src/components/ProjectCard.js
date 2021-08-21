import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const ProjectCard = ({ project }) => {
  const { id, excerpt, name, images, year, type, categories } = project;
  return (
    <CardWrapper>
      <div className="screen">
        <Link className="details-button" to={`/projects/${id}`}>
          view details
        </Link>
      </div>
      <div className="img-wrapper">
        <img src={images[0]} alt="location" className="main-img" />
        <div className="card-info">
          <div className="info-header">
            <h1>{name}</h1>
            <h2>{year}</h2>
          </div>
          <h2>{categories[0]}</h2>
          <h4>{type}</h4>
          <p>{excerpt}</p>
        </div>
      </div>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  max-width: 400px;
  display: grid;
  width: 100%;
  height: 100%;
  background-color: var(--color-background);
  box-shadow: var(--custom-shadow);
  grid-template-rows: auto 1fr;
  border-radius: 15px;
  transition: var(--transition);
  font-family: var(--font-roboto);
  /* border: 2px solid var(--color-gold); */
  box-shadow: var(--custom-shadow-white);
  position: relative;

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
    font-size: 1rem;
  }

  .card-info {
    padding: 1.1rem 1.1rem;
  }

  .img-wrapper {
    position: relative;
  }

  .main-img {
    width: 100%;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom: 3px solid var(--color-gold);
    height: 15rem;
    object-fit: cover;
  }

  @media screen and (min-width: 992px) {
    p {
      font-size: 1.1rem;
    }
  }

  .screen {
    height: 100%;
    width: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    display: grid;
    place-items: center;
    transition: 0.3s linear;
    opacity: 0;
    border-radius: 15px;
  }

  .details-button {
    color: var(--color-background);
    font-size: 1.3rem;
    text-transform: uppercase;
    font-family: var(--font-roboto);
    cursor: pointer;
    box-shadow: inset 0 0 0 0 (--color-background);
    -webkit-transition: ease-out 0.4s;
    -moz-transition: ease-out 0.4s;
    transition: ease-out 0.4s;
    letter-spacing: 1px;
    border: 2px solid var(--color-background);
    padding: 0.7rem 0.9rem;
    border-radius: 5px;
    :hover {
      box-shadow: inset 0 100px 0 0 var(--color-background);
      color: var(--color-logo-dark);
    }
  }

  :hover .screen {
    opacity: 1;
  }
`;

export default ProjectCard;
