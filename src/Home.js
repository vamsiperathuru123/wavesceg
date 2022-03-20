
import './Home.css';
import "./Header.css";
import Header from './Header';

import Footer from './Footer';
import CarouselHome from './CarouselHome';
import Navlinks from './Navlinks';
import { Link } from 'react-router-dom';
import i1 from "./images/i1.jpg";






function Home(){
    return(
       <div className='home'>
              <Header/>
              <Navlinks/>
              
                <div className="home">
                    <h1 className='lap'>Waves</h1>
                    <div>
                      <CarouselHome/>
                    </div>
                    <div className='content'>
                      <p className='lap_2'>Waves , the well renowned national level techno management symposium is being held every year and entices more than 5000 participants from around the globe. It is a platform for the students to gain insight of the contemporary technical contraptions providing them an opportunity to triumph in this fast pacing digital world. Events on management also expose them to the enterprising world of entrepreneurship. A chance for the geeks to take a plunge on innovation and an opportunity for the pompous nerds to be exposed to contemporary advancements in technology is what makes WAVES one of the most inquisitive event to be marked in the calendar. The accomplishment of events and workshops in an interim of 3 days for the transcended minds is what makes our tagline a reality. "Infinity Unravelled".</p>
                       <p className='lap_2'>A range of certified workshops are hosted in collaboration with prominent organisations in the fields of electrical, electronics, mechanical and robotics. The Robotic events enhance and provoke the most intuitive to explore further out of the box. The participants are pulled beyond the academic circles by diverse non technical and management events. Apart from these, online events from technical and non technical areas play a significant part in the journey. Following the footsteps of 38 former success stories the venture of WAVES commences yet again.</p>
                    </div>
                    
                    <h2 className='lap'>Events</h2>
                    <h2 className='lap_1'>Tech Events</h2>
                    <div className='Events'>
                        <div>
                          <h2 className='lap'>Event 1</h2>
                        </div>
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
                    <div className='Events'>
                        <div>
                          <h2 className='lap'>Event 2</h2>
                        </div>
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
                    <div className='Events'>
                        <div>
                          <h2 className='lap'>Event 3</h2>
                        </div>
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
                    <div className='Events'>
                        <div>
                          <h2 className='lap'>Event 4</h2>
                        </div>
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
                    <div className='Events'>
                        <div>
                          <h2 className='lap'>Event 5</h2>
                        </div>
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
                    <div className='Events'>
                        <div>
                          <h2 className='lap'>Event 6</h2>
                        </div>
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
                    <div className='Events'>
                        <div>
                          <h2 className='lap'>Event 7</h2>
                        </div>
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
                    

                    <h2 className='lap_1'>Non-Tech Events</h2>
                    <div>
                        <div className='Events'>
                          <h2 className='lap'>Event 1</h2>
                        </div>
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
                    <div className='Events'>
                        <div>
                          <h2 className='lap'>Event 2</h2>
                        </div>
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
                    <div className='Events'>
                        <div>
                          <h2 className='lap'>Event 3</h2>
                        </div>
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
                    <div className='Events'>
                        <div>
                          <h2 className='lap'>Event 4</h2>
                        </div>
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
                    <div className='Events'>
                        <div>
                          <h2 className='lap'>Event 5</h2>
                        </div>
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
                    <div className='Events'>
                        <div>
                          <h2 className='lap'>Event 6</h2>
                        </div>
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
                    

                    <h2 className='lap'>Workshops</h2>
                    <div className="home">
                        <h2 className='lap_1'>Electrical</h2>
                        
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
                     <div className="home">
                          <h2 className='lap_1'>Power System</h2>
                          
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
                      <div className="home">
                          <h2 className='lap_1'>Electronics</h2>
                          
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
                      <div className="home">
                            <h2 className='lap_1'>Latest Technology</h2>
                  
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
                        <div className="home">
                            <h2 className='lap_1'>CS/IT</h2>
                        
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
                        <div className="home">
                            <h2 className='lap_1'>Khaleel sir Workshop</h2>
                      
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
                      
                </div>     
                <Footer/>
        </div> 
           

    );
}
export default Home;
