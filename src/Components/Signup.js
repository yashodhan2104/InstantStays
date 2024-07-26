import React from "react";
import styled from "styled-components";
import { BsGoogle } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const Signup = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const createUser = (event) => {
    event.preventDefault();
    try {
      createUserWithEmailAndPassword(auth, email, password).then(() => {
        alert("Success!");
        navigate("/");
      });
    } catch (error) {
      alert(error);
      toast(error.code, { type: "error" });
    }
  };

  const signupWithGoogle = () => {
    signInWithPopup(auth, googleProvider);
    setTimeout(() => {
      navigate("/");
    }, 5000);
  };

  return (
    <>
      <SignupScreen id="signupscreen">
        <SignupCard>
          <SignupLeft>
            <img src="/Images/signup.webp" alt="" />
          </SignupLeft>
          <SignupRight>
            <h1>Sign Up!</h1>
            <p style={{ marginBottom: "1rem" }}>Enter your details below</p>
            <SignUpGoogle id="signupgoogle" onClick={signupWithGoogle}>
              <BsGoogle />
              <h4>Sign up via Google</h4>
            </SignUpGoogle>
            <SignUpFacebook id="signupfacebook">
              <BsFacebook />
              <h4>Sign up via Facebook</h4>
            </SignUpFacebook>
            <hr
              style={{
                border: "2px solid #808080",
                margin: "8px 0",
                // backgroundColor: "#808080",
              }}
            />
            <InputText>
              <input
                type="text"
                placeholder="Enter first name..."
                value={fname}
                name="firstName"
                onChange={(e) => setFname(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter last name..."
                value={lname}
                name="lastName"
                onChange={(e) => setLname(e.target.value)}
              />
              <input
                type="email"
                placeholder="Enter email..."
                value={email}
                name="emailSend"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                id="password"
                placeholder="Enter password..."
                value={password}
                name="passwordSend"
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputText>
            <AlreadyMemberLogin>
              <p>
                Already a member
                <span>
                  <Link to="/login">Login</Link>
                </span>
              </p>
            </AlreadyMemberLogin>

            <SignupBtn onClick={createUser}>Sign up!</SignupBtn>
          </SignupRight>
        </SignupCard>
      </SignupScreen>
    </>
  );
};

export default Signup;
const SignupScreen = styled.div`
  // padding: 4rem;
  overflow-x: none;
`;
const SignupCard = styled.div`
  width: 100%;
  // border: 2px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 2rem 0;
  // background-image: linear-gradient(to bottom right, #ffdbac, #b69e7e);
  background-image: linear-gradient(
    to bottom right,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0.8)
  );
  color: #fff;
  overflow-x: hidden;
  // height: 100vh;
  gap: 1.5rem;
`;
const SignupLeft = styled.div`
  height: 70vh;
  @media screen and (max-width: 515px) {
    height: 60vh;
  }
`;
const SignupRight = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
  gap: 0.5rem;
  width: 50%;
  // background-image: linear-gradient(to bottom right, #ffdbac, #b69e7e);
  padding: 2rem;
  @media screen and (max-width: 892px) {
    width: 75%;
  }
  @media screen and (max-width: 515px) {
    width: 100%;
  }
  h1,
  p {
    @media screen and (max-width: 892px) {
      text-align: center;
    }
  }
  #signupgoogle,
  #signupfacebook {
    @media screen and (max-width: 892px) {
      width: 100%;
      justify-content: center;
    }
  }
`;
const SignupBtn = styled.button`
  /* cursor: pointer;
  width: 100%; 
  border: 2px solid #fff; 
  background-color: #fff;
  border-radius: 10px;
  padding: 12px 0;
  margin: 1rem 0;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1.2px;
  font-size: 1rem;
  transition: all 0.3s ease;
  :hover {
    background-color: #000;
    color: #fff;
    box-shadow: 0 1px 10px 1px #000;
    transform: translateY(-5px);
  }*/

  cursor: pointer;
  width: 100%;
  border: 2px solid #fff;
  padding: 10px 25px;
  margin: 20px 0;
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
    transform: translate(-1px, 13px) rotateZ(2deg);
    width: 100%;
  }
`;
const SignUpGoogle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 2px solid #dd4b39;
  color: #dd4b39;
  padding: 10px;
  border-radius: 15px;
  gap: 0.75rem;
  width: 14rem;
  transition: all 300ms ease-in;
  cursor: pointer;
  :hover {
    background-color: #dd4b39;
    color: #fff;
  }
`;
const SignUpFacebook = styled(SignUpGoogle)`
  border: 2px solid #3b5998;
  color: #3b5998;
  margin-bottom: 1rem;
  :hover {
    background-color: #3b5998;
    color: #fff;
  }
`;
const InputText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 1rem 0;
  input[type="text"],
  input[type="email"],
  input[type="password"] {
    padding: 12px 10px;
    border: 3px solid white;
    border-radius: 15px;
    transition: all 300ms;
    outline: none;
    width: 100%;
    font-weight: bold;
    letter-spacing: 1.1px;
    ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: rgba(000, 000, 000, 1);
      font-weight: 500;
      opacity: 1; /* Firefox */
    }
    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: rgba(000, 000, 000, 1);
      font-weight: 600;
      opacity: 1;
    }
    ::-ms-input-placeholder {
      /* Microsoft Edge */
      color: rgba(000, 000, 000, 1);
      font-weight: 600;
      opacity: 1;
    }
  }

  input[type="text"]:focus,
  input[type="email"]:focus,
  input[type="password"]:focus {
    border: 3px solid #ff7f25;
    // border: 2px solid #fff;
  }
`;

const AlreadyMemberLogin = styled.div`
  p {
    text-align: center;
    span {
      margin-left: 6px;
      text-decoration: underline;
      a {
        text-decoration: none;
        color: #fff;
        font-weight: bold;
      }
    }
  }
`;
