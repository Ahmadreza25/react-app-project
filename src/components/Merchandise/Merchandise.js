import React from "react";
import {DataMerchandise} from "../../data"
import icon1 from "../../images/img-merchandise/icon-1.png"
import icon2 from "../../images/img-merchandise/icon-2.png"
import "./Merchandise.css"

const Merchandise = () => {
    return(
        <div>
            <div className="merchandise-container">
                <div className="merchandise-wrapper">
                    <div className="merchandise__box-input">
                        <div className="box-input">
                            <div className="main-box-input">
                                <button className="btn__filters">
                                    <b>FILTERS</b>
                                    <img src={icon2} className="icon-btn__input1"/>
                                </button>
                                <b>
                                    Showing 16 of 16 results
                                </b>
                                <div className="div__title">
                                    <p>
                                        Sort by
                                    </p>
                                    <b>
                                        Popularity <img src={icon1} className="icon-btn__input2"/>
                                    </b>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="merchandise-container__item">
                        <div className="merchandise-container__div">
                            {
                                DataMerchandise.map((item, index) => (
                                    <div className="div-main__items">
                                        <div className="div-items">
                                            <div className="div-main__img">
                                                <div className={`div__img div__img${index + 1} `}>
                                                    <img src={item.img}/>
                                                </div>
                                            </div>
                                            <div className="product-info-container">
                                                <b>FROM:{item.price}</b>
                                                <h3>
                                                    {item.title}
                                                </h3>
                                                <h5>{item.explanations}</h5>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Merchandise