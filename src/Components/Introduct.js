import React, { useState, useEffect } from 'react';
import imgspace from "../images/space.svg";
import { FaArrowRight } from 'react-icons/fa';


const Introduct = () => {
  const [placeholder, setPlaceholder] = React.useState('');

  const
    string = ' Hi! I am Hala AbdelBaky Esmael',
    index = React.useRef(0);

  React.useEffect(() => {
    function increase() {
      setPlaceholder(placeholder + string[index.current]);
      index.current++;
    }
    if (index.current < string.length) {
      let addChar = setInterval(increase, 500);
      return () => clearInterval(addChar);
    }

    else {
      var deleteChar = setInterval(back, 500);
    }


    function back() {
      let character = string.substr(0, index.current);
      setPlaceholder(character);
      index.current--
    }


  }, [placeholder]);

  return (
    <div className="introduct">
      <div className='main-content'>
        <div className='btn'>
          <button>
            Wellcome All In My Profile
          </button></div>
        <h1>{placeholder}</h1>
        <div>
          I began to self learn web development about 2 years ago and since then
        </div>
        <p>Let us Connect <span><FaArrowRight /></span></p>
      </div>
      <div className='img'>
        <img style={{ maxWidth: "100%", height: "auto" }} src={imgspace} alt="" />
      </div>
    </div>
  )
}
export default Introduct;

