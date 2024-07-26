import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app, db } from "../../firebase";
import data from "../data";
import { BsFillArrowRightSquareFill } from "react-icons/bs";

const firestore = getFirestore(app);
const auth = getAuth(app);

const GetComment = () => {
  const [comm, setComm] = useState([]);
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

  // yt video
  /* const getComments = async () => {
    const collectionRef = collection(firestore, "userComments");
    const q = query(collectionRef, where("userLoggedIn", "==", true));
    const snapshot = await getDocs(q);
    snapshot.forEach((data) => console.log(data.data()));
  };*/

  useEffect(() => {
    // fetchComment();
    const getComments = async () => {
      const collectionRef = collection(firestore, "userComments");
      const q = query(collectionRef, where("userLoggedIn", "==", true));
      const snapshot = await getDocs(q);
      const commentsData = snapshot.docs.map((doc) => doc.data());
      setComm(commentsData);
    };
    getComments();
  }, []);

  // 2nd method => website
  /* const fetchComment = () => {
    db.collection("userComments")
      .get()
      .then((querySnapshot) => {
        const dataArr = [];
        const data = querySnapshot.docs.map((doc) => {
          const keyValueString = doc.data().comm;
          const keyValueObject = JSON.parse(keyValueString);
          // doc.data();
          dataArr.push(keyValueObject);
        });
        setComm(dataArr);
      })
      .catch((err) => { 
        console.log(err);
      });
  }; */

  // console.log(comm);
  return (
    <>
      <Container>
        {/* {comm.map((com) => {
          <li>{com.data().comment}</li>;
        })} */}
        {comm &&
          comm.map((com) => {
            return (
              <div
                style={{
                  borderBottom: "2px solid #fff",
                  // borderRadius: "20px",
                  padding: "20px 10px",
                  margin: "1rem 0",
                }}
              >
                <p
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    margin: "0 0 10px 0",
                    textDecoration: "underline",
                  }}
                >
                  {com.userName || com.userEmail} commented:{" "}
                </p>
                <p
                  style={{
                    padding: "0 0 0 10px",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <BsFillArrowRightSquareFill />
                  {com.comment}
                </p>
              </div>
            );
          })}
        {/* <button onClick={getComments}>Load Comments!</button> */}
      </Container>
    </>
  );
};

export default GetComment;

const Container = styled.div`
  color: #fff;
`;
