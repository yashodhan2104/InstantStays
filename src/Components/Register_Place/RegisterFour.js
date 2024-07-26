import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const RegisterFour = () => {
  return (
    <>
      <Container>
        <InnerContainer>
          <Heading id="heading">
            <strong>Stage 4</strong> <span>of 4</span>
          </Heading>
          <TaC></TaC>
          <Form id="form">
            <form method="POST">
              <Inputs id="forms">
                {/* upload sealed */}
                <Text id="text">
                  <ol>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facere quasi obcaecati vel consectetur consequuntur
                      facilis. Exercitationem sed doloremque culpa nesciunt.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatum assumenda error quibusdam repudiandae nisi amet
                      quisquam enim commodi dolorem iusto?
                    </li>
                    <li>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Ab, voluptates voluptate! Soluta cumque magnam nostrum.
                    </li>
                  </ol>
                  <Agree>
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      style={{
                        transform: "scale(1.5)",
                      }}
                    />
                    <p>
                      By accepting these Terms & Conditions, You agree to be
                      legally bound by following terms & conditions.
                    </p>
                  </Agree>
                </Text>
                <Link to="/confirmation">
                  <button type="submit">Continue</button>
                </Link>
              </Inputs>
            </form>
          </Form>
        </InnerContainer>
      </Container>
    </>
  );
};

export default RegisterFour;
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
const TaC = styled.div``;
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
        left: -2px;
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
const Text = styled.div`
  ol {
    li {
      margin: 1rem 0;
      font-size: 1.1rem;
      //   letter-spacing: 1.05px;
      padding: 0 0 0 1rem;
    }
  }
`;
const Agree = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
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
