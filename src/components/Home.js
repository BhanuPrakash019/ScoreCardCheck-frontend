// src/components/Home.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-card">
        <h2>Results have been released!</h2>
        <button onClick={() => navigate("/results")}>
          Click here to check your result
        </button>
      </div>
    </div>
  );
};

export default Home;
