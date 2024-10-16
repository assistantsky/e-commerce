import { LiaTshirtSolid } from "react-icons/lia";
import { TbTruckDelivery } from "react-icons/tb";
import { CiDiscount1 } from "react-icons/ci";
import { CiBadgeDollar } from "react-icons/ci";
import { Link } from "@mui/material";
import { FaFacebook } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="topInfo row">
          <div className="col d-flex align-items-center">
            <span>
              <CiBadgeDollar />
            </span>
            <span className="ml-2">Everyday fresh products</span>
          </div>
          <div className="col d-flex align-items-center">
            <span>
              <CiDiscount1 />
            </span>
            <span className="ml-2">Everyday fresh products</span>
          </div>
          <div className="col d-flex align-items-center">
            <span>
              <TbTruckDelivery />
            </span>
            <span className="ml-2">Everyday fresh products</span>
          </div>
          <div className="col d-flex align-items-center">
            <span>
              <LiaTshirtSolid />
            </span>
            <span className="ml-2">best price market</span>
          </div>
        </div>

        <div className="row mt-5 linksWrap">
          <div className="col">
            <h5>FRUIT & VEGETABLES</h5>
            <ul>
              <li>
                <Link to="#">Fresh Vegetables</Link>
              </li>
              <li>
                <Link to="#">herbs seasoning</Link>
              </li>
              <li>
                <Link to="#">fresh fruits</Link>
              </li>
              <li>
                <Link to="#">banana</Link>
              </li>
              <li>
                <Link to="#">Fresh onion</Link>
              </li>
              <li>
                <Link to="#">Fresh veg</Link>
              </li>
              <li>
                <Link to="#">party food</Link>
              </li>
            </ul>
          </div>

          <div className="col">
            <h5>SEA FRUITS</h5>
            <ul>
              <li>
                <Link to="#">Fresh Vegetables</Link>
              </li>
              <li>
                <Link to="#">herbs seasoning</Link>
              </li>
              <li>
                <Link to="#">fresh fruits</Link>
              </li>
              <li>
                <Link to="#">banana</Link>
              </li>
              <li>
                <Link to="#">Fresh onion</Link>
              </li>
              <li>
                <Link to="#">Fresh veg</Link>
              </li>
              <li>
                <Link to="#">party food</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>BREAKFAST</h5>
            <ul>
              <li>
                <Link to="#">Fresh Vegetables</Link>
              </li>
              <li>
                <Link to="#">herbs seasoning</Link>
              </li>
              <li>
                <Link to="#">fresh fruits</Link>
              </li>
              <li>
                <Link to="#">banana</Link>
              </li>
              <li>
                <Link to="#">Fresh onion</Link>
              </li>
              <li>
                <Link to="#">Fresh veg</Link>
              </li>
              <li>
                <Link to="#">party food</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>FRUIT & LUNCH</h5>
            <ul>
              <li>
                <Link to="#">Fresh Vegetables</Link>
              </li>
              <li>
                <Link to="#">herbs seasoning</Link>
              </li>
              <li>
                <Link to="#">fresh fruits</Link>
              </li>
              <li>
                <Link to="#">banana</Link>
              </li>
              <li>
                <Link to="#">Fresh onion</Link>
              </li>
              <li>
                <Link to="#">Fresh veg</Link>
              </li>
              <li>
                <Link to="#">party food</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>FRUIT & LUNCH</h5>
            <ul>
              <li>
                <Link to="#">Fresh Vegetables</Link>
              </li>
              <li>
                <Link to="#">herbs seasoning</Link>
              </li>
              <li>
                <Link to="#">fresh fruits</Link>
              </li>
              <li>
                <Link to="#">banana</Link>
              </li>
              <li>
                <Link to="#">Fresh onion</Link>
              </li>
              <li>
                <Link to="#">Fresh veg</Link>
              </li>
              <li>
                <Link to="#">party food</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="copyright mt-3 pt-3 pb-3 d-flex">
          <p className="mb-0">copyright 2024. All right reserved</p>
          <ul className="list list-inline ml-auto mb-0">
            <li className="list-inline-item">
              <Link to="#">
                <FaFacebook />
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="#">
                <FiTwitter />
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="#">
                <FaInstagram />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
