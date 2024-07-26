import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import { BsStar } from "react-icons/bs";
import { BsFillStarFill } from "react-icons/bs";
import data from "./data";

const HeroCard = () => {
  return (
    <>
      <Container id="hero-card">
        <Cards>
          <Card>
            {/************* Card 1 **************/}
            <Link to="/ggh" target="_blank">
              <CardBody
                style={{
                  border: "2px solid #fff",
                  borderRadius: "20px",
                }}
              >
                <img
                  src="https://images.oyoroomscdn.com/uploads/hotel_image/199736/large/8fd6b6dbfe10e0ad.jpg"
                  alt=""
                />
                <div className="info">
                  <RowOne>
                    <h2>Gaurav Guest House</h2>
                  </RowOne>
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <BsFillStarFill
                      style={{
                        scale: "1.5",
                      }}
                    />
                    <strong
                      style={{
                        fontSize: "1.4rem",
                      }}
                    >
                      4.0
                    </strong>
                  </p>
                </div>
              </CardBody>
            </Link>
            {/************* Card 2 **************/}
            <Link to="/ggh" target="_blank">
              <CardBody
                style={{
                  border: "2px solid #fff",
                  borderRadius: "20px",
                }}
              >
                <img
                  src="https://content.jdmagicbox.com/comp/nagpur/l3/0712px712.x712.180411020807.c7l3/catalogue/gurdwara-guru-nanak-darbar-kamptee-road-nagpur-gurudwaras-oclreonemc.jpg?clr="
                  alt=""
                />
                <div className="info">
                  <RowOne>
                    <h2>Rajapeth Gurudwara</h2>
                  </RowOne>
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <BsFillStarFill
                      style={{
                        scale: "1.5",
                      }}
                    />
                    <strong
                      style={{
                        fontSize: "1.4rem",
                      }}
                    >
                      4.5
                    </strong>
                  </p>
                </div>
              </CardBody>
            </Link>
            {/************* Card 3 **************/}
            <Link to="/svn" target="_blank">
              <CardBody
                style={{
                  border: "2px solid #fff",
                  borderRadius: "20px",
                }}
              >
                <img
                  src="https://map.sahapedia.org/admin/assets/images/2021051814563715PoW_70_Vasudew_Niwas_Image_02.jpg"
                  alt=""
                />
                <div className="info">
                  <RowOne>
                    <h2>Shri Vasudev Niwas</h2>
                  </RowOne>
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <BsFillStarFill
                      style={{
                        scale: "1.5",
                      }}
                    />
                    <strong
                      style={{
                        fontSize: "1.4rem",
                      }}
                    >
                      4.8
                    </strong>
                  </p>
                </div>
              </CardBody>
            </Link>
            {/************* Card 4 **************/}
            <Link to="/pg" target="_blank">
              <CardBody
                style={{
                  border: "2px solid #fff",
                  borderRadius: "20px",
                }}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Hazur_Sahib.jpg/500px-Hazur_Sahib.jpg"
                  alt=""
                />
                <div className="info">
                  <RowOne>
                    <h2>Panchayati Gurudwara</h2>
                  </RowOne>
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <BsFillStarFill
                      style={{
                        scale: "1.5",
                      }}
                    />
                    <strong
                      style={{
                        fontSize: "1.4rem",
                      }}
                    >
                      4.4
                    </strong>
                  </p>
                </div>
              </CardBody>
            </Link>
            {/************* Card 5 **************/}
            <Link to="/ggh" target="_blank">
              <CardBody
                style={{
                  border: "2px solid #fff",
                  borderRadius: "20px",
                }}
              >
                <img
                  src="https://cdn1.goibibo.com/voy_ing/t_g/668794b8b58911e8adbf02daa8a663de.jpg"
                  alt=""
                />
                <div className="info">
                  <RowOne>
                    <h2>Ambai Bhakta Niwas</h2>
                  </RowOne>
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <BsFillStarFill
                      style={{
                        scale: "1.5",
                      }}
                    />
                    <strong
                      style={{
                        fontSize: "1.4rem",
                      }}
                    >
                      4.5
                    </strong>
                  </p>
                </div>
              </CardBody>
            </Link>
            {/************* Card 6 **************/}
            <Link to="/ggh" target="_blank">
              <CardBody
                style={{
                  border: "2px solid #fff",
                  borderRadius: "20px",
                }}
              >
                <img
                  src="https://d35y6w71vgvcg1.cloudfront.net/media/2022/08/after-87-years-the-tricolor-was-hoisted-in-place-of-saffron-at-shri-gurudev-sevashram_730X365.jpg"
                  alt=""
                />
                <div className="info">
                  <RowOne>
                    <h2>Shri Gurudev Ashram</h2>
                  </RowOne>
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <BsFillStarFill
                      style={{
                        scale: "1.5",
                      }}
                    />
                    <strong
                      style={{
                        fontSize: "1.4rem",
                      }}
                    >
                      4.6
                    </strong>
                  </p>
                </div>
              </CardBody>
            </Link>
            {/************* Card 7 **************/}
            <Link to="/ggh" target="_blank">
              <CardBody
                style={{
                  border: "2px solid #fff",
                  borderRadius: "20px",
                }}
              >
                <img
                  src="https://temple.yatradham.org/wp-content/uploads/2020/08/20171122_125425.jpg"
                  alt=""
                />
                <div className="info">
                  <RowOne>
                    <h2>Shree Jagdamba BN</h2>
                  </RowOne>
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <BsFillStarFill
                      style={{
                        scale: "1.5",
                      }}
                    />
                    <strong
                      style={{
                        fontSize: "1.4rem",
                      }}
                    >
                      4.8
                    </strong>
                  </p>
                </div>
              </CardBody>
            </Link>
            {/************* Card 8 **************/}
            <Link to="/ggss" target="_blank">
              <CardBody
                style={{
                  border: "2px solid #fff",
                  borderRadius: "20px",
                }}
              >
                <img
                  src="https://im.whatshot.in/img/2020/Jul/gurudwara-guru-nanak-darbar-1595216696.jpg"
                  alt=""
                />
                <div className="info">
                  <RowOne>
                    <h2>Gurudwara GSS</h2>
                  </RowOne>
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <BsFillStarFill
                      style={{
                        scale: "1.5",
                      }}
                    />
                    <strong
                      style={{
                        fontSize: "1.4rem",
                      }}
                    >
                      4.6
                    </strong>
                  </p>
                </div>
              </CardBody>
            </Link>
          </Card>
        </Cards>
      </Container>
    </>
  );
};

export default HeroCard;
const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  @media screen and (max-width: 440px) {
    width: 100%;
  }
`;
const Cards = styled.div``;
const Card = styled.div`
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  a {
    text-decoration: none;
    color: #fff;
    transition: all 250ms ease-in;
    border-radius: 20px;
    :hover {
      box-shadow: 2px 2px 15px 0px rgba(255, 255, 255, 0.7);
      transform: translate(-4px, -4px);
    }
  }
`;
const CardBody = styled.div`
  position: relative;
  // height: 270px;
  height: 380px;
  width: 300px;
  border: 2px solid transparent;
  border-radius: 20px;
  overflow: hidden;

  img {
    width: 100%;
    height: 75%;
    opacity: 1;
  }
  .info {
    position: absolute;
    width: 100%;
    color: #fff;
    bottom: 5%;
    left: 0%;
    p {
      margin: 0 1.2rem;
      gap: 10px;
    }
  }
`;
const RowOne = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 1rem;
`;

/* <div>
        {cards.map((card) => (
          <li>
            {card.location}-{card.rating}
          </li>
        ))}
      </div> */
/* {
  data.cardData.map((item, index) => {
    return (
      <div id="maindiv">
        <Link to={index} target="_blank">
          <CardBody
            style={{
              border: "2px solid #fff",
              borderRadius: "20px",
            }}
          >
            <img src={item.img} alt="" />
            <div className="info">
              <RowOne>
                <h2>{item.title}</h2>
              </RowOne>
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <BsFillStarFill
                  style={{
                    scale: "1.5",
                  }}
                />
                <strong
                  style={{
                    fontSize: "1.4rem",
                  }}
                >
                  {item.rating}
                </strong>
              </p>
            </div>
          </CardBody>
        </Link>
      </div>
    );
  });
}
*/
