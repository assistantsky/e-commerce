import Rating from '@mui/material/Rating';
import { TfiFullscreen } from "react-icons/tfi";
import Button from '@mui/material/Button';
import { GoHeart } from "react-icons/go";
import { SwiperSlide } from 'swiper/react';

const productItem = () => {
    return (
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
    )
}

export default productItem;