
import './Home.css';
import Header from './Header';

import Footer from './Footer';
import CarouselHome from './CarouselHome';
import Navlinks from './Navlinks';







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
