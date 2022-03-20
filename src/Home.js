
import './Home.css';
import Header from './Header';

import Footer from './Footer';
import CarouselHome from './CarouselHome';
import Navlinks from './Navlinks';
import Te from './Te';
import Nte from './Nte';
import Electrical from './Electrical';
import Ps from './Ps';
import Electronics from './Electronics';
import Lt from './Lt';
import Cs from './Cs';
import Khaleel from './Khaleel';






function Home(){
    return(
       <div className='home'>
              <Header/>
              <Navlinks/>
              
                <div className="home">
                    <h1 className='lap'>Home</h1>
                    <div>
                      <CarouselHome/>
                    </div>
                    <h2 className='lap'>Events</h2>
                    <h2 className='lap'>Workshops</h2>
                      
                </div>     
                <Footer/>
        </div> 
           

    );
}
export default Home;
