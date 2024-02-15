import "./FooterStyles.css"

import React from "react"

import {FaHome, FaPhone, FaMailBulk, FaLinkedin, FaGithub} from "react-icons/fa"
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <div className="footer">
       <div className="footer-container">
         <div className="left">
            <div className="location">
               <FaHome size={20} style={{ color: "wheat", marginRight: "2rem" }} /> 
               <div>
                <p>Bhopal, India</p>
               </div>
            </div>
            <div className="phone">
               <FaPhone size={20} style={{ color: "wheat", marginRight: "2rem" }} />
               
                <p>+91 8989184309</p>
                
            </div>
            <div className="email">
               <FaMailBulk size={20} style={{ color: "wheat", marginRight: "2rem" }} />
               
                <p>avyo069@gmail.com</p>
                
            </div>

         </div>

         <div className="right">
            <p>For any further queries you can connect with me on Linkedin or through mail.</p>
            <div className="social">

            <Link to="http://www.linkedin.com/in/anvesh-jain-719806201">
              <p>Linkedin Profile</p>
            </Link>

            <Link to="https://github.com/anveshjainn">
               <p>Github Profile</p>
            </Link>
            
            </div>
         </div>
       </div>
    </div>
  )
}

export default footer;