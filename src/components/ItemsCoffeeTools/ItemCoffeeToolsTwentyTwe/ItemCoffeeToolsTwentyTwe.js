import React from 'react'
import {DataCoffeetools} from "../../../data/DataCoffeetools"
import { useParams } from "react-router-dom";
import {Div , DivBackground } from "../../styled-components/Div/div"
import "./ItemCoffeeToolsTwentyTwe.css"



const ItemCoffeeToolsTwentyTwe = () => {
  const {id = 22} = useParams()
  const item = DataCoffeetools.find(p => p.id === parseInt(id))
  return (
    <div>
          <div className="div-item-ict22">
                <DivBackground Background="#efefef">
                    <div className="img_item_icttwenty22">
                        <img src={item.img}/>
                    </div>
                    <Div height="800px" marginbot="-350px">
                        <div className="main_factor-item-twenty22">
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
                </DivBackground>
                <div className="title-item_ictone">
                    <div>
                        <p>
                          The V60 Pour Over by Hario is a very easy to use, highly customisable and satisfying method of making coffee.
                        </p>
                        <p>
                          The V60 will reward the meticulous barista as it becomes highly sensitive to changes in technique and is a perfect match with all of our filter coffee offerings.
                        </p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default ItemCoffeeToolsTwentyTwe
