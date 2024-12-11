import React from 'react'
import {DataCoffeetools} from "../../../data/DataCoffeetools"
import { useParams } from "react-router-dom";
import "./ItemCoffeeToolsSevenTeen.css"



const ItemCoffeeToolsSevenTeen = () => {
  const {id = 17} = useParams()
  const item = DataCoffeetools.find(p => p.id === parseInt(id))
  return (
    <div>
        <div className="div-item-ict17">
                <div className="div__main_ict_item17">
                    <div className="img_item_ictseventeen">
                        <img src={item.img}/>
                    </div>
                    <div className="factor_item_ict-seventeen">
                        <div className="main_factor-item-seventeen">
                            <div className="div-capsules">
                                <h2>
                                    Gifts
                                </h2>
                                <h1>
                                    {item.title}
                                </h1>
                            </div>
                            <div className="div-from">
                                <p>{item.price}</p>
                            </div>
                            <div className="div-profile">
                                <p>
                                    {item.explanations}
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
                                    Join add accont
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="title-item_ictone">
                    <div>
                        <h2>
                        About the CHEMEX® Filter Coffee Maker
                        </h2>
                        <p>
                          If you like your filter coffee full bodied, rich in flavour and lacking in bitterness, look no further than the Chemex.  The Chemex 3 Cup Classic is 
                          made of non-porous Borosilicate glass, so it won’t absorb odours or chemical residues.
                        </p>
                        <p>
                          Check out the Chemex Brew Guide to brush up on the best brewing techniques.The filter fans best friend. Serves three.
                        </p>
                    </div>
                 </div>
          </div>
    </div>
  )
}

export default ItemCoffeeToolsSevenTeen