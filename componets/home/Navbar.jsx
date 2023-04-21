// import React from "react";
import * as React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { GiAchievement } from "react-icons/gi";
import { RiProjectorFill } from "react-icons/ri";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="">
      <nav className="bg-color navbar navbar-dark bg-dark mt-4">
        <div className="d-flex align-items-center ms-4  navbardiv">
          <div className="hovereffectadd">
            <Link className="nav-link mx-1" to="/">
              <AiOutlineHome className="mx-1" size={23} />
              <strong>Home</strong>
            </Link>
          </div>
          <div>
            <Link className="nav-link mx-3" to="/projects">
              <RiProjectorFill className="mx-1" size={23} />
              <strong>Projects</strong>
            </Link>
          </div>
          <div>
            <Link className="nav-link mx-3" to="/achivements">
              <GiAchievement className="mx-1" size={25} />
              <strong>Achivements</strong>
            </Link>
          </div>
        </div>
      </nav>
      <hr style={{ color: "#ffffff" }} />
    </div>
  );
};

export default Navbar;
