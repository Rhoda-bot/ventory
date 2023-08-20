import Footer from '../reuseables/footer';
import Navbar from '../reuseables/menuBar';

const Login = () => {
    return(
        <>
        <Navbar />
        <div className="register">
            <div className="container">
                <div className="row justify-content-center">
                        <div className="col-lg-4 ">
                            <div className="card py-3">
                                <form>
                                    <div className="row px-3 mx-1">
                                        <h3 className="text-center mb-3">Sign In</h3>
                                        
                                       <div className="col-md-12 mb-3">
                                            <label htmlFor="email" className=" mb-2">  Email Address</label>
                                        <input className="form-control py-3 px-3"/>
                                       </div>
                                       <div className="col-md-12 mb-3">
                                            <label htmlFor="password" className=" mb-2"> Password</label>
                                        <input className="form-control py-3 px-3"/>
                                       </div>
                                       <p className='text-end'> Forgot Password ?</p>
                                       <div className="col-md-12 mb-3">
                                           
                                        <input className="btn btn-block  btn-success btn-lg w-100" type="button" value="Login"/>
                                       </div>
                                       <p>Or Login with OTP? Click Here</p>
                                    </div>
                                </form>
                            </div>
                            <p className='text-center py-4'>Dont have an account? Sign Up</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default Login;