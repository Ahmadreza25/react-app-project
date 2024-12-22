import React from 'react'
import { DataProductRange } from '../../../data/DataProductRange';
import { useParams } from 'react-router-dom';
import "./ItemsProductRangeSixtySix.css"

const ItemsProductRangeSixtySix = () => {
    const {id = 93} = useParams()
    const item = DataProductRange.find(p => p.id === parseInt(id))
  return (
    <div>
        <div className="div-item-ipr63">
                <div className="div-main-item-ipr63">
                    <div className="img-item-sixtythree-ipr">
                        <img src={item.img}/>
                    </div>
                    <div className="factor-item-ipr63">
                        <div className="div-main-factor-ipr63">
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
                      1 x Cold Brew Keep Cup: A sleek and stylish cup that keeps cold brew perfectly chilled and ready to go.
                      </p>
                      <p>
                      1 x Hario Mizudashio Cold Brew Pot - 600mL: This easy-to-use cold brew pot makes brewing up to 600mL of smooth, flavourful cold brew a breeze.
                      </p>
                      <p>
                      1x Blade Runner 250g - Cold Brew: Specially crafted for cold brew, this blend offers bright, fruity notes and a clean, refreshing finish.
                      </p>
                    </div>
                    <div>
                      <h2>DESCRIPTION</h2>
                      <p>
                        Kickstart your cold brew journey with our Cold Brew Starter Bundle, the perfect introduction to 
                        crafting smooth and refreshing cold brew coffee at home. Ideal for beginners and coffee enthusiasts alike, this bundle provides all the essentials to explore the unique flavours and aromas of cold brew. It's a great way to 
                        discover the joy of making and enjoying a rich, full-bodied cold coffee experience right in your own kitchen.
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

export default ItemsProductRangeSixtySix