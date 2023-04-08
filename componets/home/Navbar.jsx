import React from "react";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="d-flex ms-4">
          <a className="nav-link mx-1" href="#">
            Home
          </a>
          <a className="nav-link mx-1" href="#">
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
