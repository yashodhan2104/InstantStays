import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { app } from "../../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, orderBy, query, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import Comment from "./Comment";
import GetComment from "./GetComment";
import { Link } from "react-router-dom";

const auth = getAuth(app);

const GGH = () => {
  //   const { user, isAuthenticated, isLoading } = useAuth0();
  const [user, setUser] = useState(null);
  const [comments, setComment] = useState([]);
  useEffect(() => {
    const commentRef = collection(db, "Comments");
    const q = query(commentRef, orderBy("commentedOn", "desc"));
    onSnapshot(q, (snapshot) => {
      const comment = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setComment(comment);
      console.log(comment);
    });
  }, []);

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
      <Container>
        <InnerContainer>
          {/* Place NAME and LOCATION */}
          <RowOne>
            <h1>Gaurav Guest House</h1>
            <h3>nagpur</h3>
          </RowOne>
          {/* Place IMAGE */}
          <RowTwo>
            <img
              src="https://images.oyoroomscdn.com/uploads/hotel_image/199736/large/8fd6b6dbfe10e0ad.jpg"
              alt=""
            />{" "}
            //
          </RowTwo>
          <p>
            153, opposite Palloti School, Rathod Layout, Anant Nagar, Nagpur,
            Maharashtra 440013
          </p>
          <RowThree>
            <h3>2 guests · 1 bedroom · 1 bed · 1 private bathroom</h3>
          </RowThree>
          {/* Special NOTE */}
          <RowFour>
            Extra Person Not allow in Room (Child age above 5 Year is applicable
            as Adult)
          </RowFour>{" "}
          .{/* Place INFORMATION */}
          <RowFive>
            <h2>Place Information</h2>
            <p>
              Nagpur is Maharashtra’s third largest city and its winter capital.
              According to some surveys Nagpur is among the better cities to
              live in India when considering public transport, greenery, health
              care and livability. Nagpur is famous for its oranges and is
              called Orange city.
            </p>
            <p>
              Today Nagpur is a major commercial and industrial hub.
              Pharmaceuticals, textiles and food products are some of the more
              important industries. Nagpur is considered to be among the most
              safe cities for women.
            </p>
          </RowFive>
          {/* Place OFFERS */}
          <RowSix>
            <h2>What does this place offer?</h2>
            <Grid>
              <p>Hot Water</p>

              <p>Toilet</p>
              <p>Drinking Water</p>
              <p> Private Rooms</p>
            </Grid>
          </RowSix>
          <h2>Distance from:</h2>
          <p>Nagpur Airport- 14.4 km </p>
          <p> Nagpur Railway Station- 7.5 km</p>
          <RowSeven>
            <h2>Place to visit nearby</h2>
            <p>Sitabuldi Fort-6.1 km</p>
            <p>Ambazari Lake-9.3 km </p>
            <p>Futala Lake- 5.6 km</p>
          </RowSeven>
          {/* WRITE REVIEW */}
          <RowEight>
            <h2>Write your own review</h2>
          </RowEight>
          <Review>
            {user === null ? (
              <div>
                <strong>
                  <Link to="/login" style={{ color: "orange" }}>
                    Login
                  </Link>{" "}
                </strong>{" "}
                to write a comment!
              </div>
            ) : (
              <WriteReview>
                <Comment />
              </WriteReview>
            )}
          </Review>
        </InnerContainer>
      </Container>
    </>
  );
};

export default GGH;
const Container = styled.div`
  width: 100%;
  padding: 4rem 2rem;
  color: #fff;
  background-color: #000;
`;
const InnerContainer = styled.div`
  padding: 4rem 2rem;
  border-radius: 20px;
  background-image: linear-gradient(
    rgba(241, 102, 5, 0.2),
    rgba(255, 105, 0, 0.19),
    rgba(243, 100, 0, 0.15),
    rgba(226, 93, 0, 0.07),
    rgba(0, 0, 0, 0)
  );
  @media screen and (max-width: 515px) {
    padding: 4rem 0.75rem;
  }
`;
const RowOne = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  line-height: 2;
  h1 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 1.75rem;
    margin: 0px 0 20px 0;
  }
`;
const RowTwo = styled.div`
  @media screen and (max-width: 935px) {
    img {
      width: 100%;
    }
  }
`;
const RowThree = styled(RowOne)`
  border-bottom: 2px solid #7d7d7d;
  padding: 1.5rem 0;
  h2 {
    font-size: 1.5rem;
    text-shadow: 0 0 4px rgba(255, 255, 255, 0.7);
  }
  h3 {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 520px) {
    h2 {
      font-size: 1.2rem;
      text-shadow: 0 0 4px rgba(255, 255, 255, 0.7);
    }
    h3 {
      font-size: 1rem;
      margin: 20px 0;
    }
  }
`;
const RowFour = styled(RowOne)`
  position: relative;
  padding: 2rem 0 2rem 2rem;
  border-bottom: 2px solid rgb(125, 125, 125);
  ::before {
    content: "*";
    position: absolute;
    color: red;
    transform: scale(3);
    top: 2.4rem;
    left: 10px;
  }
  @media screen and (max-width: 520px) {
    padding: 0;
    ::before {
      top: 0.4rem;
      left: -20px;
    }
  }
`;
const RowFive = styled(RowOne)`
  padding: 0.75rem 0;
  border-bottom: 2px solid rgb(125, 125, 125);
  p {
    margin: 10px 0;
  }
`;
const RowSix = styled(RowThree)`
  width: 50%;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
const RowSeven = styled(RowThree)``;
const RowEight = styled.div`
  padding: 0.75rem 0;
`;
const Review = styled.div``;
const WriteReview = styled.div``;
