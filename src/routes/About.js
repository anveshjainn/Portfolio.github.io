import React from 'react'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="ABOUT" text="I'm a very ambitious Web developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects. I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time. My skill set consists of Java, HTML5, CSS3, Javascript, React, Bootstrap, SQL and I am constantly working towards being a complete MERN stack developer"/>
      <Footer />
    </div>
  )
}

export default About