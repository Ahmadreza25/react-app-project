import React from 'react'
import {DataCoffeetools} from "../../../data/DataCoffeetools"
import { useParams } from "react-router-dom";
import img1 from "../../../images/img-items-r/img-3.webp"
import img2 from "../../../images/img-items-r/img-4.webp"
import "./ItemCoffeeToolsEight.css"



const ItemCoffeeToolsEight = () => {
  const {id = 8} = useParams()
  const item = DataCoffeetools.find(p => p.id === parseInt(id))
  return (
    <div>
        <div className="div-item-ict8">
                <div className="div__main_ict_item8">
                    <div className="img_item_icteight">
                        <img src={item.img}/>
                    </div>
                    <div className="factor_item_ict-eight">
                        <div className="main_factor-item-eight">
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
                          ABOUT THE AIRSCAPE CANISTER 250G
                        </h2>
                        <p>
                          Your coffee will never go stale again. The Campos Airscape® forces the freshness-destroying air 
                          out of the canister, extending the life of 
                          your coffee to keep what’s good today, good tomorrow too!
                        </p>
                        <p>
                          Designed of durable, restaurant-grade stainless steel, the Airscape® canister body resists staining and odour retention.
                        </p>
                        <p>
                          The BPA-free clear, top lid allows you to see how much is left in the container, and the inner Airscape® lid (also BPA-free) 
                          makes a fun “swooshing” noise as its pushed down, so you can actually hear it working.
                        </p>
                        <p>
                          We love the Airscape Canister 250g and hope you do too!
                        </p>
                        <p>
                          Dimensions: 10.7cm (H) x 12.5cm (W)
                        </p>
                        <p>
                          See our guide to improve your coffee experience at home here
                        </p>
                    </div>
                    <div className="div-title-img-ict">
                        <div className="img-title1">
                            <img src={img1}/>
                        </div>
                        <div className="img-title1">
                            <img src={img2}/>
                        </div>
                    </div>
              </div>
        </div>
    </div>
  )
}

export default ItemCoffeeToolsEight