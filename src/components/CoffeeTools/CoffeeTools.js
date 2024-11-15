import React from "react";
import icon1 from "../../images/img-merchandise/icon-1.png"
import icon2 from "../../images/img-merchandise/icon-2.png"
import { DataCoffeetools } from "../../data/DataCoffeetools";
import "./CoffeeTools.css"


const CoffeeTools = () => {
    return(
        <div>
            <div className="div-container">
                <div className="div__container-filters">
                    <div className="filters-container">
                        <div className="filters-header">
                            <button className="btn__filters1">
                                <b>Filters</b>
                                <img src={icon2} className="filter_icon"/>
                            </button>
                            <b>
                                Showing 22 of 36 results
                            </b>
                            <div className="sort-container">
                                <p>
                                    Sort by
                                </p>
                                <b> 
                                    Popularity<img src={icon1} className="sort_icon"/>
                                </b>
                            </div>
                        </div>
                    </div>
                    <div className="coffee-list">
                        <div className="coffee-item-wrapper">
                            {
                                DataCoffeetools.map((item , index) => (
                                    <div className="coffee-item">
                                        <div className="coffee-image-container">
                                            <div className={`coffee-image coffee-image${index + 1}`}>
                                                <img src={item.img} alt={item.title} />
                                            </div>
                                        </div>
                                        <div className="coffee_title_items">
                                            <div>
                                                FROM: <b>{item.price}</b>
                                            </div>
                                            <h4>{item.title}</h4>
                                            <p>{item.explanations}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="btn__coffee">
                            <button>
                                LOAD MORE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CoffeeTools