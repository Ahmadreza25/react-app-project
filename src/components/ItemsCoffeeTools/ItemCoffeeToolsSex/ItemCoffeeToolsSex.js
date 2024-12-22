import React from 'react'
import {DataCoffeetools} from "../../../data/DataCoffeetools"
import { useParams } from "react-router-dom";
import "./ItemCoffeeToolsSex.css"



const  ItemCoffeeToolsSex = () => {
  const {id = 6} = useParams()
  const item = DataCoffeetools.find(p => p.id === parseInt(id))
  return (
    <div>
      <div className="div-item-ict6">
            <div className="div__main_ict_item6">
                    <div className="img_item_ictsex">
                        <img src={item.img}/>
                    </div>
                    <div className="factor_item_ict-sex">
                        <div className="main_factor-item-sex">
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
                      About the Rhino Chocolate Shaker
                    </h2>
                    <p>
                    We have been using these in all our stores for over a decade now and would not use anything else.
                    </p>
                    <p>
                    Stainless Steel Chocolate Shaker with mesh top for fine dusting on your cappuccinos and hot chocolates.
                    </p>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default ItemCoffeeToolsSex
