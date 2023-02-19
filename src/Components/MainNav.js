import React, { useState, useEffect } from "react";
import { useRef } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import logo from "../images/logo.svg";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaBars } from 'react-icons/fa';
import {
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "../App.css";
import Introduct from "./Introduct";
import Skills from "./Skills";
import Projects from "./Projects";


function MainNav() {

  const [show, setShow] = useState(false)
  const [isActive, setIsActive] = useState(false)

  const showNav = () => {
    setShow(!show)
  }
  
  const SideNavbar = () => {
    console.log("hi")
    return (
      <div className="side-nav" >
        <BrowserRouter>
          <div className="nav">
            <div style={{ margin: "10px" }}>
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  color: isActive ? "#7f69a6" : "white",
                })}
              >
                Home
              </NavLink>
            </div>
            <div style={{ margin: "10px" }}>
              <NavLink
                to="/about"
                style={({ isActive }) => ({
                  color: isActive ? "#7f69a6" : "white",
                })}
              >
                Skills
              </NavLink>
            </div>
            <div style={{ margin: "10px" }}>
              <NavLink
                to="/contact"
                style={({ isActive }) => ({
                  color: isActive ? "#7f69a6" : "white",
                })}
              >
                Projects
              </NavLink>
            </div>
          </div>

          <Routes>
            <Route exact path="/" />
            <Route exact path="/about" />
            <Route exact path="/contact" />
          </Routes>

        </BrowserRouter>
        <div className="socialMedia">
          <div className="linkedIn">
            <a target="_blank"
              href="https://www.facebook.com/hala.elsawahly" rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
          <div className="faceBook">
            <a target="_blank"
              href="https://www.facebook.com/hala.elsawahly" rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
          <div className="gitHub">
            <a target="_blank"
              href="https://github.com/HalaAbdelbak" rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
        <div className="btn">
          <button>Let s Connect</button>
        </div>
      </div>
    )
  }


  const [color, setColor] = useState(false);

  const scrollEvent = () => {
    if (window.scrollY >= 80) {
      setColor(true)
    }
    else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', scrollEvent)


  return (
    <div className={color ? "header active" : "header"} style={{ color: color }}>
      <div className="img" style={{ width: "110px" }}>
        <img style={{ maxWidth: "100%", height: "auto" }} src={logo} alt="" />
      </div>
      <div className="icons-nav">
        <BrowserRouter>
          <div className="nav">
            <div style={{ margin: "10px" }}>
              <Link
                style={({ isActive }) => ({
                  color: isActive ? "#7f69a6" : "white",
                })}
                to="introduct"
                smooth={true}
                offset={-200}
                duration={500}
              >
                Home
              </Link>
            </div>
            <div style={{ margin: "10px" }}>
              <Link

                style={({ isActive }) => ({
                  color: isActive ? "#7f69a6" : "white",
                })}
                to="skills"
                smooth={true}
                offset={5}
                duration={500}
              >
                Skills
              </Link>
            </div>
            <div style={{ margin: "10px" }}>
              <Link
                style={({ isActive }) => ({
                  color: isActive ? "#7f69a6" : "white",
                })}
                to="projects"
                smooth={true}
                offset={30}
                duration={500}
              >
                Projects
              </Link>
            </div>
          </div>

          <Routes>
            <Route exact path="home" />
            <Route exact path="/skills" />
            <Route exact path="/projects" element={<Projects />} >
              <Route exact path="first" element={<Skills />} />
              <Route exact path="second" element={<Skills />} />
              <Route exact path="third" element={<Skills />} />
            </Route>
          </Routes>

        </BrowserRouter>
        <div className="socialMedia">
          <div className="linkedIn">
            <a target="_blank"
              href="https://www.facebook.com/hala.elsawahly" rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
          <div className="faceBook">
            <a target="_blank"
              href="https://www.facebook.com/hala.elsawahly" rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
          <div className="gitHub">
            <a target="_blank"
              href="https://github.com/HalaAbdelbak" rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
        <div className="btn">

          <button>
            <Link to="contact"
              smooth={true}
              offset={100}
              duration={500}>
              Let s Connect
            </Link>
          </button>
        </div>
      </div>
      <div className="bars" style={{ display: "none" }} onClick={showNav} >
        <FaBars />
      </div>
      {show ?
        <SideNavbar />
        : null
      }

    </div>
  );
}

export default MainNav;
