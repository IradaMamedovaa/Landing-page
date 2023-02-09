import React from "react";
import "./style.scss";
import { BiCopyright } from "react-icons/bi";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { GrTwitter } from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <div className="links">
        <div>
          <h4>Support</h4>
          <a href="#"> Help Center</a>
          <a href="#"> Supporting people with disabilities</a>
          <a href="#"> Cancellation options</a>
          <a href="#"> Report a neighborhood concern</a>
          <a href="#"> Our COVID-19 Response</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="#"> Disaster relief housing</a>
          <a href="#"> Combating discrimination</a>
        </div>
        <div>
          <h4>Hosting</h4>
          <a href="#"> Your home</a>
          <a href="#"> How to host responsibly</a>
          <a href="#"> Explore hosting resources</a>
          <a href="#"> Visit our community forum</a>
        </div>
        <div>
          <h4>About us</h4>
          <a href="#"> Newsroom</a>
          <a href="#"> Learn about new features</a>
          <a href="#"> Letter from our founders</a>
          <a href="#"> Careers</a>
          <a href="#"> Investors</a>
          <a href="#"> Gift cards</a>
        </div>
      </div>
      <div className="copyrights">
        <div className="start">
          <p>
            <BiCopyright /> 2023, Landing page
          </p>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
        </div>
        <div className="end">
          <a href="#">
            <BsFacebook />
          </a>
          <a href="#">
            <GrTwitter />
          </a>
          <a href="#">
            <BsInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
