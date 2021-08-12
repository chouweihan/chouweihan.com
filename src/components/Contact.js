import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Title, DraftJS } from "./";
import { useContactContext } from "../context-reducers/contact-context";

const Contact = () => {
  const { sendEmail, emailLoading, response, error, success } =
    useContactContext();
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [confirm, setConfirm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirm(true);
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    sendEmail(title, email);
    console.log(response, error);
    if (response && response.status === 200) {
      setTitle("");
      setEmail("");
    }
    setConfirm(false);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setConfirm(false);
  };

  return (
    <Wrapper className="section">
      <div
        className={`loading-container ${emailLoading ? "loading-active" : ""}`}
      >
        <div className="loading" />
      </div>
      <Title>Contact</Title>
      <div className="center">
        <div className="contact-info">info placeholder</div>
        <div className="form-container">
          <form className="form">
            <div className="inputs">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <DraftJS />
            <div className="error-msg">
              <p>error message placeholder</p>
            </div>
            <div className="button-container">
              <button
                className={`submit-button ${confirm ? "inactive" : "active"}`}
                onClick={handleSubmit}
              >
                send
              </button>
              <button
                className={`submit-button ${confirm ? "active" : "inactive"}`}
                type="submit"
                onClick={handleConfirm}
              >
                confirm
              </button>
              <button
                className={`submit-button ${confirm ? "active" : "inactive"}`}
                onClick={handleCancel}
              >
                cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--color-background);
  position: relative;

  .loading-container {
    display: none;
    position: absolute;
    width: 100%;
    top: 0;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 500;
  }

  .loading-active {
    display: grid;
    place-items: center;
  }

  .active {
    display: block;
  }

  .inactive {
    display: none;
  }

  .center {
    padding-top: 3rem;
  }

  .inputs {
    display: flex;
    flex-direction: column;
    border-top: 2px solid var(--color-gold);
    border-right: 2px solid var(--color-gold);
    border-left: 2px solid var(--color-gold);
  }

  input {
    background-color: var(--color-logo-dark);
    padding: 1rem 1rem;
    color: var(--color-background);
    border: none;
    font-size: 1.5rem;
  }

  input::placeholder {
    color: var(--color-gold);
    font-size: 1rem;
    opacity: 1;
  }
  .contact-info {
    width: 100%;
    margin-bottom: 3rem;
  }

  .button-container {
    display: flex;
  }

  .submit-button {
    margin-right: 1rem;
    min-width: 5rem;
    margin-top: 1rem;
    padding: 0.5rem 0.6rem;
    background: transparent;
    border: 1px solid var(--color-logo-dark-2);
    color: var(--color-logo-dark-2);
    font-size: 1rem;
    transition: var(--transition);
    :hover {
      background-color: #ff5;
    }
  }
  @media screen and (min-width: 992px) {
    .center {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
`;

export default Contact;
