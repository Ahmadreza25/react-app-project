import React from 'react'
import { DataProductRange } from '../../../data/DataProductRange'
import { useParams } from 'react-router-dom';
import "./ItemsProductRangeThirtyOne.css"

const ItemsProductRangeThirtyOne = () => {
  const {id = 32} = useParams()
  const item = DataProductRange.find(p => p.id === parseInt(id))
  return (
    <div>
        <div className="div-item-ipr-28">
                <div className="div-main-item-ipr28">
                    <div className="img-item-twentyeight-ipr">
                        <img src={item.img}/>
                    </div>
                    <div className="factor-item-ipr28">
                        <div className="div-main-factor-ipr28">
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
                        We were first introduced to the incredible coffee from Boledu and owner Mebrehatu Aynalem in the inaugural Ethiopian Cup of Excellence competition in 2020.

                        We’ve been buying direct since then and each year we continue to be blown away by the exceptional levels of quality that are highly consistent from year to year.

                        Natural processed coffees from Ethiopia have an important place in the story for most specialty coffee professionals with their high levels of fruit forwardness, complexity and fidelity. The first time you have coffee at this level is like a “eureka moment” inviting you to rediscover and redefine what coffee can taste like.

                        This year’s harvest is certainly no different with generous layers of florals, fruits and a sweet sparking acidity that embodies the essence of this ancient coffee region.
                      </p>
                    </div>
                    <div>
                      <h2>RECOMMENDED RECIPE</h2>
                      <p>
                        This natural Ethiopian is roasted for espresso. It makes a fruit forward black coffee and tastes like a strawberry milkshake with milk. It also works great as a cold brew or plunger.

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

export default ItemsProductRangeThirtyOne