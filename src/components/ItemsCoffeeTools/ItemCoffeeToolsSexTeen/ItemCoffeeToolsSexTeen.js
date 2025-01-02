import React from 'react'
import {DataCoffeetools} from "../../../data/DataCoffeetools"
import { useParams } from "react-router-dom";
import {Div , DivBackground} from "../../styled-components/Div/div"
import "./ItemCoffeeToolsSexTeen.css"




const ItemCoffeeToolsSexTeen = () => {
  const {id = 16} = useParams()
  const item = DataCoffeetools.find(p => p.id === parseInt(id))
  return (
    <div>
        <div className="div-item-ict16">
                <DivBackground Background="#898f4b">
                    <div className="img_item_ictsexteen">
                        <img src={item.img}/>
                    </div>
                    <Div height="650px" marginbot="-200px">
                        <div className="main_factor-item-sexteen">
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
                        <h2>
                        About the Pullman Coffee Tamper 
                        </h2>
                        <p>
                            The Pullman Barista Tamper has been engineered to provide optimum results for a lifetime. 
                            With an ergonomically shaped wooden handle and an expertly weighted stainless-steel base, 
                            it makes for easy use whether you’re a home or professional barista.
                            58mm in diameter.
                        </p>
                    </div>
                </div>
          </div>
    </div>
  )
}

export default ItemCoffeeToolsSexTeen