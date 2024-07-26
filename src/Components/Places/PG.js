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

const PG = () => {
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
            <h1>Panchayti Gurudwara</h1>
            <h3>Wardha</h3>
          </RowOne>
          {/* Place IMAGE */}
          <RowTwo>
            <img
              src="https://scontent.fdel4-2.fna.fbcdn.net/v/t1.18169-9/12376707_928359510567884_6662256288089789219_n.jpg?stp=cp0_dst-jpg_e15_p320x320_q65&_nc_cat=111&ccb=1-7&_nc_sid=dd9801&_nc_ohc=ltHSKMz4wKgAX9iQxA_&_nc_ht=scontent.fdel4-2.fna&oh=00_AfCvoJqRT3TToSNJjGO1y6s7R4XQoGIrQsDMWe7CZNIoEQ&oe=6474B886"
              alt=""
            />
          </RowTwo>
          <p>Dayal Nagar, Wardha, Maharashtra 442001</p>
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
              Wardha was one of the most important cities in India ever since
              the pre-independence Bristish era. The city was founded in 1866
              and on the planning ideas of legendary Englishmen Sir Crowdock and
              Sir Bachelor. In view of the fact that most of the important
              centres of culture, trade and education in Wardha were born in the
              British era, the city administration chose to name some of them as
              a mark of gratitude and respect to the British, for their
              invaluable contributions in the evolution of the city.
            </p>
            <p>
              One of the most famous historical events to have taken place in
              this city of Wardha was the Marathi Sahitya Sammelan in 1969,
              which was an international conference on Marathi literature
              presided over by Purushottam Shivram Rege and attended by many
              eminent scholars from all parts of the world.
            </p>
            <p>
              Mahatma Gandhi’s contributions to the historical fame of Wardha
              are also noteworthy. The legendary nationalist leader turned this
              city into one of the most important centres for his movements and
              campaigns across the country. The strategic location of Wardha in
              Central India proved to be of immense use to Gandhi in this
              context.
            </p>
            <p>
              Other notable personalities who made worthy contributions to the
              cause of Wardha’s fame are Dr Govind Sadashivrao Gade, the only
              medical surgeon from Wardha during his time, and Baba Amte who was
              a well known Indian socialist.
            </p>
          </RowFive>
          {/* Place OFFERS */}
          <RowSix>
            <h2>What does this place offer?</h2>
            <Grid>
              <p>Toilet</p>
              <p>Drinking Water</p>
              <p>Food Facility</p>
            </Grid>
          </RowSix>
          <h2>Distance from:</h2>
          <p>Nagpur Airport- 81.3 km </p>
          <p> Nagpur Railway Station- 79.6 km</p>
          <p>Wardha Railway Station- 950 m</p>
          <RowSeven>
            <h2>Place to visit nearby</h2>
            <p>Sewagram Aashram-9.6 km</p>
            <p>Laxminarayan Temple- 2.4 km </p>
            <p>Bor Tiger Reserve- 35.9 km</p>
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

export default PG;
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
  img {
    width: 50%;
    margin: 0 0 20px 0;
  }
  @media screen and (max-width: 935px) {
    img {
      width: 75%;
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
