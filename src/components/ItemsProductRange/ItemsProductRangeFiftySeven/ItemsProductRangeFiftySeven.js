import React from 'react'
import { DataProductRange } from '../../../data/DataProductRange';
import { useParams } from 'react-router-dom';
import "./ItemsProductRangeFiftySeven.css"

const ItemsProductRangeFiftySeven = () => {
  const {id = 75} = useParams()
  const item = DataProductRange.find(p => p.id === parseInt(id))
  return (
    <div>
        <div className="div-item-ipr54">
                <div className="div-main-item-ipr54">
                    <div className="img-item-fiftyfour-ipr">
                        <img src={item.img}/>
                    </div>
                    <div className="factor-item-ipr54">
                        <div className="div-main-factor-ipr54">
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
                      Vibrant and expressive, this mixed heirloom lot from the renowned Dimtu farm displays all the floral and citrus driven characteristics we know and love from Ethiopian coffee along with it's own a distinctly unique profile.

                      Dimtu refers to a collective of 136 smallholders in the Odo Shakiso district of the Guji zone. Driven by quality, traceability, and sustainability, they operate under the careful guidance of their founder Getachew Zeleke.

                      The smallholders receive premiums on top of the regular cherry price, interest-free loans, improved coffee seedlings, processing equipment, and training – in productivity, quality, and sustainability.

                      Dimtu Tero is stretched over 151 hectares of land where the natural environment is favourable to produce some of the best coffees of Ethiopia. Coffee production and processing are done in an organic, socially responsible and environmentally friendly manner. This practice has been verified by BCS OKO as well as NOP, EU and JAS Organic.
                    </p>
                  </div>
                  <div>
                      <h2>RECOMMENDED RECIPE</h2>
                      <p>
                        This delicate yet complex coffee is roasted for filter and tastes great through all filter brewing methods. It can also be enjoyed as a long espresso with a 1:3 ratio.

                        <p>Recipe:</p>
                        
                        <p>Brew Ratio: 1:17</p>
                        
                        <p>Dose: 18g</p>
                        
                        <p>Water Vol: 300g</p>
                        
                        <p>Water Temp: 93°C</p>

                        <p>Time: ~3mins</p>
                        
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

export default ItemsProductRangeFiftySeven