import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import LogoImage from "../../images/logo.png";
import avatarImage from "../../images/avator.png";
import axios from "../../util/axiosInstance";
import UserContext from "../userContext/UserContext";
import { Offcanvas } from "bootstrap";
import "./SideBar.css";

export default function SideBar() {
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



  const handleLinkClick = () => {
    console.log(offcanvasRef);
    //btnRef.click();
    console.log(btnRef);
    const bsOffCanvas = new Offcanvas(offcanvasRef);
    console.log("hidden", bsOffCanvas);
    bsOffCanvas.hide();
    console.log("hidden");
    setIsNavOpen(false);
    // Close the navigation menu when a link is clicked
  };

  const offcanvasRef = useRef(null);
  const btnRef = useRef(null);
  return (
    <div>
      <button
        class="btn btn-outline-secondary"
        type="button"
        ref={btnRef}
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasResponsive"
        aria-controls="offcanvasResponsive"
      >
        ZEFEN ዘፍን
      </button>

      <div
        class="offcanvas  offcanvas-start"
        ref={offcanvasRef}
        tabindex="-1"
        id="offcanvasResponsive"
        aria-labelledby="offcanvasResponsiveLabel"
      >
        <div class="offcanvas-header">
          <Link to="/" className="navbar-logo">
            <img src={LogoImage} alt="Zefen Logo" className="logo-image" />
          </Link>
          <h5 class="offcanvas-title" id="offcanvasResponsiveLabel">
            ZEFEN ዘፍን
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div>
            This Web app is about the four scales of Ethiopian music. Which are
            Ambasel, Bati, Tizita, and Anchihoye.
          </div>
          <ul class="list-group list-group-flush mt-3">
            <li class="list-group-item">
              <Link
                className="nav-link text-center "
                to="/"
                onClick={handleLinkClick}
                data-bs-target="#offcanvasResponsive"
                data-bs-dismiss="offcanvas"
              >
                Home
              </Link>
            </li>
            <li class="list-group-item">
              <Link
                className="nav-link text-center"
                to="/categories"
                onClick={handleLinkClick}
                
              >
                Music Genres
              </Link>
            </li>
            <li class="list-group-item">
              <Link
                className="nav-link text-center"
                to="/searchArtist"
                onClick={handleLinkClick}
              >
                Search
              </Link>
            </li>
            <li class="list-group-item">
              <Link
                className="nav-link text-center"
                to="/instruments"
                onClick={handleLinkClick}
              >
                Instruments
              </Link>
            </li>
            <li class="list-group-item">
              <Link
                className="nav-link text-center"
                to="/addSong"
                onClick={handleLinkClick}
              >
                Add Song
              </Link>
            </li>
            <li class="list-group-item">
              <Link
                className="nav-link text-center"
                to="/about"
                onClick={handleLinkClick}
              >
                About
              </Link>
            </li>
            {user ? (
              <li className="list-group-item">
                <div className="d-flex align-items-center justify-content-center">
                  <img
                    src={avatarImage}
                    alt="User avatar"
                    className="user-avatar"
                  />
                  <Link
                    className="nav-link text-center"
                    to="/"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </Link>
                </div>
              </li>
            ) : (
              <>
                <li className="list-group-item">
                  <Link
                    className="nav-link text-center"
                    to="/signin"
                    onClick={handleLinkClick}
                  >
                    Login
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    className="nav-link text-center"
                    to="/signup"
                    onClick={handleLinkClick}
                  >
                    Signup
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
