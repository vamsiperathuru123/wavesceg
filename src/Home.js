
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
                    <div>
                      <Te/>
                    </div>
                    <div>
                      <Nte/>
                    </div>
                    <div>
                      <Electrical/>
                    </div>
                    <div>
                      <Ps/>
                    </div>
                    <div>
                      <Electronics/>
                    </div>
                    <div>
                      <Lt/>
                    </div>
                    <div>
                      <Cs/>
                    </div>
                    <div>
                      <Khaleel/>
                    </div>
                
                </div>     
                <Footer/>
        </div> 
           

    );
}
export default Home;
