import { Link } from "react-router-dom";
import React, { useContext } from "react";
import UserContext from "../userContext/UserContext";
import axiosApiInstance from "../../util/axiosInstance";
import "./Header.css";

export default function Header() {
  const { user, setUser } = useContext(UserContext);

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

  return (
    <div className="d-flex flex-column flex-md-row align-items-center justify-content-between p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <h3 className="my-0 mr-md-auto font-weight-normal">ዘፈን Zefen</h3>
      <nav className="nav justify-content-end">
        <Link className="p-2 text-dark" to="/">
          Home
        </Link>
        <Link className="p-2 text-dark" to="/categories">
          Music Genres
        </Link>
        <Link className="p-2 text-dark" to="/searchArtist">
          Search
        </Link>
        <Link className="p-2 text-dark" to="/instruments">
          Instruments
        </Link>
        <Link className="p-2 text-dark" to="/addSong">
          Add Music
        </Link>
        <Link className="p-2 text-dark" to="/about">
          About
        </Link>
        {user ? (
          <div>
            <img src={user.avatar} alt="User avatar" className="user-avatar" />
            <Link
              className="btn btn-outline-info me-md-2"
              to="/"
              onClick={handleSignOut}
            >
              Sign Out
            </Link>
          </div>
        ) : (
          <>
            <Link className="btn btn-outline-info me-md-2" to="/signin">
              Login
            </Link>
            <Link className="btn btn-outline-info me-md-2" to="/signup">
              Signup
            </Link>
          </>
        )}
      </nav>
    </div>
  );
}

// import { Link } from "react-router-dom";
// import React, { useContext, useState } from 'react';
// import UserContext from "../userContext/UserContext";
// import axiosApiInstance from "../../util/axiosInstance";
// import "./Header.css";

// export default function Header() {
//   const { user, setUser } = useContext(UserContext);
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const handleSignOut = async () => {
//     try {
//       await axiosApiInstance.get('/api/users/signout');
//       setUser(null);
//     } catch (error) {
//       console.error('There was an error signing out', error);
//     }
//   };

//   const handleSidebarToggle = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   return (
//     <div className="header">
//       <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
//         <Link className="sidebar-link" to="/">Home</Link>
//         <Link className="sidebar-link" to="/categories">Music Genres</Link>
//         <Link className="sidebar-link" to="/searchArtist">Search</Link>
//         <Link className="sidebar-link" to="/instruments">Instruments</Link>
//         <Link className="sidebar-link" to="/uploadSong">Upload Music</Link>
//         <Link className="sidebar-link" to="/about">About</Link>
//       </div>
//       <div className="header-content">
//         <h3 className="logo">ዘፈን Zefen</h3>
//         <nav className="nav">
//           <button className="sidebar-toggle" onClick={handleSidebarToggle}>
//             <i className="fa fa-bars"></i>
//           </button>
//           <div className="links">
//             <Link className="link" to="/">Home</Link>
//             <Link className="link" to="/categories">Music Genres</Link>
//             <Link className="link" to="/searchArtist">Search</Link>
//             <Link className="link" to="/instruments">Instruments</Link>
//             <Link className="link" to="/uploadSong">Upload Music</Link>
//             <Link className="link" to="/about">About</Link>
//           </div>
//           <div className="user-actions">
//             {user ? (
//               <div className="user-info">
//                 <img src={user.avatar} alt="User avatar" className="user-avatar" />
//                 <Link className="signout-btn" to="/" onClick={handleSignOut}>Sign Out</Link>
//               </div>
//             ) : (
//               <>
//                 <Link className="signin-btn" to="/signin">Login</Link>
//                 <Link className="signup-btn" to="/signup">Signup</Link>
//               </>
//             )}
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// }
