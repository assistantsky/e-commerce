import React from 'react';
import Slider from "react-slick";

const HomeBanner = () => {
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay:true
    };

    return (
        <div className="homeBannerSection">
            <Slider {...settings}>
                <div className="item">
                    <img src="https://raw.githubusercontent.com/rinkuv37/fullstack-ecommerce/refs/heads/main/images/slideBanner2.jpg" className="w-100"/>
                </div>
                <div className="item">
                    <img src="https://raw.githubusercontent.com/rinkuv37/fullstack-ecommerce/refs/heads/main/images/slideBanner2.jpg" className="w-100"/>
                </div>
                 <div className="item">
                    <img src="https://raw.githubusercontent.com/rinkuv37/fullstack-ecommerce/refs/heads/main/images/slideBanner1.jpg" className="w-100"/>
                </div>
                <div className="item">
                    <img src="https://raw.githubusercontent.com/rinkuv37/fullstack-ecommerce/refs/heads/main/images/slideBanner2.jpg" className="w-100"/>
                </div>
                 <div className="item">
                    <img src="https://raw.githubusercontent.com/rinkuv37/fullstack-ecommerce/refs/heads/main/images/slideBanner1.jpg" className="w-100"/>
                </div>
            </Slider>
        </div>
    );
}

export default HomeBanner;
