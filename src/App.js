// import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import SearchBar from "./Components/SearchBar";
import Register from "./Components/Register_Place/Register";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Confirmation from "./Components/Register_Place/Confirmation";
import { app } from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import ForumMain from "./Components/Forum/ForumMain";
import TravelAdvice from "./Components/Forum/TravelAdvice";
import ReachManali from "./Components/Forum/Questions/ReachManali";

/********** PLACES LINK GOES HERE **********/
import MUD from "./Components/Places/MUD";
import SVVSB from "./Components/Places/SVVSB";
import HJD from "./Components/Places/HJD";
import WhichBetterNainiManali from "./Components/Forum/Questions/WhichBetterNainiManali";
import GGH from "./Components/Places/GGH";
import SVN from "./Components/Places/SVN";
import PG from "./Components/Places/PG";

import Team from "./Components/Team";
import FoodAndDrinks from "./Components/Forum/FoodAndDrinks";
import GGSS from "./Components/Places/GGSS";
// import SSDSVS from "./Components/Demo Places/SSDSVS";

const auth = getAuth(app);
const firestore = getFirestore(app);

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/searchbar" element={<SearchBar />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/confirmation" element={<Confirmation />}></Route>
          <Route path="/forummain" element={<ForumMain />}></Route>
          <Route path="/traveladvice" element={<TravelAdvice />}></Route>
          <Route path="/foodanddrinks" element={<FoodAndDrinks />}></Route>
          <Route path="/reachmanali" element={<ReachManali />}></Route>
          <Route
            path="/whichbetternainimanali"
            element={<WhichBetterNainiManali />}
          ></Route>
          <Route path="/team" element={<Team />}></Route>

          {/*********  PLACES LINK GOES HERE *********/}
          <Route path="/mud" element={<MUD />}></Route>
          <Route path="/svvsb" element={<SVVSB />}></Route>
          <Route path="/hjd" element={<HJD />}></Route>
          <Route path="/ggh" element={<GGH />}></Route>
          <Route path="/svn" element={<SVN />}></Route>
          <Route path="/pg" element={<PG />}></Route>
          <Route path="/ggss" element={<GGSS />}></Route>
          {/* <Route path="/ssdsvs" element={<SSDSVS />}></Route> */}
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
