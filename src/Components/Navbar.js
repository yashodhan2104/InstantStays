import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import styled from "styled-components";
// import { useAuth0 } from "@auth0/auth0-react";
import { app } from "..//firebase";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const auth = getAuth(app);

const Navbar = () => {
  // const { loginWithRedirect } = useAuth0();
  // const { logout } = useAuth0();
  // const { user, isAuthenticated, isLoading } = useAuth0();
  // if (isLoading) {
  //   return <></>;
  // }

  const [user, setUser] = useState(null);
  // const [click, setClick] = useState(false);

  const showHamburgerMenu = () => {
    const id = document.querySelector("#navbarLinksMobile");
    id.style.display = "flex";
  };
  const close = () => {
    const id = document.querySelector("#navbarLinksMobile");
    id.style.display = "none";
  };

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
      <NavbarMenu>
        <NavbarLogo>
          <Link to="/">
            <img src="/Images/FinalLogoLight.png" alt="" />
          </Link>
        </NavbarLogo>
        <NavbarLinks id="navbarLinks">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/forummain">Forums</Link>
            </li>
          </ul>
        </NavbarLinks>
        <AiFillCloseCircle
          style={{ color: "#000", transform: "scale(2)", display: "none" }}
        ></AiFillCloseCircle>
        <LoginSignUp>
          {user === null ? (
            <div>
              <Link to="/login" id="login">
                <Login>Login</Login>
              </Link>
              <Link to="/signup" id="signup">
                <Signup>Sign Up</Signup>
              </Link>
            </div>
          ) : (
            <button onClick={() => signOut(auth)} className="btn" id="logout">
              Log me out
            </button>
          )}
        </LoginSignUp>
        <Hamburger onClick={showHamburgerMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </Hamburger>
      </NavbarMenu>
      <NavbarLinksMobile id="navbarLinksMobile">
        <ul>
          <li>
            <Link onClick={close} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={close} to="/services">
              Services
            </Link>
          </li>
          <li>
            <Link onClick={close} to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link onClick={close} to="/forummain">
              Forums
            </Link>
          </li>
        </ul>
        <LoginSignUpMobile>
          {user === null ? (
            <div>
              <Link onClick={close} to="/login" id="login">
                <Login>Login</Login>
              </Link>
              <Link onClick={close} to="/signup" id="signup">
                <Signup>Sign Up</Signup>
              </Link>
            </div>
          ) : (
            <button onClick={() => signOut(auth)} className="btn" id="logout">
              Log me out
            </button>
          )}
        </LoginSignUpMobile>
      </NavbarLinksMobile>
    </>
  );
};

export default Navbar;

const NavbarMenu = styled.div`
  position: relative;
  height: 85px;
  overflow: hidden;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0.8)
  );
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0.75rem 0;
  color: #fff;
  z-index: 9;
  box-shadow: 0 2px 35px 0px grey;
  @media screen and (max-width: 750px) {
    justify-content: space-between;
    padding: 0.75rem;
  }
  @media screen and (max-width: 525px) {
    #navbarLinks {
      display: none;
    }
  }
`;
const NavbarLogo = styled.div`
  img {
    width: 80px;
    scale: 4;
    transition: all 250ms ease;
    :hover {
      scale: 4.5;
    }
  }
`;
const NavbarLinks = styled.div`
  ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    li {
      padding: 5px 10px;
      position: relative;
      a {
        text-decoration: none;
        color: #000;
        position: relative;
        font-weight: bold;
        transition: all 250ms ease;
        ::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 0%;
          height: 0px;
          background: #000;
          transition: all 250ms ease;
        }
        :hover::after {
          width: 100%;
          height: 4px;
          border-radius: 40px;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const LoginSignUp = styled.div`
  div {
    display: flex;
    flex-direction: row;
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
    display: none;
  }
`;
const LoginSignUpMobile = styled(LoginSignUp)`
  @media screen and (max-width: 768px) {
    display: flex;
    div {
      flex-direction: column;
    }
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
const Hamburger = styled.div`
  display: none;
  .line {
    cursor: pointer;
    width: 25px;
    height: 3.5px;
    background-color: #000;
    margin: 2px 0;
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const NavbarLinksMobile = styled.div`
  display: none;
  flex-direction: column;
  gap: 1rem;
  left: 0;
  top: 0;
  width: 100%;
  align-items: center;
  justify-content: center;
  z-index: 12;
  background-color: #fff;
  padding: 1rem 0;
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin: 0 0 1rem 0;
    li {
      a {
        text-decoration: none;
        color: #000;
        font-weight: bold;
        font-size: 1.4rem;
      }
    }
  }
`;
