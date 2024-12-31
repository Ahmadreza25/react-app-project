import React from 'react'
import { DataProductRange } from '../../../data/DataProductRange'
import { useParams } from 'react-router-dom';
import { Div } from '../../styled-components/Div/div';
import icon1 from "../../../images/subscribenow-images/icon1.png"
import icon2 from "../../../images/subscribenow-images/icon2.png"
import "./ItemsProductRangeSixteen.css"

const ItemsProductRangeSixteen = () => {
  const {id = 16} = useParams()
  const item = DataProductRange.find(p => p.id === parseInt(id))
  return (
    <div>
          <div className="div-item-ipr-16">
                <div className="div-main-item-ipr16">
                    <div className="img-item-sixteen-ipr">
                        <img src={item.img}/>
                    </div>
                    <Div  height="900px" marginbot="-450px">
                        <div className="div-main-factor-ipr16">
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
                          It’s the most wonderfully delicious time of year and the Campos Christmas blend is here to spread the festive cheer.

                          Within this blend, you’ll find a few presents from some of our favourite origins. We’ve blended an Anaerobic Lactic Natural from Indonesia and a Washed Kenyan to deliver a stocking full of fruity flavours and even a hint brandy-like booziness, just like a decadent Christmas pudding. A smattering of a Natural from Brazil gives a warming layer of roasted chestnuts which is complimented with just a hint of a Cinnamon infused Colombian coffee to bring the festive spice.

                          To give you all the energy you need to get through a day of games, presents, eating and celebrating with your nearest and dearest, there’s no better way to start your holidays and Christmas morning than this.
                        </p>
                    </div>
                    <div>
                        <h2>RECOMMENDED RECIPE</h2>
                        <p>
                          This blend of Indonesia, Brazil and cinnamon fermented Colombia is roasted for espresso. It makes a rich, festive espresso or a christmas pudding-like milk coffee. It also works great as a cold brew or plunger.

                          Dose: 23g Yield: 40g Brew Time: 27-32 seconds
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

                            For full details, please see our Delivery Policy.`
                        </p>
                    </div>
                </div>
          </div>
    </div>
  )
}

export default ItemsProductRangeSixteen