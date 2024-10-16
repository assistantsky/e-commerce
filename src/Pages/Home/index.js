import HomeBanner from "../../Components/HomeBanner";
import Button from "@mui/material/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProductItem from "../../Components/ProductItem";
import HomeCat from "../../Components/HomeCat";
import { LuMailSearch } from "react-icons/lu";



const Home = () => {
  const bestSellers = Array.from({ length: 5 }); // Placeholder for best-selling products
  const newProducts = Array.from({ length: 4 }); // Placeholder for new products

  return (
    <>
      <HomeBanner />
      <HomeCat />
      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="sticky">
                <div className="banner mt-5">
                  <img
                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/banner-box.jpg"
                    alt="Banner 1"
                    className="cursor w-100"
                  />
                </div>
                <div className="banner mt-5">
                  <img
                    src="https://raw.githubusercontent.com/rinkuv37/fullstack-ecommerce/refs/heads/main/images/banner2.jpg"
                    alt="Banner 2"
                    className="cursor w-100"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-9 productRow">
              <div className="d-flex align-items-center">
                <div className="info w-75">
                  <h3 className="mb-0 hd">BEST SELLERS</h3>
                  <p className="text-light text-sml mb-0">
                    Do not miss the current offers until the end of March.
                  </p>
                </div>
                <Button className="viewAllBtn ml-auto">
                  View All
                  <IoIosArrowRoundForward />
                </Button>
              </div>
              <div className="product_row w-100 mt-4">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={0}
                  navigation={true}
                  slidesPerGroup={3}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  {bestSellers.map((_, index) => (
                    <SwiperSlide key={index}>
                      <ProductItem />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="d-flex align-items-center mt-5">
                  <div className="info w-75">
                    <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                    <p className="text-light text-sml mb-0">
                      New products with updated stocks.
                    </p>
                  </div>
                  <Button className="viewAllBtn ml-auto">
                    View All
                    <IoIosArrowRoundForward />
                  </Button>
                </div>
                <div className="product_row productRow2 w-100 mt-4 d-flex">
                  {newProducts.map((_, index) => (
                    <ProductItem key={index} />
                  ))}
                </div>

                <div className="d-flex mt-4 mb-5 bannerSec">
                  <div className="banner">
                    <img
                      src="https://raw.githubusercontent.com/rinkuv37/fullstack-ecommerce/refs/heads/main/images/banner3.jpg"
                      className="cursor w-100"
                    />
                  </div>
                  <div className="banner">
                    <img
                      src="https://raw.githubusercontent.com/rinkuv37/fullstack-ecommerce/refs/heads/main/images/banner4.jpg"
                      className="cursor w-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="newsLetterSection mt-3 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="text-white mb-1">
                $20 discount for your first order
              </p>
              <h3 className="text-white">Join our newsletter and get.....</h3>
              <p className="text-light">
                Join our email subscription now to get update on <br />
                promotions and coupons
              </p>

              <form>
                <LuMailSearch/>
                <input type="text"  placeholder="your Email Address"/>
                <Button>Subscribe</Button>
              </form>
            </div>
            <div className="col-md-6">
              <img src="https://raw.githubusercontent.com/rinkuv37/fullstack-ecommerce/refs/heads/main/images/coupon.png" />
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Home;
