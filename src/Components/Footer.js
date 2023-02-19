import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaBars } from 'react-icons/fa';
import {
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../images/logo.svg";

function Footer() {
    return (
        <div className="footer">
 <div className="img" style={{ width: "110px" }}>
        <img style={{ maxWidth: "100%", height: "auto" }} src={logo} alt="" />
      </div>
            <div className="sending">
                <p>
                    see all my projects here
                </p>
                <div className="submit">
                    <input placeholder="Email Address" />
                    <div class="btn">
                            Submit
                    </div>
                </div>
            </div>
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
       
        </div>
    )
}
export default Footer