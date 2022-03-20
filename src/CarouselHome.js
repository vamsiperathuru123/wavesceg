import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";


import "./Carousel.css";




function CarouselHome(){
   


    return (
    <div className="carousel">

       <AliceCarousel className="carousel_image"    autoPlay={true}  touchTracking={true} infinite={true}  autoPlayInterval="3000"  autoPlayStrategy="none" activeIndex="1"  mouseTracking={true} touchMoveDefaultEvents={true}  disableSlideInfo={true} disableButtonsControls={true} keyboardNavigation={true}>
       <img className="carousel_image" src="https://www.linkpicture.com/q/logo1_7.jpg" alt="h"/>
          
       </AliceCarousel>
    </div>
    );
}
export default CarouselHome;