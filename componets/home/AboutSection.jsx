import React from "react";
import { GrMail } from "react-icons/gr";
import { FaDownload } from "react-icons/fa";
import { MdCloudDownload } from "react-icons/md";

const AboutSection = () => {
  return (
    <div className="container my-4">
      <h1>About Me</h1>
      <div className="row">
        <div className="col-lg-6 mb-4">
          <p>
            I am extremely proficient in Front-End Development using HTML5,
            Cascade Style Sheets (CSS3), Bootstrap, Advance Javascript, React.Js
            & Vue.Js And apart from Front-End, I have good knowledge in Back-End
            using PHP & MySQL as well as in designing using Adobe Photoshop,
            Adobe Illustrator, Adobe XD, Sketch & Figma, and continuously engage
            in trying to extend my skills with new technology.
          </p>
        </div>
        <div className="col-lg-6 my-2">
          <h2>Any Type Of Query & Discussion</h2>
          <div className="Email-font">
            <GrMail />
            <spam className="mx-2">kiranjadhav4518@gmail.com</spam>
            <div className="mt-4 downlod-button">
              <a>
                {/* <FaDownload style={{ backgroundColor: "#f06d55" }} /> */}
                <MdCloudDownload
                  href="#"
                  className="mx-2"
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
