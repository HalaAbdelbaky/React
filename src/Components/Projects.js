import React, { useEffect, useState, Component } from 'react';

import mobile1 from "../images/mobile1.jpg";
import mobile2 from "../images/mobile2.jpg";
import mobile3 from "../images/mobile3.jpg";

import logo1 from "../images/logo2.webp";
import logo2 from "../images/logo3.png";
import logo3 from "../images/logo1.jpg";
import { NavLink, BrowserRouter } from 'react-router-dom';
import ProjectImgs from './ProjectImgs';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';



function Projects() {
    const [imgs, setImgs] = useState(
        [
            {
                title: "Business Startup",
                description: "Design & Development",
                imgUrl: mobile1,
            },
            {
                title: "Business Startup",
                description: "Design & Development",
                imgUrl: mobile2,
            },
            {
                title: "Business Startup",
                description: "Design & Development",
                imgUrl: mobile3,
            },
            {
                title: "Business Startup",
                description: "Design & Development",
                imgUrl: logo1,
            },
            {
                title: "Business Startup",
                description: "Design & Development",
                imgUrl: logo2,
            },
            {
                title: "Business Startup",
                description: "Design & Development",
                imgUrl: logo3,
            },
        ]
    )

    const change = () => {
        setImgs(imgs);
        console.log("hi")
    }

    const [activeProject, setActiveProject] = useState("first")
    // let component;
    // switch (window.location.pathname) {
    //     case "/":
    //         component = <Projects />;
    //     case "/second":
    //         component = <SecondSection/>;
    //     case "/third":
    //         component = <h1>rrrrr</h1>;
    // }
    return (
        <div className="projects">
            <h1>Projects</h1>
            <p >
                My Name Is Hala and I live In Sharqia
            </p>
            <div className="  projectsContent">
                <div className="container">
                    <div className="nav">
                        <BrowserRouter>
                            <NavLink to="/first" style={({ isActive }) => ({
                                background: isActive ? " linear-gradient(#a64488,#5c3cb2)" : "",
                            })} onClick={
                                () => {
                                    setActiveProject("first")
                                }
                            }>
                                1st Section
                            </NavLink>

                            <NavLink to="/second" style={({ isActive }) => ({
                                background: isActive ? " linear-gradient(#a64488,#5c3cb2)" : "",
                            })}
                                onClick={
                                    () => {
                                        setActiveProject("second")
                                    }
                                }
                                className="center"
                            >
                                2nd section
                            </NavLink >

                            <NavLink to="/third" style={({ isActive }) => ({
                                background: isActive ? "linear-gradient(#a64488,#5c3cb2)" : "",
                            })}
                                onClick={
                                    () => {
                                        setActiveProject("third")
                                    }
                                }
                            >
                                3rd section

                            </NavLink>

                        </BrowserRouter>
                    </div>
                    {activeProject === "first" && <div className="display-img">
                        {imgs.map(
                            (ele, index) => {
                                return (
                                    <>
                                        <ProjectImgs
                                            key={index}
                                            {...ele}
                                        />
                                    </>
                                )
                            }
                        )}
                    </div>}
                    <div>
                        {activeProject === "second" && <SecondSection />}
                        {activeProject === "third" && <ThirdSection />}
                    </div>
                </div>
            </div>

        </div>);
}

export default Projects;