import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function SimpleSlider() {
 
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
  };
  
  return (
    <div className="slider-container">
      <Slider {...settings}>

        <div className="frimeSwipesImg">
          <img className="swipesImg" src={require("./3img/swiper/swipA.png")} alt="" />
        </div>
        <div className="frimeSwipesImg">
        <img className="swipesImg" src={require("./3img/swiper/swipB.png")} alt="" />
        </div>
        <div className="frimeSwipesImg">
        <img className="swipesImg" src={require("./3img/swiper/swipC.png")} alt="" />
        </div>
        
      </Slider>
    </div>
  );
}

export default SimpleSlider;
