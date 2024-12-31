import React from 'react'
import { DataProductRange } from '../../../data/DataProductRange';
import { useParams } from 'react-router-dom';
import { Div } from '../../styled-components/Div/div';
import "./ItemsProductRangeFiftyFour.css"

const ItemsProductRangeFiftyFour = () => {
  const {id = 54} = useParams()
  const item = DataProductRange.find(p => p.id === parseInt(id))
  return (
    <div>
        <div className="div-item-ipr51">
                <div className="div-main-item-ipr51">
                    <div className="img-item-fiftyone-ipr">
                        <img src={item.img}/>
                    </div>
                    <Div height="650px" marginbot="-300px">
                        <div className="div-main-factor-ipr51">
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
                      1kg of our Campos Roma Blend: Choose either beans or your prefered grind.

                      1kg Airscape Canister: Compact canister that expels air to keep coffee fresh, made rom durable galvanised steel. steel.
                    </p>
                  </div>
                  <div>
                    <h2>DESCRIPTION</h2>
                    <p>
                      Experience the bold, robust flavours of our 1kg Roma Blend, paired with the Airscape Canister to maintain its freshness. The Roma Blend, our darkest roast, is inspired by the Italian style, featuring a mix of fine Arabica beans and a touch of high-quality Robusta. This blend delivers a powerful punch of dark chocolate and molasses flavours, making it perfect for those who love a strong, rich coffee.

                      The Airscape Canister is designed to keep your coffee fresh by eliminating air. Its durable, 
                      restaurant-grade galvanised steel body resists staining and odour retention, while the BPA-free 
                      clear top lid lets you monitor your coffee supply. The inner lid, also BPA-free, locks out air with a 
                      satisfying "swooshing" sound, preserving the intense flavours of your Roma Blend. This bundle is ideal for coffee enthusiasts who appreciate a bold, Italian-style coffee and want to keep it fresh for as long as possible.
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

export default ItemsProductRangeFiftyFour