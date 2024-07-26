import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { BsFillStarFill } from "react-icons/bs";
import OpenCardData from "./CARD_OUTER_INFO.json";
import Marquee from "react-fast-marquee";
import Footer from "./Footer";

const SearchBar = () => {
  // for search box suggestions

  const [value, setValue] = useState("");

  const [display, setDisplay] = useState(false);
  const [search, setSearch] = useState("");

  // for cards
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  // handle filter
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = OpenCardData.filter((value) => {
      return value.location.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }

    // autocomplete
    setValue(event.target.value);
  };
  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
  return (
    <>
      <Container>
        <MainContainer>
          <SearchBarInput>
            <BsSearch
              style={{
                color: "#fff",
                transform: "scale(2)",
                cursor: "pointer",
              }}
            />
            <input
              type="text"
              value={value}
              placeholder="Search your city here..."
              onChange={handleFilter}
            />
          </SearchBarInput>
          <Dropdown className="dropdown">
            <Marquee
              className="marquee"
              direction="left"
              speed={75}
              pauseOnHover
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              InstantStays allows you to search rooms from
              <strong
                style={{
                  marginLeft: "5px",
                  color: "rgba(235, 101, 7, 1)",
                  textShadow: "none",
                  fontSize: "1.4rem",
                }}
              >
                Nagpur, Wardha, Amravati, Pune, Kolhapur and Tuljapur
              </strong>
            </Marquee>
          </Dropdown>
          {filteredData.length != 0 && (
            <DataShow>
              {filteredData.map((value, key) => {
                return (
                  <Link
                    to={value.link}
                    target="_blank"
                    title="Click to open on new tab"
                  >
                    <SearchedCard>
                      <img src={value.image} alt="" />
                      <Content>
                        <Row>
                          <h3>{value.place_name}</h3>
                        </Row>
                      </Content>
                      <Price>
                        <h2>{value.price}</h2>
                        <div
                          style={{
                            display: "flex",
                            gap: "0.75rem",
                            alignItems: "center",
                            fontSize: "1.4rem",
                          }}
                        >
                          <BsFillStarFill style={{ transform: "scale(1.1)" }} />
                          <strong>{value.rating}</strong>
                        </div>
                      </Price>
                    </SearchedCard>
                  </Link>
                );
              })}
            </DataShow>
          )}
        </MainContainer>
        <Footer />
      </Container>
    </>
  );
};

export default SearchBar;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 2rem 4rem 6rem 4rem;
  background-color: #000;
  overflow-x: hidden;
  position: fixed;
  @media screen and (max-width: 516px) {
    padding: 2rem 1rem 0 1rem;
  }
`;
const MainContainer = styled.div`
  width: 100%;
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
  border-radius: 25px;
  // height: 100vh;
  display: block;
  // padding: 3rem 0;
  margin: 3rem 0;
`;
const SearchBarInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  padding-left: 5px;
  input {
    width: 80%;
    height: 50px;
    border-radius: 20px;
    outline: none;
    border: none;
    padding: 1rem;
    font-weight: bold;
    letter-spacing: 1.2px;
    border: 3px solid #000;
    transition: all 0.3s ease;
    ::placeholder {
      color: #000;
      padding: 2px 0 0 5px;
      font-size: 1rem;
    }
  }
  input:focus {
    border: 3px solid #ff6900;
  }
  @media screen and (max-width: 881px) {
    input {
      ::placeholder {
        padding-left: 0px;
      }
    }
  }
  @media screen and (max-width: 415px) {
    gap: 1.5rem;
  }
`;
const Dropdown = styled.div`
  color: #fff;
  .marquee {
    margin: 1rem 0;
    font-size: 1.4rem;
    border-radius: 20px;
    text-shadow: 1px 1px 5px #7d7d7d;
  }
`;
const DataShow = styled.div`
  display: grid;
  margin: 2rem 0 4rem 0;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  gap: 4rem 1rem;
  overflow: hidden;
  padding: 2rem 0;
  a {
    text-decoration: none;
    color: #fff;
    text-align: center;
    border-radius: 20px;
    transition: all 250ms ease;
    z-index: 99;
    :hover {
      transform: translate(-4px, -4px);
      // box-shadow: 4px 2px 15px 0px rgba(255, 255, 255, 0.7);
    }
    position: relative;
    ::after {
      content: "";
      position: absolute;
      width: 99%;
      height: 99%;
      border: 2px solid #fff;
      top: 0;
      left: 0;
      border-radius: 20px;
      transition: all 250ms ease;
      z-index: -1;
    }
    :hover::after {
      width: 101%;
      height: 100%;
      border-radius: 25px;
      top: 2px;
      left: 0px;
      box-shadow: 2px 2px 15px 0px rgba(255, 255, 255, 0.7);
    }
  }
  @media screen and (max-width: 1270px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 881px) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 415px) {
    margin: 2rem 0;
  }
`;
const SearchedCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #fff;
  width: 350px;
  height: 450px;
  gap: 1rem;
  border-radius: 20px;
  overflow: hidden;
  transition: all 250ms ease;
  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
  :hover {
    // box-shadow: 2px 2px 20px 0px rgba(255, 255, 255, 0.7);
  }
  @media screen and (max-width: 406px) {
    width: 300px;
    height: 450px;
  }
  @media screen and (max-width: 415px) {
    img {
      object-fit: cover;
    }
  }
`;
const Content = styled.div`
  margin: 0.75rem 10px;
`;
const Row = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 100%;
  h3 {
    font-size: 1.6rem;
  }
  div {
    strong {
      font-size: 1.1rem;
    }
  }
`;
const RowTwo = styled.div`
  strong {
    font-size: 1.4rem;
    letter-spacing: 1.2px;
  }
`;
const Price = styled.div`
  margin: 0 0 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
