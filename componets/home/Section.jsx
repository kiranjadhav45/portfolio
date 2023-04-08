import React from "react";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";
import { FiInstagram } from "react-icons/fi";
import { AiFillFacebook } from "react-icons/ai";
const Section = () => {
  return (
    <div className="container">
      <div className="row mt-4 ">
        <div className="col-lg-7 mt-4 text-center profile-image my-4 ">
          <img
            width={500}
            className="img-fluid"
            src="../../public/kiranjadhav.png"
          />
        </div>
        <div className="col-lg-5 my-auto text-center justify-content-center my-4">
          <h1 className="name-heading">Kiran Jadhav</h1>
          <p>Frontend Developer, Programmer & React.</p>

          <div className="mt-4 footer mb-4">
            <BsLinkedin className="mx-2" size={25} />
            <GoMarkGithub className="mx-2" size={25} />
            <FiInstagram className="mx-2" size={25} />
            <AiFillFacebook className="mx-2" size={25} />
            <BsTwitter className="mx-2" size={25} />
          </div>
          <div className="mt-4 text-center justify-content-center ">
            <a href="https://wa.me/917620152632">
              <img
                target="_blank"
                className=" img-fluid"
                width={150}
                alt="Responsive image"
                src="../../public/WhatsAppButtonGreenSmall.png"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
