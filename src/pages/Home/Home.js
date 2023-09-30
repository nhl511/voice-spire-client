import React, { useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="test">
      <Link to="/voices">
        <span>Go to Voices Page</span>
      </Link>
      <Link to="/upload">
        <span>Go to upload Page</span>
      </Link>
      <Link to="/approval">
        <span>Go to approval Page</span>
      </Link>
      <Link to="/posts">
        <span>Go to posts Page</span>
      </Link>
      <Link to="/profile">
        <span>Go to profile Page</span>
      </Link>
    </div>
  );
};

export default Home;
