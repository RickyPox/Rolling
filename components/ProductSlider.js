import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default function ProductSlider (){
    return(
    <div className="bg-[#30B6C9] mb-[50px]">
        <Carousel
        renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
                hasPrev && (
                <div className="absolute left-0 z-20 h-full flex justify-center items-center">
                    <button onClick={clickHandler} className="xl:ml-[40px] ml-[10px] px-[15px] py-[8px] xl:px-[25px] xl:py-[18px] rounded-full bg-[#011523]">
                        <img className="PrevArrowImage"
                            src="/PrevArrow.svg"/>
                    </button>
                </div>
                )
            }
            renderArrowNext={(clickHandler, hasNext, labelNext) =>
                hasNext && (
                <div className="absolute right-0 top-0 z-20 h-full flex justify-center items-center">
                    <button onClick={clickHandler} className="xl:mr-[40px] mr-[10px] px-[15px] py-[8px] xl:px-[25px] xl:py-[18px] rounded-full bg-[#011523]">
                        <img className="NextArrowImage"
                            src="nextArrow.svg" />
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
        <div className="flex xl:flex-row flex-col justify-center items-center justify-items-center xl:px-[375px] xl:py-[60px] xl:space-x-[50px] px-[70px] py-2">
            <img src="ImageSlider1.png" className="ProductSliderImage"/>
            <div className="text-left text-white">
                <h2>Teste</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                </p>
            </div>
        </div>
        <div className="flex xl:flex-row flex-col justify-center items-center justify-items-center xl:px-[375px] xl:py-[60px] xl:space-x-[50px] px-[70px] py-2">
            <img src="ImageSlider1.png" className="ProductSliderImage"/>
            <div className="text-left text-white">
                <h2>Teste</h2>
                <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                </p>
            </div>
        </div>
        </Carousel>
    </div>
);
}