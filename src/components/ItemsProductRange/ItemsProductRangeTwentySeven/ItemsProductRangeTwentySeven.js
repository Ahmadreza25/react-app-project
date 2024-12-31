import React from 'react'
import { DataProductRange } from '../../../data/DataProductRange'
import { useParams } from 'react-router-dom';
import {Div} from "../../styled-components/Div/div"
import "./ItemsProductRangeTwentySeven.css"

const ItemsProductRangeTwentySeven = () => {
  const {id = 27} = useParams()
  const item = DataProductRange.find(p => p.id === parseInt(id))
  return (
    <div>
        <div className="div-item-ipr-24">
                <div className="div-main-item-ipr24">
                    <div className="img-item-twentyfour-ipr">
                        <img src={item.img}/>
                    </div>
                    <Div  height="600px" marginbot="-150px">
                        <div className="div-main-factor-ipr24">
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
                      <h2>DESCRIPTION</h2>
                      <p>
                        We collaborated with iconic Australian pottery company Robert Gordon to create Campos mugs 
                        in our signature green. Made locally in Victoria, Australia each mug is half dipped with a 
                        natural finish to create a stunning landscape effect. Being handmade, each mug is unique 
                        meaning that no two mugs are exactly alike. The Campos X Robert Gordon Mug is available 
                        exclusively on the Campos website, at our flagships & cafe partners.

                        Handmade meaning no two cups are alike

                        Durable high fired stoneware

                        300ml | 10oz capacity

                        Microwave, oven & dishwasher safe

                        Designed and made in Australia
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

export default ItemsProductRangeTwentySeven