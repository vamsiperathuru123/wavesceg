import React from 'react';
import './Footer.css';
import './Header.css';

import { Link } from 'react-router-dom';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
   faYoutube,
   faFacebook,
   faTwitter,
   faInstagram,
} from "@fortawesome/free-brands-svg-icons";


function Footer(){
    return(
        <div className="footerarea">
           
           <div className="footerarea__top">
             
                    <Link to="/Home" className="footer__back" >Back To Home</Link>
        

           </div>
           
           <div >
               <h2 className='lap'>
                   CONTACT US
               </h2>
           </div>
           <div className="footerarea__links">
                <a className="Youtube" >
                    <FontAwesomeIcon icon={faYoutube} size="4x" />
                </a>
                <a className="Facebook" >
                    <FontAwesomeIcon icon={faFacebook} size="4x"  />
                </a>
                <a className="Instagram" >
                    <FontAwesomeIcon icon={faInstagram} size="4x"  />
                </a>
               
                <a className="Twitter" >
                    <FontAwesomeIcon icon={faTwitter} size="4x"  />
                </a> 
               
              
           </div>
           
           <div className='footer_down'>
               <img className='Gmail_icon' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1200px-Gmail_icon_%282020%29.svg.png'  alt="f" />
               <Link  className='footer_mail'>abcd@gmail.com</Link><p className='footer_mail'>| All rights are reserved | &copy;{new Date().getFullYear()},wavesceg.netlify.app|</p>
           </div>
           
           
        </div>

    );
}
export default Footer;