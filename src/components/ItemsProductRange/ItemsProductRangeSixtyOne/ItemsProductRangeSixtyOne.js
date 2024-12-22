import React from 'react'
import { DataProductRange } from '../../../data/DataProductRange';
import { useParams } from 'react-router-dom';
import "./ItemsProductRangeSixtyOne.css"


const ItemsProductRangeSixtyOne = () => {
  const {id = 82} = useParams()
  const item = DataProductRange.find(p => p.id === parseInt(id))
  return (
    <div>
        <div className="div-item-ipr58">
                <div className="div-main-item-ipr58">
                    <div className="img-item-fiftyeight-ipr">
                        <img src={item.img}/>
                    </div>
                    <div className="factor-item-ipr58">
                        <div className="div-main-factor-ipr58">
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
                        This year we celebrate 10 years of partnership with the Vides family of Finca La Bolsa in Huehuetenango. We love their coffee for the way it perfectly captures the Guatemalan profile of full bodied sweetness with hints of minerality though we especially appreciate their approach to environmental and social sustainability.

                        Established in 1958 by Jorge Vides Molina, today La Bolsa is overseen by Jorge’s daughter Maria Elena and grandson Renardo Ovalle Vides who manages the farms throughout the valley. Renardo’s wife Jacqueline, a certified Q Grader and Cup of Excellence judge, oversees quality control in the cupping lab.

                        Environmental sustainability and social responsibility are core philosophies at Finca La Bolsa. With Rainforest Alliance certification, membership in the International Women’s Alliance and a founding role in the Coffee Care program, La Bolsa lives and breathes its philosophy with authenticity. It’s this kind of care and long term thinking that results in a beautiful profile in the cup and the kind of coffee we know you’ll enjoy as much as we do.`
                      </p>
                    </div>
                    <div>
                      <h2>RECOMMENDED RECIPE</h2>
                      <p>
                        This washed Guatemalan is roasted light/filter roast. It makes a complex, balanced pourover or a bright, fruit forward espresso. It also works great as a cold brew or plunger.

                        Filter Brew Ratio: 1:17, Espresso Brew Ratio: 1:3
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

export default ItemsProductRangeSixtyOne