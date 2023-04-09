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

          <div className="mt-4 footer mb-4 icons_contacts_link">
            <a
              href="https://www.linkedin.com/in/jadhavkiran45/"
              target="_blank"
            >
              <BsLinkedin className="mx-2" size={25} />
            </a>
            <a href="https://github.com/kiranjadhav45" target="_blank">
              <GoMarkGithub className="mx-2" size={25} />
            </a>
            <a href="https://www.instagram.com/_k.i.r.a.n_07/" target="_blank">
              <FiInstagram className="mx-2" size={25} />
            </a>
            <a>
              <AiFillFacebook className="mx-2" size={25} />
            </a>

            <a href="https://twitter.com/Jadhavkiran45" target="_blank">
              <BsTwitter className="mx-2" size={25} />
            </a>
          </div>
          <div className="mt-4 text-center justify-content-center whatsappimage">
            <a target="_blank" href="https://wa.me/917620152632">
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
