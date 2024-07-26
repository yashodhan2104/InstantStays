import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Confirmation = () => {
  return (
    <>
      <Container>
        <InnerContainer>
          <img src="/Images/tick.svg" alt="" />
          <p>Your details have been successfully submitted</p>
          <p>
            Our team will verify and will let you know your verification status
            through E-mail within 48 hours.
          </p>
          <Link to="/">
            <button>Back to Home</button>
          </Link>
        </InnerContainer>
      </Container>
    </>
  );
};

export default Confirmation;
const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(
      to top right,
      rgba(253, 2, 2, 0.15),
      rgba(197, 2, 2, 0.2),
      rgba(0, 0, 0, 0)
    ),
    linear-gradient(
      to bottom right,
      rgba(255, 105, 0, 0.62),
      rgba(255, 105, 0, 0)
    ),
    linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.9));
`;
const InnerContainer = styled.div`
  width: 65%;
  margin: 0 auto;
  padding: 4rem 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  img {
    width: 20%;
  }
  p {
    color: #fff;
    font-weight: 600;
    margin: 1rem 0;
    font-size: 1.4rem;
    text-align: center;
  }
  a { 
    margin-top: 1rem;
    button {
      cursor: pointer;
      background-color: #fff;
      outline: none;
      border: none;
      padding: 15px;
      font-size: 1.4rem;
      font-weight: bold;
      border-radius: 1.1rem;
      transition: all 250ms linear;
      :hover {
        background: transparent;
        outline: solid;
        color: #fff;
        box-shadow: 1px 2px 5px 1px #fff, -1px -2px 5px 1px #fff;
      }
    }
  }
`;
