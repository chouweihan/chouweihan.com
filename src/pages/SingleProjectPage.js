import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useProjectContext } from "../context-reducers/project-context";
import { Link } from "react-router-dom";
import error404 from "../assets/404.png";
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

  const { name, description, categories, type, images, year, links } =
    singleProject;

  return (
    <PageWrapper>
      <div className="nav-bar" />
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  /* background-color: var(--color-background); */
  height: calc(100vh - 7.5rem);

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
