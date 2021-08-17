import React from "react";
import styled from "styled-components";
import { Contact } from "../components";
import video from "../assets/video.mp4";

const ContactPage = () => {
  return (
    <PageWrapper>
      <div className="nav" />
      <video className="videoTag" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <Contact page={true.toString()} />
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  .videoTag {
    position: fixed;
    display: block;
    margin: 0 auto;
    top: 0;
    left: 0;
    z-index: -1;
    min-width: 100vw;
    min-height: 100vh;
    object-fit: cover;
  }
`;

export default ContactPage;
