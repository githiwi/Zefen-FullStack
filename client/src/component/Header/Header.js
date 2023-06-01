import { NavLink } from "react-router-dom";
import "./Header.css";

import React from "react";

export default function Header() {
  return (
    <div className="navs">
      <div className="rightOnNav">
        <h1>ZEFEN ዘፈን</h1>
      </div>
      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/categories">Music Genres</NavLink>
        <NavLink to="/searchArtist">Search</NavLink>
        <NavLink to="/instruments">Instruments</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </div>
  );
}
