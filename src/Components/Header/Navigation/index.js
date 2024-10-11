import Button from '@mui/material/Button';
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaAngleRight } from "react-icons/fa6";


const Navigation = () => {

    const [isOpenSidebarVal, setisopenSidebarVal] = useState(false);

    return (
         <nav>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-2 navPart1'>
                        <div className='catWrapper'>
                             <Button className='allCatTab align-items-center' onClick={()=>setisopenSidebarVal(!isOpenSidebarVal)}>
                            <span className='icon1 mr-2'><IoIosMenu/></span>
                            <span class="text">ALL CATEGORIES</span>
                            <span className='icon2 ml-2'><FaAngleDown/></span>
                            </Button>
                            <div className={`sidebarNav ${isOpenSidebarVal
                                === true ? 'open' : ''}`}>
                                <ul>
                                    <li><Link to="/"><Button>men<FaAngleRight className='ml-auto'/></Button></Link>
                                        <div className="submenu">
                                            <Link to="/"><Button>beauty</Button></Link> 
                                    <Link to="/"><Button>watches</Button></Link> 
                                    <Link to="/"><Button>clothing</Button></Link> 
                                    <Link to="/"><Button>color</Button></Link> 
                                    <Link to="/"><Button>shoes</Button></Link> 
                                        </div>
                                    </li>
                                    <li><Link to="/"><Button>women<FaAngleRight className='ml-auto'/></Button></Link>
                                        <div className="submenu">
                                            <Link to="/"><Button>beauty</Button></Link> 
                                    <Link to="/"><Button>watches</Button></Link> 
                                    <Link to="/"><Button>clothing</Button></Link> 
                                    <Link to="/"><Button>color</Button></Link> 
                                    <Link to="/"><Button>shoes</Button></Link> 
                                        </div>
                                    </li>
                                    <li><Link to="/"><Button>clothes<FaAngleRight className='ml-auto'/></Button></Link>
                                        <div className="submenu">
                                            <Link to="/"><Button>beauty</Button></Link> 
                                    <Link to="/"><Button>watches</Button></Link> 
                                    <Link to="/"><Button>clothing</Button></Link> 
                                    <Link to="/"><Button>color</Button></Link> 
                                    <Link to="/"><Button>shoes</Button></Link> 
                                        </div>
                                    </li>
                                    <li><Link to="/"><Button>watches<FaAngleRight className='ml-auto'/></Button></Link>
                                        <div className="submenu">
                                            <Link to="/"><Button>beauty</Button></Link> 
                                    <Link to="/"><Button>watches</Button></Link> 
                                    <Link to="/"><Button>clothing</Button></Link> 
                                    <Link to="/"><Button>color</Button></Link> 
                                    <Link to="/"><Button>shoes</Button></Link> 
                                        </div>
                                    </li>
                                    <li><Link to="/"><Button>jeans<FaAngleRight className='ml-auto'/></Button></Link>
                                        <div className="submenu">
                                            <Link to="/"><Button>beauty</Button></Link> 
                                    <Link to="/"><Button>watches</Button></Link> 
                                    <Link to="/"><Button>clothing</Button></Link> 
                                    <Link to="/"><Button>color</Button></Link> 
                                    <Link to="/"><Button>shoes</Button></Link> 
                                        </div>
                                    </li>
                                    <li><Link to="/"><Button>shirts<FaAngleRight className='ml-auto'/></Button></Link>
                                        <div className="submenu">
                                            <Link to="/"><Button>beauty</Button></Link> 
                                    <Link to="/"><Button>watches</Button></Link> 
                                    <Link to="/"><Button>clothing</Button></Link> 
                                    <Link to="/"><Button>color</Button></Link> 
                                    <Link to="/"><Button>shoes</Button></Link> 
                                        </div>
                                    </li>
                                    <li><Link to="/"><Button>lobar<FaAngleRight className='ml-auto'/></Button></Link>
                                        <div className="submenu">
                                            <Link to="/"><Button>beauty</Button></Link> 
                                    <Link to="/"><Button>watches</Button></Link> 
                                    <Link to="/"><Button>clothing</Button></Link> 
                                    <Link to="/"><Button>color</Button></Link> 
                                    <Link to="/"><Button>shoes</Button></Link> 
                                        </div>
                                    </li>
                                    <li><Link to="/"><Button>chain<FaAngleRight className='ml-auto'/></Button></Link>
                                        <div className="submenu">
                                            <Link to="/"><Button>beauty</Button></Link> 
                                    <Link to="/"><Button>watches</Button></Link> 
                                    <Link to="/"><Button>clothing</Button></Link> 
                                    <Link to="/"><Button>color</Button></Link> 
                                    <Link to="/"><Button>shoes</Button></Link> 
                                        </div>
                                     </li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                            <div className="col-sm-10 navPart2 d-flex align-items-center">
                        <ul className="list list-inline ml-auto">
                            <li className="list-inline-item"><Link to="/"><Button>Home</Button></Link></li>
                            <li className="list-inline-item"><Link to="/"><Button>Men</Button></Link>
                                <div className="submenu shadow">
                                    <Link to="/"><Button>beauty</Button></Link> 
                                    <Link to="/"><Button>watches</Button></Link> 
                                    <Link to="/"><Button>clothing</Button></Link> 
                                    <Link to="/"><Button>color</Button></Link> 
                                    <Link to="/"><Button>shoes</Button></Link> 
                                    
                                </div>
                            </li>
                            <li className="list-inline-item"><Link to="/"><Button>Women</Button></Link>
                            <div className="submenu shadow">
                                    <Link to="/"><Button>beauty</Button></Link> 
                                    <Link to="/"><Button>watches</Button></Link> 
                                    <Link to="/"><Button>clothing</Button></Link> 
                                    <Link to="/"><Button>color</Button></Link> 
                                    <Link to="/"><Button>shoes</Button></Link> 
                                
                                    </div>
                                    </li>
                            <li className='list-inline-item'><Link to="/"><Button>Beauty</Button></Link>
                            <div className='submenu shadow'>
                                    <Link to="/"><Button>beauty</Button></Link> 
                                    <Link to="/"><Button>watches</Button></Link> 
                                    <Link to="/"><Button>clothing</Button></Link> 
                                    <Link to="/"><Button>color</Button></Link> 
                                    <Link to="/"><Button>shoes</Button></Link> 
                                </div></li>
                            <li className='list-inline-item'><Link to="/"><Button>Watches</Button></Link>
                            <div className='submenu shadow'>
                                    <Link to="/"><Button>beauty</Button></Link> 
                                    <Link to="/"><Button>watches</Button></Link> 
                                    <Link to="/"><Button>clothing</Button></Link> 
                                    <Link to="/"><Button>color</Button></Link> 
                                    <Link to="/"><Button>shoes</Button></Link> 
                                    
                                </div></li>
                            <li className='list-inline-item'><Link to="/"><Button>Kids</Button></Link>
                            <div className='submenu shadow'>
                                   <Link to="/"><Button>beauty</Button></Link> 
                                    <Link to="/"><Button>watches</Button></Link> 
                                    <Link to="/"><Button>clothing</Button></Link> 
                                    <Link to="/"><Button>color</Button></Link> 
                                    <Link to="/"><Button>shoes</Button></Link> 
                                    
                                    
                                </div></li>
                            <li className='list-inline-item'><Link to="/"><Button>Gift</Button></Link>
                            <div className='submenu shadow'>
                                    <Link to="/"><Button>beauty</Button></Link> 
                                    <Link to="/"><Button>watches</Button></Link> 
                                    <Link to="/"><Button>clothing</Button></Link> 
                                    <Link to="/"><Button>color</Button></Link> 
                                    <Link to="/"><Button>shoes</Button></Link> 
                                    
                                </div></li>
                            <li className='list-inline-item'><Link to="/"><Button> Blog</Button></Link>
                            <div className='submenu shadow'>
                                    <Link to="/"><Button>beauty</Button></Link> 
                                    <Link to="/"><Button>watches</Button></Link> 
                                    <Link to="/"><Button>clothing</Button></Link> 
                                    <Link to="/"><Button>color</Button></Link> 
                                    <Link to="/"><Button>shoes</Button></Link> 
                                </div></li>
                            <li className='list-inline-item'><Link to="/"><Button>Contact Us</Button></Link>
                            <div className='submenu shadow'>
                                     <Link to="/"><Button>beauty</Button></Link> 
                                    <Link to="/"><Button>watches</Button></Link> 
                                    <Link to="/"><Button>clothing</Button></Link> 
                                    <Link to="/"><Button>color</Button></Link> 
                                    <Link to="/"><Button>shoes</Button></Link> 
                                    
                                </div></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
    )
}

export default Navigation;