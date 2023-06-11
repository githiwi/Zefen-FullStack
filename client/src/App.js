import React, { useState } from "react";
import { Route, Routes, Router } from "react-router-dom";
import "./App.css";
import About from "./component/About/About";

import Categories from "./component/Categories/Categories";
import Details from "./component/Details";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";

import Instruments from "./component/Instruments/Instruments";
import Search from "./component/Search/Search";
import artistDetailData from "./component/Search/ArtistDetailData";
import LoginView from "./component/Home/LoginView";
import SignupForm from "./component/SignUp/SignupForm";
import UserContext from "./component/userContext/UserContext";
import UploadSong from "./component/UplaodSong/UploadSong";

function App() {
  const [user, setUser] = useState(null); // add a piece of state for the user's data
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/categories" element={<Categories />} />

          <Route path="/instruments" element={<Instruments />} />
          <Route path="/uploadSong" element={<UploadSong />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/searchArtist"
            element={<Search details={artistDetailData} />}
          />

          <Route path="/details/:genrename" element={<Details />} />
          <Route path="/signin" element={<LoginView />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="*" element={<div> 404 page not found </div>} />
        </Routes>
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
