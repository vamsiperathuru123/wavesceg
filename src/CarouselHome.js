import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";


import "./Carousel.css";
import wc1 from "./images/wc1.jpg";
import wc2 from "./images/wc2.jpg";


function CarouselHome(){
   


    return (
    <div className="carousel">

       <AliceCarousel className="carousel_image"    autoPlay={true}  touchTracking={true} infinite={true}  autoPlayInterval="3000"  autoPlayStrategy="none" activeIndex="1"  mouseTracking={true} touchMoveDefaultEvents={true}  disableSlideInfo={true} disableButtonsControls={true} keyboardNavigation={true}>
       <img className="carousel_image" src={wc1} alt="h"/>
       <img className="carousel_image" src={wc2} alt="h"/>
          
       </AliceCarousel>
    </div>
    );
}
export default CarouselHome;