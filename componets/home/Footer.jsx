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
      <h5 className="footer"> kiranjadhav4518@gmail.com</h5>
      <small>+91 7620152632</small>
      <div className="mt-4 footer mb-4">
        <BsLinkedin className="mx-2" size={25} />
        <GoMarkGithub className="mx-2" size={25} />
        <FiInstagram className="mx-2" size={25} />
        <AiFillFacebook className="mx-2" size={25} />
        <BsTwitter className="mx-2" size={25} />
      </div>
    </div>
  );
};

export default Footer;
