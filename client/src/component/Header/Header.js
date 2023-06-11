import { NavLink ,Link} from "react-router-dom";
import React, { useContext } from 'react';
import UserContext from "../userContext/UserContext";
import axios from 'axios';
//import "./Header.css";



export default function Header() {
  const { user, setUser } = useContext(UserContext);

  const handleSignOut = async () => {
    try {
      console.log("signout req")
      // make a request to your server to end the user's session
      await axios.post('/api/users/signout');
      console.log("signout done")
      // clear the user's data from the context
      setUser(null);
    } catch (error) {
      console.error('There was an error signing out', error);
    }
  };

  return (
    <div className="d-flex flex-column flex-md-row align-items-center justify-content-between p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
    <h3 className="my-0 mr-md-auto font-weight-normal">ዘፈን Zefen</h3>
    <nav className="nav justify-content-end">
      <Link className="p-2 text-dark" to="/">Home</Link>
      <Link className="p-2 text-dark" to="/categories">Music Genres</Link>
      <Link className="p-2 text-dark" to="/searchArtist">Search</Link>
      <Link className="p-2 text-dark" to="/instruments">Instruments</Link>
      <Link className="p-2 text-dark" to="/uploadSong">Upload Muisc</Link>
      <Link className="p-2 text-dark" to="/about">About</Link>
      {user ? (
          <div>
            <img src={user.avatar} alt="User avatar" className="user-avatar" />
            <Link className="btn btn-outline-info me-md-2" to="/" onClick={handleSignOut}>Sign Out</Link>
          </div>
        ) : (
          <>
            <Link className="btn btn-outline-info me-md-2" to="/signin">Login</Link>
            <Link className="btn btn-outline-info me-md-2" to="/signup">Signup</Link>
          </>
        )}
      </nav>
  </div>
   
  );
}
