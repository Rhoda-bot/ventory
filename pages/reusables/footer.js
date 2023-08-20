import Image  from 'next/image'
import logo from '../../public/images/logo4-removebg-preview.png'
const Footer = () => {
    return(
        <>
            <div className="footer py-5">
                <div className="container">
                    <div className="row justify-content-center text-center">
                    {/* <Image src={logo} alt="payment" className="img-fluid" width={50}/> */}
                        <p>Address: 60-49 Road 11378 New York</p>
                        <p>Phone: +65 11.188.888</p>
                        <p>Email: hello@trybasket.com</p>
                    </div>
                    <div className="row border-top align-items-center">
                        <div className="col-md-6 pt-3">
                            <p>Copyright ©2023 All rights reserved | <b className="footer--tag">TryBasket Inc.</b></p>
                        </div>
                        <div className="col-md-6 text-end pt-3">
                            <Image src={logo} alt="payment" className="img-fluid" width={50}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;