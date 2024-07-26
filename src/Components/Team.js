import React from "react";
import styled from "styled-components";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Team = () => {
  return (
    <>
      <Container>
        <InnerContainer>
          <Heading>
            <h1>meet our team</h1>
          </Heading>
          <Desc>
            <p>Meet the worlds best team! </p>
          </Desc>
          <Cards id="cards">
            <Card>
              <img src="/Images/Team/Ved.png" alt="" />
              <h2>Ved Nande</h2>
              <div className="social-links">
                <Link>
                  <div className="insta">
                    <FaInstagram
                      style={{
                        transform: "scale(1.6)",
                      }}
                    />
                  </div>
                </Link>
                <Link>
                  <div className="fb">
                    <FaFacebookF
                      style={{
                        transform: "scale(1.6)",
                      }}
                    />
                  </div>
                </Link>
                <Link>
                  <div className="linkedin">
                    <FaLinkedinIn
                      style={{
                        transform: "scale(1.6)",
                      }}
                    />
                  </div>
                </Link>
              </div>
            </Card>
            <Card>
              <img
                src="/Images/Team/Kalpesh.png"
                alt=""
                style={{
                  scale: "1.1",
                }}
              />
              <h2
                style={{
                  marginTop: "20px",
                }}
              >
                Kalpesh Kawalkar
              </h2>
              <div className="social-links">
                <Link>
                  <div className="insta">
                    <FaInstagram
                      style={{
                        transform: "scale(1.6)",
                      }}
                    />
                  </div>
                </Link>
                <Link>
                  <div className="fb">
                    <FaFacebookF
                      style={{
                        transform: "scale(1.6)",
                      }}
                    />
                  </div>
                </Link>
                <Link>
                  <div className="linkedin">
                    <FaLinkedinIn
                      style={{
                        transform: "scale(1.6)",
                      }}
                    />
                  </div>
                </Link>
              </div>
            </Card>
            <Card>
              <img
                src="/Images/Team/Sukrut.png"
                alt=""
                style={{
                  scale: "0.8",
                  width: "180px",
                }}
              />
              <h2
                style={{
                  marginTop: "-20px",
                }}
              >
                Sukrut Bhoot
              </h2>
              <div className="social-links">
                <Link>
                  <div className="insta">
                    <FaInstagram
                      style={{
                        transform: "scale(1.6)",
                      }}
                    />
                  </div>
                </Link>
                <Link>
                  <div className="fb">
                    <FaFacebookF
                      style={{
                        transform: "scale(1.6)",
                      }}
                    />
                  </div>
                </Link>
                <Link>
                  <div className="linkedin">
                    <FaLinkedinIn
                      style={{
                        transform: "scale(1.6)",
                      }}
                    />
                  </div>
                </Link>
              </div>
            </Card>
            <Card>
              <img src="/Images/Team/Mohit.png" alt="" />
              <h2>Mohit Tumane</h2>
              <div className="social-links">
                <Link>
                  <div className="insta">
                    <FaInstagram
                      style={{
                        transform: "scale(1.6)",
                      }}
                    />
                  </div>
                </Link>
                <Link>
                  <div className="fb">
                    <FaFacebookF
                      style={{
                        transform: "scale(1.6)",
                      }}
                    />
                  </div>
                </Link>
                <Link>
                  <div className="linkedin">
                    <FaLinkedinIn
                      style={{
                        transform: "scale(1.6)",
                      }}
                    />
                  </div>
                </Link>
              </div>
            </Card>
            <Card>
              <img src="/Images/Team/Yashodhan.png" alt="" />
              <h2>Yashodhan Ubale</h2>
              <div className="social-links">
                <Link>
                  <div className="insta">
                    <FaInstagram
                      style={{
                        transform: "scale(1.6)",
                      }}
                    />
                  </div>
                </Link>
                <Link>
                  <div className="fb">
                    <FaFacebookF
                      style={{
                        transform: "scale(1.6)",
                      }}
                    />
                  </div>
                </Link>
                <Link>
                  <div className="linkedin">
                    <FaLinkedinIn
                      style={{
                        transform: "scale(1.6)",
                      }}
                    />
                  </div>
                </Link>
              </div>
            </Card>
          </Cards>
        </InnerContainer>
        <Footer />
      </Container>
    </>
  );
};

export default Team;
const Container = styled.div`
  width: 100%;
  padding: 4rem 2rem;
  /* background-image: linear-gradient(
    152deg,
    rgba(208, 119, 15, 0.96) 0%,
    rgba(210, 126, 27, 0) 100%
  ),
  linear-gradient(to bottom, rgb(239, 2, 2), rgba(239, 2, 2, 0.7)); */
  background-color: #000;
  display: flex;
  flex-direction: column;
  color: #fff;
`;
const InnerContainer = styled.div`
  padding: 4rem 0;
  border-radius: 25px;
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
  }
`;
const Desc = styled.div`
  margin: 1rem 0;
  p {
    text-align: center;
    font-size: 1.6rem;
  }
  @media screen and (max-width: 576px) {
    padding: 1rem 2rem;
  }
`;
const Cards = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 2rem 0 0 0;
  flex-wrap: wrap;
  gap: 1rem;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid #fff;
  border-radius: 20px;
  padding: 2rem 1rem;
  gap: 1rem;
  width: 250px;
  img {
    width: 200px;
  }
  .social-links {
    width: 80%;
    display: flex;
    gap: 10px;
    justify-content: space-evenly;

    a {
      text-decoration: none;
      color: #fff;
    }
  }
`;
