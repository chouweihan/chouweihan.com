import React from "react";
import styled from "styled-components";
import heroBackground from "../assets/hero.jpg";
import heroImg from "../assets/me.jpg";
import { Link } from "react-router-dom";
import { SocialLinks } from "../components";

const Hero = () => {
  return (
    <HeroWrapper>
      <div className="background-wrapper"></div>
      <div className="hero-center">
        <div className="hero-img">
          <img src={heroImg} alt="selfie" />
        </div>
        <div className="hero-info">
          <div className="name">
            <h1 className="firstName">Wei-Han</h1>
            <h1 className="lastName">Chou</h1>
          </div>
          <h2>Aspiring Developer</h2>
          <p>
            Hi, Welcome to my site! Here you will find information about me and
            my projects!
          </p>
          <Link to="/about" className="button">
            About Me
          </Link>
          <SocialLinks hero />
        </div>
      </div>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.div`
  display: grid;
  place-items: center;
  padding-top: 4rem;
  padding-bottom: 2rem;
  min-height: 100vh;

  .hero-center {
    display: grid;
    place-items: center;
    max-width: 80vw;
    gap: 2rem;
  }

  .background-wrapper {
    min-height: 100vh;
    width: 100%;
    top: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.7) 10%,
        rgba(0, 0, 0, 0.4) 50%,
        rgba(0, 0, 0, 0.7)
      ),
      url(${heroBackground}) center/cover no-repeat;
    position: fixed;
    z-index: -1;
  }

  .hero-img {
    display: grid;
    place-items: center;
    box-shadow: var(--dark-shadow);
    img {
      width: 220px;
      height: 220px;
      object-fit: cover;
      border-radius: 50%;
      border: 3px solid var(--color-gold);
    }
  }

  .button {
    font-size: 1.3rem;
    padding: 0.2rem 0.7rem;
    color: var(--color-logo);
    border: 1px solid var(--color-logo);
    width: fit-content;
    border-radius: 5px;
    margin-bottom: 1rem;
    background-color: rgba(0, 0, 0, 0.5);
    transition: var(--transition);
  }

  .button:hover {
    color: var(--color-gold);
    border-color: var(--color-gold);
    background-color: var(--color-logo-dark);
  }

  .social-links {
    display: flex;
  }

  li {
    margin-right: 1rem;
  }

  .icon-link {
    color: var(--color-gold);
    font-size: 2.1rem;
    transition: var(--transition);
  }

  .icon-link:hover {
    color: var(--color-logo);
  }

  .hero-info {
    margin-top: 0.5rem;
    display: flex;
    flex-direction: column;
    .firstName {
      margin-bottom: -1rem;
    }
    .lastName {
    }
    h1 {
      font-family: "Lato", sans-serif;
      color: var(--color-gold);
      font-size: 4rem;
    }
    h2 {
      color: var(--color-light);
    }
    p {
      max-width: 80vw;
      font-size: 1rem;
      color: var(--color-logo);
    }
  }

  @media screen and (min-width: 768px) {
    .hero-center {
      gap: 1rem;
    }
    .hero-img {
      margin-top: 1rem;
      img {
        width: 250px;
        height: 250px;
      }
    }
    .hero-info {
      margin-top: 1rem;
      h1 {
        font-size: 4.5rem;
      }
      p {
        max-width: 90%;
        padding-right: 5rem;
      }
    }
  }

  @media screen and (min-width: 992px) {
    .hero-center {
      grid-template-columns: 1fr 1fr;
      grid-auto-flow: dense;
      min-width: 80vw;
      gap: 4rem;
    }

    .button {
      font-size: 1.5rem;
      padding: 0.2rem 0.75rem;
    }

    .hero-img {
      grid-column: 2;
      margin: 0;
      img {
        width: 400px;
        height: 450px;
        object-fit: cover;
        border-radius: 15px;
        border: 3px solid var(--color-gold);
      }
    }

    .button {
      align-self: flex-end;
    }

    .social-links {
      justify-content: flex-end;
    }
    .icon-link {
      font-size: 2.3rem;
    }
    li {
      margin-right: 0;
      margin-left: 1.5rem;
    }
    .hero-info {
      margin-top: 0;
      grid-column: 1;
      text-align: end;
      .firstName {
        width: 100%;
        text-align: left;
        margin-bottom: 0;
      }
      .lastName {
        align-self: auto;
        margin-bottom: 0.3rem;
      }
      h1 {
        white-space: nowrap;

        font-size: 5rem;
      }
      h2 {
        white-space: nowrap;
        font-size: 2.3rem;
      }
      p {
        max-width: 35vw;
        align-self: end;
        padding: 0;
        font-size: 1.1rem;
      }
    }
  }

  @media screen and (min-width: 1320px) {
    .hero-center {
      /* padding-left: 5rem; */
      /* max-width: var(--max-width); */
    }

    .icon-link {
      font-size: 2.5rem;
    }

    .name {
      display: grid;
      grid-template-columns: auto auto;
      gap: 1.5rem;
    }

    .hero-img {
      img {
        min-height: 75%;
        object-fit: cover;
      }
    }
    .hero-info {
      .firstName {
        font-size: 5.5rem;
        padding-left: 0rem;
      }
      .lastName {
        align-self: auto;
        font-size: 5.5rem;
      }
      h2 {
        font-size: 2.6rem;
      }
      p {
        max-width: 60%;
        font-size: 1.2rem;
      }
    }
  }

  @media screen and (min-width: 1700px) {
    .hero-center {
      padding-left: 2.5rem;
      grid-template-columns: 1fr 1fr;
      gap: 0;
    }
    .hero-img {
      margin-top: 1.5rem;
      img {
        width: 500px;
        height: 500px;
      }
    }

    .hero-info {
      .firstName {
        font-size: 6.5rem;
      }
      .lastName {
        font-size: 6.5rem;
      }
    }
  }
  @media screen and (min-width: 1900px) {
    .hero-center {
      padding-left: 4.5rem;
    }
  }

  @media screen and (max-width: 480px) and (max-height: 780px) {
    .hero-img {
      img {
        width: 200px;
        height: 200px;
      }
    }

    .hero-info {
      h1 {
        font-size: 3.2rem;
      }
    }
  }

  @media screen and (max-width: 768px) and (max-height: 668px) {
    .hero-img {
      img {
        width: 150px;
        height: 150px;
      }
    }

    .hero-info {
      h1 {
        font-size: 3rem;
      }
    }
  }

  @media screen and (max-width: 480px) and (max-height: 668px) {
    .hero-img {
      img {
        width: 150px;
        height: 150px;
      }
    }

    .hero-info {
      h1 {
        font-size: 3rem;
      }
    }
  }
`;

export default Hero;
