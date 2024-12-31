import React from 'react'
import { DataProductRange } from '../../../data/DataProductRange'
import { useParams } from 'react-router-dom';
import {Div} from "../../styled-components/Div/div"
import "./ItemsProductRangeTwentyOne.css"

const ItemsProductRangeTwentyOne = () => {
  const {id = 21} = useParams()
  const item = DataProductRange.find(p => p.id === parseInt(id))
  return (
    <div>
        <div className="div-item-ipr-18">
                <div className="div-main-item-ipr18">
                    <div className="img-item-eigetteen-ipr">
                        <img src={item.img}/>
                    </div>
                    <Div height="600px" marginbot="-150px">
                        <div className="div-main-factor-ipr18">
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
                        1 x Campos Coffee scales

                        2 x AAA batteries
                      </p>
                    </div>
                    <div>
                      <h2>DESCRIPTION</h2>
                      <p>
                        Achieve precision in every cup with Campos Coffee Scales. Designed for the perfect 
                        measurement, these scales are essential for brewing consistency. With an easy-to-read 
                        display and durable construction, they're a must-have for any coffee enthusiast.
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

export default ItemsProductRangeTwentyOne