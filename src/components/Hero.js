import React from "react";
import styled from "styled-components";
import heroBackground from "../assets/hero.jpg";
import heroImg from "../assets/me.jpg";
import { socialLinks } from "../data/linksData";
import { Link } from "react-router-dom";
import { SocialLinks } from "../components";

const Hero = () => {
  return (
    <HeroWrapper>
      <div className="background-wrapper"></div>
      <div className="hero-img">
        <img src={heroImg} alt="selfie" />
      </div>
      <div className="padding">
        <div className="hero-info">
          <h1 className="firstName">Wei-Han</h1>
          <h1 className="lastName">Chou</h1>

          <h2>Aspiring Developer</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
            nostrum ut unde tempore aspernatur et facere, laborum numquam eaque.
            Suscipit.
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

  .background-wrapper {
    min-height: 100vh;
    width: 100%;
    top: 0;
    background: linear-gradient(rgb(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url(${heroBackground}) center/cover no-repeat;
    position: fixed;
    z-index: -1;
  }

  .hero-img {
    display: grid;
    place-items: center;
    margin-top: 2rem;
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

  p {
    max-width: 80vw;
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
    margin-top: -1rem;
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
      font-size: 1rem;
      color: var(--color-logo);
    }
  }

  @media screen and (min-width: 768px) {
    .hero-img {
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
    }
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: dense;

    .button {
      font-size: 1.5rem;
      padding: 0.2rem 0.75rem;
    }

    .hero-img {
      grid-column: 2;
      padding-right: 5rem;
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
      justify-content: end;
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
      padding-left: 3rem;
      .firstName {
        padding-right: 5rem;
        margin-bottom: 0;
      }
      .lastName {
        align-self: auto;
        margin-bottom: 0.3rem;
      }
      h1 {
        font-size: 5rem;
      }
      h2 {
      }
      p {
        max-width: 30vw;
        align-self: end;
        font-size: 1.1rem;
      }
    }
  }

  @media screen and (min-width: 1320px) {
    .icon-link {
      font-size: 2.5rem;
    }
    .hero-img {
      padding-right: 10rem;
      img {
        width: 450px;
        height: 500px;
      }
    }
    .padding {
      padding: 0 0 0 3rem;
    }
    .hero-info {
      .firstName {
        font-size: 6.5rem;
        padding-right: 8rem;
      }
      .lastName {
        align-self: auto;
      }
      h1 {
        font-size: 6rem;
      }
      h2 {
      }
      p {
        font-size: 1.2rem;
      }
    }
  }

  @media screen and (min-width: 1700px) {
    .hero-img {
      padding-right: 15rem;
      img {
        width: 500px;
        height: 500px;
      }
    }
    .hero-info {
      padding-left: 15rem;
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
      margin-top: 0;
      h1 {
        font-size: 3.2rem;
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
      margin-top: 0;
      h1 {
        font-size: 3rem;
      }
    }
  }
`;

export default Hero;
