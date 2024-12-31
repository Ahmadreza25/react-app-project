import React from 'react'
import {DataCoffeetools} from "../../../data/DataCoffeetools"
import { useParams } from "react-router-dom";
import {Div} from "../../styled-components/Div/div"
import "./ItemCoffeeToolsTwentyOne.css"



const ItemCoffeeToolsTwentyOne = () => {
  const {id = 21} = useParams()
  const item = DataCoffeetools.find(p => p.id === parseInt(id))
  return (
    <div>
            <div className="div-item-ict21">
                <div className="div__main_ict_item21">
                    <div className="img_item_icttwenty1">
                        <img src={item.img}/>
                    </div>
                    <Div height="650px" marginbot="-200px">
                        <div className="main_factor-item-twenty1">
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
                      About the Aeropress Metal Filter
                      </h2>
                      <p>
                      A reusable stainless steel filter designed to be used with the AeroPress Coffee Maker, allowing more oils and a fuller bodied cup of coffee while eliminating the need for paper filters.
                      </p>
                      <p>
                      This fine filter produces a very sweet clean cup of coffee and should be handled with care as bending/damage is more likely than than a standard sized filter.
                      </p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default ItemCoffeeToolsTwentyOne