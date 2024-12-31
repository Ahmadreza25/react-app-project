import React from 'react'
import { DataProductRange } from '../../../data/DataProductRange';
import { useParams } from 'react-router-dom';
import { Div } from '../../styled-components/Div/div';
import "./ItemsProductRangeFiftyOne.css"


const ItemsProductRangeFiftyOne = () => {
  const {id = 51} = useParams()
  const item = DataProductRange.find(p => p.id === parseInt(id))
  return (
    <div>
        <div className="div-item-ipr48">
                <div className="div-main-item-ipr48">
                    <div className="img-item-fortyeight-ipr">
                        <img src={item.img}/>
                    </div>
                    <Div height="650px" marginbot="-300px">
                        <div className="div-main-factor-ipr48">
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
                    </Div>
                </div>
                <div className="title-item-won">
                  <div>
                    <h2>WHAT'S INCLUDED</h2>
                    <p>
                      1kg of our Campos Decaf Blend: Choose either beans or your prefered grind.

                      1kg Airscape Canister: Compact canister that expels air to keep coffee fresh, made rom durable galvanised steel.
                    </p>
                  </div>
                  <div>
                    <h2>DESCRIPTION</h2>
                    <p>
                      Enjoy great-tasting decaf coffee with our 1kg Decaf Blend and Airscape Canister combo. Our Decaf Blend, made using a fully natural process to gently remove caffeine, delivers chocolatey goodness with milk and caramelly sweetness when enjoyed black. The blend maintains real coffee flavours without the caffeine, ensuring a satisfying experience.

                      Paired with the Airscape Canister, your decaf coffee will stay fresh longer. The canister's unique design forces out air, preserving the taste and aroma of your coffee. Made from durable, restaurant-grade galvanised steel, it resists staining and odour retention. The BPA-free clear top lid lets you see how much coffee you have left, while the inner lid locks out air with a satisfying "swooshing" noise. This bundle is perfect for those who want to enjoy great-tasting decaf coffee without compromising on freshness.
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

export default ItemsProductRangeFiftyOne