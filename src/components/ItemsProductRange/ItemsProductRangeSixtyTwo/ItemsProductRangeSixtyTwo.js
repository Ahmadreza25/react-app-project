import React from 'react'
import { DataProductRange } from '../../../data/DataProductRange';
import { useParams } from 'react-router-dom';
import "./ItemsProductRangeSixtyTwo.css"

const ItemsProductRangeSixtyTwo = () => {
  const {id = 83} = useParams()
  const item = DataProductRange.find(p => p.id === parseInt(id))
  return (
    <div>
        <div className="div-item-ipr59">
                <div className="div-main-item-ipr59">
                    <div className="img-item-fiftynine-ipr">
                        <img src={item.img}/>
                    </div>
                    <div className="factor-item-ipr59">
                        <div className="div-main-factor-ipr59">
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
                        Indonesia is a relatively new player in the Cup of Excellence competition, but is quickly becoming one of the most exciting Auctions in the calendar year. This blend of traditional Indonesian varieties Ateng, Typica and P-88 stood out with wild flavours of custard apple, sour cherry and shiraz.

                        The producer, Zainal Arifin, has experimented widely with processing techniques and has employed a mossto process for this coffee. This involves using the juices from compressed coffee cherries in the fermentation prior to drying. This is a technique borrowed from winemaking that enhances sweetness and fruit flavours.

                        Zainal Arifin has provided the following quote about his farm:

                        ”My name is Zainal Arifin, I started setting foot in coffee plantations when I was little; my mother and father often took me to the coffee plantation. Almost every family in Gayo earns their income from growing coffee; even school fees and daily needs are earned from coffee.

                        We started to focus on entering the coffee industry by learning various kinds of coffee processes from the internet and through our experiments. With minimal capital, we started selling our products to coffee shops in cities like Jakarta and other cities.

                        The garden is in the Pegasing sub-district, Panangan Mata Village, 1700-1800 meters above sea level. This land was opened in 1991 and managed by my uncle, and then we bought part of the land in 2019 and we have been cultivating it until now.

                        We process post-harvest processes such as natural, honey, full wash, semi wash, wine and experimental coffee, hopefully in 2023 we can achieve CoE Winner and get the best results this year. Thank you Cup of Excellence.”
                      </p>
                    </div>
                    <div>
                      <h2>RECOMMENDED RECIPE</h2>
                      <p>
                        This natural mossto processed Indonesian is a light/filter roast. It makes a wild, complex and intense pourover or a funky fruit forward espresso. It also works great as a cold brew or plunger.

                        Filter Brew Ratio: 1:16, Espresso Brew Ratio: 1:3
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

export default ItemsProductRangeSixtyTwo