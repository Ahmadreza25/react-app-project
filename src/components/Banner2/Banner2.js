import React from "react";
import img1 from "../../images/img-banner/img-banner1.jpg"
import img2 from "../../images/img-banner/img-banner2.png"
import img3 from "../../images/img-banner/img-banner3.png"
import { Link } from "react-router-dom";


import "./Banner2.css"



const Banner2 = () => {
    return(
        <div>
            <div className="div-main-banner2">
                <div className="banner-1">
                    <div className="div-title-banner2">
                        <h1>
                            Get a cup of Campos coffee near you
                        </h1>
                        <Link to="/finder" className="link">
                            <h3>
                                Find a Campos Café
                            </h3>
                        </Link>
                    </div>            
                    <div>
                        <img src={img1}/>
                    </div>
                </div>
                <div className="div-main-banner3">
                    <div className="banner-2">
                        <div>
                            <img src={img3}/>
                        </div>
                        <h1>
                        Sign up to a subscription today
                        </h1>
                        <Link to="/subscridenow" className="link">
                            <h3>
                            Learn more
                            </h3>
                        </Link>
                    </div>
                    <div className="banner-3">
                        <div>
                            <img src={img2}/>
                        </div>
                        <h1>
                        Become a Campos Partner
                        </h1>
                        <Link to="/wholesale" className="link">
                            <h3>
                            Learn more
                            </h3>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Banner2