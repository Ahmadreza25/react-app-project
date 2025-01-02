import React from 'react'
import {DataCoffeetools} from "../../../data/DataCoffeetools"
import { useParams } from "react-router-dom";
import {Div , DivBackground} from "../../styled-components/Div/div"
import "./ItemCoffeeToolsFuor.css"



const ItemCoffeeToolsFuor = () => {
  const {id = 4} = useParams()
  const item = DataCoffeetools.find(p => p.id === parseInt(id))
    return(
      <div>
            <div className="div-item-ict4">
                <DivBackground Background="#898f4b">
                    <div className="img_item_ictfuor">
                        <img src={item.img}/>
                    </div>
                    <Div  height="700px" marginbot="-250px">
                        <div className="main_factor-item-fuor">
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
                </DivBackground>
                <div className="title-item_ictone">
                    <div>
                        <div>
                          <h2>
                            About the Aeropress
                          </h2>
                          <p>
                            Aeropresses are fast becoming one of the best coffee makers to have at home and for travelling.
                          </p>
                        </div>
                        <div>
                            <b>
                              Includes:
                            </b>
                            <ul>
                              <li>
                                Plunger
                              </li>
                              <li>
                                Paddle
                              </li>
                              <li>
                                Scoop
                              </li>
                              <li>
                                1 x 100 Micro Filters for AeroPress
                              </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )

}

export default ItemCoffeeToolsFuor