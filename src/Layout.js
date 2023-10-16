import React from "react";
import { Outlet, Link } from "react-router-dom";
import Search from "./Search";
import img from './image 1.png'

const Layout = () => {
  return (
    <>
      <nav
        class="navbar navbar-expand-lg navbar-light bg-light"
        style={{
          background:
            "linear-gradient(to right, #FEDDEE, #FCF6FC,#C5EAED,#FDDDFE)",
        }}
      >
        <Link to="/" class="navbar-brand">
          <img src={img} style={{ height: "50px", width: "150px" }} />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link className="nav-link">Solution</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link">Feature</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link">Blogs</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link">About</Link>
            </li>
          </ul>
          <div className="d-flex flex-end">
          
              <button
                type="button"
                class="btn btn-outline-primary"
                style={{ color: "#0076CE", border: "1.5px" }}
              >
                Login
              </button>
          
              <button type="button" class="btn btn-primary">
                Register
              </button>
      
          </div>
        </div>
      </nav>
    </>
  );
};

export default Layout;
