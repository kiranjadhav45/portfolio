// import React from "react";
import * as React from "react";

import { Link } from "react-router-dom";

import { AiOutlineHome } from "react-icons/ai";
import { GiAchievement } from "react-icons/gi";
import { RiProjectorFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="">
      <nav className="bg-color navbar navbar-dark bg-dark mt-4">
        <div className="d-flex align-items-center ms-4 navbardiv navbardiv">
          <div className="hovereffectadd">
            <a className="nav-link plain-hover-focus mx-1" href="#">
              <AiOutlineHome className="mx-1" size={25} />
              <stong>Home</stong>
            </a>
          </div>
          <div>
            <a className="nav-link mx-3" href="#">
              <RiProjectorFill className="mx-1" size={25} />
              <stong>Projects</stong>
            </a>
          </div>
          <div>
            {" "}
            <a className="nav-link mx-1" href="#">
              <GiAchievement className="mx-1" size={25} />
              <stong>Achivements</stong>
            </a>
          </div>
        </div>
      </nav>
      <hr style={{ color: "#ffffff" }} />
    </div>
  );
};

export default Navbar;
