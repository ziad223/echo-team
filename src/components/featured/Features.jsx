import './features.css';
import {FaTruck , FaSuperpowers , FaCcPaypal , FaRegMoneyBillAlt} from 'react-icons/fa';
const Features = () => {
  return (
    <div className='features'>
       <div className="feature">
       <FaTruck className='feature-icon'/>
       <h2>Free Shipping</h2>
       </div>
       <div className="feature">
       <FaSuperpowers className='feature-icon'/>
       <h2>24/7 Support.</h2>
       </div>
       <div className="feature">
       <FaCcPaypal className='feature-icon'/>
       <h2>Online Payment.</h2>
       </div>
       <div className="feature">
       <FaRegMoneyBillAlt className='feature-icon'/>
       <h2>Easy Return.</h2>
       </div>
    </div>
  )
}

export default Features
