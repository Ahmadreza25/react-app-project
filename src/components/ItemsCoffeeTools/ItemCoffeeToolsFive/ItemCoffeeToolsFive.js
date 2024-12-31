import React from 'react'
import {DataCoffeetools} from "../../../data/DataCoffeetools"
import { useParams } from "react-router-dom";
import {Div} from "../../styled-components/Div/div"
import img1 from "../../../images/img-items-r/img-2.jpg"
import "./ItemCoffeeToolsFive.css"



const ItemCoffeeToolsFive = () => {
  const {id = 5} = useParams()
  const item = DataCoffeetools.find(p => p.id === parseInt(id))
  return (
    <div>
        <div className="div-item-ict5">
                <div className="div__main_ict_item5">
                    <div className="img_item_ictfive">
                        <img src={item.img}/>
                    </div>
                    <Div  height="650px" marginbot="-250px">
                        <div className="main_factor-item-five">
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
                      <div>
                          <h2>About the Campos Coffee Scales</h2>
                          <p>Our Campos Coffee scales monitor the weight, time and flow-rates as you brew coffee.</p>
                          <img src={img1}/>
                          <p>Produced with durable composite materials and features a removable and washable rubber sleeve, for long-lasting use.</p>
                          <h2>Dimensions:</h2>
                          <p>19.5cm x 13.5xm x 3cm</p>
                      </div>
                      <div>
                          <h2>Specifications</h2>
                          <ul>
                              <li>Features drip timer for precise pour over coffee</li>
                              <li>Measures between 3000 grams to 0.1 increments</li>
                              <li>Splash proof</li>
                              <li>Weighs in oz, lb. g /ml</li>
                              <li>Comes with batteries (AAA)</li>
                              <li>Features rubber mat to prevent slipping</li>
                              <li>Timer function with the ability to pause, reset and countdown</li>
                              <li>Features LED screen for easy viewing in dim lighting</li>
                          </ul>
                      </div>                  
                  </div>
                </div>
          </div>
    </div>
  )
}

export default ItemCoffeeToolsFive