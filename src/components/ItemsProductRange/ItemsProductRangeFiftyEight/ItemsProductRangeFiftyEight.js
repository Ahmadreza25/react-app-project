import React from 'react'
import { DataProductRange } from '../../../data/DataProductRange';
import { useParams } from 'react-router-dom';
import "./ItemsProductRangeFiftyEight.css"

const ItemsProductRangeFiftyEight = () => {
  const {id = 77} = useParams()
  const item = DataProductRange.find(p => p.id === parseInt(id))
  return (
    <div>
        <div className="div-item-ipr55">
                <div className="div-main-item-ipr55">
                    <div className="img-item-fiftyfive-ipr">
                        <img src={item.img}/>
                    </div>
                    <div className="factor-item-ipr55">
                        <div className="div-main-factor-ipr55">
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
                    <h2>THE STORY OF THIS COFFEE</h2>
                    <p>
                      Our relationship with the Vides family has roots in the Cup of Excellence program so we found no better way to celebrate 10 years of partnership than purchasing their finalist lot in this years competition. Our partnership with the Vides family is a singularly perfect reflection of all our sourcing principles in action, those being Sustainability, Quality, Long Term Relationships, Transparency and Traceability.

                      Quote from the Vides Family;

                      “In 1958, Dr. Jorge Vides founded Finca La Bolsa, he bought the land and start growing Caturra and bourbon coffees. Some years later Maria Elena Vides, his daughter, started managing and supporting her dad, working in the farms. In 1995, Dr. Vides pass away, so Maria Elena Vides continue directing the farms.
                      In 2002 Renardo Vides, third generation of Vides Family and agronomist, participate in COE for the first time and won the 2nd place overall. In this moment the Vides family started long term relationships with international buyers and learned how to obtain unique coffees from their Farms. Since this moment the Vides family has worked hardly to provide consistent and unique coffees.

                      It’s been 22 years since that moment and now we still committed in excellence and consistency, this coffee represent the effort of a family that is compromised to provide the best coffee possible from Huehuetenango. With the mission of environmental sustainability, positive social impact and the highest level in quality. This is the perfect blend for our mission as a coffee company and our everyday driver, excellence.”
                    </p>
                  </div>
                  <div>
                      <h2>RECOMMENDED RECIPE</h2>
                      <p>
                        This washed Guatemalan is roasted for espresso. It makes a sweet, clean and complex black coffee and a chocolatey decadent milk coffee. It also works great as a cold brew or plunger.

                        Dose: 22.5g Yield: 46g Brew Time 26-30 secs
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

export default ItemsProductRangeFiftyEight