//-------------------------------------------------------------------------------------------------
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../userContext/UserContext";
import axios from "../../util/axiosInstance";
import "./Header.css";

export default function Header() {
  const { user, setUser } = useContext(UserContext);

  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleSignOut = async () => {
    try {
      // make a request to your server to end the user's session
      await axios.get("/api/users/signout");

      // clear the user's data from the context
      setUser(null);
    } catch (error) {
      console.error("There was an error signing out", error);
    }
  };

  const handleNavToggle = () => {
    console.log("is Open");
    setIsNavOpen(!isNavOpen);
    console.log("isOpen", isNavOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light-blue">
      <Link className="navbar-brand" to="/">
        ዘፈን Zefen
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={handleNavToggle}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div  className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`} id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/categories">
              Music Genres
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/searchArtist">
              Search
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/instruments">
              Instruments
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/addSong">
              Add Song
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          {user ? (
            <li className="nav-item">
              <div className="d-flex align-items-center">
                <img
                  src={user.avatar}
                  alt="User avatar"
                  className="user-avatar"
                />
                <Link className="nav-link" to="/" onClick={handleSignOut}>
                  Sign Out
                </Link>
              </div>
            </li>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/signin">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  Signup
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

//-------------------------------------------------------------------------------
