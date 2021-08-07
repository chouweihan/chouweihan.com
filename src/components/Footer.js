import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <h1>Footer</h1>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  color: var(--color-light);
  height: 10rem;
  width: 100vw;
  background-color: var(--color-logo-dark-2);
  display: grid;
  place-items: center;
`;

export default Footer;
