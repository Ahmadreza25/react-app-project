import React from "react";
import {DataCoffeeEquipment} from "../../../data/DataCoffeeEquipment"
import { useParams } from "react-router-dom";
import "./ItemCoffeeEquipmentFayw.css"


const ItemCoffeeEquipmentFayw = () => {
    const {id = 5} = useParams()
    const item = DataCoffeeEquipment.find(p => p.id === parseInt(id))
    return(
        <div>
            <div className="div-item5">
                <div className="div__main__item5">
                    <div className="img_item_fayw">
                        <img src={item.img}/>
                    </div>
                    <div className="factor_item_fayw">
                        <div className="main_factor-itemfayw">
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
                    </div>
                </div>
                <div className="title-item_fayw">
                    <div>
                        <h2>About the CHEMEX® Filter Coffee Maker</h2>
                        <p>
                            If you like your filter coffee full bodied, rich in flavour and lacking in bitterness, 
                            look no further than the Chemex.  The Chemex 3 Cup Classic is made of non-porous Borosilicate 
                            glass, so it won’t absorb odours or chemical residues.
                        </p>
                        <p>
                            Check out the Chemex Brew Guide to brush up on the best brewing techniques.
                        </p>
                        <p>
                            The filter fans best friend. Serves three.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemCoffeeEquipmentFayw