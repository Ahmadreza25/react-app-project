import React from "react";
import { Link } from "react-router-dom";
import img6 from "../../../images/img-cart-3/img6.png"
import { DataCoffeeEquipment } from "../../../data/DataCoffeeEquipment";
import "./CoffeeEquipment.css"



const CoffeeEquipment = () => {
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
                            DataCoffeeEquipment.map((item,index) =>(
                                <Link to={`/product3/${item.id}`} className="link">
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
                                </Link>
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


export default CoffeeEquipment