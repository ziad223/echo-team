import './banner.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
  AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  });
  return (
    <div className='banner'>
      <div className="banner-content container">
        <div className="banner-left" data-aos = 'fade-right'>
            <div>
                <h2>Smart Watch 2.0</h2>
                <h3>Smart Watch 2.0</h3>
                <h3>Black/Volt Real Sport Band</h3>
                <button>Shop Now</button>
            </div>
        </div>
        <div className="banner-right"  data-aos = 'fade-left'>
        <div>
                <h2>Smart Headphone</h2>
                <h3>Smart Watch 2.0</h3>
                <h3>eiusmod tempor incididunt ut labore.</h3>
                <button>Shop Now</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
