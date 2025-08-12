// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Student Results Portal</h2>
      <div>
        <Link to="/">Home</Link>
      </div>
    </nav>
  );
};

export default Navbar;
