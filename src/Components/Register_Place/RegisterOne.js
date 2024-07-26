import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import RegisterTwo from "./RegisterTwo";

const RegisterOne = () => {
  const [show, setShow] = useState(false);
  const scrollWindow = () => {
    alert("Data stored! Please scroll down...");
    window.scrollTo(0, 1000);
  };
  const onsubmit = () => {};
  return (
    <>
      <Container>
        <InnerContainer>
          <h1>Register Your Place</h1>
          <Heading id="heading">
            <strong>Stage 1</strong> <span>of 4</span>
          </Heading>
          <Form id="form">
            <form method="POST" onSubmit={onsubmit}>
              <Inputs id="forms">
                <Input>
                  <label htmlFor="">first name</label>
                  <input type="text" required />
                </Input>
                <Input>
                  <label htmlFor="">last name</label>
                  <input type="text" />
                </Input>
                <Input>
                  <label htmlFor="">email</label>
                  <input type="email" />
                </Input>
                <Input>
                  <label htmlFor="">phone number</label>
                  <input type="tel" name="" id="" />
                </Input>
                <Link to="">
                  <button
                    type="button"
                    onClick={() => { 
                      scrollWindow();
                      setShow(!show);
                      // alert("Data stored.. Please scroll down");
                    }}
                  >
                    Continue
                  </button>
                </Link>
              </Inputs>
            </form>
            {show && <RegisterTwo />}
          </Form>
        </InnerContainer>
      </Container>
    </>
  );
};

export default RegisterOne;
const Container = styled.div`
  background: black;
  color: #fff;
`;
const InnerContainer = styled.div`
  width: 85%;
  margin: 0 auto;
  padding: 4rem 0;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Heading = styled.div`
  text-align: center;
  margin: 2rem 0;
  strong {
    font-size: 2rem;
  }
`;
const Form = styled.div`
  width: 50%;
`;
const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  a {
    button {
      position: relative;
      cursor: pointer;
      margin: 2rem 0;
      padding: 0.6rem 0;
      width: 100%;
      border-radius: 25px;
      border: 2px solid #ff7f25;
      background-color: #ff7f25;
      font-weight: 800;
      font-size: 1.25rem;
      transition: all 250ms ease;
      ::after {
        content: "";
        position: absolute;
        left: -1px;
        top: 0;
        border: 2px solid #ff7f25;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        transition: all 250ms ease;
      }
      :hover {
        transform: translate(-4px, -4px);
      }
      :hover::after {
        left: 4px;
        top: 4px;
      }
    }
  }
`;
const Input = styled.div`
  display: flex;
  flex-direction: column;
  label {
    padding: 10px 0;
    font-size: 1.4rem;
    font-weight: 400;
    letter-spacing: 1px;
    color: #bbb5b5;
    text-transform: capitalize;
  }
  input {
    outline: none;
    border: 2px solid transparent;
    background-color: rgba(255, 255, 255);
    border-radius: 10px;
    height: 31px;
    color: #000;
    padding: 20px 0 20px 20px;
    transition: all 150ms ease-in;
    font-weight: 400;
    font-size: 0.9rem;
    letter-spacing: 2.5px;
    :focus {
      border: 2px solid #fff;
      color: #fff;
      background-color: transparent;
    }
  }
`;
