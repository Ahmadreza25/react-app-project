import React from 'react'
import { DataProductRange } from '../../../data/DataProductRange'
import { useParams } from 'react-router-dom';
import {Div , DivBackground} from "../../styled-components/Div/div"
import "./ItemsProductRangeTwentySix.css"


const ItemsProductRangeTwentySix = () => {
  const {id = 26} = useParams()
  const item = DataProductRange.find(p => p.id === parseInt(id))
  return (
    <div>
        <div className="div-item-ipr-23">
                <DivBackground Background="#d89f2c">
                    <div className="img-item-twentythree-ipr">
                        <img src={item.img}/>
                    </div>
                    <Div  height="600px" marginbot="-150px">
                        <div className="div-main-factor-ipr23">
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
                      <h2>DESCRIPTION</h2>
                      <p>
                        Designed with precision, the Plastic KeepCup is your ideal companion for the perfect pour. 
                        With the flexibility to use the lid or enjoy your drink without it, the splashproof sipper 
                        lid provides a practical, spill-resistant alternative to single-use cups, making every sip 
                        satisfying.

                        Crafted from durable, lightweight clear plastic, this KeepCup allows you to appreciate both 
                        the look and taste of your beverage. It's proudly made locally in Australia and the UK, 
                        embodying the original barista standard in a reusable cup.

                        Featuring a drafted cup design for a smooth pour, it accommodates your drink with or without 
                        the lid. The press-on lid allows you to fill your cup to the brim, making it perfect for 
                        showcasing latte art. The KeepCup makes a significant environmental impact, with just 20 uses 
                        equating to a reduction in single-use cup waste.

                        This versatile cup fits standard cup holders, is stackable for easy storage, and is safe for 
                        use in the dishwasher on the top rack. With its BPA-free and non-toxic construction, the 
                        Plastic KeepCup combines practicality with eco-consciousness, offering a simple yet effective 
                        way to enjoy your favourite beverages.
                      </p>
                    </div>
                    <div>
                      <h2>SIZE GUIDE</h2>
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

export default ItemsProductRangeTwentySix