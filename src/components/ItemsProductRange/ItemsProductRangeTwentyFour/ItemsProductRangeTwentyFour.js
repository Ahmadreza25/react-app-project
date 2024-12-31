import React from 'react'
import { DataProductRange } from '../../../data/DataProductRange'
import { useParams } from 'react-router-dom';
import {Div} from "../../styled-components/Div/div"
import "./ItemsProductRangeTwentyFour.css"
const ItemsProductRangeTwentyFour = () => {
  const {id = 24} = useParams()
  const item = DataProductRange.find(p => p.id === parseInt(id))
  return (
    <div>
        <div className="div-item-ipr-21">
                <div className="div-main-item-ipr21">
                    <div className="img-item-twentyone-ipr">
                        <img src={item.img}/>
                    </div>
                    <Div  height="600px" marginbot="-150px">
                        <div className="div-main-factor-ipr21">
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
                        Elevate your coffee ritual with the Campos Glass KeepCup, crafted with the premium speciality 
                        coffee aficionado in mind. Proudly designed and made in Australia, this KeepCup is constructed from fully tempered soda lime glass for exceptional durability.

                        Each KeepCup is hand-fitted with a lid, ensuring a perfect seal due to the unique variation in 
                        the glass's circumference. Please note that the lid may not be interchangeable with other lids.
                      </p>
                    </div>
                    <div>
                      <h2>
                      SIZE GUIDE
                      </h2>
                      <p>
                        8oz - 100 mm with lid, 81mm without lid

                        Diameter: 60mm base, 82mm widest point
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

export default ItemsProductRangeTwentyFour