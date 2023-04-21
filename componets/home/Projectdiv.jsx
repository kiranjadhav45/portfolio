import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Projectdiv = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-10 my-4 project_section ms-auto">
          <h2>Projects Section</h2>
          <p>
            Showcasing my skills and expertise through practical applications{" "}
          </p>
          <Link to="/projects">Explore</Link>
        </div>
        <div className="col-lg-10 certification_section_div my-4">
          <h2>Certification Section</h2>
          <p>
            Certifications: Demonstrating my dedication and knowledge in
            relevant fields
          </p>
          <Link to="/achivements">Explore</Link>
        </div>
      </div>
    </div>
  );
  śśś;
};

export default Projectdiv;
