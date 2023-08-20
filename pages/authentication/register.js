import Footer from '../reuseables/footer';
import Navbar from '../reuseables/menuBar';

const Register = () => {
    return(
        <>
        <Navbar />
        <div className="register">
            <div className="container">
                <div className="row justify-content-center">
                        <div className="col-lg-7 ">
                            <div className="card py-3">
                                <form>
                                    <div className="row px-3 mx-1">
                                        <h3 className="text-center mb-3">Create a new Account</h3>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="firstName" className="mb-2">First Name</label>
                                        <input className="form-control py-3 px-3"/>
                                       </div>
                                       <div className="col-md-6 mb-3">
                                            <label htmlFor="lastName" className="mb-2">Last Name</label>
                                        <input className="form-control py-3 px-3"/>
                                       </div>
                                       <div className="col-md-12 mb-3">
                                            <label htmlFor="email" className=" mb-2">  Email Address</label>
                                        <input className="form-control py-3 px-3"/>
                                       </div>
                                       <div className="col-md-12 mb-3">
                                            <label htmlFor="phone" className=" mb-2"> Phone Number</label>
                                        <input className="form-control py-3 px-3"/>
                                       </div>
                                       <div className="col-md-6 mb-3">
                                            <label htmlFor="password" className="mb-2">Password</label>
                                        <input className="form-control py-3 px-3"/>
                                       </div>
                                       <div className="col-md-6 mb-3">
                                            <label htmlFor="confirmPassword" className="mb-2">Confirm Password</label>
                                        <input className="form-control py-3 px-3"/>
                                       </div>
                                       <div className="col-md-12 mb-3">
                                           
                                        <input className="btn btn-block  btn-success btn-lg w-100" type="button" value="Register"/>
                                       </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default Register;