import React from 'react'
import {DataCoffeetools} from "../../../data/DataCoffeetools"
import { useParams } from "react-router-dom";
import "./ItemCoffeeToolsTwelve.css"



const ItemCoffeeToolsTwelve = () => {
  const {id = 12} = useParams()
  const item = DataCoffeetools.find(p => p.id === parseInt(id))
  return (
    <div>
        <div className="div-item-ict12">
                <div className="div__main_ict_item12">
                    <div className="img_item_icttwelve">
                        <img src={item.img}/>
                    </div>
                    <div className="factor_item_ict-twelve">
                        <div className="main_factor-item-twelve">
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
                      <h2>About the Porlex Mini II Hand Grinder</h2>
                      <p>
                        The Porlex Mini Coffee Grinder has ceramic burrs and a stainless steel housing, which not only makes it easy to clean, but 
                        more resilient than glass burrs, and produces less static than plastic burrs.
                      </p>
                      <p>
                        The conical ceramic burrs don’t rust, are easy to clean and stay sharper for much longer than steel burrs.
                      </p>
                      <p>
                        The image pictured is the Porlex Mini Hand Grinder.
                      </p>
                    </div>
                 </div>
            </div>
    </div>
  )
}

export default ItemCoffeeToolsTwelve