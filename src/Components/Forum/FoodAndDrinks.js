import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "../../firebase";
import { useEffect, useState } from "react";
import Footer from "../Footer";

const FoodAndDrinks = () => {
  const firestore = getFirestore(app);
  const auth = getAuth(app);

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
    const result = addDoc(collection(firestore, "FoodAndDrinks"), {
      question: comm,
      userEmail: user.email,
      userName: user.displayName,
      date: Date(Date.now()).toString(),
      userLoggedIn: true,
    });
    alert("Question Added!");
    setComm(" ");
  };
  return (
    <>
      <Container>
        <InnerContainer>
          <Table>
            <div className="heading">
              <h1>Food and Drinks!</h1>
            </div>
            <div className="questions">
              <Link target="_blank" to="/reachmanali">
                <div className="ques">
                  <img src="/Images/question.png" alt="" />
                  <h2>1</h2>
                </div>
              </Link>
              <Link target="_blank" to="/whichbetternainimanali">
                <div className="ques">
                  <img src="/Images/question.png" alt="" />
                  <h2>2</h2>
                </div>
              </Link>
              <Link>
                <div className="ques">
                  <img src="/Images/question.png" alt="" />
                  <h2>3</h2>
                </div>
              </Link>
              <Link>
                <div className="ques">
                  <img src="/Images/question.png" alt="" />
                  <h2>4</h2>
                </div>
              </Link>
              <Link>
                <div className="ques">
                  <img src="/Images/question.png" alt="" />
                  <h2>5</h2>
                </div>
              </Link>
              <Link>
                <div className="ques">
                  <img src="/Images/question.png" alt="" />
                  <h2>6</h2>
                </div>
              </Link>
              <Link
                style={{
                  borderBottomRightRadius: "18px",
                  borderBottomLeftRadius: "18px",
                }}
              >
                <div className="ques">
                  <img src="/Images/question.png" alt="" />
                  <h2>7</h2>
                </div>
              </Link>
            </div>
          </Table>
        </InnerContainer>
        {user !== null ? (
          <WantToAddQuestion>
            <h2>Want to add a question?</h2>
            <textarea
              name=""
              id=""
              cols="60"
              rows="10"
              onChange={onchange}
              placeholder="Enter your comment here..."
            ></textarea>
            <button onClick={writeComment}>Comment !</button>
          </WantToAddQuestion>
        ) : (
          <div id="login-to-comment">
            <strong>
              <Link to="/login">Login</Link>
            </strong>
            to write a comment!
          </div>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default FoodAndDrinks;
const Container = styled.div`
  position: relative;
  background-color: #000;
  color: #fff;
  padding: 4rem 2rem;
  #login-to-comment {
    margin: 1rem auto;
    width: 80%;
    padding: 0.95rem 0px 0px;
    transition: all 300ms linear 0s;
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
`;
const InnerContainer = styled.div`
  margin: 0 auto;
  width: 80%;
  border: 2px solid #fff;
  border-radius: 20px;
  padding: 0.95rem 0 0 0;
  transition: all 300ms linear;
  @media screen and (max-width: 560px) {
    width: 100%;
  }
`;
const Table = styled.div`
  .heading {
    text-align: center;
    padding: 1.5rem 0;
    h1 {
      font-size: 3.5rem;
      text-decoration: underline;
      @media screen and (max-width: 560px) {
        font-size: 2.8rem;
      }
    }
  }
  .questions {
    display: flex;
    flex-direction: column;
    a {
      text-decoration: none;
      color: #fff;
      font-weight: bold;
      border: 2px solid #fff;
    }
    .ques {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 0.95rem 2rem;
      img {
        transform: scale(0.5);
      }
      h2 {
        @media screen and (max-width: 560px) {
          font-size: 1.4rem;
        }
      }
    }
  }
`;
const WantToAddQuestion = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  width: 80%;
  padding: 2rem 0 0 0;
  h2 {
    text-decoration: underline;
    @media screen and (max-width: 550px) {
      font-size: 1.5rem;
    }
  }
  textarea {
    margin: 0.8rem 0;
    background: transparent;
    border: 2px solid #fff;
    border-radius: 20px;
    color: #fff;
    padding: 15px 10px;
    font-size: 16px;
    letter-spacing: 1.05px;
    outline: none;
    transition: all 0.4s ease;
    ::placeholder {
      color: grey;
    }
    :focus {
      background-color: #fff;
      color: #000;
    }
  }
  button {
    cursor: pointer;
    padding: 0.5rem 0.25rem;
    font-size: 1.2rem;
    font-weight: bold;
    border: 2px solid #000;
    border-radius: 20px;
    width: 150px;
    transition: all 200ms linear;
    :hover {
      border: 2px solid #fff;
      background-color: #000;
      color: #fff;
      box-shadow: rgb(255, 255, 255) 0px 2px 10px 0px;
      transform: translate(-2px, -2px);
    }
  }
  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;
