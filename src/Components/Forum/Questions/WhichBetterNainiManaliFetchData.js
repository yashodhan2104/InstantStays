import React from "react";
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
import { app, db } from "../../../firebase";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { useState, useEffect } from "react";

const firestore = getFirestore(app);
const auth = getAuth(app);

const WhichBetterNainiManaliFetchData = () => {
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

  useEffect(() => {
    // fetchComment();
    const getComments = async () => {
      const collectionRef = collection(firestore, "WhichBetterNainiManali");
      const q = query(collectionRef, where("userLoggedIn", "==", true));
      const snapshot = await getDocs(q);
      const commentsData = snapshot.docs.map((doc) => doc.data());
      setComm(commentsData);
    };
    getComments();
  }, []);

  const fetchComment = () => {
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
  };

  return (
    <>
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
                  fontSize: "1.4rem",
                  fontWeight: "bold",
                  margin: "0 0 1.5rem 0",
                  letterSpacing: "1.1px",
                }}
              >
                {com.userName || com.userEmail} commented:
              </p>
              <p
                style={{
                  padding: "0 0 0 10px",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  fontSize: "1.2rem",
                  color: "#c3c3c3",
                  textShadow: "0 0 5px #c3c3c3",
                }}
              >
                <BsFillArrowRightSquareFill />
                {com.question}
              </p>
            </div>
          );
        })}
    </>
  );
};

export default WhichBetterNainiManaliFetchData;
