import React from "react";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";
import { FiInstagram } from "react-icons/fi";
import { AiFillFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="text-center justify-content-center footer my-4">
      <h3 className="mb-3 footer">Stay Connected</h3>
      <p className="mb-0 footer"> Pune Maharashtra, India</p>
      <h5 className="footer">
        <a className="nav-link" href="mailto:kiranjadhav4518@gmail.com">
          kiranjadhav4518@gmail.com
        </a>
      </h5>
      <small>+91 7620152632</small>
      <div className="mt-4 footer mb-4 icons_contacts_link">
        <a href="https://www.linkedin.com/in/jadhavkiran45/" target="_blank">
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
    </div>
  );
};

export default Footer;
