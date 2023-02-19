import React, { useEffect, useState, useRef } from 'react';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Skills() {
    const skillSlider = [
        {
            className: " skill backEnd",
            percentage: "95%"
        },
        {
            className: " skill  data",
            percentage: "85%"
        },
        {
            className: " skill  front",
            percentage: "90%"
        },
        {
            className: " skill  cyber",
            percentage: "70%"
        }
    ]
    let [index,setIndex]=useState(0)
   let next=()=>{
    if(index===skillSlider.length-1){
        setIndex(0)
    }
    else(setIndex(index+1))
   }
   let prev=()=>{
    if(index===0){
        setIndex(skillSlider.length-1)
    }
    else(setIndex(index-1))
   }
    return (
        <div className='skillsComponent'>
            <div className="skills">
                <h1>Skills</h1>
                <p style={{ fontWeight: "bold", color: "#b8b8b8" }}>YOU Can See All My Skills Here</p>
                <div className="  skillsContent" >
                                <div className={skillSlider[index].className}>
                                <span>{skillSlider[index].percentage}</span>
                            </div>
                    <div className='right' onClick={next}>
                        <FaChevronRight />
                    </div>
                    <div className='left' onClick={prev}>
                        <FaChevronLeft /></div>
                </div>
            </div>
        </div>
    );
}

export default Skills