import './testimonails.css';
import img1 from '../../images/testimonails/1.webp';
import img2 from '../../images/testimonails/2.jpg';
import img3 from '../../images/testimonails/3.png';
import img4 from '../../images/testimonails/4.webp';
import {FaStar} from 'react-icons/fa'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonails = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
    <div className='testimonails'>
    <div className="testimonails-flex">
   <Slider {...settings}>
   <div className="testimonail">
            <img src={img1} alt="" />
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nisi, vero inventore tempore repudiandae harum sit eos odio reiciendis assumenda recusandae eum, veniam commodi quos veritatis. Magnam sed atque nobis!
            </p>
            <div>
                <FaStar className = 'staricon'/>
                <FaStar className = 'staricon'/>
                <FaStar className = 'staricon'/>
                <FaStar className = 'staricon'/>
                <FaStar className = 'staricon'/>
            </div>
            <h2>Ahmed Samy</h2>
            <h3>Frontend Developer</h3>
        </div>
        <div className="testimonail">
            <img src={img2} alt="" />
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nisi, vero inventore tempore repudiandae harum sit eos odio reiciendis assumenda recusandae eum, veniam commodi quos veritatis. Magnam sed atque nobis!
            </p>
            <div>
                <FaStar className = 'staricon'/>
                <FaStar className = 'staricon'/>
                <FaStar className = 'staricon'/>
                <FaStar className = 'staricon'/>
                <FaStar className = 'staricon'/>
            </div>
            <h2>Ahmed Samy</h2>
            <h3>Frontend Developer</h3>
        </div>
        <div className="testimonail">
            <img src={img3} alt="" />
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nisi, vero inventore tempore repudiandae harum sit eos odio reiciendis assumenda recusandae eum, veniam commodi quos veritatis. Magnam sed atque nobis!
            </p>
            <div>
                <FaStar className = 'staricon'/>
                <FaStar className = 'staricon'/>
                <FaStar className = 'staricon'/>
                <FaStar className = 'staricon'/>
                <FaStar className = 'staricon'/>
            </div>
            <h2>Ahmed Samy</h2>
            <h3>Frontend Developer</h3>
        </div>
        <div className="testimonail">
            <img src={img4} alt="" />
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nisi, vero inventore tempore repudiandae harum sit eos odio reiciendis assumenda recusandae eum, veniam commodi quos veritatis. Magnam sed atque nobis!
            </p>
            <div>
                <FaStar className = 'staricon'/>
                <FaStar className = 'staricon'/>
                <FaStar className = 'staricon'/>
                <FaStar className = 'staricon'/>
                <FaStar className = 'staricon'/>
            </div>
            <h2>Ahmed Samy</h2>
            <h3>Frontend Developer</h3>
        </div>
   </Slider>
    </div>
    </div>
  )
}

export default Testimonails
