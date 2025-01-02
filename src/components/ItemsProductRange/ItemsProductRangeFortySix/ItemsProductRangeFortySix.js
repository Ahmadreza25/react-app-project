import React from 'react'
import { DataProductRange } from '../../../data/DataProductRange';
import { useParams } from 'react-router-dom';
import { Div , DivBackground } from '../../styled-components/Div/div';
import "./ItemsProductRangeFortySix.css"
const ItemsProductRangeFortySix = () => {
  const {id = 46} = useParams()
  const item = DataProductRange.find(p => p.id === parseInt(id))
  return (
    <div>
        <div className="div-item-ipr43">
                <DivBackground Background="#898f4b">
                    <div className="img-item-fortythree-ipr">
                        <img src={item.img}/>
                    </div>
                    <Div height="600px" marginbot="-250px">
                        <div className="div-main-factor-ipr43">
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
                </DivBackground>
                <div className="title-item-won">
                  <div>
                    <h2>WHAT'S INCLUDED</h2>
                    <p>
                      1 x Rhino branded digital thermomotor
                    </p>
                  </div>
                  <div>
                    <h2>DESCRIPTION</h2>
                    <p>
                      For coffee enthusiasts who demand café-quality results at home, the Rhino Digital Thermometer is your new secret weapon. Designed specifically for heating milk to the perfect temperature, it ensures you achieve that silky-smooth texture every time.

                      Key Features:

                      Custom Fit for Your Milk Pitcher: The thermometer’s stainless-steel clip is designed to securely attach to any milk pitcher, sitting snugly for effortless monitoring.
                      Audible Alarm: An alarm beeps when the desired temperature you set has been reached, so you can focus on the texture of your milk without worrying about overheating.
                      Adjustable & Easy to Use: With its quick-release action and positive lock, the thermometer’s stem can be easily adjusted to your desired height, giving you full control over your frothing process.
                      Dual Purpose: Remove the clip and the thermometer becomes a versatile tool for all your cooking needs, from checking meat temperatures to monitoring stovetop recipes.
                      Precise & Reliable: With a temperature range from -50°C to 250°C, you’ll have accurate readings whether you’re frothing milk or cooking food.
                      Specs:

                      Length: 5″ (13 cm)
                      Temperature Range: -50°C to 250°C
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

export default ItemsProductRangeFortySix