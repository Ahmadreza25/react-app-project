import React from 'react'
import { DataProductRange } from '../../../data/DataProductRange'
import { useParams } from 'react-router-dom';
import { Div } from '../../styled-components/Div/div';
import "./ItemsProductRangeThirtySix.css"

const ItemsProductRangeThirtySix = () => {
  const {id = 36} = useParams()
  const item = DataProductRange.find(p => p.id === parseInt(id))
  return (
    <div>
        <div className="div-item-ipr-32">
                <div className="div-main-item-ipr32">
                    <div className="img-item-thirtytwo-ipr">
                        <img src={item.img}/>
                    </div>
                    <Div  height="600px" marginbot="-150px">
                        <div className="div-main-factor-ipr32">
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
                      <h2>THE STORY OF THIS COFFEE</h2>
                      <p>
                        With heightened sweetness, playful fruits and a juicy mouthfeel that makes for a perfectly approachable espresso both with and without milk, it’s surprise then that this is the 8th year we have featured the fine coffee from Carlos Lopez in our single origin line up.

                        Highly attuned to the ebbs and flows of coffee production, Carlos’s success resides in his carefully considered rejuvenation program which aims to concentrate sugars in the cherries and increase the yield of the plants over time.

                        His timetable also tracks fertilisation and spraying for leaf rust. Before implementing a plan, soil and foliage samples are sent to the Zamora University in Honduras for analysis and then decisions on which type of fertiliser and how much to apply, are made.

                        We first met Carlos Lopez early in 2016 at a mill in Ocotal, Nueva Segovia. For us, his coffees are really exciting in the way they carry all the classic hallmarks of high end Nicaraguan specialty coffee while at the same time bearing a subtle flavour signature that is all his.
                      </p>
                    </div>
                    <div>
                      <h2>RECOMMENDED RECIPE</h2>
                      <p>
                        This washed Nicaraguan is roasted for espresso. It makes a sweet and rich black coffee and makes a smooth and creamy milk coffee. It also works great as a plunger.

                        Dose: 23g Yield: 46g Brew Time 27-32 secs
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

export default ItemsProductRangeThirtySix