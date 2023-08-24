import Image from "next/image"
import coverage from '../../public/images/coverage.jpg'
import overlay from '../../public/images/overlay-bg.png'

const Stacks = () => {
    return (
        <>
            <div className="stacks py-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-6 stacks__col">
                            <div className="row">
                                <div className="col-6  bg-danger">
                                    <Image src={coverage} className="img-fluid stacks__col--img"/>
                                    <div className="stack__col--icon">
                                    <Image src={overlay} />
                                    </div>
                                </div>
                                <div className="col-6"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Stacks;