import React from 'react'
import {DataCoffeetools} from "../../../data/DataCoffeetools"
import { useParams } from "react-router-dom";
import { Div } from "../../styled-components/Div/div"
import "./ItemCoffeeToolsThirTeen.css"



const ItemCoffeeToolsThirTeen = () => {
  const {id = 13} = useParams()
  const item = DataCoffeetools.find(p => p.id === parseInt(id))
  return (
    <div>
        <div className="div-item-ict13">
                <div className="div__main_ict_item13">
                    <div className="img_item_ictthirteen">
                        <img src={item.img}/>
                    </div>
                    <Div height="850px" marginbot="-400px">
                        <div className="main_factor-item-thirteen">
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
                    </Div>
                </div>
                <div className="title-item_ictone">
                    <div>
                        <h2>
                        About the CHEMEX® Filter Papers
                        </h2>
                        <p>
                          If you like your filter coffee full bodied, rich in flavour and lacking in bitterness, go for a Chemex brew. Chemex filter papers are thick and triple bonded, and are 
                          suitable for a larger grind size. These Chemex Filter Papers are suitable for the Chemex 3 Cup Classic.
                        </p>
                        <p>
                          Check out the Chemex Brew Guide to brush up on the best brewing techniques.

                          Pack of 100.
                        </p>
                    </div>
                 </div>
        </div>
    </div>
  )
}

export default ItemCoffeeToolsThirTeen