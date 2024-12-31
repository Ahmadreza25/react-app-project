import React from 'react'
import {DataCoffeetools} from "../../../data/DataCoffeetools"
import { useParams } from "react-router-dom";
import { Div } from '../../styled-components/Div/div';
import "./ItemCoffeeToolsTen.css"



const ItemCoffeeToolsTen = () => {
  const {id = 10} = useParams()
  const item = DataCoffeetools.find(p => p.id === parseInt(id))
  return (
    <div>
        <div className="div-item-ict10">
                <div className="div__main_ict_item10">
                    <div className="img_item_ictten">
                        <img src={item.img}/>
                    </div>
                    <Div  height="800px" marginbot="-500px">
                        <div className="main_factor-item-ten">
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
                            <div className="div-btn-out">
                                <button>
                                    OUT OF STOCK
                                </button>
                            </div>
                            <div className="div-input-factor">
                                <p>Join the waitlist to be emailed when this product becomes available</p>
                                <input type="text" placeholder="Email Addres"/>
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
                      ABOUT THE BUONO KETTLE
                      </h2>
                      <p>
                        The Hario V60 Buono Kettle is the perfect accompaniment for making filter coffee. If you like making filter coffee, particularly a V60, then a goose neck kettle will surely elevate your brewing experience. The spout meets the kettle body at the lowest possible point providing the ultimate in precision and control, 
                        allowing for the precise circular motion needed for the perfect brew.
                      </p>
                      <div>
                        <p>
                          Dimensions: (W) 295 x (D) 144 x (H) 130mm
                        </p>
                      </div>
                      <div>
                         <b>
                         Features:
                         </b>
                         <ul>
                            <li>Holds up to 1 litre of water</li>
                            <li>Precise spout for pour over</li>
                            <li>Stainless Steel</li>
                            <li>Easy grip handle</li>
                         </ul>
                         <p>
                         At Campos, we love the Hario V60 Buono Kettle!
                         </p>
                         <p>
                         See our guide to filter coffee here
                         </p>
                      </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default ItemCoffeeToolsTen