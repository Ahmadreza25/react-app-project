import React from 'react'
import { DataProductRange } from '../../../data/DataProductRange';
import { useParams } from 'react-router-dom';
import { Div } from '../../styled-components/Div/div';
import "./ItemsProductRangeFiftySix.css"



const ItemsProductRangeFiftySix = () => {
  const {id = 56} = useParams()
  const item = DataProductRange.find(p => p.id === parseInt(id))
  return (
    <div>
        <div className="div-item-ipr53">
                <div className="div-main-item-ipr53">
                    <div className="img-item-fiftythree-ipr">
                        <img src={item.img}/>
                    </div>
                    <Div height="650px" marginbot="-300px">
                        <div className="div-main-factor-ipr53">
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
                      Sip your iced coffee in style this summer. Made from durable lightweight plastic, this reusable cup features a spillproof lid and coffee straw. The ultimate companion for coffee enthusiasts who crave the refreshing embrace of iced coffee or cold brew while on the move. Crafted with precision and designed for convenience, this innovative KeepCup ensures that your favourite chilled beverages are always at your fingertips, wherever your day takes you.

                      Made to last. 100% recycled cup.

                      Thoughtful design. Drafted cup for perfect pour. Drink lid on or off. Enjoy the look and taste of your beverage. Press on spillproof lid. Coffee straw.

                      Designed for drinking pleasure on the go.

                      Care: Dishwasher safe. Microwave with lid off to 100°C / 212°F

                      Extra: Acids and oils may cloud the clear plastic, for best results, gentle handwash

                      Materials: 100% recycled co-polyester reusable cup, plastic co-polyester lid and straw, silicone gasket.

                      Recycled content: 100% recycled cup.
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

export default ItemsProductRangeFiftySix