import React from "react";
import styled from "styled-components";
import {
  BsFillHouseDoorFill,
  BsFillPhoneFill,
  BsMailbox2,
} from "react-icons/bs";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Container>
        <footer id="footer">
          <div className="left">
            <h3>more about company</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
              sed repellendus laborum doloremque cupiditate consectetur
              voluptatibus debitis consequatur aliquam quaerat!
            </p>
            <Link to="/team">Meet our Team!</Link>
          </div>
          <div className="middle">
            <h3>contact info</h3>
            <div className="address">
              <BsFillHouseDoorFill
                style={{
                  transform: "scale(1.4)",
                }}
              />
              GCOEN, Nagpur
            </div>
            <Link>
              <div className="ph">
                <BsFillPhoneFill
                  style={{
                    transform: "scale(1.4)",
                  }}
                />
                +91 9730556126
              </div>
            </Link>
            <Link>
              <div className="mail">
                <BsMailbox2
                  style={{
                    transform: "scale(1.4)",
                  }}
                />
                tumanemohit@gmail.com
              </div>
            </Link>
          </div>
          <div className="right">
            <h3>keep connected</h3>
            <Link>
              <div className="insta">
                <FaInstagram
                  style={{
                    transform: "scale(1.8)",
                  }}
                />
                Follow us on Instagram
              </div>
            </Link>
            <Link>
              <div className="fb">
                <FaFacebookF
                  style={{
                    transform: "scale(1.8)",
                  }}
                />
                Follow us on Facebook
              </div>
            </Link>
            <Link>
              <div className="twitter">
                <FaTwitter
                  style={{
                    transform: "scale(1.8)",
                  }}
                />
                Follow us on Twitter
              </div>
            </Link>
          </div>
        </footer>
      </Container>
      <div
        className="mwl"
        style={{
          background: "#000",
          color: "#fff",
          padding: "0.1rem 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h3
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Made with
          <img
            src="/Images/heart.png"
            style={{
              transform: "scale(0.5)",
            }}
            alt=""
          />
          by Ved Nande
        </h3>
      </div>
    </>
  );
};

export default Footer;
const Container = styled.div`
  background-color: #282626;
  color: #fff;
  padding: 4rem;

  @media screen and (max-width: 1000px) {
    padding: 2rem 0;
  }

  #footer {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;

    @media screen and (max-width: 1200px) {
      justify-content: space-between;
    }

    @media screen and (max-width: 1000px) {
      flex-direction: column;
      gap: 1rem;
    }

    .left {
      display: flex;
      flex-direction: column;
      gap: 0.9rem;
      width: 25%;
      max-width: 33%;

      @media screen and (max-width: 1000px) {
        width: 80%;
        max-width: 100%;
        padding-bottom: 2rem;
        border-bottom: 3px solid #fff;
      }

      a {
        text-decoration: none;
        color: #fff;
        border: 2px solid #fff;
        border-radius: 20px;
        width: fit-content;
        padding: 10px;
        font-weight: 700;
        transition: all 250ms linear;
        :hover {
          background-color: #fff;
          color: #000;
          transform: translate(-4px, -4px);
          box-shadow: rgba(255, 255, 255, 0.7) 2px 2px 15px 0;
        }
      }

      h3 {
        text-transform: capitalize;
        margin: 0 0 10px 0;
        font-size: 1.6rem;
        letter-spacing: 1.1px;
        @media screen and (max-width: 1400px) {
          font-size: 1.2rem;
        }
        @media screen and (max-width: 1000px) {
          font-size: 1.6rem;
        }
      }

      p {
        letter-spacing: 1.02px;
        @media screen and (max-width: 1400px) {
          font-size: 14px;
        }
      }
    }

    .middle {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      @media screen and (max-width: 1000px) {
        width: 80%;
        max-width: 100%;
        padding-bottom: 2rem;
        border-bottom: 3px solid #fff;
      }

      a {
        text-decoration: none;
        color: #fff;
      }

      h3 {
        text-transform: capitalize;
        margin: 0 0 10px 0;
        font-size: 1.6rem;
        letter-spacing: 1.1px;
      }

      .address,
      .ph,
      .mail {
        display: flex;
        align-items: center;
        gap: 1rem;
        letter-spacing: 1.1px;
        font-size: 18px;
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      gap: 1.4rem;

      @media screen and (max-width: 1000px) {
        width: 80%;
        max-width: 100%;
        padding-bottom: 2rem;
      }

      a {
        text-decoration: none;
        color: #fff;
      }

      h3 {
        text-transform: capitalize;
        margin: 0 0 10px 0;
        font-size: 1.6rem;
        letter-spacing: 1.1px;
      }

      .insta,
      .fb,
      .twitter {
        display: flex;
        align-items: center;
        gap: 1rem;
        transition: all 250ms linear;
        font-size: 18px;
      }
      .insta:hover,
      .fb:hover,
      .twitter:hover {
        transform: translateX(5px);
        color: rgba(235, 101, 7, 0.9);
        cursor: pointer;
      }
    }
  }
`;
