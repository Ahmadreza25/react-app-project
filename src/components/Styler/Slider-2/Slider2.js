import React from "react";
import img1 from "../../../images/img-cart-2/img-1.png"
import img2 from "../../../images/img-cart-2/img-2.png"
import img3 from "../../../images/img-cart-2/img-3.png"
import img4 from "../../../images/img-cart-2/img-4.png"
import "./Slider2.css"
const productData = [
    {
        id: 1,
        price: "$9.50",
        image: img1,
        title: "Campos Superior Blend",
        explanation: "Caramelly & Rich Blend. Sweet like Butterscotch. Flavours like Red Fruit & Apricot.",
    },
    {
        id: 2,
        price: "$9.50",
        image: img2,
        title: "Blade Runner Blend",
        explanation: "Juicy & Vibrant. Sweet like Toffee. Flavours like Tropical Fruit.",
    },
    {
        id: 3,
        price: "$9.50",
        image: img3,
        title: "Dark City",
        explanation: "Balanced & Hearty. Sweet like Belgian Chocolate. Flavours like Forest Fruits.",
    },
    {
        id: 4,
        price: "$9.50",
        image: img4,
        title: "Decaf Espresso",
        explanation: "Syrupy & Bold. Sweet like Malt Chocolate. Flavours like Real Coffee.",
    },
]

const Slider2 = () => {
    return(
        <div>
            <div className="div-main-carts2">
                <div className="div-title-cart2">
                    <h1>
                        Explore the range
                    </h1>
                    <p>
                        Buy online
                    </p>
                </div>
                <div>
                    <div className="div-main-cart2">
                        {
                            productData.map((item , index) => (
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
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider2