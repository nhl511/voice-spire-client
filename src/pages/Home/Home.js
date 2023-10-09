import React, { useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="test">
      <h3>Role Buyer</h3>
      <Link to="/voices">
        <span>Go to Voices Page</span>
      </Link>
      <Link to="/upload">
        <span>Go to upload Page</span>
      </Link>

      <Link to="/tpfb">
        <span>Go to tracking project page</span>
      </Link>

      <h3>Role Seller</h3>
      <Link to="/posts">
        <span>Go to posts Page</span>
      </Link>
      <Link to="/your-voice">
        <span>Go to Your Voice Page</span>
      </Link>
      <Link to="/profile">
        <span>Go to profile page</span>
      </Link>

      <Link to="/tpfs">
        <span>Go to tracking project page</span>
      </Link>
      <h3>Role Admin (Tạm thời chưa phân quyền)</h3>
      <Link to="/postedprojectsmanagement">
        <span>Go to posted project management page</span>
      </Link>
      <Link to="/sentprojectsmanagement">
        <span>Go to sent project management page</span>
      </Link>
      <Link to="/lv">
        <span>Go to voice management page</span>
      </Link>
    </div>
  );
};

export default Home;
