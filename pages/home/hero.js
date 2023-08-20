import Image from 'next/image'
import drone from '../../public/images/drone5.png'

const Banner = () =>{
    return(
        <>
          
<div class="video-background-holder">
        <div class="video-background-overlay"></div>
        <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
              <source src="/images/bgvideo.mp4"
               type="video/mp4" />
          </video>
        <div class="video-background-content container h-100">
          <div class="d-flex h-100 text-lg-start text-sm-center align-items-center">
            <div class="w-50 text-white">
            <h1 className="banner__texts--title">Professional</h1>
            <h2 className="banner__texts--subtitle">DRONE <br/>SERVICES</h2>
            <p className="banner__texts--text">Suspendisse tincidunt ornare sem, at venenatis lorem tempor vel.
                    Sed feugiat sit amet nisi non dignissim. Duis egestas augue at nisi pharetra porta.</p>
            <button className="banner__texts--btn">Order Now</button>
            </div>
            <div className="w-50  banner__image">
              {/* <img src="/images/drone5.png" className="img-fluid banner__image--img"/> */}
              <Image
                src={drone}
                alt="Drone"
                className="img-fluid banner__image--img"
              />
            </div>
          </div>
        </div>
      </div>
        </>
    )
}
export default Banner