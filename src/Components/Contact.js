import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../firebase";
import Footer from "./Footer";

const firestore = getFirestore(app);
const auth = getAuth(app);

const Contact = () => {
  const [details, setDetails] = useState({});
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // yes you are logged in
        setUser(user);
        console.log("You are logged in");
      } else {
        // user logged out
        console.log("You are logged out");
        setUser(null);
      }
    });
  }, []);

  let navigate = useNavigate();
  const submitDetails = (e) => {
    alert("Details submitted succesfully!");
    navigate("/");
  };
  return (
    <>
      <Container>
        <InnerContainer>
          <Heading>
            <h1>contact us</h1>
          </Heading>
          <Cont>
            <Left>
              <form action="" method="get">
                <Inputs>
                  <InputOne>
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      minLength={4}
                      maxLength={50}
                      required
                      placeholder="Enter your name..."
                    />
                  </InputOne>
                  <InputOne>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      minLength={10}
                      maxLength={50}
                      required
                      placeholder="Enter your email..."
                    />
                  </InputOne>
                  <InputOne>
                    <label htmlFor="Message">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="10"
                      placeholder="Enter your message..."
                    ></textarea>
                  </InputOne>
                </Inputs>
              </form>
            </Left>
            <Right>
              <Phnumber>
                <BsFillTelephoneFill />
                <h2>Phone Number</h2>
                <a href="tel:9524755711">+91 9730556126</a>
              </Phnumber>
              <Email>
                <FiMail />
                <h2>Email</h2>
                <a href="mailto: vednande10@gmail.com">
                  instantstays@gmail.com
                </a>
              </Email>
            </Right>
          </Cont>
          <Btn onClick={submitDetails}>
            <button>Submit </button>
          </Btn>
        </InnerContainer>
      </Container>
      <Footer />
    </>
  );
};

export default Contact;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 4rem 2rem;
  color: #fff;
  /* background-image: linear-gradient(
      90deg,
      rgba(208, 119, 15, 0.96) 0%,
      rgba(210, 126, 27, 0) 100%
    ),
    linear-gradient(rgb(210, 126, 27), rgba(209, 121, 18, 0.51)),
    linear-gradient(to right, rgba(239, 2, 2, 0.2), rgba(239, 2, 2, 0.4)),
    linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5));*/
  background: #000;
`;
const InnerContainer = styled.div`
  padding: 4rem 0;
  border-radius: 20px;
  /* background: linear-gradient(
    155.82deg,
    rgba(235, 101, 7, 0.864107) 0%,
    #ff6900 0%, 
    #ff6900 0.01%,
    rgba(241, 102, 5, 0.619838) 4.64%,
    rgba(243, 103, 4, 0.499167) 10.83%,
    rgba(246, 104, 3, 0.390893) 29.64%,
    rgba(255, 105, 0, 0) 95.91%
  );*/
  background-image: linear-gradient(rgba(239, 2, 2, 0.4), rgba(239, 2, 2, 0.2)),
    linear-gradient(
      rgba(235, 101, 7, 0.9),
      rgba(255, 105, 0, 0.8),
      rgba(255, 105, 0, 0.7),
      rgba(241, 102, 5, 0.62),
      rgba(243, 103, 4, 0.5),
      rgba(246, 104, 3, 0.39)
    ),
    linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5));
  box-shadow: 2px 2px 15px 0 rgba(255, 105, 0, 0.7),
    -2px -2px 20px 0 rgba(255, 105, 0, 0.7);
`;
const Heading = styled.div`
  h1 {
    text-transform: capitalize;
    text-align: center;
    font-size: 2.5rem;
    letter-spacing: 1.1px;
  }
`;
const Cont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 2rem 0 4rem 0;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    gap: 4rem;
    padding: 2rem 1rem 4rem 1rem;
  }
`;
const Left = styled.div`
  border-right: 2px solid #fff;
  padding-right: 4rem;
  width: 55%;
  @media screen and (max-width: 1000px) {
    border-right: none;
    padding: 0 0 4rem 0;
    border-bottom: 2px solid #fff;
    width: 100%;
  }
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;
const Phnumber = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  a {
    text-decoration: none;
    color: #fff;
    font-size: 1.25rem;
  }
`;
const Email = styled(Phnumber)``;
const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const InputOne = styled.div`
  display: flex;
  flex-direction: column;
  label {
    padding: 10px;
    font-size: 1.4rem;
    font-weight: 700;
    letter-spacing: 1px;
  }
  input {
    outline: none;
    border: 2px solid transparent;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 20px;
    height: 31px;
    color: #fff;
    padding: 20px 0 20px 20px;
    transition: all 150ms ease-in;
    font-weight: 600;
    font-size: 0.9rem;
    :focus {
      border: 2px solid #fff;
      background-color: rgba(0, 0, 0, 0.5);
    }
    ::placeholder {
      font-weight: 600;
      color: #e0dfdf;
      letter-spacing: 1.1px;
    }
  }
  textarea {
    outline: none;
    border: 2px solid transparent;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 20px;
    color: #fff;
    padding: 10px 20px;
    transition: all 150ms ease-in;
    font-weight: 600;
    font-size: 0.9rem;
    :focus {
      border: 2px solid #fff;
      background-color: rgba(0, 0, 0, 0.5);
    }
    ::placeholder {
      font-weight: 600;
      color: #e0dfdf;
      letter-spacing: 1.05px;
    }
  }
`;
const Btn = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: center;
  button {
    cursor: pointer;
    font-size: 1.5rem;
    letter-spacing: 1px;
    border-radius: 20px;
    background-color: #ff7f25;
    border: none;
    font-weight: bold;
    width: 400px;
    padding: 0.9rem 0;
    box-shadow: 0 0 10px #ff7f25;
    transition: all 300ms ease-out;
    :hover {
      background-color: #000;
      box-shadow: 0 0 10px #fff;
      color: #fff;
    }
  }*/
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    cursor: pointer;
    width: 400px;
    border: 2px solid #fff;
    padding: 10px 25px;
    border-radius: 10px;
    background-color: #ddd;
    color: #000;
    position: relative;
    transition: all 250ms ease;
    z-index: 9;
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 1px;
    ::after {
      content: "";
      position: absolute;
      background-color: #ddd;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      transform: translateY(0px);
      border-radius: inherit;
      z-index: -10;
      transition: all 250ms ease;
    }
    :hover {
      // transform: translate(0px, 0px) rotate(0deg);
      box-shadow: rgb(255, 255, 255) 0px 2px 10px 0px;
      background-color: transparent;
      border: 2px solid #fff;
    }
    :hover::after {
      box-shadow: rgb(255, 255, 255) 0px 2px 10px 0px;
      transform: translate(0px, 7px) rotateZ(2deg);
      width: 100%;
    }
    @media screen and (max-width: 500px) {
      width: 90%;
    }
  }
`;
