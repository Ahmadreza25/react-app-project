import React from 'react'
import { DataProductRange } from '../../../data/DataProductRange'
import { useParams } from 'react-router-dom';
import {Div , DivBackground} from "../../styled-components/Div/div"
import icon1 from "../../../images/subscribenow-images/icon1.png"
import icon2 from "../../../images/subscribenow-images/icon2.png"
import "./ItemProductRangeTwo.css"

const ItemProductRangeTwo = () => {
    const {id = 2} = useParams()
    const item = DataProductRange.find(p => p.id === parseInt(id))
  return (
    <div>
          <div className="div-item-ipr-2">
                <DivBackground Background="#898f4b">
                    <div className="img-item-three-ipr">
                        <img src={item.img}/>
                    </div>
                    <Div  height="850px" marginbot="-400px">
                        <div className="div-main-factor-ipr2">
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
                            One of our darker roasts. It blends chocolate and forest fruits. Refined and handsome.

                            Another rich blend, but more on the cocoa side of the flavour wheel and roasted a touch darker than our usual Australian style roast. Bold but smooth; strong but not bitter.

                            Our aim for this blend is to deliver a rich body with prominent chocolate flavours in the cup.  Sweet, yes, but with a solid trunk which carries through in the cup.

                            This blend has been a big favourite among the long-term regulars with their home espresso machines and always delivers good complexity of darker flavour notes with a touch of fruits.

                            This coffee is taken slightly darker than our typical espresso roast and exemplifies a darker roast style which is easy to appreciate in milky beverages.
                        </p>
                    </div>
                    <div>
                        <h2>RECOMMENDED RECIPE</h2>
                        <p>
                        Dose: 23g
                        </p>
                        <p>
                        Yield: 37g
                        </p>
                        <p>
                        Brew Time: 28-33 seconds
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
                        <p>

                        </p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default ItemProductRangeTwo