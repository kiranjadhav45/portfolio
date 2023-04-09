import React from "react";

const ProjectMiniSection = () => {
  return (
    <div className="container">
      <div className="row">
        <h1>Projects & Certification</h1>
        <div className="col-lg-6 d-flex justify-content-center">
          <div className="card" style={{ width: "25rem" }}>
            <img
              width={100}
              className="card-img-top"
              src="../public/projectimage.jpg"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title text-white">Project Section</h5>
              <p className="card-text">
                The project section highlights an individual's completed
                projects, providing insight into their skills, experience, and
                accomplishments in a specific field.
              </p>
              <a
                href="#"
                className="btn"
                style={{ backgroundColor: "#f06d55" }}
              >
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 d-flex justify-content-center">
          <div className="card" style={{ width: "25rem" }}>
            <img
              width={100}
              className="card-img-top"
              src="../public/cetification.png"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title text-white">Certification Section</h5>
              <p className="card-text">
                Certification section displays an individual's qualifications
                and expertise gained from education, training, and experience.
                It can help them stand out in a competitive job market.
              </p>
              <a
                href="#"
                className="btn "
                style={{ backgroundColor: "#f06d55" }}
              >
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectMiniSection;
