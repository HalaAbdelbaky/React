import React from "react"
import contactImg from "../images/contact-img.svg";


function Contact() {
    return (
        <div className="contact">
            <h1>
                Get In Touch
            </h1>
            <div className="touch">
            <div className="contactImg">
                <img src={contactImg} style={{maxWidth:"100%",height:"auto"}}/>
            </div>
            <div className="contactInputs">
                <div className="input1">
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                </div>
                <div className="input2">
                    <input type="email" placeholder="Email address" />
                    <input type="number" placeholder="Phobe No." />
                </div>
                <textarea placeholder="Message" />
            </div>
            </div>
            <div className="btn">
<a>Send...</a>
            </div>
        </div>
    )
}
export default Contact