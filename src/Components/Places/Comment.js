/********* Method 1  **********/
// import React from "react";
// import { useState, useEffect } from "react";
// import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
// // import { useAuthState } from "react-firebase-hooks/auth";
// import { app } from "../../firebase";
// import GetComment from "./GetComment";

// const auth = getAuth(app);

// const Comment = () => {
//   const [user, setUser] = useState(null);
//   const [comment, setComment] = useState("");

//   const postUserData = (event) => {
//     setComment(event.target.value);
//   };

//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         // yes you are logged in
//         setUser(user);
//         console.log("You are logged in");
//       } else {
//         // user logged out
//         console.log("You are logged out");
//         setUser(null);
//       }
//     });
//   }, []);
//   const submitData = async (event) => {
//     event.preventDefault();

//     const name = user.displayName;
//     const email = user.email;
//     // && (user.displayName || user.email)
//     if (comment && (name || email)) {
//       const res = fetch(
//         "https://instantstays-16909-default-rtdb.firebaseio.com/userDataRecord.json",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(
//             // comment + " commnented by " + (user.displayName || user.email)
//             { name, email, comment }
//           ),
//         }
//       );
//       if (res) {
//         alert("Data stored");
//       }
//       setComment("");
//     } else {
//       alert("Plz fill the data");
//     }
//   };

//   return (
//     <>
//       {user !== null ? (
//         <div
//           style={{
//             color: "grey",
//           }}
//         >
//           Your comment will be seen as -- {user.displayName || user.email}
//         </div>
//       ) : (
//         <div></div>
//       )}
//       <form method="POST">
//         <input
//           type="text"
//           placeholder="Enter your comment"
//           value={comment}
//           onChange={postUserData}
//           name="comment"
//           required
//           style={{
//             padding: "10px 15px",
//             margin: "1rem 0 0 0",
//           }}
//         />
//         <button type="submit" onClick={submitData}>
//           Submit
//         </button>
//       </form>
//     </>
//   );
// };
// export default Comment;

/********* Method 2 **********/

import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "../../firebase";

const firestore = getFirestore(app);
const auth = getAuth(app);

const Comment = () => {
  const [comm, setComm] = useState("");
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

  const onchange = (e) => {
    e.preventDefault();
    setComm(e.target.value);
  };
  const writeComment = async () => {
    const result = addDoc(collection(firestore, "userComments"), {
      comment: comm,
      userEmail: user.email,
      userName: user.displayName,
      date: Date(Date.now()).toString(),
      userLoggedIn: true,
    });
    setComm(" ");
  };

  return (
    <>
      <Container>
        <WriteComment id="writeComment">
          <input
            type="text"
            onChange={onchange}
            placeholder="Write your comment..."
          />
          <button onClick={writeComment}>Comment</button>
        </WriteComment>
      </Container>
    </>
  );
};
export default Comment;
const Container = styled.div`
  input {
    outline: none;
    border: 2px solid transparent;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 20px;
    height: 75px;
    width: 300px;
    color: #fff;
    padding: 0px 0 0px 20px;
    transition: all 150ms ease-in;
    font-weight: 600;
    font-size: 0.9rem;
    :focus {
      border: 2px solid #fff;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
  button {
    cursor: pointer;
    padding: 0.5rem 0.25rem;
    font-size: 1.2rem;
    font-weight: bold;
    border: 2px solid #000;
    border-radius: 20px;
    width: 150px;
    transition: all 200ms linear;
    :hover {
      border: 2px solid #fff;
      background-color: transparent;
      color: #fff;
    }
  }
`;
const WriteComment = styled.div`
  width: fit-content;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
  @media screen and (max-width: 576px) {
    width: 100%;
    input {
      width: 100%;
    }
    button {
      width: 100%;
    }
  }
`;
