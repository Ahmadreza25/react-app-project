import React from 'react'
import { DataProductRange } from '../../../data/DataProductRange'
import { useParams } from 'react-router-dom';
import "./ItemsProductRangeThirtyFive.css"

const ItemsProductRangeThirtyFive = () => {
  const {id = 36} = useParams()
  const item = DataProductRange.find(p => p.id === parseInt(id))
  return (
    <div>
        <div className="div-item-ipr-31">
                <div className="div-main-item-ipr31">
                    <div className="img-item-thirtyone-ipr">
                        <img src={item.img}/>
                    </div>
                    <div className="factor-item-ipr31">
                        <div className="div-main-factor-ipr31">
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
                        Who said decaf coffee can't taste good? We take this coffee very seriously because we love delivering a delicious decaf for everyone to enjoy.

                        Our decaffeinated specialty coffee blend is marked by notes of cocoa, malt and wild berries. This is an elegant espresso with the unmistakable prominence of real coffee flavours.
                      </p>
                    </div>
                    <div>
                      <h2>OUR CAPSULES</h2>
                      <p>
                        Each pack contains 10 aluminium coffee capsules.

                        Mix and match any of your favorite full-price coffee capsules and enjoy great savings:

                        Buy 5 - 9 packs, save 10%
                        Buy 10 - 29 packs, save 15%
                        Buy 30+ packs, save 20%
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

export default ItemsProductRangeThirtyFive