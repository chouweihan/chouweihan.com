import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Title, DraftJS } from "./";
import { useContactContext } from "../context-reducers/contact-context";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const Contact = () => {
  const { sendEmail, emailLoading, emailResponse, html } = useContactContext();
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [error, setError] = useState("");
  const [snack, setSnack] = useState(false);
  const [snackText, setSnackText] = useState("");

  const copyToClipBoard = (text) => {
    navigator.clipboard.writeText(text);
    showSnack("copied to clipboard");
  };

  const showSnack = (message) => {
    setSnack(true);
    setSnackText(message);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSnack(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [snack]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirm(true);
  };

  const handleConfirm = async (e) => {
    e.preventDefault();
    setConfirm(false);
    sendEmail();
    const emailBody = {
      subject: subject,
      email: email,
      body: html,
    };

    axios
      .post(process.env.REACT_APP_MAIL_URL, emailBody)
      .then((res) => {
        if (res && res.status === 200) {
          setSubject("");
          setEmail("");
          emailResponse(true, res);
          showSnack("email sent!");
        } else {
          setError("Something went wrong, sorry :3");
          emailResponse("Something went wrong, Please try again later");
        }
      })
      .catch((err) => {
        const { response } = err;
        if (response && response.status === 400) {
          setError(response.data.err);
          showSnack(response.data.err);
        } else {
          setError("Something went wrong, sorry :3");
        }
        showSnack("Something went wrong, Please try again later");
        emailResponse();
      });
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setConfirm(false);
  };

  return (
    <Wrapper className="section">
      <div id="snackbar" className={`${snack ? "show" : ""}`}>
        {snackText}
      </div>
      <div
        className={`loading-container ${emailLoading ? "loading-active" : ""}`}
      >
        <div className="loading" />
      </div>
      <div className="center">
        <div className="contact-info">
          <Title>Contact</Title>
          <div className="info-center">
            <p>
              Contact me via email, phone or text. <br />
              or use my custom mailer right here!
              <br /> I will try to respond within 24 hours
            </p>
            <div className="contact-data">
              <p onClick={() => copyToClipBoard("chouweihan@gmail.com")}>
                <span className="fa-fw">
                  <AiOutlineMail />
                </span>{" "}
                chouweihan@gmail.com
              </p>
              <p onClick={() => copyToClipBoard("6049927988")}>
                <span className="fa-fw">
                  <AiOutlinePhone />
                </span>{" "}
                604-992-7988
              </p>
            </div>
          </div>
        </div>
        <div className="form-container">
          <form className="form">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />

            <DraftJS />
            <div className="error-msg">
              <p>{error}</p>
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

  .form {
    display: grid;
    gap: 1.5rem;
  }

  input {
    background-color: white;
    padding: 0.8rem 1rem;
    color: var(--color-logo-dark);
    border: none;
    box-shadow: var(--custom-shadow-2);
    border-radius: 5px;
    font-family: var(--font-roboto);
    font-size: 1.1rem;
  }

  input::placeholder {
    color: var(--color-logo-dark-a);
    font-size: 1rem;
    opacity: 1;
  }

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

  .contact-info {
    .info-center {
      padding-top: 3rem;
      display: grid;
      place-content: center;
    }
    p {
      font-weight: 300;
      margin: 0;
      padding: 0;
      text-align: center;
      color: var(--color-logo-dark);
      font-size: 1.3rem;
    }
  }

  .contact-data {
    margin-top: 2rem;
    p {
      display: flex;
      vertical-align: middle;
      font-size: 1.3rem;
      padding: 0.5rem;
      padding: 0;
      padding-bottom: 0.8rem;
      text-align: left;

      transition: var(--transition);
      :hover {
        color: var(--color-gold-dark);
      }
    }
    span {
      padding: 0;
      font-size: 1.4rem;
      margin: 0;
      margin-right: 1.3rem;
      display: flex;
      align-items: center;
    }
  }

  .center {
    padding-top: 0;
  }

  @media screen and (min-width: 768px) {
    .info-center {
      grid-template-columns: auto 1fr;
      gap: 2rem;
      place-items: center;
    }

    .contact-data {
      padding-left: 2.5rem;
      padding-top: 0.5rem;
      margin-top: 0;
    }
  }

  @media screen and (min-width: 992px) {
    padding: 6rem 0;

    input {
      padding: 0.9rem 1.1rem;
      font-size: 1.2rem;
    }

    input::placeholder {
      font-size: 1.1rem;
    }

    .center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
    }

    .contact-info {
      .info-center {
        grid-template-columns: auto;
        padding-top: 2rem;
        gap: 0;
        place-items: inherit;
      }
      p {
        font-size: 1.5rem;
      }
    }
    .contact-data {
      margin-top: 3rem;
      padding-left: 0;
      p {
        font-size: 1.5rem;
        margin-bottom: 1rem;
      }
      span {
        font-size: 1.8rem;
        margin-right: 1.5rem;
      }
    }
  }
`;

export default Contact;
