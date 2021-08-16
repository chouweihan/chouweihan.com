import React from "react";
import styled from "styled-components";
import { Contact } from "../components";

const ContactPage = () => {
  return (
    <PageWrapper>
      <div className="nav" />
      <Contact page={true} />
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  background-color: var(--color-background);
  width: 100%;
`;

export default ContactPage;
