import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsHouseDoorFill } from "react-icons/bs";
import HeroCard from "./HeroCard";
// import { useAuth0 } from "@auth0/auth0-react";
import { app } from "..//firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Footer from "./Footer";

const auth = getAuth(app);

const Home = () => {
  // const { user, isAuthenticated, isLoading } = useAuth0();
  const [user, setUser] = useState(null);
  const [userDisplayName, setUserDisplayName] = useAuthState(auth);

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

  return (
    <>
      <Container>
        <MainContainer id="mainContainer">
          <RowOne>
            <Link to="/searchbar" id="searchbar">
              <input
                id="searchInput"
                type="text"
                placeholder="Search destination..."
              />
            </Link>
            {user !== null ? (
              <Link
                to="/register"
                style={{
                  width: "100%",
                  display: "flex",
                  textDecoration: "none",
                }}
              >
                <Btn>
                  <button id="btn">
                    <BsHouseDoorFill />
                    Register Place
                  </button>
                </Btn>
              </Link>
            ) : (
              <div></div>
            )}
          </RowOne>
          {user !== null ? (
            <RowTwo>
              <h2>Hi {user.displayName || user.email}</h2>
            </RowTwo>
          ) : (
            <RowTwo>
              <h2>Hello Guest</h2>
            </RowTwo>
          )}

          <RowThree>
            <HeroCard />
          </RowThree>
        </MainContainer>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
const Container = styled.div`
  width: 100%;
  padding: 4rem 2rem;
  background-color: #000;
  position: relative;
`;
const MainContainer = styled.div`
  width: 100%;
  /* background: linear-gradient( 
    152deg,
    rgba(255, 105, 0) 0%,
    rgba(241, 102, 5) 10%,
    rgba(255, 106, 0) 25%,
    rgba(246, 104, 3) 25%, 
    rgba(255, 105, 0) 25%,
    rgb(0, 0, 0) 80%
  );*/
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
  border-radius: 25px;
  display: block;
  padding: 3rem 0;
  box-shadow: 2px 2px 15px 0 rgba(255, 105, 0, 0.7),
    -2px -2px 20px 0 rgba(255, 105, 0, 0.7);
`;
const RowOne = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 12fr 3fr;
  grid-gap: 4rem;
  :first-child {
    justify-items: flex-end;
  }
  :nth-child(2) {
    justify-items: flex-start;
  }
  a {
    width: 80%;
    height: fit-content;
    input {
      width: 100%;
      border-radius: 20px;
      outline: none;
      border: none;
      padding: 1rem;
      font-weight: bold;
      letter-spacing: 1.2px;
      ::placeholder {
        color: #000;
        padding-left: 5px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    jusitfy-content: center;
    gap: 0.5rem;
    grid-template-columns: 8fr 6fr;
    margin: 0 10px;
    :first-child {
      justify-items: flex-start;
    }
    #searchbar {
      width: 100%;
    }
    #searchInput {
    }
  }
  @media screen and (max-width: 550px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    grid-template-columns: 8fr 6fr;
    margin: 0 10px;
    a {
      margin: 10px 0;
    }
  }
`;
const Btn = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  button {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.5);
    height: 60px;
    width: 200px;
    background-color: #fff;
    border: 2px solid #fff;
    border-radius: 10px;
    font-size: 1.2rem;
    letter-spacing: 0.5px;
    font-weight: bold;
    position: relative;
    transition: all 250ms ease;
    z-index: 9;
    ::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      border: 2px solid #fff;
      border-radius: 10px;
      z-index: -1;
      left: -1px;
      top: 0;
      transition: all 250ms ease;
    }
    :hover::after {
      left: 3px;
      top: 2px;
    }
    :hover {
      transform: translate(-4px, -4px);
    }
  }
  @media screen and (max-width: 550px) {
    #btn {
      width: 100%;
    }
  }
`;
const RowTwo = styled.div`
  padding-left: 3rem;
  margin: 2rem 0;
  color: #fff;
  font-weight: bold;
  h2 {
    font-size: 2.2rem;
    letter-spacing: 1px;
  }
  @media screen and (max-width: 777px) {
    h2 {
      font-size: 2rem;
    }
  }
  @media screen and (max-width: 599px) {
    padding-left: 2rem;
    h2 {
      font-size: 1.8rem;
    }
  }
  @media screen and (max-width: 500px) {
    h2 {
      font-size: 1.5rem;
    }
  }
  @media screen and (max-width: 436px) {
    h2 {
      font-size: 1.4rem;
    }
  }
  @media screen and (max-width: 378px) {
    h2 {
      font-size: 1.2rem;
    }
  }
`;

const RowThree = styled.div``;

const LoginSignUp = styled.div`
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    a {
      text-decoration: none;
      color: #000;
      font-weight: bold;
    }
  }
  .btn {
    text-decoration: none;
    padding: 10px 25px;
    font-size: 1.25rem;
    position: relative;
    margin: 0;
    cursor: pointer;
    border: none;
  }
  #logout {
    background: #000;
    color: #fff;
    border-radius: 30px;
    transition: transform 300ms ease, box-shadow 300ms ease;
    :hover {
      box-shadow: 0 2px 10px 0 #000;
      transform: translate(-4px, -4px);
    }
  }
  @media screen and (max-width: 768px) {
    // display: none;
  }
`;
const Login = styled.div`
  border: 2px solid #000;
  padding: 10px 25px;
  border-radius: 10px;
  background-color: #000;
  color: #fff;
  position: relative;
  transition: all 250ms ease;
  z-index: 9;
  ::after {
    content: "";
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    transform: translateY(0px);
    border-radius: inherit;
    z-index: -10;
    transition: all 250ms ease;
  }
  :hover {
    box-shadow: 0 2px 10px 0 #000;
    // transform: translate(0px, 0px) rotate(0deg);
    background-color: transparent;
  }
  :hover::after {
    transform: translate(2px, 4px) rotateZ(4deg);
    width: 105%;
  }
`;
const Signup = styled(Login)``;

/* 
  Main content me jaega background-image: linear-gradient(
    to bottom right, 
    rgba(255, 105, 0, 1) 2%,
    rgba(241, 102, 5, 0.61),
    rgba(243, 103, 4, 0.49),
    rgba(246, 104, 3, 0.39),
    rgba(0, 0, 0, 1)
  );
  // rgba(255, 105, 0, 0)
  */
