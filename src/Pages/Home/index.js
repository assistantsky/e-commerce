import HomeBanner from "../../Components/HomeBanner";
import Button from '@mui/material/Button';
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ProductItem from "../../Components/ProductItem";
import Rating from '@mui/material/Rating';
import { TfiFullscreen } from "react-icons/tfi";
import { GoHeart } from "react-icons/go";
import HomeCat from "../../Components/HomeCat";


const Home = () => {
    var productSliderOptions = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
    };
    
    return (
        <>
            <HomeBanner />
            <HomeCat/>
            <section className="homeProducts">
                <div className="container">
                    <div className="row">
                        < div className="col-md-3">
                            <div className="banner">
                                <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/banner-box.jpg" className="cursor w-100" />
                            </div>
                             <div className="banner mt-5">
                                <img src="https://raw.githubusercontent.com/rinkuv37/fullstack-ecommerce/refs/heads/main/images/banner2.jpg" className="cursor w-100" />
                            </div>
                           
                        </div>
                        <div className="col-md-9 productRow">
                            <div className="d-flex align-items-center">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">BEST SELLERS</h3>
                                    <p className="text-light text-sml mb-0">Do not miss the current offers until the end of march.</p>
                                </div>
                                <Button className="viewAllBtn ml-auto">View All<IoIosArrowRoundForward/></Button>
                            </div>
                            
                            <div className="product_row w-100 mt-4">
                                <Swiper
                                    slidesPerView={4}
                                    spaceBetween={0}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[Navigation]}
                                    className="mySwiper">
                                    
                                    <SwiperSlide>
                                   <ProductItem/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                     <div className="item productItem">
                                        <div className="imgWrapper">
                                            <img src="https://m.media-amazon.com/images/I/71UMJ+m3I3L.jpg" className="w-100"/>
                                            </div>

                                            <span className="badge badge-primary">28%</span>

                                            <div className="actions">
                <Button><TfiFullscreen /></Button>
                <Button><GoHeart style={{fontSize:'20px'}}/></Button>
                                            </div>

                                           <div className="info"> <h4>Werther's Original carmel hard candies</h4>
                                            <span className="text-success d-block"> In Stock</span>
                                                <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5} />

                                                <p className="d-flex">
                                                    <span className="oldPrice">$20.00</span>
                                                    <span className="netPrice text-danger ml-2">$14.00</span>
                                                </p>
                                            </div>
                                    </div>
                                    </SwiperSlide>
                                     <SwiperSlide>
                                    
                                         <div className="item productItem">
                                        <div className="imgWrapper">
                                            <img src="https://m.media-amazon.com/images/I/71UMJ+m3I3L.jpg" className="w-100"/>
                                            </div>

                                            <span className="badge badge-primary">28%</span>

                                            <div className="actions">
                <Button><TfiFullscreen /></Button>
                <Button><GoHeart style={{fontSize:'20px'}}/></Button>
                                            </div>

                                           <div className="info"> <h4>Werther's Original carmel hard candies</h4>
                                            <span className="text-success d-block"> In Stock</span>
                                                <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5} />

                                                <p className="d-flex">
                                                    <span className="oldPrice">$20.00</span>
                                                    <span className="netPrice text-danger ml-2">$14.00</span>
                                                </p>
                                            </div>
                                        </div>
                                        </SwiperSlide>
                                    
                                <SwiperSlide>
                                 <div className="item productItem">
                                        <div className="imgWrapper">
                                            <img src="https://m.media-amazon.com/images/I/71UMJ+m3I3L.jpg" className="w-100"/>
                                            </div>

                                            <span className="badge badge-primary">28%</span>

                                            <div className="actions">
                <Button><TfiFullscreen /></Button>
                <Button><GoHeart style={{fontSize:'20px'}}/></Button>
                                            </div>

                                           <div className="info"> <h4>Werther's Original carmel hard candies</h4>
                                            <span className="text-success d-block"> In Stock</span>
                                                <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5} />

                                                <p className="d-flex">
                                                    <span className="oldPrice">$20.00</span>
                                                    <span className="netPrice text-danger ml-2">$14.00</span>
                                                </p>
                                            </div>
                                        </div>
                                    <div className="item productItem">
                                        <div className="imgWrapper">
                                            <img src="https://m.media-amazon.com/images/I/71UMJ+m3I3L.jpg" className="w-100"/>
                                            </div>
                                            <div className="info"> <h4>Werther's Original carmel hard candies</h4>
                                            <span className="text-success d-block"> In Stock</span>
                                                <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5} />

                                                <p className="d-flex">
                                                    <span className="oldPrice">$20.00</span>
                                                    <span className="netPrice text-danger ml-2">$14.00</span>
                                                </p>
                                            </div>
                                   </div>
                                    </SwiperSlide>
                                     <SwiperSlide>
                                 <div className="item productItem">
                                        <div className="imgWrapper">
                                            <img src="https://m.media-amazon.com/images/I/71UMJ+m3I3L.jpg" className="w-100"/>
                                            </div>

                                            <span className="badge badge-primary">28%</span>

                                            <div className="actions">
                <Button><TfiFullscreen /></Button>
                <Button><GoHeart style={{fontSize:'20px'}}/></Button>
                                            </div>

                                           <div className="info"> <h4>Werther's Original carmel hard candies</h4>
                                            <span className="text-success d-block"> In Stock</span>
                                                <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5} />

                                                <p className="d-flex">
                                                    <span className="oldPrice">$20.00</span>
                                                    <span className="netPrice text-danger ml-2">$14.00</span>
                                                </p>
                                            </div>
                                        </div>
                                    <div className="item productItem">
                                        <div className="imgWrapper">
                                            <img src="https://m.media-amazon.com/images/I/71UMJ+m3I3L.jpg" className="w-100"/>
                                            </div>
                                            <div className="info"> <h4>Werther's Original carmel hard candies</h4>
                                            <span className="text-success d-block"> In Stock</span>
                                                <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5} />

                                                <p className="d-flex">
                                                    <span className="oldPrice">$20.00</span>
                                                    <span className="netPrice text-danger ml-2">$14.00</span>
                                                </p>
                                            </div>
                                   </div>
                                    </SwiperSlide>
                         </Swiper>

                                    
                                 
                           </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;