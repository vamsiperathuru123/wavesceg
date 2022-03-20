import React,{useState} from 'react';
import './Navlinks.css';
import { Link } from 'react-router-dom';


    
      

function Navlinks(){
    const[show,setShow]=useState(false)
    const[show1,setShow1]=useState(false)
    return(
        <div className="navlinks">
            
            <div className="navlinks__outer">
                <div className="navlinks__inner">
                    <Link to="/Home">
                        Home
                    </Link>
                    
                    <button className="V_button" onClick={()=>setShow(!show)} >
                        Events
                    </button>
                    {show?<Link to="/Te">Tech Events</Link>:null}
                    {show?<Link to="/Nte">Non-Tech Events</Link>:null}
                    
                    <button className="V_button" onClick={()=>setShow1(!show1)} >
                       Workshops
                    </button>
                    {show1?<Link to="/Electrical">Electrical</Link>:null}
                    {show1?<Link to="/Ps">Power System</Link>:null}
                    {show1?<Link to="/Electronics">Electronics</Link>:null}
                    {show1?<Link to="/Lt">Latest Technology</Link>:null}
                    {show1?<Link to="/Cs">CS/IT</Link>:null}
                    {show1?<Link to="/Khaleel">Khaleel Sir</Link>:null}
                    <Link to="Sa">
                       Student Ambassador
                    </Link>
                    <Link to="/Contacts">
                       Contact us
                    </Link>
                    
                   
                    
            

                </div>
                
            </div>
        </div>

    );
}
export default Navlinks;