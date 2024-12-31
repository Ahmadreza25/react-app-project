import React from 'react'
import {DataCoffeetools} from "../../../data/DataCoffeetools"
import { useParams } from "react-router-dom";
import { Div } from "../../styled-components/Div/div"
import "./ItemCoffeeToolsFourTeen.css"



const ItemCoffeeToolsFourTeen = () => {
  const {id = 14} = useParams()
  const item = DataCoffeetools.find(p => p.id === parseInt(id))
  return (
    <div>
        <div className="div-item-ict14">
                <div className="div__main_ict_item14">
                    <div className="img_item_ictfourteen">
                        <img src={item.img}/>
                    </div>
                    <Div height="650px" marginbot="-200px">
                        <div className="main_factor-item-fourteen">
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
                          About the Bodum Plunger
                        </h2>
                        <p>
                          Nothing beats brewing at home with a classic coffee plunger, and this one’s pretty special.
                        </p>
                        <p>
                          It features a patented locking lid system and a thermal glass carafe, so you can take your time to sip your coffee – 
                          the French press glass is designed to keep coffee hotter and fresher for a long period of time. 
                        </p>
                    </div>
                    <div>
                      <h2>
                        Specifications
                      </h2>
                      <ul>
                        <li>
                        Makes 3 cups / 0.35l.
                        </li>
                        <li>
                        Heat safe borosilicate glass
                        </li>
                        <li>
                        Chrome plated stainless steel frame
                        </li>
                        <li>
                        BPA free lid and handle
                        </li>
                        <li>
                        Dishwasher safe
                        </li>
                        <li>
                        Includes a three-part stainless steel mesh filter
                        </li>
                      </ul>
                    </div>
                </div>
          </div>
    </div>
  )
}

export default ItemCoffeeToolsFourTeen