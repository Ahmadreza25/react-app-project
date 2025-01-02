import React from 'react'
import {DataCoffeetools} from "../../../data/DataCoffeetools"
import { useParams } from "react-router-dom";
import {Div , DivBackground} from "../../styled-components/Div/div"
import icon1 from "../../../images/subscribenow-images/icon1.png"
import icon2 from "../../../images/subscribenow-images/icon2.png"
import img1 from "../../../images/img-items-r/img-3.webp"
import img2 from "../../../images/img-items-r/img-4.webp"
import "./ItemCoffeeToolsSeven.css"



const ItemCoffeeToolsSeven = () => {
  const {id = 7} = useParams()
  const item = DataCoffeetools.find(p => p.id === parseInt(id))
  return (
    <div>
        <div className="div-item-ict7">
                <DivBackground Background="#898f4b">
                    <div className="img_item_ictseven">
                        <img src={item.img}/>
                    </div>
                    <Div  height="950px" marginbot="-500px">
                        <div className="main_factor-item-seven">
                            <div className="div-capsules">
                                <h2>
                                    Gifts
                                </h2>
                                <h1>
                                    {item.title}
                                </h1>
                            </div>
                            <div className="div-from">
                                <b>FORM</b><p>{item.price}</p>
                            </div>
                            <div className="div-roast">
                                <b>ROAST</b>
                                <div className="div-circle">
                                    <div className="circle1"></div>
                                    <div className="circle2"></div>
                                    <div className="circle3"></div>
                                    <div className="circle4"></div>
                                    <div className="circle5 color-circle5"></div>
                                    <div className="circle6"></div>
                                    <div className="circle7"></div>
                                </div>
                            </div>
                            <div className="div-profile">
                                <b>
                                  Profile
                                </b>
                                <p>
                                    {item.explanations}
                                </p>
                            </div>
                            <p className="frequency">Frequency</p>
                            <div className="div-main-Frequency">
                                <div className="div-Frequency">
                                    <div className="option">
                                        <img src={icon1}/>
                                        <b>Once off</b>
                                    </div>
                                    <div className="option-line"></div>
                                    <div className="option">
                                        <img src={icon2}/>
                                        <b>Subscription</b>
                                    </div>
                                </div>
                            </div>
                            <div className="div-input-factor">
                                <b>Capsule pack size</b>
                                <input type="text" placeholder="Please select"/>
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
                    <p>
                    Bundle includes one 500g Airscape Canister and one 500g bag of our most popular coffee, the Superior blend.
                    </p>
                  </div>
                  <div>
                      <h2>
                      ABOUT OUR SUPERIOR BLEND
                      </h2>
                      <p>
                        Campos Superior is our signature, quintessential coffee blend. It’s what we’ve 
                        proudly served in our cafes since day one. Combining fresh high-quality specialty 
                        coffees from our coffee producing partners in Ethiopia, Kenya and Colombia, this full-bodied coffee is carefully
                        roasted to deliver sweet caramel, butterscotch and milk chocolate flavours to your cup.
                      </p>
                  </div>
                  <div>
                      <h2>
                        ABOUT THE AIRSCAPE CANISTER 500G
                      </h2>
                      <p>
                        Your coffee will never go stale again. The Campos Airscape® forces the freshness-destroying 
                        air out of the canister, extending the life of your coffee to keep what’s good today, good 
                        tomorrow too!
                        Designed of durable, restaurant-grade stainless steel, the Airscape® canister body resists 
                        staining and odour retention.
                      </p>
                      <p>
                        The BPA-free clear, top lid allows you to see how much is left in the container, and the inner Airscape® lid (also BPA-free) makes a fun “swooshing” noise as 
                        its pushed down, so you can actually hear it working.
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

export default ItemCoffeeToolsSeven