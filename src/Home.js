
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
                
                </div>     
                <Footer/>
        </div> 
           

    );
}
export default Home;
