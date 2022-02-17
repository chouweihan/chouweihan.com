import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import error404 from "../assets/404.png";

const ErrorPage = () => {
  return (
    <ErrorWrapper>
      <div className="top" />
      <div className="background-wrapper">
        <img src={error404} alt="404 page not found" />
      </div>
      <div className="center">
        <Link to="/old/" className="ret-button">
          Return Home
        </Link>
      </div>
    </ErrorWrapper>
  );
};

const ErrorWrapper = styled.div`
  min-height: calc(100vh - 7.5rem);

  .background-wrapper {
    z-index: -1;
    background-color: var(--color-background);
    top: 0;
    min-height: calc(100vh - 6rem);
    min-width: 100vw;
    position: fixed;
    display: grid;
    place-items: center;
    img {
      height: 45vh;
    }
    @media screen and (min-width: 768px) {
      img {
        height: 55vh;
      }
    }
    @media screen and (min-width: 992px) {
      img {
        height: 65vh;
      }
    }
    @media screen and (min-width: 1200px) {
      img {
        height: 75vh;
      }
    }
  }

  .ret-button {
    border: none;
    position: absolute;
    border: 1px solid var(--color-logo-dark-2);
    padding: 0.6rem 0.7rem;
    font-weight: 500;
    border-radius: 8px;
    font-size: 1rem;
    color: var(--color-logo-dark-2);
    text-transform: uppercase;
    bottom: 11rem;
    left: 50%;
    transform: translateX(-50%);
    transition: 0.3s ease;
    :hover {
      border: 1px solid var(--color-background);
      color: var(--color-background);
      background-color: var(--color-logo-dark-2);
    }

    @media screen and (min-width: 992px) {
      bottom: 10rem;
      padding: 0.8rem 1rem;
      font-size: 1.2rem;
    }
  }

  h2,
  h1 {
    padding: 0;
    margin: 0;
  }

  .top {
    top: 0;
    left: 0;
    background-color: var(--color-logo-dark-2);
    height: 3.7rem;
  }
  .center {
    min-height: calc(100vh - 7.5rem - 3.7rem);
    width: 100%;
    display: grid;
    place-content: center;
  }
`;

export default ErrorPage;
