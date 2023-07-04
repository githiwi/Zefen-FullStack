// import React ,{useContext,useState} from 'react'
// import { Link } from "react-router-dom";
// import LogoImage from '../../images/logo.png'
// import avatarImage from '../../images/avator.png'
// import axios from "../../util/axiosInstance";
// import UserContext from "../userContext/UserContext";

// export default function SideBar() {
//     const { user, setUser } = useContext(UserContext);
//     const [isNavOpen, setIsNavOpen] = useState(false);
//       const handleSignOut = async () => {
//     try {
//       // make a request to your server to end the user's session
//       await axios.get("/api/users/signout");

//       // clear the user's data from the context
//       setUser(null);
//     } catch (error) {
//       console.error("There was an error signing out", error);
//     }
//   };
//   const handleNavToggle = () => {
//     console.log("is Open");
//     setIsNavOpen(!isNavOpen);
//     console.log("isOpen", isNavOpen);
//   };
//   const handleLinkClick = () => {
//     setIsNavOpen(false); // Close the navigation menu when a link is clicked
//   };

//   return (
//     <div>
//         {/* <a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
//   Link with href
// </a> */}
// <button class="btn btn-info" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
// ZEFEN ዘፍን
// </button>

// <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
//   <div class="offcanvas-header">

//     <Link to="/" className="navbar-logo">
//         <img src={LogoImage} alt="Zefen Logo" className="logo-image" />
//       </Link>
//       <h5 class="offcanvas-title" id="offcanvasExampleLabel">ZEFEN ዘፍን </h5>
//     <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//   </div>
//   <div class="offcanvas-body">
//     <div>

//     This Web app is about the four scales of Ethiopian music.Which are Ambasel ,Bati ,Tizita and Anchihoye. Click on dropdown button to expolore.
//     </div>
//     <div class="dropdown mt-3">
//       <button class="btn btn-info dropdown-toggle" type="button" data-bs-toggle="dropdown">
//         Dropdown button
//       </button>

//       <div className={` ${isNavOpen ? "show" : ""}`}>
//       <ul class="dropdown-menu">
//         <li> <Link
//               className="dropdown-item"
//               to="/"

//             >
//               Home
//             </Link>
//             <li className="nav-item">
//             <Link className="nav-link" to="/categories">
//               Music Genres
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/searchArtist">
//               Search
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/instruments">
//               Instruments
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/addSong">
//               Add Song
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/about">
//               About
//             </Link>
//           </li>
//           {user ? (
//             <li className="nav-item">
//               <div className="d-flex align-items-center">
//                 <img
//                   src={avatarImage}
//                   alt="User avatar"
//                   className="user-avatar"
//                 />
//                 <Link className="nav-link" to="/" onClick={handleSignOut}>
//                   Sign Out
//                 </Link>
//               </div>
//             </li>
//           ) : (
//             <>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/signin">
//                   Login
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/signup">
//                   Signup
//                 </Link>
//               </li>
//             </>
//              )}
//           </li>

//       </ul>
//       </div>
//     </div>
//   </div>
// </div>

//     </div>
//   )
// }

import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import LogoImage from "../../images/logo.png";
import avatarImage from "../../images/avator.png";
import axios from "../../util/axiosInstance";
import UserContext from "../userContext/UserContext";
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

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLinkClick = () => {
    setIsNavOpen(false); // Close the navigation menu when a link is clicked
  };

  return (
    <div>
    <div>
      <button
        class="btn btn-outline-secondary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasResponsive"
        aria-controls="offcanvasResponsive"
      >
        ZEFEN ዘፍን
      </button>

      <div
        class="offcanvas  offcanvas-start"
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
                onClick={handleLinkClick} data-bs-dismiss="offcanvas"
              >
                Home
              </Link>
            </li>
            <li class="list-group-item">
              <Link
                className="nav-link text-center"
                to="/categories"
                onClick={handleLinkClick} data-bs-dismiss="offcanvas"
              >
                Music Genres
              </Link>
            </li>
            <li class="list-group-item">
              <Link
                className="nav-link text-center"
                to="/searchArtist"
                onClick={handleLinkClick} data-bs-dismiss="offcanvas"
              >
                Search
              </Link>
            </li>
            <li class="list-group-item">
              <Link
                className="nav-link text-center"
                to="/instruments"
                onClick={handleLinkClick} data-bs-dismiss="offcanvas"
              >
                Instruments
              </Link>
            </li>
            <li class="list-group-item">
              <Link
                className="nav-link text-center"
                to="/addSong"
                onClick={handleLinkClick} data-bs-dismiss="offcanvas"
              >
                Add Song
              </Link>
            </li>
            <li class="list-group-item">
              <Link
                className="nav-link text-center"
                to="/about"
                onClick={handleLinkClick} data-bs-dismiss="offcanvas"
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
    </div>
  );
}
