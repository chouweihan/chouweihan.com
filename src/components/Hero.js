import React from "react";
import styled from "styled-components";
import heroBackground from "../assets/hero.jpg";
import heroImg from "../assets/me.jpg";
import { socialLinks } from "../data/linksData";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <HeroWrapper>
      <div className="hero-img">
        <img src={heroImg} alt="selfie image" />
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
          <ul className="social-links">
            {socialLinks.map((link) => {
              return (
                <li key={link.id}>
                  <a
                    href={link.url}
                    className="icon-link fa-fw"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(rgb(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${heroBackground}) center/cover no-repeat;
  background-attachment: fixed;
  display: grid;
  place-items: center;

  .hero-img {
    display: grid;
    place-items: center;
    margin-bottom: -3rem;
    margin-top: 5rem;
    img {
      width: 220px;
      height: 220px;
      object-fit: cover;
      border-radius: 50%;
      border: 3px solid var(--color-gold);
    }
  }

  .button {
    font-size: 1.5rem;
    color: var(--color-logo);
    border: 1px solid var(--color-logo);
    width: fit-content;
    padding: 0.2rem 0.75rem;
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
    font-size: 2.2rem;
    transition: var(--transition);
  }

  .icon-link:hover {
    color: var(--color-logo);
  }

  .hero-info {
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
      color: var(--color-logo);
    }
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: dense;

    .hero-img {
      grid-column: 2;
      margin: 0;
      padding-right: 5rem;
      img {
        width: 400px;
        height: 450px;
        object-fit: cover;
        border-radius: 20px;
        border: 3px solid var(--color-gold);
      }
    }

    .button {
      align-self: flex-end;
    }

    .social-links {
      justify-content: end;
    }
    li {
      margin-right: 0;
      margin-left: 1.5rem;
    }
    .hero-info {
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
      }
    }
  }

  @media screen and (min-width: 1320px) {
    .hero-img {
      padding-right: 10rem;
    }
    .padding {
      padding: 0 0 0 3rem;
    }
    .hero-info {
      .firstName {
        padding-right: 10rem;
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
      }
    }
  }
`;

export default Hero;
