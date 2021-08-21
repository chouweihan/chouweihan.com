import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useProjectContext } from "../context-reducers/project-context";
import { Link } from "react-router-dom";
import error404 from "../assets/404.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { AiOutlineLink, AiOutlineGithub } from "react-icons/ai";

const SingleProjectPage = () => {
  const { getSingleProject, error, singleProject, loading, setLoading } =
    useProjectContext();
  const { id } = useParams();

  useEffect(() => {
    setLoading();
    getSingleProject(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <PageWrapper className="hi">
        <div className="nav-bar" />
        <div className="loading-container">
          <div className="loading" />
        </div>
      </PageWrapper>
    );
  }

  if (error) {
    return (
      <PageWrapper>
        <div className="nav-bar" />
        <div className="background-wrapper" />
        <div className="error-wrapper">
          <div className="error-info">
            <h1>Project Not Found</h1>
            <div className="button-container">
              <Link className="button" to="/projects">
                Back to Projects
              </Link>
            </div>
          </div>
        </div>
      </PageWrapper>
    );
  }

  const {
    name,
    description,
    categories,
    type,
    images,
    year,
    links: { githubLink, hostedLink },
  } = singleProject;

  return (
    <PageWrapper>
      <div className="nav-bar" />
      <div className="center">
        <h1 className="link-h1">
          <Link to="/projects">Projects</Link>
          <span> / {name}</span>
        </h1>
        <div className="content-wrap">
          <div className="carousel-wrapper">
            <Carousel swipeable={true} showStatus={false}>
              {images.map((image, index) => {
                return (
                  <div key={index}>
                    <img src={image} alt={index} />
                  </div>
                );
              })}
            </Carousel>
          </div>
          <div className="project-info">
            <div className="info-heading">
              <h1>{name}</h1>
              <h3>{year}</h3>
            </div>
            <h2>{type} Project</h2>
            <hr />
            <div className="categories">
              {categories.map((category, index) => {
                return <p key={index}>{category}</p>;
              })}
            </div>
            <hr />
            <div className="info-paragraphs">
              {description.map((desc, index) => {
                return (
                  <p key={index} className="paragraph">
                    {desc}
                  </p>
                );
              })}
              <hr />
              <div className="link-container">
                {githubLink && (
                  <a href={githubLink} target="_blank" rel="noreferrer">
                    <p className="link">
                      <span>
                        <AiOutlineGithub />
                      </span>
                      GitHub
                    </p>
                  </a>
                )}
                {hostedLink && (
                  <a href={hostedLink} target="_blank" rel="noreferrer">
                    <p className="link">
                      <span>
                        <AiOutlineLink />
                      </span>
                      Hosted Link
                    </p>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  .categories {
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    p {
      margin-right: 1rem;
      margin-bottom: 1rem;
      color: var(--color-background);
      background-color: var(--color-p-4);
      padding: 0.3rem 0.5rem;
      border-radius: 10px;
      font-weight: 500;
      white-space: nowrap;
    }
  }

  .project-info {
    font-family: var(--font-roboto);
    .info-heading {
      display: flex;
      justify-content: space-between;
      padding-right: 2rem;
      vertical-align: center;
    }
    h1 {
      color: var(--color-p-2);
      font-weight: 400;
    }
    h2 {
      color: var(--color-p-3);
      font-weight: 400;
    }
    h3 {
      font-weight: 300;
      align-self: center;
    }
  }

  .info-paragraphs {
    margin-top: 1rem;
    .paragraph {
      font-size: 0.95rem;
      margin-bottom: 1rem;
    }
  }

  @media screen and (min-width: 992px) {
    .info-paragraphs {
      .paragraph {
        font-size: 1.1rem;
      }
    }
  }

  .link-container {
    margin-top: 1rem;
    display: flex;
  }

  .link {
    margin-right: 3rem;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    color: var(--color-p-4);
    transition: var(--transition);
    span {
      display: flex;
      align-items: center;
      margin-right: 0.5rem;
    }
    :hover {
      color: var(--color-darker);
    }
  }

  .link-h1 {
    font-size: 1.5rem;
    font-family: var(--font-roboto);
    font-weight: 400;
    color: var(--color-darker-2);
    a:link {
      transition: var(--transition);
      color: var(--color-darker-2);
    }
    a:visited {
      color: var(--color-darker-2);
    }
    a:hover {
      color: var(--color-gold);
    }
    span {
      color: var(--color-logo-dark);
    }
  }

  .center {
    display: grid;
    min-height: calc(100vh - 3.7rem - 7.5rem);
    max-width: var(--max-width);
    padding: 2.5rem 0;
    margin: 0 auto;
    grid-template-rows: auto 1fr;
  }

  .content-wrap {
    display: grid;
    gap: 1rem;
    grid-template-rows: auto 1fr;
  }

  .carousel-wrapper {
    margin: 0 auto;
    overflow-y: hidden;
    overflow-x: hidden;
    max-width: 80vw;
  }

  .carousel .slide {
    display: flex;
    justify-content: center;
    background-color: var(--color-logo-dark);
    height: 300px;
  }

  .carousel .slide img {
    object-fit: contain;
    max-height: 300px;
  }

  @media screen and (min-width: 768px) {
    .carousel .slide {
      height: 500px;
    }
    .carousel .slide img {
      max-height: 500px;
    }
  }

  @media screen and (min-width: 992px) {
    .carousel {
      width: 440px;
    }

    .carousel-wrapper {
      width: auto;
      padding-top: 0.7rem;
    }
    .content-wrap {
      grid-template-rows: auto;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
    }
  }

  .loading-container {
    display: grid;
    place-items: center;
    position: absolute;
    width: 100%;
    height: calc(100vh - 7.5rem - 3.7rem);
    padding-bottom: 10rem;
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
  }

  .nav-bar {
    height: 3.7rem;
    background-color: var(--color-logo-dark-2);
  }

  .error-wrapper {
    display: grid;
    place-content: center;
    height: 100%;
    padding-bottom: 5rem;
  }
  .background-wrapper {
    top: 0;
    width: 100%;
    height: 100%;
    background: url(${error404}) center/cover no-repeat;
    position: fixed;
    z-index: -1;
  }

  .error-info {
    display: flex;
    flex-direction: column;
    height: 100%;
    h1 {
      font-family: var(--font-roboto);
    }

    .button-container {
      margin-top: 2rem;
      display: flex;
      justify-content: center;
    }

    .button {
      color: var(--color-logo-dark);
      font-size: 1.3rem;
      text-transform: uppercase;
      font-family: var(--font-roboto);
      background-color: var(--color-background);
      cursor: pointer;
      box-shadow: inset 0 0 0 0 (--color-logo-dark-2);
      -webkit-transition: ease-out 0.4s;
      -moz-transition: ease-out 0.4s;
      transition: ease-out 0.4s;
      letter-spacing: 1px;
      border: 2px solid var(--color-logo-dark);
      padding: 0.7rem 0.9rem;
      border-radius: 5px;
      :hover {
        box-shadow: inset 0 100px 0 0 var(--color-logo-dark-2);
        color: var(--color-background);
      }
    }
  }
`;

export default SingleProjectPage;
