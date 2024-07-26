import React from "react";
import styled from "styled-components";
import { BsFillStopwatchFill } from "react-icons/bs";
import { BsCashCoin } from "react-icons/bs";
import Footer from "./Footer";

const Services = () => {
  return (
    <>
      <Container>
        <InnerContainer>
          <Heading>
            <h1>our core services</h1>
          </Heading>
          <Desc>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
          </Desc>
          <Cards>
            {/* Card One */}
            <ServiceCard>
              <div className="left">
                <BsFillStopwatchFill style={{ transform: "scale(2)" }} />
              </div>
              <div className="right">
                <h2>Anytime Booking</h2>
                <p>
                  InstantStays provides anytime booking service which is a
                  convenient way to reserve services or products at any time,
                  without being limited to specific hours or days.
                </p>
              </div>
            </ServiceCard>

            {/* Card Two */}
            <ServiceCard>
              <div className="left">
                <BsCashCoin style={{ transform: "scale(2)" }} />
              </div>
              <div className="right">
                <h2>Minimal Cost</h2>
                <p>
                  Free lodging service is a fantastic option for those who want
                  to travel or need a temporary place to stay without breaking
                  the bank.
                </p>
              </div>
            </ServiceCard>

            {/* Card Three */}
            <ServiceCard>
              <div className="left">
                <img src="/Images/cross.png" alt="" />
              </div>
              <div className="right">
                <h2>Deterring Scams</h2>
                <p>
                  InstantStays is a reputable and established hotel website. We
                  have legitimate reviews by users which make it possible to
                  reserve a suitable hotel.
                </p>
              </div>
            </ServiceCard>

            {/* Card Four */}
            <ServiceCard>
              <div className="left">
                <img src="/Images/unexplored.png" alt="" />
              </div>
              <div className="right">
                <h2>Unexplored Location</h2>
                <p>
                  InstantStays provides an exposure to unexplored rest houses.
                  that are located in remote and rural areas.
                </p>
              </div>
            </ServiceCard>

            {/* Card Five */}
            <ServiceCard>
              <div className="left">
                <img src="/Images/exposure.png" alt="" />
              </div>
              <div className="right">
                <h2>Commercial Exposure</h2>
                <p>
                  InstantStays provides a commercial exposure to the user
                  allowing them a second source of income.
                </p>
              </div>
            </ServiceCard>
            {/*
          <ServiceCard
            heading="Commercial Exposure"
            para="InstantStays provides a commercial exposure to the user."
          /> */}
          </Cards>
        </InnerContainer>
      </Container>
      <Footer />
    </>
  );
};

export default Services;
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
const ServiceCard = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
  width: 350px;
  height: 250px;
  background-color: transparent;
  border: 2px solid #fff;
  border-radius: 1rem;
  position: relative;
  transition: all 250ms linear;
  :hover {
    transform: translate(-10px, -10px);
    border: 3px solid #fff;
  }
  .left {
    width: 40%;
    padding: 10px 0 0 0;
  }
  .right {
    p {
      font-size: 17px;
      margin: 10px 0 0 0;
    }
  }
  @media screen and (max-width: 435px) {
    width: 300px;
  }
`;
const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 4rem 0 2rem 0;
`;
// rgb(239, 2, 2)
// background: linear-gradient(152deg, rgba(208,119,15,0.96) 0%, rgba(210,126,27,0) 100%);
