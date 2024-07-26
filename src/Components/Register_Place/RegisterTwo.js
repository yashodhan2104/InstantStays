import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import RegisterThree from "./RegisterThree";
import { useState } from "react";

const RegisterTwo = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Container>
        <InnerContainer>
          <Heading id="heading">
            <strong>Stage 2</strong> <span>of 4</span>
          </Heading>
          <Form id="form">
            <form method="POST">
              <Inputs id="forms">
                {/* Aadhar Number */}
                <Input>
                  <label htmlFor="">aadhar</label>
                  <input type="text" />
                </Input>

                {/* upload aadhar image */}
                <Input>
                  <label htmlFor="">upload aadhar</label>
                  <input type="file" name="filename" id="myfile" />
                </Input>

                {/* Warning message */}
                <Warning>
                  <p>
                    The file dormat should only be in <strong>.jpg</strong> or{" "}
                    <strong>.png</strong> format{" "}
                  </p>
                </Warning>

                {/* upload latest electric bill */}
                <Input>
                  <label htmlFor="">upload latest electric bill</label>
                  <input type="file" name="filename" id="myfile" />
                </Input>
                <Link to="">
                  <button type="button" onClick={() => setShow(!show)}>
                    Continue
                  </button>
                </Link>
              </Inputs>
            </form>
            {show && <RegisterThree />}
          </Form>
        </InnerContainer>
      </Container>
    </>
  );
};

export default RegisterTwo;
const Container = styled.div`
  background: black;
  color: #fff;
`;
const InnerContainer = styled.div`
  //   width: 85%;
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
  width: 100%;
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
  input[type="file"] {
    width: 280px;
    height: fit-content;
    max-width: 100%;
    color: #444;
    padding: 5px;
    background: #fff;
    border-radius: 10px;
    border: 1px solid #555;
  }
  input[type="file"]::file-selector-button {
    margin-right: 20px;
    border: none;
    background: #084cdf;
    padding: 10px 20px;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    transition: background 0.2s ease-in-out;
  }

  input[type="file"]::file-selector-button:hover {
    background: #0d45a5;
  }
`;
const Warning = styled.div`
  display: flex;
  justify-content: center;
  p {
    text-align: center;
    padding: 10px 15px;
    box-shadow: inset 0 2px 10px 0 #000;
    background-color: #eb0707;
    border-radius: 10px;
  }
`;
