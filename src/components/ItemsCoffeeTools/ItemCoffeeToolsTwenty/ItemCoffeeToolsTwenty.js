import React from 'react'
import {DataCoffeetools} from "../../../data/DataCoffeetools"
import { useParams } from "react-router-dom";
import { Div } from "../../styled-components/Div/div"
import "./ItemCoffeeToolsTwenty.css"



const ItemCoffeeToolsTwenty = () => {
  const {id = 20} = useParams()
  const item = DataCoffeetools.find(p => p.id === parseInt(id))
  return (
    <div>
      <div className="div-item-ict20">
                <div className="div__main_ict_item20">
                    <div className="img_item_icttwenty">
                        <img src={item.img}/>
                    </div>
                    <Div height="700px" marginbot="-250px">
                        <div className="main_factor-item-twenty">
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
                        About the Hario Mizudashi Cold Brew Pot
                      </h2>
                      <p>
                        The weather’s warming up, and that cold brew coffee is calling.
                      </p>
                      <p>
                        This is a fantastic cold brew device to keep in the fridge during the warmer months. Super easy to use!
                      </p>
                      <p>
                        An elegant and effective way to produce quality cold brewed coffee at home.
                      </p>
                      <p>
                        600ml. Makes approx. 5 cups of cold brew coffee.
                      </p>
                    </div>
                    <div>
                      <h2>
                        About Cold Brew Coffee
                      </h2>
                      <p>
                        What’s great about cold brew?
                      </p>
                      <p>
                        It’s rich, smooth and contains less than half the acids of traditional hot brew methods.
                      </p>
                      <p>
                        The Hario Mizudashi Cold Brew Coffee Pot is also simple to use and is made with high quality heatproof glass.
                      </p>
                    </div>
                    <div>
                      <h2>
                        How to Make Cold Brew Coffee
                      </h2>
                      <p>
                        Learn how to make cold brew coffee using the Hario Mizudashi Cold Brew pot and our special Summer Haze Cold Brew Coffee blend.
                      </p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default ItemCoffeeToolsTwenty 