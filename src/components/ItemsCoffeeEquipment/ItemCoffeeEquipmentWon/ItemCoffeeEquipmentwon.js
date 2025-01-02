import React from "react";
import {DataCoffeeEquipment} from "../../../data/DataCoffeeEquipment"
import { useParams } from "react-router-dom";
import { Div , DivBackground } from "../../styled-components/Div/div";
import img1 from "../../../images/img-items-r/img-2.jpg"
import "./ItemCoffeeEquipmentwon.css"




const ItemCoffeeEquipmentWon = () => {
    const {id = 1} = useParams()
    const item = DataCoffeeEquipment.find(p => p.id === parseInt(id))
    return(
        <div>
            <div className="div-item1">
                <DivBackground Background="#898f4b">
                    <div className="img_item_won">
                        <img src={item.img}/>
                    </div>
                    <Div height="600px" marginbot="-150px"> 
                        <div className="main_factor-itemWon">
                            <div className="div-capsules">
                                <h2>
                                Capsules
                                </h2>
                                <h1>
                                    {item.title}
                                </h1>
                            </div>
                            <div className="div-from">
                                <b>FROM</b>
                                <p>{item.price}</p>
                            </div>
                            <div className="div-profile">
                                <b>
                                    PROFILE
                                </b>
                                <p>
                                    {item.explanation}
                                </p>
                            </div>
                            <div className="box-number">
                                <div className="numbers">
                                    <b>+</b>
                                    <p>1</p>
                                    <b>-</b>
                                </div>
                            </div>
                            <div className="btn-factor">
                                <button>
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </Div>
                </DivBackground>
                <div className="title-item_won">
                    <div>
                        <h2>About the Campos Coffee Scales</h2>
                        <p>Our Campos Coffee scales monitor the weight, time and flow-rates as you brew coffee.</p>
                        <img src={img1}/>
                        <p>Produced with durable composite materials and features a removable and washable rubber sleeve, for long-lasting use.</p>
                        <h2>Dimensions:</h2>
                        <p>19.5cm x 13.5xm x 3cm</p>
                    </div>
                    <div>
                        <h2>Specifications</h2>
                        <ul>
                            <li>Features drip timer for precise pour over coffee</li>
                            <li>Measures between 3000 grams to 0.1 increments</li>
                            <li>Splash proof</li>
                            <li>Weighs in oz, lb. g /ml</li>
                            <li>Comes with batteries (AAA)</li>
                            <li>Features rubber mat to prevent slipping</li>
                            <li>Timer function with the ability to pause, reset and countdown</li>
                            <li>Features LED screen for easy viewing in dim lighting</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCoffeeEquipmentWon