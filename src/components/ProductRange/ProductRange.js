import React from "react";
import { DataProductRange } from "../../data/DataProductRange";
import { Link } from "react-router-dom";
import icon1 from "../../images/img-merchandise/icon-1.png"
import icon2 from "../../images/img-merchandise/icon-2.png"
import "./ProductRange.css"




    const ProductRange = () => {
        return(
            <div>
                <div className="product-range-container">
                    <div className="filters-header__info">
                        <div className="filters-header__options">
                            <button className="filter-button">
                                <b>FILTERS</b>
                                <img src={icon2} alt="filter icon" />
                            </button>
                            <b>
                                Showing 99 of 99 results
                            </b>
                            <div className="filters-header__sort">
                                <p>
                                    Sort by
                                </p>
                                <div className="sotr__filters">
                                    <b>Popularity</b>
                                    <img src={icon1} alt="sort icon" className="sort-icon"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-products-list">
                        <div className="products-list">
                            {
                                DataProductRange.map((item, index) => (
                                    <Link to={`/product/productrange/${item.id}`} className="link">
                                        <div key={index} className="product-item">
                                            <div className="product-item-wrapper">
                                                <div className={`product-image product-image${index + 1}`}>
                                                    <img src={item.img}/>
                                                </div>
                                                <div className="product-details">
                                                    <b>
                                                        FORM:{item.price}
                                                    </b>
                                                    <h4>
                                                        {item.title}
                                                    </h4>
                                                    <p>
                                                        {item.explanations}
                                                    </p>
                                                </div>
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


export default ProductRange