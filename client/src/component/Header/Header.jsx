// import { Link } from "react-router-dom";
// import React, { useContext } from "react";
// import UserContext from "../userContext/UserContext";
// import axiosApiInstance from "../../util/axiosInstance";
// import "./Header.css";

// export default function Header() {
//   const { user, setUser } = useContext(UserContext);

//   const handleSignOut = async () => {
//     try {
//       // make a request to your server to end the user's session
//       await axiosApiInstance.get("/api/users/signout");
//       console.log("signout done");
//       // clear the user's data from the context
//       setUser(null);
//     } catch (error) {
//       console.error("There was an error signing out", error);
//     }
//   };

//   return (
//     <div className="d-flex flex-column flex-md-row align-items-center justify-content-between p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
//       <h3 className="my-0 mr-md-auto font-weight-normal">ዘፈን Zefen</h3>
//       <nav className="nav justify-content-end">
//         <Link className="p-2 text-dark" to="/">
//           Home
//         </Link>
//         <Link className="p-2 text-dark" to="/categories">
//           Music Genres
//         </Link>
//         <Link className="p-2 text-dark" to="/searchArtist">
//           Search
//         </Link>
//         <Link className="p-2 text-dark" to="/instruments">
//           Instruments
//         </Link>
//         <Link className="p-2 text-dark" to="/addSong">
//           Add Music
//         </Link>
//         <Link className="p-2 text-dark" to="/about">
//           About
//         </Link>
//         {user ? (
//           <div>
//             <img src={user.avatar} alt="User avatar" className="user-avatar" />
//             <Link
//               className="btn btn-outline-info me-md-2"
//               to="/"
//               onClick={handleSignOut}
//             >
//               Sign Out
//             </Link>
//           </div>
//         ) : (
//           <>
//             <Link className="btn btn-outline-info me-md-2" to="/signin">
//               Login
//             </Link>
//             <Link className="btn btn-outline-info me-md-2" to="/signup">
//               Signup
//             </Link>
//           </>
//         )}
//       </nav>
//     </div>
//   );
// }
//-------------------------------------------------------------------------------------------------
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../userContext/UserContext";
import axiosApiInstance from "../../util/axiosInstance";
import "./Header.css";

export default function Header() {
  const { user, setUser } = useContext(UserContext);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleSignOut = async () => {
    try {
      // make a request to your server to end the user's session
      await axiosApiInstance.get("/api/users/signout");
      console.log("signout done");
      // clear the user's data from the context
      setUser(null);
    } catch (error) {
      console.error("There was an error signing out", error);
    }
  };

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        ዘፈን Zefen
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        onClick={handleNavToggle}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
        id="navbarNav"
      >
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
              Add Music
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          {user ? (
            <li className="nav-item">
              <div >
                <button
                  className="btn btn-outline-info dropdown-toggle"
                  type="button"
                  id="userDropdown"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    src={user.avatar}
                    alt="User avatar"
                    className="user-avatar"
                  />
                </button>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="userDropdown"
                >
                  <button
                   
                    type="button"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            </li>
          ) : (
            <>
              <li className="nav-item">
                <Link className="btn btn-outline-info mr-2" to="/signin">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-outline-info" to="/signup">
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
