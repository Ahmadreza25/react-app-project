import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../../images/img-cart-3/img1.png"
import img2 from "../../../images/img-cart-3/img2.png"
import img3 from "../../../images/img-cart-3/img3.png"
import img4 from "../../../images/img-cart-3/img4.png"
import img5 from "../../../images/img-cart-3/img5.png"
import img6 from "../../../images/img-cart-3/img6.png"
import "./Slider3.css"



const productData = [
    {
        id:1,
        img:img1,
        price:"$48.00",
        title:"Campos Coffee Scales",
        explanation:"The essential item to help you brew cafe-quality coffee at home",
    },
    {
        id:2,
        img:img2,
        price:"$34.95",
        title:"Campos X Robert Gordon Mug",
        explanation:"We collaborated with iconic Australian pottery brand Robert Gordon to develop aCampos inspired mug. This beautiful, limited-edition mug finished in our signature Campos green.",
    },
    {
        id:3,
        img:img3,
        price:"$65.00",
        title:"Airscape Canister 1kg",
        explanation:"Fresh is best! Keep your coffee fresher for longer with a Campos Airscape® Canister.",
    },
    {
        id:4,
        img:img4,
        price:"$70.00",
        title:"500g Superior Coffee Bundle",
        explanation:"Caramelly & Rich Blend. Sweet like Butterscotch. Flavours like Red Fruit & Apricot.",
    },
    {
        id:5,
        img:img5,
        price:"$75.00",
        title:"CHEMEX® 3 Cup Classic Filter Drip Coffee Maker",
        explanation:"Simple, easy to use with timeless, elegant design",
    },
]


const Slider3 = () => {
    return(
        <div>
            <div className="mian-div-cart3">
                <div className="div-explanation">
                    <h1>
                        COFFEE EQUIPMENT FOR HOME
                    </h1>
                    <h5>
                        All the essentials designed to withstand the bustling home barista environment.
                    </h5>
                    <Link to="/coffeetools" className="link">
                        <p>
                            Coffee Equipment
                        </p>
                    </Link>
                </div>
                    <div className="div-main-carts3">
                        {
                            productData.map((item,index) =>(
                                <div className="cart3">
                                    <div className="div-cart3">
                                        <div className={`div-img-carts3 div-img-carts3-${index + 1}`}>
                                            <img src={item.img} className="img-cart3"/>
                                        </div>
                                        <div className="div-title-cart3">
                                            <p>{item.price}</p>
                                            <h3>{item.title}</h3>
                                            <h5>{item.explanation}</h5>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                <div className="div-main-hiring">
                    <div className="div-hiring">
                        <div className="title-hiring">
                            <h1>
                            Campos Coffee Careers
                            </h1>
                            <Link to="/careerpath" className="link">
                                <b>
                                Apply now
                                </b>
                            </Link>
                        </div>
                        <div className="div-img-hiring">
                            <div>
                                <img src={img6} className="img-hiring"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Slider3