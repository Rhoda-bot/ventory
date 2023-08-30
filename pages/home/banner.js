import Slider from 'react-slick';
import Image from 'next/image'
import drone from '../../public/images/drone5.png'
import drone1 from '../../public/images/drone1.jpg'
import drone2 from '../../public/images/drone2.jpg'
import dronekit2 from '../../public/images/drone-kit2.jpg'
import battery from '../../public/images/batery2.png'
import battery2 from '../../public/images/battry.png'
import censor from '../../public/images/censor.jpg'

const Banner = () => {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "#f8f9fa" }}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", backgroundColor: "#f8f9fa" }}
            onClick={onClick}
          />
        );
      }
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        centerPadding: "60px",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
    return (
        
        <>
          <div className="banner py-4">
            <div className="container">
                <div className="row banner__row p-5 py-5">
                    <div className="col-md-3 banner__col">
                        <h5 className="banner__col--title">Professional</h5>
                        <h1 className="banner__col--subtitle">DRONE SERVICES</h1>
                        <p className="banner__col--text">Free Pickup and Delivery Available</p>
                        <button className="banner__col--btn">Shop Now</button>
                    </div>
                    <div className=" col-md-9 banner__image"></div>
                </div>
                <div className="row pt-5">
            
                <Slider {...settings}>
                    <div>
                        <Image src={censor} alt='image' className='img-fluid banner--img'/>
                    </div>
                    <div>
                        <Image src={drone1} alt='image' className='img-fluid banner--img'/>
            
                    </div>
                    <div>
                    <Image src={battery2} alt='image' className='img-fluid banner--img'/>
                    </div>
                    <div>
                    <Image src={dronekit2} alt='image' className='img-fluid banner--img'/>
                    </div>
                    <div>
                    <Image src={drone2 }  alt='image'className='img-fluid banner--img'/>
                    </div>
                    <div>
                    <Image src={battery} alt='image' className='img-fluid banner--img'/>
                    </div>
                </Slider>
                </div>
 
            </div>
            </div>  
        </>
    )
}
export default Banner