import React from 'react'
import { DataProductRange } from '../../../data/DataProductRange'
import { useParams } from 'react-router-dom';
import {Div} from "../../styled-components/Div/div"
import icon1 from "../../../images/subscribenow-images/icon1.png"
import icon2 from "../../../images/subscribenow-images/icon2.png"
import "./ItemProductRangeThree.css"

const ItemProductRangeThree = () => {
    const {id = 3} = useParams()
    const item = DataProductRange.find(p => p.id === parseInt(id))
  return (
    <div>
          <div className="div-item-ipr-1">
                <div className="div-main-item-ipr1">
                    <div className="img-item-one-ipr">
                        <img src={item.img}/>
                    </div>
                    <Div  height="850px" marginbot="-400px">
                        <div className="div-main-factor-ipr1">
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
                </div>
                <div className="title-item-won">
                    <div>
                      <h2>THE STORY OF THIS COFFEE</h2>
                      <p>
                        Campos Superior is our signature, quintessential coffee blend. It's what we've proudly served in our cafes since day one. Combining fresh high-quality specialty coffees from our coffee producing partners in Colombia, East Africa & Brazil, this full-bodied coffee is carefully roasted to deliver sweet caramel, red currant, and milk chocolate flavours to your cup.

                        We pride ourselves in our Superior Blend tasting consistent and even as we continue to grow, we still spend hours everyday cupping and analysing it to ensure it tastes just right, every single time.

                        The farms we select for the Superior Blend are leaders in the Specialty Coffee world for their regions. We've worked very closely with these partnerships over many years and most are exclusive to Campos Coffee in Australia. It's a line-up of coffees and relationships to be we are incredibly proud of.
                      </p>
                    </div>
                    <div>
                      <h2>RECOMMENDED RECIPE</h2>
                      <p>
                      Dose: 23g
                      </p>
                      <p>
                      Yield: 40g
                      </p>
                      <p>
                      Brew Time: 35-40 seconds
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

export default ItemProductRangeThree