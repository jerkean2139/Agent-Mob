import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/survey");
  };

  return (
    <div className="home-page">
      <header className="gradient-text">
        <h1>Welcome to Agent Mob</h1>
        <p>Your AI-powered solution for business automation.</p>
      </header>
      <div className="get-started">
        <button onClick={handleGetStarted} className="get-started-btn">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
