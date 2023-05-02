import React from "react";
import { GrMail } from "react-icons/gr";
import { FaDownload } from "react-icons/fa";
import { MdCloudDownload } from "react-icons/md";
// import { MdCloudDownload } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";

const AboutSection = () => {
  return (
    <div className="container my-4">
      <h1>About Me</h1>
      <div className="row">
        <div className="col-lg-6 mb-4">
          <p>
            {/* As a MERN stack developer, I have extensive experience with MongoDB,
            Express.js, React, and Node.js. My expertise in front-end
            development using React.js allows me to create dynamic and
            interactive user interfaces using HTML5, CSS3, and Bootstrap. In
            addition, my knowledge of back-end development using Node.js and
            Express.js, along with MongoDB as the database system, enables me to
            build robust and scalable web applications. I am constantly seeking
            to learn and apply new technologies to enhance my skills as a MERN
            stack developer. */}
            As a MERN stack developer, I have worked with MongoDB, Express.js,
            React, and Node.js.{" "}
            <b>My expertise in front-end development using React.js </b> allows
            me to create dynamic and interactive user interfaces using HTML5,
            CSS3, and Bootstrap. In addition, my knowledge of back-end
            development using Node.js and Express.js, along with MongoDB as the
            database system, enables me to build robust and scalable web
            applications. I am constantly seeking to learn and apply new
            technologies to enhance my skills as a MERN stack developer.
          </p>
        </div>
        <div className="col-lg-6 my-2">
          <h2>Any Type Of Query & Discussion</h2>
          <div className="Email-font">
            <a href="mailto:kiranjadhav4518@gmail.com">
              <GrMail className="mx-2" />
              kiranjadhav4518@gmail.com
            </a>

            <p>
              <IoCallSharp className="mx-2" size={20} /> +91 7620152632
            </p>
            <div className="mt-4 downlod-button Resume">
              <a
                className="Downlod_Resume_button"
                target="_blank"
                href="https://drive.google.com/file/d/1DLf56IvAfH7MkXnzccQbXtp0uWTaO5hY/view?usp=share_link"
              >
                <MdCloudDownload
                  className="mx-2 "
                  size={25}
                  style={{ backgroundColor: "#f06d55" }}
                />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
