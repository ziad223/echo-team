import './team.css'
import img1 from '../../images/team/01.jpg';
import img2 from '../../images/team/02.jpg';
import img3 from '../../images/team/03.jpg';
import img4 from '../../images/team/04.jpg';
import { FaFacebook , FaTwitter , FaSkype } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Team = () => {
  AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  });
  return (
    <div className='teams'>
      <div className="container">
        <div className="title">
            <h2>Our Team</h2>
            <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
            </p>
            <div className="team-content">
                <div className="team" data-aos = 'fade-right'>
              <img src={img1} alt="char" />
              <h2>Amal Ibrahim</h2>
              <h3>Frontend Developer</h3>
              <div className="social">
            <FaFacebook className='team-icon'/>
            <FaTwitter className='team-icon'/>
            <FaSkype className='team-icon'/>
              </div>
                </div>
                <div className="team" data-aos = 'fade-right'>
              <img src={img2} alt="char" />
              <h2>Amal Ibrahim</h2>
              <h3>Frontend Developer</h3>
              <div className="social">
            <FaFacebook className='team-icon'/>
            <FaTwitter className='team-icon'/>
            <FaSkype className='team-icon'/>
              </div>
                </div>
                <div className="team" data-aos = 'fade-left'>
              <img src={img3} alt="char" />
              <h2>Amal Ibrahim</h2>
              <h3>Frontend Developer</h3>
              <div className="social">
            <FaFacebook className='team-icon'/>
            <FaTwitter className='team-icon'/>
            <FaSkype className='team-icon'/>
              </div>
                </div>
                <div className="team" data-aos = 'fade-left'>
              <img src={img4} alt="char" />
              <h2>Amal Ibrahim</h2>
              <h3>Frontend Developer</h3>
              <div className="social">
            <FaFacebook className='team-icon'/>
            <FaTwitter className='team-icon'/>
            <FaSkype className='team-icon'/>
              </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Team
