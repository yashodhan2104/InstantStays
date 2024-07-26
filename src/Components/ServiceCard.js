import React from "react";
import styled from "styled-components";

const ServiceCard = (props, { Icon }) => {
  return (
    <>
      <Container>
        <Card>
          {/* <BsFillCalendarCheckFill style={{ transform: "scale(2)" }} /> */}
          <div>{Icon}</div>
          <h2>{props.heading}</h2>
          <p>{props.para}</p>
        </Card>
      </Container>
    </>
  );
};

export default ServiceCard;
// svg heading para
const Container = styled.div``;
const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.4rem;
  padding: 2.5rem 2rem;
  border: 3px solid #873309;
  border-radius: 20px;
  overflow: hidden;
  height: 350px;
  width: 300px;
  transition: all 300ms ease;
  h2 {
    font-size: 1.7rem;
    border-bottom: 2px solid #fff;
    padding: 0 0 10px 0;
  }
  p {
    font-size: 1.05rem;
    line-height: 1.2;
    text-align: left;
  }
  :hover {
    transform: scale(1.04);
    border: 2px solid black;
  }
`;
