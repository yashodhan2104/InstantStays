import React from "react";
import styled from "styled-components";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../../../firebase";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WhichBetterNainiManaliFetchData from "./WhichBetterNainiManaliFetchData";

const firestore = getFirestore(app);
const auth = getAuth(app);

const WhichBetterNainiManali = () => {
  const [comm, setComm] = useState("");
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

  const onchange = (e) => {
    e.preventDefault();
    setComm(e.target.value);
  };
  const writeComment = async () => {
    const result = addDoc(collection(firestore, "WhichBetterNainiManali"), {
      question: comm,
      userEmail: user.email,
      userName: user.displayName,
      date: Date(Date.now()).toString(),
      userLoggedIn: true,
    });
    alert("Commented!");
    setComm(" ");
  };
  return (
    <>
      <Container>
        <InnerContainer>
          <h1>Which is better Nainital or Manali?</h1>
          <div className="add-comment">
            <h2>
              Add a <strong>COMMENT</strong> to help others!
            </h2>
            {user !== null ? (
              <div className="input-btn">
                <input
                  type="text"
                  onChange={onchange}
                  placeholder="Enter your comment here..."
                />
                <button onClick={writeComment}>Post a Comment !</button>
              </div>
            ) : (
              <div id="login-to-comment">
                <strong>
                  <Link to="/login">Login</Link>
                </strong>
                to write a comment!
              </div>
            )}
          </div>
          <WhichBetterNainiManaliFetchData />
          {/********* Fetch Data  **********/}
        </InnerContainer>
      </Container>
    </>
  );
};

export default WhichBetterNainiManali;
const Container = styled.div`
  position: relative;
  background-color: #000;
  color: #fff;
  padding: 4rem 2rem;
`;
const InnerContainer = styled.div`
  margin: 0 auto;
  width: 80%;
  border-radius: 20px;
  padding: 0.95rem 0 0 0;
  h1 {
    text-transform: uppercase;
    font-size: 2.2rem;
    letter-spacing: 1.1px;
    padding-bottom: 1px;
    text-align: center;
    text-shadow: 0 0 3px #fff;
  }
  .add-comment {
    margin-bottom: 1rem;
    h2 {
      margin: 0.5rem 0;
      text-transform: uppercase;
      font-size: 1.4rem;
      letter-spacing: 1.1px;
      padding-bottom: 1rem;
      border-bottom: 2px solid #7d7d7d;
      text-align: center;
      text-shadow: 0 0 3px #fff;
    }
    .input-btn {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin: 2rem 0;
      align-items: center;
      input {
        outline: none;
        padding: 15px 20px;
        width: 75%;
        height: 4rem;
        border: 3px solid #fff;
        background-color: transparent;
        border-radius: 20px;
        transition: all 0.3s ease-out;
        color: #fff;
        font-weight: bold;
        font-size: 1.1rem;
        letter-spacing: 1.1px;
        :focus {
          background-color: #fff;
          color: #000;
        }
        @media screen and (max-width: 576px) {
          width: 100%;
        }
      }
      button {
        width: 50%;
        cursor: pointer;
        padding: 0.75rem 0.25rem;
        font-size: 1.2rem;
        font-weight: bold;
        border: 2px solid #000;
        border-radius: 20px;
        transition: all 200ms linear;
        :hover {
          border: 2px solid #fff;
          background-color: transparent;
          color: #fff;
        }
        @media screen and (max-width: 576px) {
          width: 100%;
        }
      }
    }
    #login-to-comment {
      padding: 2rem 0px;
      transition: all 300ms linear 0s;
      font-size: 2rem;
      border-bottom: 2px solid #7d7d7d;
      font-size: 1.4rem;
      letter-spacing: 1.2px;
      strong {
        margin-right: 0.5rem;
        a {
          color: orange;
          text-decoration: underline;
        }
      }
    }
  }
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;
const FetchComments = styled.div``;
