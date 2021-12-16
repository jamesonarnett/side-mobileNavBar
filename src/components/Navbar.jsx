import React from "react";
import "./Navbar.css";
const Navbar = (props) => {
  return (
    <nav className="navbar">
      <ul className="navbarNav">
        <li class="logo">
          <a href="#" class="navLink">
            <img src="https://img.icons8.com/ios/50/000000/arrow--v1.png" />
            <span class="linkText logoText">Jameson Arnett</span>
          </a>
        </li>
        <li className="navItem">
          <a href="#" className="navLink">
            <img src="https://img.icons8.com/ios/50/000000/home--v1.png" />
            <span className="linkText">Home</span>
          </a>
        </li>
        <li className="navItem">
          <a href="#" className="navLink">
            <img src="https://img.icons8.com/ios/50/000000/user-male-circle.png" />
            <span className="linkText">About</span>
          </a>
        </li>{" "}
        <li className="navItem">
          <a href="#" className="navLink">
            <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-cubes-arcade-flatart-icons-outline-flatarticons.png" />
            <span className="linkText">Projects</span>
          </a>
        </li>{" "}
        <li className="navItem">
          <a href="#" className="navLink">
            <img src="https://img.icons8.com/ios/50/000000/resume.png" />
            <span className="linkText">Resume</span>
          </a>
        </li>{" "}
        <li className="navItem">
          <a href="#" className="navLink rotate-diagonal-1">
            <img src="https://img.icons8.com/ios/50/000000/contact-card.png" />
            <span className="linkText">Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
