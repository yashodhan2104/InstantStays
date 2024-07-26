import React from "react";
import styled from "styled-components";
import { BsMessenger } from "react-icons/bs";
import { Link } from "react-router-dom";
import Footer from "../Footer";

const ForumMain = () => {
  return (
    <>
      <Container>
        <ContOne>
          <Left>
            <h1>Welcome to Discussion Forum</h1>
            <h3>A place where you can share your opinion!</h3>
          </Left>
          <Right>
            <div id="box">
              <h2>Registered Users: 7</h2>
              <h2>Forums: 4</h2>
              <h2>Topics: 7</h2>
              <h2>Replies: 5</h2>
            </div>
          </Right>
        </ContOne>
        <ContTwo>
          <table>
            <thead>
              <tr>
                <th scope="col" style={{ fontSize: "1.1rem" }}>
                  Forum
                </th>
                <th scope="col" style={{ transform: "scale(2)" }}>
                  <BsMessenger />
                </th>
                <th scope="col" style={{ fontSize: "1.1rem" }}>
                  Period
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Account">Travel Advice</td>
                <td data-label="Amount">8</td>
                <td data-label="Period">
                  <Link to="/traveladvice">
                    <button>Discuss</button>
                  </Link>
                </td>
              </tr>
              <tr>
                <td scope="row" data-label="Account">
                  Food & Drinks
                </td>
                <td data-label="Amount">2</td>
                <td data-label="Period">
                  <Link to="/foodanddrinks">
                    <button>Discuss</button>
                  </Link>
                </td>
              </tr>
              <tr>
                <td scope="row" data-label="Account">
                  Transportation
                </td>
                <td data-label="Amount">1</td>
                <td data-label="Period">
                  <Link to="/">
                    <button>Discuss</button>
                  </Link>
                </td>
              </tr>
              <tr>
                <td scope="row" data-label="Acount">
                  Visa & Passport
                </td>
                <td data-label="Amount">8</td>
                <td data-label="Period">
                  <Link to="/">
                    <button>Discuss</button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </ContTwo>
      </Container>
      <Footer />
    </>
  );
};

export default ForumMain;
const Container = styled.div`
  position: relative;
  background-color: #000;
  color: #fff;
`;
const ContOne = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 96%;
  margin: 0 auto;
  background-color: rgba(170, 170, 170, 0.2);
  padding: 8rem 0;
  border-bottom-left-radius: 3.5rem;
  border-bottom-right-radius: 3.5rem;
  box-shadow: 0 2px 15px 0 rgba(170, 170, 170, 0.2);
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
  box-shadow: 0 0px 40px 0px rgba(235, 101, 7, 0.9);
  @media screen and (max-width: 1000px) {
    padding: 8rem 2rem;
  }
  @media screen and (max-width: 800px) {
    padding: 5rem 2rem;
    flex-direction: column;
    gap: 2rem;
    box-shadow: 0 2px 40px 2px rgba(235, 101, 7, 0.9);
  }
`;
const Left = styled.div`
  h1 {
    font-size: 3rem;
    letter-spacing: 1px;
    margin: 0 0 0.4rem 0;
  }
  h3 {
    font-size: 1.7rem;
  }
  @media screen and (max-width: 450px) {
    h1 {
      font-size: 2.5rem;
    }
    h3 {
      font-size: 1.2rem;
    }
  }
`;
const Right = styled.div`
  #box {
    width: 300px;
    height: 250px;
    border: 2px solid #fff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 0 0 1rem;
    gap: 10px;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
  }
  #box {
    @media screen and (max-width: 800px) {
      width: 100%;
      align-items: center;
    }
    @media screen and (max-width: 450px) {
      h2 {
        font-size: 1.7rem;
      }
    }
  }
`;
const ContTwo = styled.div`
  padding: 4rem 2rem;
  table {
    border: 2px solid #fff;
    border-collapse: collapse;
    margin: 0;
    padding: 0;
    width: 100%;
    table-layout: fixed;
  }

  table caption {
    font-size: 1.5em;
    margin: 0.5em 0 0.75em;
  }

  table tr {
    background-color: #000;
    border: 1px solid #ddd;
    padding: 0.35em;
  }
  table tr td {
    font-size: 1.4rem;
    :hover {
      text-decoration: underline;
    }
  }

  table th,
  table td {
    // padding: 0.625em;
    padding: 1em;
    text-align: center;
  }
  table td button {
    cursor: pointer;
    padding: 10px 30px;
    font-size: 1.2rem;
    letter-spacing: 1.1px;
    font-weight: bold;
    background-color: transparent;
    border: 2px solid #fff;
    color: #fff;
    border-radius: 20px;
    transition: all 150ms ease;
    :hover {
      background-color: #fff;
      color: #000;
    }
  }

  table th {
    font-size: 0.85em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  @media screen and (max-width: 600px) {
    table {
      border: 0;
    }

    table caption {
      font-size: 1.3em;
    }

    table thead {
      border: none;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }

    table tr {
      border-bottom: 3px solid #ddd;
      display: block;
      margin-bottom: 1.5em;
    }

    table td {
      border-bottom: 1px solid #ddd;
      display: block;
      font-size: 0.8em;
      text-align: right;
    }

    table td::before {
      /*
      * aria-label has no advantage, it won't be read inside a table
      content: attr(aria-label);
      */
      content: attr(data-label);
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }

    table td:last-child {
      border-bottom: 0;
    }
  }

  /* general styling */
  body {
    font-family: "Open Sans", sans-serif;
    line-height: 1.25;
  }
`;
