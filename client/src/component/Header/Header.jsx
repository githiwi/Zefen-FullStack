import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../userContext/UserContext";
import axios from "../../util/axiosInstance";
import "./Header.css";
import LogoImage from '../../images/logo.png'
import avatarImage from '../../images/avator.png'

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
  const handleLinkClick = () => {
    setIsNavOpen(false); // Close the navigation menu when a link is clicked
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link to="/" className="navbar-logo">
        <img src={LogoImage} alt="Zefen Logo" className="logo-image" />
      </Link>
      <button
        className={`navbar-toggler ${isNavOpen ? "open" : ""}`}
        type="button"
        onClick={handleNavToggle}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}>
        <ul className="navbar-nav ml-auto">
          {/* Navigation links */}
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/"
              onClick={handleLinkClick}
            >
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
                  src={avatarImage}
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

