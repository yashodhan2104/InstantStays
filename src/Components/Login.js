import React, { useState } from "react";
import styled from "styled-components";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";
// import LoginText from "./LoginText";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const signinUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => {
        alert("Success");
        navigate("/");
      })
      .catch((err) => alert(err));
  };
  const loginWithGoogle = () => {
    signInWithPopup(auth, googleProvider);
    navigate("/");
  };

  return (
    <>
      <Container>
        {/* <h2>Welcome to InstantStays</h2>
        <h3>Register your account</h3> */}
        {/* <RectOne></RectOne>
        <RectTwo></RectTwo>
        <RectThree></RectThree> */}
        <LoginMain id="loginmain">
          <LoginLeft id="loginleft">
            <LoginImg>
              <img src="Images/userlogin.webp" alt="" />
            </LoginImg>
          </LoginLeft>
          <LoginRight id="loginright">
            <LoginCard id="logincard">
              <h2>Welcome to InstantStays</h2>
              <h3>Register your account</h3>
              <label htmlFor="">Enter your email</label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <label
                htmlFor=""
                style={{
                  marginTop: "2rem",
                }}
              >
                Enter your password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <LoginWithGoogle onClick={loginWithGoogle}>
                <BsGoogle />
                <h4>Login via Google</h4>
              </LoginWithGoogle>
              <button class="button-86" role="button" onClick={signinUser}>
                Login me
              </button>
            </LoginCard>
          </LoginRight>
        </LoginMain>
      </Container>
    </>
  );
};

export default Login;

const Container = styled.div`
  height: 100vh;
  background-color: rgba(0, 0, 0, 1);
  color: #000;
  position: relative;
  overflow-x: hidden;
  // overflow-y: hidden;
  width: 100%;
  margin: 0 auto;
`;
const RectOne = styled.div`
  position: absolute;
  width: 372px;
  height: 407px;
  background-color: rgba(255, 127, 37, 0.6);
  top: -6%;
  left: 0;
  transform: translate(-14rem) rotateZ(45deg);
`;
const RectTwo = styled.div`
  position: absolute;
  width: 372px;
  height: 407px;
  background-color: rgba(221, 75, 57, 0.6);
  bottom: -22%;
  transform: rotate(-30deg);
  left: 40%;
`;
const RectThree = styled.div`
  position: absolute;
  width: 372px;
  height: 550px;
  background-color: rgba(243, 103, 4, 0.5);
  transform: translate(4rem) rotate(-30deg);
  right: -10%;
  top: 7%;
`;
const LoginMain = styled.div`
  position: relative;
  z-index: 90;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 2rem;
  margin: 3rem 0;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;
const LoginLeft = styled.div``;
const LoginRight = styled.div`
  width: 100%;
  h2 {
    text-align: center;
    margin-top: 3rem;
    font-size: 2rem;
  }
  h3 {
    text-align: center;
    margin-bottom: 3rem;
  }
`;
const LoginImg = styled.div`
  img {
    // height: 100vh;
    width: 90vh;
    object-fit: contain;
    background: rgba(0, 0, 0, 0.95);
    @media screen and (max-width: 1200px) {
      width: 75vh;
    }
    @media screen and (max-width: 1000px) {
      width: 60vh;
    }
    @media screen and (max-width: 500px) {
      width: 50vh;
    }
  }
`;
const LoginCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  color: #fff;
  :nth-child(odd) {
    align-items: flex-start;
    font-weight: bold;
    letter-spacing: 1.2px;
    font-size: 1.2rem;
    @media screen and (max-width: 1000px) {
      align-items: center;
    }
  }
  input {
    padding: 7.5px 10px;
    outline: none;
    border: 4px solid #000;
    border-radius: 10px;
    width: 80%;
    // margin-bottom: 2.5rem;
    font-weight: 600;
    font-size: 0.9rem;
    transition: all 250ms ease;
    :focus {
      border: 4px solid rgba(255, 105, 0, 1);
    }
  }
  .button-86 {
    all: unset;
    width: 75%;
    height: 30px;
    font-size: 1.2rem;
    text-transform: uppercase;
    background: transparent;
    border: none;
    position: relative;
    color: #000;
    cursor: pointer;
    z-index: 1;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  .button-86::after,
  .button-86::before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -99999;
    transition: all 0.4s;
  }

  .button-86::before {
    transform: translate(0%, 0%);
    width: 100%;
    height: 100%;
    // background: #28282d;
    background: rgba(255, 255, 255, 0.85);
    border-radius: 10px;
  }

  .button-86::after {
    transform: translate(10px, 10px);
    width: 35px;
    height: 35px;
    background: #ffffff15;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border-radius: 50px;
  }

  .button-86:hover::before {
    transform: translate(5%, 20%);
    width: 110%;
    height: 110%;
  }

  .button-86:hover::after {
    border-radius: 10px;
    transform: translate(0, 0);
    width: 100%;
    height: 100%;
  }

  .button-86:active::after {
    transition: 0s;
    transform: translate(0, 5%);
  }
  #logincard {
    @media screen and (max-width: 1000px) {
    }
  }
`;
const LoginWithGoogle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #dd4b39;
  color: #dd4b39;
  padding: 10px;
  margin: 3rem 0 1.5rem 0;
  border-radius: 15px;
  gap: 0.75rem;
  width: 80%;
  transition: all 220ms linear;
  cursor: pointer;
  :hover {
    background-color: #dd4b39;
    color: #fff;
  }
`;
