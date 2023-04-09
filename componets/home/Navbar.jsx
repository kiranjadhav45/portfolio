import React from "react";
const Navbar = () => {
  return (
    <div>
      <nav className="bg-color navbar navbar-dark bg-dark">
        <div className="d-flex ms-4">
          <a className="nav-link plain-hover-focus mx-1" href="#">
            Home
          </a>
          <a className="nav-link mx-2" href="#">
            Projects
          </a>
          <a className="nav-link mx-1" href="#">
            Achivements
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
