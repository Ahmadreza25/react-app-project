import React from 'react'
import { DataProductRange } from '../../../data/DataProductRange'
import { useParams } from 'react-router-dom';
import { Div } from '../../styled-components/Div/div';
import "./ItemsProductRangeTwenty.css"

const ItemsProductRangeTwenty = () => {
    const {id = 20} = useParams()
    const item = DataProductRange.find(p => p.id === parseInt(id))
  return (
    <div>
        <div className="div-item-ipr-17">
                <div className="div-main-item-ipr17">
                    <div className="img-item-seventeen-ipr">
                        <img src={item.img}/>
                    </div>
                    <Div height="650px" marginbot="-200px">
                        <div className="div-main-factor-ipr17">
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
                        A classic, all day drinking espresso from one of our favourite regions in Colombia. 
                        This coffee is the result of a careful selection of high quality varieties and a 
                        passionate approach to production from farm owner, Jose Alejandro Rodriguez.

                        Jose Alejandro Rodriguez has been surrounded by coffee his entire life. In 2011, 
                        Jose Alejandro Rodriguez got together with a few friends and neighbours in the search 
                        of better prices for their coffee and more recognition for the effort that they put in 
                        to producing it. They all agreed that the prices they received for their coffees were too 
                        low and not enough to sustain their farms, let alone their families. This was when they decided to start an association called ASOPEP, that helped them meet new buyers including Caravela and Campos.

                        Today, Jose Alejandro receives help from his wife who helps him with the drying 
                        process. Their children also help them when they are home, as normally they 
                        are studying. What makes Finca El Ocaso so special is the work and effort that 
                        Jose Alejandro and his family have invested over the years. He looks back to ten 
                        years ago and is proud that all the hard work has been worth it, he sees a huge 
                        improvement on the farm and is proud of his personal growth.
                      </p>
                    </div>
                    <div>
                      <h2>RECOMMENDED RECIPE</h2>
                      <p>
                        This washed colombian coffee is roasted for espresso. As an espresso it has a classic 
                        colombian profile of chocolate and caramel. It also makes a sweet, chocolatey milk 
                        coffee.

                        Dose: 23g Yield: 40g Brew Time: 28-32 seconds
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

export default ItemsProductRangeTwenty