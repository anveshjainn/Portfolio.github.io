import './HeroImgStyles.css';

import React from 'react'

import Img from "../assets/img4.jpg"
import { Link } from 'react-router-dom';

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
         <img className="img" src={Img} alt="Img"/>
        </div>
        <div className="content">
          <h3>Hi,</h3>
          <h3>I'm Anvesh,</h3>
          <h2>Web Developer</h2>
          <div>
            <Link to= "/about" className="btn">About</Link>
            <Link to= "/contact" className="btn btn-light">Contact</Link>
          </div>
        </div>
    </div>
  );
};

export default HeroImg;