
import './Home.css';
import Header from './Header';

import Footer from './Footer';

import Navlinks from './Navlinks';






function Contacts(){
    return(
       <div className='home'>
              <Header/>
              <Navlinks/>
              
                <div className="home">
                    <h1 className='lap'>CONTACT US</h1>
                    <h2 className='lap'>Events</h2>
                    <h3 className='lap_1'>Tech Events -</h3>
                    <h3 className='lap_1'>Non-Tech Events -</h3>
                    <h2 className='lap'>Workshops</h2>
                    <h3 className='lap_1'>Electrical -</h3>
                    <h3 className='lap_1'>Power System -</h3>
                    <h3 className='lap_1'>Electronics -</h3>
                    <h3 className='lap_1'>Latest Technology -</h3>
                    <h3 className='lap_1'>CS/IT -</h3>
                    <h3 className='lap_1'>Khaleel Sir -</h3>

                
                </div>     
                <Footer/>
        </div> 
           

    );
}
export default Contacts;
