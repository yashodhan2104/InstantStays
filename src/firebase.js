import { initializeApp } from "firebase/app";
// import { firebase } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { createContext } from "react";
import { useContext } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyChMl_vY4kEuELOTNY3ABz_YEtDWG1O08c",
  authDomain: "instantstays-16909.firebaseapp.com",
  projectId: "instantstays-16909",
  storageBucket: "instantstays-16909.appspot.com",
  messagingSenderId: "637187463236",
  appId: "1:637187463236:web:9780baf34ab9f367e14411",
  measurementId: "G-MPWTRZ3YEP",
  databaseURL: "https://instantstays-16909-default-rtdb.firebaseio.com",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
// export const db = getFirestore(app);
export const db = firebase.firestore();
export const firestore = firebase.firestore();

// export default firebase;
export default firebaseConfig;
