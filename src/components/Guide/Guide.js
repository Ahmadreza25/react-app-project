import React from "react";
import img1 from "../../images/img-giude/img1.png"
import img2 from "../../images/img-giude/img2.png"
import img3 from "../../images/img-giude/img3.png"
import "./Guide.css"
import { Link } from "react-router-dom";

const productData = [
    {
        id:1,
        img:img1 ,
        title:"Espresso At Home"
    },
    {
        id:2,
        img:img2 ,
        title:"Aeropress"
    },
    {
        id:3,
        img:img3,
        title:"Plunger"
    },
]

const Guide = () => {
    return(
        <div>
            <div className="div-main-guides">
                <div className="div-title-guides">
                    <div className="div-line"></div>
                    <h3>
                        Brew Guides
                    </h3>
                    <h1>
                        Check out our most popular brew guides
                    </h1>
                </div>
                <div className="div-guides">
                    {
                        productData.map((item) => (
                            <Link to="/brewcollection" className="link">
                                <div className="guides">
                                    <div>
                                        <img src={item.img} className="img-guides"/>
                                    </div>
                                    <div className="div-linr-2"></div>
                                    <div>
                                        <p className="title-guides">
                                            How To Brew: {item.title}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}


export default Guide