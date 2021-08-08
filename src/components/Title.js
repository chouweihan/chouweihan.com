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
    font-weight: 400;
    text-transform: capitalize;
  }

  .underline {
    width: 15vw;
    height: 2px;
    background-color: var(--color-gold);
  }
`;

export default Title;
