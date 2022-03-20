
import './Home.css';
import "./Header.css";
import Header from './Header';

import Footer from './Footer';

import Navlinks from './Navlinks';







function Home(){
    return(
       <div className='home'>
              <Header/>
              <Navlinks/>
              
                <div className="home">
                    <h3 className='lap'>Student Ambassador</h3>
                    <p className='lap_2'>A student ambassador (SA) is a representative of a department. He is the one we will contact for event ambassador till the end of waves. Our student ambassador program provides an opportunity for students where they can get 'The Best Student Ambassador' title which comes with its own perks. Get to attend a workshop for free or participate in events without paying your entry fee. Sounds good? All you have to do is to just bring a minimum of six of your friends with you to our symposium who will use your referral ID in the workshops or events they participate in.</p>
                    <h3 className='lap'>Benefits of being the Student Ambassador</h3>
                     <p className='lap_2'>SA can work closely with the waves team and workshop speakers.</p> 
                     <p className='lap_2'>SA can win exciting prizes. </p>
                     <p className='lap_2'>If you bring 6 students to the workshop, your workshop fee will be refunded at the end of waves</p>
                     <p className='lap_2'>Note down the code very carefully once it displayed on the screen.</p>
                </div>     
                <Footer/>
        </div> 
           

    );
}
export default Home;