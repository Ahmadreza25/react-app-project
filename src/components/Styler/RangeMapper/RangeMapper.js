import React from "react";
import { Link } from "react-router-dom";
import { DataRangeMapper } from "../../../data/DataRangeMapper";
import "./RangeMapper.css"



const RangeMapper = () => {
    return(
        <div>
            <div className="div-main-carts2">
                <div className="div-title-cart2">
                    <h1>
                        Explore the range
                    </h1>
                    <Link to="/productrange" className="link">
                        <p>
                            Buy online
                        </p>
                    </Link>
                </div>
                <div>
                    <div className="div-main-cart2">
                        {
                            DataRangeMapper.map((item , index) => (
                                <Link to={`/product2/${item.id}`} className="link">
                                    <div className="div-cart-main2">
                                        <div className={`div-img-cart div-img-cart${index + 1}`}>
                                            <img src={item.image} className="img-cart2"/>
                                        </div>
                                        <div className="div-title-2">
                                            <p className="price2">
                                            FROM{item.price}
                                            </p>
                                            <h2 className="title1">
                                                {item.title}
                                            </h2>
                                            <h5 className="title2">
                                                {item.explanation}
                                            </h5>
                                        </div>    
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RangeMapper