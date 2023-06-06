import { NavLink ,Link} from "react-router-dom";
//import "./Header.css";

import React from "react";

export default function Header() {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center justify-content-between p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
    <h3 className="my-0 mr-md-auto font-weight-normal">ዘፈን Zefen</h3>
    <nav className="nav justify-content-end">
      <Link className="p-2 text-dark" to="/">Home</Link>
      <Link className="p-2 text-dark" to="/categories">Music Genres</Link>
      <Link className="p-2 text-dark" to="/searchArtist">Search</Link>
      <Link className="p-2 text-dark" to="/instruments">Instruments</Link>
      <Link className="p-2 text-dark" to="/about">About</Link>
      <Link className="btn btn-outline-info me-md-2" to="/signin">Login</Link>
      <Link className="btn btn-outline-info me-md-2" to="/signup">Signup</Link>
    </nav>
  </div>
    // <div className="navs">
    //   <div className="rightOnNav">
    //     <h1>ZEFEN ዘፈን</h1>
    //   </div>
    //   <div className="links">
    //     <NavLink to="/">Home</NavLink>
    //     <NavLink to="/categories">Music Genres</NavLink>
    //     <NavLink to="/searchArtist">Search</NavLink>
    //     <NavLink to="/instruments">Instruments</NavLink>
    //     <NavLink to="/about">About</NavLink>
    //   </div>
    // </div>
  );
}
