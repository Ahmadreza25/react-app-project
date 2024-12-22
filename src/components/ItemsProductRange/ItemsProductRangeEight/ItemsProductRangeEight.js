import React from 'react'
import { DataProductRange } from '../../../data/DataProductRange'
import { useParams } from 'react-router-dom';
import icon1 from "../../../images/subscribenow-images/icon1.png"
import icon2 from "../../../images/subscribenow-images/icon2.png"
import "./ItemsProductRangeEight.css"

const ItemsProductRangeEight = () => {
  const {id = 8} = useParams()
  const item = DataProductRange.find(p => p.id === parseInt(id))
  return (
    <div>
          <div className="div-item-ipr-8">
                <div className="div-main-item-ipr8">
                    <div className="img-item-eight-ipr">
                        <img src={item.img}/>
                    </div>
                    <div className="factor-item-ipr8">
                        <div className="div-main-factor-ipr8">
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
                    </div>
                </div>
                <div className="title-item-won">
                <div>
                      <h2>ABOUT THIS COFFEE</h2>
                      <p>
                        If you have ordered a cup of Campos coffee in our famous green cup, then you've tasted our Campos Superior blend. Campos Superior is our signature, quintessential specialty coffee cafe blend.  

                        It's what we've proudly served in our cafes since day one in Newtown, 2002.  

                        Campos Superior Blend coffee capsule is a full-bodied coffee that has been expertly roasted to deliver the distinct caramel notes and rich flavour of Campos Superior in every capsules. Famously excellent with milk and when served black, flavours of red fruit and apricot shine through.
                      </p>
                    </div>
                    <div>
                      <h2>OUR CAPSULES</h2>
                      <p>
                        Using decades of sourcing and roasting experience, our coffee crew have recreated the distinctive taste of Campos into a range of convenient capsules to stand above the rest. Our aluminium coffee capsules are designed to perfectly capture the flavour profile and fresh aroma of our coffees to ensure a superior taste, every time.

                        Campos Coffee Capsules are compatible with Nespresso®* original coffee machines and are fully recyclable too.

                        Mix and match any of your favorite full-price coffee capsules and enjoy great savings:
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

export default ItemsProductRangeEight