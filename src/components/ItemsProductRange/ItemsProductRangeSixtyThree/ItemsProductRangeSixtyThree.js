import React from 'react'
import { DataProductRange } from '../../../data/DataProductRange';
import { useParams } from 'react-router-dom';
import "./ItemsProductRangeSixtyThree.css"


const ItemsProductRangeSixtyThree = () => {
  const {id = 84} = useParams()
  const item = DataProductRange.find(p => p.id === parseInt(id))
  return (
    <div>
        <div className="div-item-ipr60">
                <div className="div-main-item-ipr60">
                    <div className="img-item-sixty-ipr">
                        <img src={item.img}/>
                    </div>
                    <div className="factor-item-ipr60">
                        <div className="div-main-factor-ipr60">
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
                      <h2>WHAT'S INCLUDED</h2>
                      <p>
                        1kg of our Campos Superior Blend: Choose either beans or your prefered grind.

                        1kg Airscape Canister: Compact canister that expels air to keep coffee fresh, made rom durable galvanised steel.
                      </p>
                    </div>
                    <div>
                      <h2>DESCRIPTION</h2>
                      <p>
                        Experience ultimate coffee freshness with our 1kg Superior Blend paired with the Airscape Canister. Our Superior Blend is a carefully crafted mix of specialty coffees from Colombia, East Africa, and Brazil, delivering a full-bodied coffee with notes of sweet caramel, red currant, and milk chocolate. The farms we partner with are leaders in the specialty coffee world, ensuring you receive only the best quality beans.

                        The Airscape Canister is designed to keep your coffee as fresh as the day it was roasted. By forcing out air, it extends the life of your coffee, so you can enjoy the rich, consistent flavours of our Superior Blend cup after cup. The canister is made of durable, restaurant-grade galvanised steel, and the BPA-free clear top lid lets you see how much coffee you have left. The inner Airscape lid makes a satisfying "swooshing" noise as it locks out air, ensuring your coffee stays fresh. This bundle is perfect for coffee lovers who demand the best in both flavour and freshness.
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

export default ItemsProductRangeSixtyThree