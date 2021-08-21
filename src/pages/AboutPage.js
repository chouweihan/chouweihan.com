import React from "react";
import styled from "styled-components";
import background from "../assets/hero.jpg";
import selfie from "../assets/selfie.jpg";
import { Title } from "../components";
import Interests from "../components/Interests";
const AboutPage = () => {
  return (
    <PageWrapper>
      <div className="background-wrapper" />
      <div className="nav-bar" />
      <div className="center">
        <div className="header">
          <div className="header-info">
            <Title color="true">About Me</Title>
            <div className="paragraph">
              <p>
                Hi Everyone, I'm Wei-Han Chou, a graduate from BCIT's CST
                program. I became interested in programming a few years ago when
                I took a free C course online. Since then, I've been working
                towards becoming a full fledged developer!
              </p>
              <p>
                I have made a number of personal projects and contributed in a
                variety of group projects. You can find information about my
                work in my projects section!
              </p>
              <p>
                I love music and I have a good sense of humor (sometimes a
                little dark). I take constructive criticism well and I learn
                from my mistakes.
              </p>
              <p>
                I'll share with you some of my interests and hobbies in the
                section below!
              </p>
            </div>
          </div>
          <div className="img-wrapper">
            <img src={selfie} alt="selfie" />
          </div>
        </div>
      </div>
      <Interests />
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  .header {
    display: grid;
    justify-content: center;
    padding-top: 3rem;
  }

  .header-info {
    p {
      color: var(--color-lighter);
      font-size: 1rem;
      font-family: var(--font-roboto);
    }
  }

  @media screen and (min-width: 600px) {
    .header-info {
      p {
        font-size: 1.05rem;
      }
    }
  }

  @media screen and (min-width: 768px) {
    .header-info {
      p {
        font-size: 1.1rem;
      }
    }
  }

  .header {
    img {
      display: none;
    }
  }

  @media screen and (min-width: 992px) {
    .center {
      width: 80vw;
    }
    .img-wrapper {
      border-radius: 15px;
      padding-top: 5rem;
      display: flex;
      justify-content: center;
    }
    .header {
      padding-top: 4rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      img {
        display: block;
        border-radius: 15px;
        height: 400px;
      }
    }
    .header-info {
      p {
        font-size: 1.2rem;
      }
    }
  }

  @media screen and (min-width: 1200px) {
    .img-wrapper {
      padding-top: 3rem;
    }
    .header {
      img {
        height: 500px;
      }
    }
    .header-info {
      p {
        font-size: 1.3rem;
      }
    }
  }

  .paragraph {
    margin-top: 3rem;
  }

  .center {
    min-height: calc(100vh - 3.7rem - 7.5rem);
  }

  .background-wrapper {
    min-height: 100vh;
    width: 100%;
    top: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
      url(${background}) center/cover no-repeat;
    position: fixed;
    z-index: -1;
  }

  .nav-bar {
    height: 3.7rem;
    width: 100%;
  }
`;

export default AboutPage;
