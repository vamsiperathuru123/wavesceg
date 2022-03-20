import './Home.css';
import "./Navlinks.css";
import Header from './Header';

import Footer from './Footer';
import CarouselHome from './CarouselHome';
import Navlinks from './Navlinks';
import { Link } from 'react-router-dom';
import i1 from "./images/i1.jpg";







function Electronics(){
    return(
       <div className='home'>
              <Header/>
              <Navlinks/>
              
                <div className="home">
                    <h1 className='lap'>Electronics</h1>
                    <div>
                      <CarouselHome/>
                    </div>
                    <div className='Events'>
            
                        <div className='image'>
                          <img className='image' src={i1} alt="1"/>
                        </div>
                        <div className='buttons'>
                                  <button className='V_button' onClick={() => {window.location.href="https://forms.gle/4a9vwGj7gnUAvEPk9"}}>Register</button>
                                  <button className='V_button' onClick={() => {window.location.href="https://maps.app.goo.gl/9HY4T478aRgJ2sbo8"}}>Location</button>
                                  <div className="navlinks_n">
                                      <div className="navlinks__outer_n">
                                          <div className="navlinks__inner_n">
                                              <Link to="/Contacts">More details</Link>
                                          </div>
                                      </div>
                                  </div>
                        </div>
                    </div>
                
                </div>     
                <Footer/>
        </div> 
           

    );
}
export default Electronics;