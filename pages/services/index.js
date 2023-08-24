import Image from 'next/image'
import icon1 from '../../public/images/icon-service-1.png'
import icon2 from '../../public/images/icon-service-2.png'
import icon3 from '../../public/images/icon-service-3.png'
import icon4 from '../../public/images/icon-service-4.png'
import Profession from './profession'

const Services = () =>{
    return(
        <>
            <div className="services py-5">
                <div className="container py-5 mb-5">
                    <div className="row justify-content-flex mb-5 pb-4">
                        <div className="col-md-6 services__texts">
                            <h1 className="services__texts--title mb-4">
                            Sed feugiat sit non dignissim. <span className="banner__texts-title" style={{
                                color: '#51b054'
                            }}>Duis egestas</span> augue at nisi pharetra porta.
                            </h1>
                            <p className="pt-4 mb-4">Suspendisse tincidunt ornare sem, at
                             venenatis lorem tempor vel. Sed feugiat sit amet nisi non dignissim.
                              Duis egestas augue at nisi pharetra porta.</p>
                              <button className="banner__texts--btn">Read More</button>
                        </div>
                        <div className="col-md-6 services__cards">
                            <div className="row align-items-center justify-content-center  text-center">
                                <div className="col-md-6 p-2">
                                    <div className="card services__cards--card border-0 rounded-0 h-100 p-3">
                                        <Image src={icon1} alt='Icon' className="services__cards--img" width={70} height={70}/>
                                        <div className="card-body">
                                            <p className="services__cards--text">Aerial Photography</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 p-2"> 
                                    <div className="services__cards--card card border-0 rounded-0 h-100 p-3">
                                        <Image src={icon2} alt='Icon' className="services__cards--img" width={70} height={70}/>
                                        <div className="card-body">
                                            <p className="services__cards--text">Battery Production</p>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="col-md-6  p-2"> 
                                    <div className="border-0 services__cards--card card border-0 p-3 h-100 rounded-0">
                                        <Image src={icon3} alt='Icon' className="services__cards--img" width={70} height={70}/>
                                        <div className="card-body">
                                            <p className="services__cards--text">Stem Production</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 p-2"> 
                                    <div className="services__cards--card card border-0 p-3 h-100 rounded-0">
                                        <Image src={icon4} alt='Icon' className="services__cards--img" width={70} height={70}/>
                                       <div className="card-body">
                                       <p className="services__cards--text">Censors and Drone kits</p>
                                       </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row py-5 '>
                        <Profession />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Services