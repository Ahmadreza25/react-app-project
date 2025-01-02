import React from 'react'
import { DataProductRange } from '../../../data/DataProductRange'
import { useParams } from 'react-router-dom';
import {Div , DivBackground} from "../../styled-components/Div/div"
import icon1 from "../../../images/subscribenow-images/icon1.png"
import icon2 from "../../../images/subscribenow-images/icon2.png"
import "./ItemsProductRangeSeven.css"

const ItemsProductRangeSeven = () => {
  const {id = 7} = useParams()
  const item = DataProductRange.find(p => p.id === parseInt(id))
  return (
    <div>
        <div className="div-item-ipr-7">
                <DivBackground Background="#898f4b">
                    <div className="img-item-seven-ipr">
                        <img src={item.img}/>
                    </div>
                    <Div  height="900px" marginbot="-450px">
                        <div className="div-main-factor-ipr7">
                            <div className="div-capsules">
                                <h2>
                                Capsules
                                </h2>
                                <h1>
                                    {item.title}
                                </h1>
                            </div>
                            <div className="div-from">
                                <b>FROM</b>
                                <p>{item.price}</p>
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
                                    PROFILE
                                </b>
                                <p>
                                    {item.explanations}
                                </p>
                            </div>
                            <div className="div-input-factor">
                                <b>Capsule pack size</b>
                                <input type="text" placeholder="Please select"/>
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
                            <div className="box-number">
                                <div className="numbers">
                                    <b>+</b>
                                    <p>1</p>
                                    <b>-</b>
                                </div>
                            </div>
                            <div className="btn-factor">
                                <button>
                                    Select Capsule pack size
                                </button>
                            </div>
                        </div>
                    </Div>
                </DivBackground>
                <div className="title-item-won">
                <div>
                      <h2>THE STORY OF THIS COFFEE</h2>
                      <p>
                        Blade Runner has been roasted in a unique way to be enjoyed as either a filter or espresso. It 
                        has a brighter, juicier profile much like you would find in many leading coffee bars in Scandinavia. Not the 
                        usual rich chocolates and caramels you would expect to find, but a delicious foray into a unique style of coffee blend for us.
                      </p>
                    </div>
                    <div>
                      <h2>RECOMMENDED RECIPE</h2>
                      <p>
                      Dose: 23g
                      </p>
                      <p>
                      Yield: 50g
                      </p>
                      <p>
                      Brew Time: 32-37 seconds
                      </p>
                      <p>
                        Filter Recipe:

                        Dose: 18g

                        Brew Water Vol: 300g

                        Ratio: 1:17

                        Water Temp: 93ºC

                        Time: ~3mins
                      </p>
                      <p>
                        Brew Method:

                        First Pour: 60g allow to bloom for 45 seconds

                        Second Pour: pour another 80g and allow water to drain (scales read 140g

                        Third Pour: Pour another 80g and allow water drain (scales read 220g)

                        Fourth Pour: Pour another 80g (scales read 300g)
                      </p>
                    </div>
                    <div>
                      <h2>DELIVERY & SHIPPING INFORMATION</h2>
                      <p>
                          Dispatch Times

                          To ensure your coffee arrives as fresh as possible, we roast our coffee to order. Please note dispatch times may vary, typically within 3-4 business days after order placement for normal periods, and 3-6 days after order placement for peak sale periods (this excludes public holidays and weekends).

                          How much is delivery?

                          Delivery charges are automatically calculated based on your delivery address at checkout.

                          We're pleased to offer free standard delivery on orders valued at $50 or more.

                          For full details, please see our Delivery Policy.
                      </p>
                    </div>
              </div>
        </div>
    </div>
  )
}

export default ItemsProductRangeSeven