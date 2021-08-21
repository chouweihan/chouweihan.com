import React from "react";
import styled, { css } from "styled-components";

const Title = ({ color, children }) => {
  return (
    <TitleWrapper color={color}>
      <h1>{children}</h1>
      <div className="underline"></div>
    </TitleWrapper>
  );
};

const TitleWrapper = styled.div`
  display: grid;
  place-items: center;
  color: var(--color-logo-dark);

  ${({ color }) =>
    color &&
    css`
      color: var(--color-logo);
    `}

  h1 {
    margin: 0;
    margin-bottom: 0.6rem;
    font-size: 2.5rem;
    font-weight: 500;
    text-transform: capitalize;
    white-space: nowrap;
  }

  .underline {
    width: 25vw;
    height: 2px;
    background-color: var(--color-gold);
  }

  @media screen and (min-width: 768px) {
    .underline {
      width: 20;
    }

    h1 {
      font-size: 3rem;
    }
  }

  @media screen and (min-width: 1200px) {
    .underline {
      width: 13vw;
    }

    h1 {
      font-size: 3.5rem;
    }
  }
`;

export default Title;
