import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
const ComingSoon = () => {
  return (
    <ComingSoonWrapper>
        <div>
            <p>I'm currently working on remaking my personal website</p>
            <p>But you can still visit the old one!</p>
            <Link to="/old" className="dbutton">
                Visit old site
            </Link>
        </div>
    </ComingSoonWrapper>
  )
}

const ComingSoonWrapper = styled.div`
    width: 100%;
    height: calc(100vh - 120px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: var(--color-logo-dark-3);
    
    p {
        color: #fffff0;
        font-size: 20px;
    }

    .dbutton {
        font-size: 20px;
        padding: 10px 20px;
        margin-top: 2rem;
        color: var(--color-logo);
        border: 1px solid var(--color-logo);
        border-radius: 5px;
        background-color: rgba(0, 0, 0, 0.5);
        transition: var(--transition);
        display: inline-block;
    }

  .dbutton:hover {
    color: var(--color-gold);
    border-color: var(--color-gold);
    background-color: var(--color-logo-dark);
  }
`

export default ComingSoon