import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default function ImageSlider (){
    return(
    <div className="px-6 py-20 lg:px-[200px] lg:py-[100px] overflow-hidden">
        <Carousel
          renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
                hasPrev && (
                  <div className="absolute left-0 z-20 h-full flex justify-center items-center">
                    <button onClick={clickHandler} className="xl:ml-[40px] ml-[10px] px-[15px] py-[8px] xl:px-[25px] xl:py-[18px] rounded-full bg-[#30B6C9]">
                        <img className="PrevArrowImage"
                            
                            src="/PrevArrow.svg" />
                    </button>
                  </div>
                )
            }
            renderArrowNext={(clickHandler, hasNext, labelNext) =>
                hasNext && (
                  <div className="absolute right-0 top-0 z-20 h-full flex justify-center items-center">
                    <button onClick={clickHandler} className="xl:mr-[40px] mr-[10px] px-[15px] py-[8px] xl:px-[25px] xl:py-[18px] rounded-full bg-[#30B6C9]">
                        <img className="NextArrowImage"
                            
                            src="nextArrow.svg"/>
                    </button>
                  </div>  
                )
            }
        autoPlay
        infiniteLoop
        stopOnHover
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        >
          <img src="/ImageSlider1.png"></img>
          <img src="/ImageSlider1.png"></img>
        </Carousel>
    </div>
  );
}