import React from 'react'
import { DataProductRange } from '../../../data/DataProductRange'
import { useParams } from 'react-router-dom';
import "./ItemsProductRangeTwentyEight.css"


const ItemsProductRangeTwentyEight = () => {
  const {id = 28} = useParams()
  const item = DataProductRange.find(p => p.id === parseInt(id))
  return (
    <div>
        <div className="div-item-ipr-25">
                <div className="div-main-item-ipr25">
                    <div className="img-item-twentyfive-ipr">
                        <img src={item.img}/>
                    </div>
                    <div className="factor-item-ipr25">
                        <div className="div-main-factor-ipr25">
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
                        Indonesia is one of the most exciting and diverse coffee growing regions in the world, 
                        and it's right on our doorstep. From the main coffee islands of Sumatra, Java, and Sulawesi 
                        to countless others within the archipelago, we just couldn't resist releasing an Indonesian 
                        Single Origin in a convenient coffee capsule.

                        Expertly roasted to capture the unique brown spice, cocoa and earthy tones that are signatures 
                        of Indonesia. As a black coffee, sweet dragon fruits compliment a full-bodied mouthfeel. Add 
                        milk and you'll discover roasted almonds and nutmeg flavours.
                      </p>
                    </div>
                    <div>
                      <h2>OUR CAPSULES</h2>
                      <p>
                          Indonesia is one of the most exciting and diverse coffee growing regions in the world, and it's right on our doorstep. From the main coffee islands of Sumatra, Java, and Sulawesi to countless others within the archipelago, we just couldn't resist releasing an Indonesian Single Origin in a convenient coffee capsule.

                          Expertly roasted to capture the unique brown spice, cocoa and earthy tones that are signatures of Indonesia. As a black coffee, sweet dragon fruits compliment a full-bodied mouthfeel. Add milk and you'll discover roasted almonds and nutmeg flavours.

                          OUR CAPSULES
                          Using decades of sourcing and roasting experience, our coffee crew have recreated the distinctive taste of Campos into a range of convenient capsules to stand above the rest. Our aluminium coffee capsules are designed to perfectly capture the flavour profile and fresh aroma of our coffees to ensure a superior taste, every time.

                          Campos Coffee Capsules are compatible with Nespresso®* original coffee machines and are fully recyclable too.
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

export default ItemsProductRangeTwentyEight