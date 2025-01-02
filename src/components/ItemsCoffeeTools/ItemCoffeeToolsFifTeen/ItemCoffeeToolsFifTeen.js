import React from 'react'
import {DataCoffeetools} from "../../../data/DataCoffeetools"
import { useParams } from "react-router-dom";
import {Div , DivBackground} from "../../styled-components/Div/div"
import "./ItemCoffeeToolsFifTeen.css"

const ItemCoffeeToolsFifTeen = () => {
  const {id = 15} = useParams()
  const item = DataCoffeetools.find(p => p.id === parseInt(id))
  return (
    <div>
        <div className="div-item-ict15">
                <DivBackground Background="#d5d5d5">
                    <div className="img_item_ictfifteen">
                        <img src={item.img}/>
                    </div>
                    <Div height="650px" marginbot="-200px">
                        <div className="main_factor-item-fifteen">
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
                        About the 8 Cup Bodum Plunger/French Press
                        </h2>
                        <p>
                          CHAMBORD® is a true original – the classic French press coffee maker designed in the fifties. Bodum still 
                          produces it with the same painstaking craftsmanship they used way back with the original.
                        </p>
                    </div>
                    <div>
                      <ul>
                        <li>
                          The only difference in the production process since the fifties is their commitment 
                          to the highest standards of environmentally 
                          correct manufacturing, which is especially important during the chrome plating process.
                        </li>
                        <li>
                          The frame and lid, made of stainless steel, undergo several chrome plating processes to 
                          obtain a durable shiny surface that will last for many years of intense use.
                        </li>
                        <li>
                          The black CHAMBORD® Polypropylene handle comes in a matte finish that not only gives a comfortable 
                          grip while serving but adds to the classic quality of the design.
                        </li>
                      </ul>
                    </div>
                    <p>
                    The French Press system has always been the simplest and ultimate way of brewing an excellent cup of coffee.
                    </p>
                    <p>
                    Using fresh coarse ground beans with water between 92 and 96 degrees celsius brings out the very best in all types of coffee.
                    </p>
                </div>
          </div>
    </div>
  )
}

export default ItemCoffeeToolsFifTeen