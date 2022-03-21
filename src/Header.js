import React from 'react';

import './Header.css';
import i1 from "./images/i1.jpg";









function Header(){
 

    
    return(
     <div>
        <nav className="header">
            <img className="header__logo"  alt="logo" src={i1}/>
        
            
            
          </nav>    
    </div>
        
     
    );
}
export default Header;