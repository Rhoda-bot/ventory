const Profession = () => {
    return(
        <>
            <div className="row services__profession align-items-center justify-content-center mx-auto text-center mb-5 my-5">
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="row align-items-center ">
                        <span className="col-6 services__profession--digit">1</span>
                        <span className="col-6  services__profession--line text-end"></span>
                    <p className="services__profession--text text-start">Professional Team</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="row align-items-center">
                        <span className=" col-6 services__profession--digit">2</span>
                        <span className=" col-6 services__profession--line text-end"></span>
                         <p className="services__profession--text text-start">4k Video</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="row align-items-center">
                        <span className="col-6 services__profession--digit">3</span>
                        <span className="col-6  services__profession--line"></span>
                        <p className="services__profession--text text-start">High Quality</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="row align-items-center">
                        <span className="services__profession--digit">4</span>
                    </div>
                        <p className="services__profession--text">Creative Solutions</p>
                </div>
            </div>
        </>
    )
}
export default Profession;