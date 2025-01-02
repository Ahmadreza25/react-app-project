import React from 'react'
import {DataCoffeetools} from "../../../data/DataCoffeetools"
import { useParams } from "react-router-dom";
import { Div , DivBackground} from '../../styled-components/Div/div';
import "./ItemCoffeeToolsNine.css"



const ItemCoffeeToolsNine = () => {
  const {id = 9} = useParams()
  const item = DataCoffeetools.find(p => p.id === parseInt(id))
  return (
    <div>
        <div className="div-item-ict9">
                <DivBackground Background="#7a7a7a">
                    <div className="img_item_icteight">
                        <img src={item.img}/>
                    </div>
                    <Div  height="650px" marginbot="-200px">
                        <div className="main_factor-item-nine">
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
                      <h2>About the Moccamaster Filter Papers</h2>
                      <p>
                        These Moccamaster Filter Papers are white oxygen bleached, bringing out the best flavours in your filter coffee.
                      </p>
                      <p>
                        Suitable to be used with other filter machines and devices.
                      </p>
                    </div>
              </div>
        </div>
    </div>
  )
}

export default ItemCoffeeToolsNine