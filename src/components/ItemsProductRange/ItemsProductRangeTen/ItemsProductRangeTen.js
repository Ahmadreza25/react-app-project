import React from 'react'
import { DataProductRange } from '../../../data/DataProductRange'
import { useParams } from 'react-router-dom';
import { Div , DivBackground} from '../../styled-components/Div/div';
import icon1 from "../../../images/subscribenow-images/icon1.png"
import icon2 from "../../../images/subscribenow-images/icon2.png"
import "./ItemsProductRangeTen.css"

const ItemsProductRangeTen = () => {
  const {id = 10} = useParams()
  const item = DataProductRange.find(p => p.id === parseInt(id))
  return (
    <div>
          <div className="div-item-ipr-10">
                <DivBackground Background="#df0c59">
                    <div className="img-item-ten-ipr">
                        <img src={item.img}/>
                    </div>
                    <Div  height="900px" marginbot="-450px">
                        <div className="div-main-factor-ipr10">
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
                            <div className="div-input-factor">
                                <b>Capsule pack size</b>
                                <input type="text" placeholder="Please select"/>
                            </div>
                            <p className="frequency">Frequency</p>
                            <div className="div-main-Frequency">
                                <div className="div-Frequency">
                                    <div className="option">
                                        <img src={icon1}/>
                                        <b>Once off</b>
                                    </div>
                                    <div className="option-line"></div>
                                    <div className="option">
                                        <img src={icon2}/>
                                        <b>Subscription</b>
                                    </div>
                                </div>
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
                      <h2>ABOUT THIS COFFEE</h2>
                      <p>
                        Named after the main drag in Newtown, the neighbourhood where it all began for Campos, this is one seriously smooth blend.

                        Sweet like shortbread with layered flavour notes of plum and dried fruit when enjoyed black, this blend is truly something special. With milk, it is creamy and balanced with delicious, malted chocolate notes.

                        King St is a blend which includes some the of the best South and Central American Arabica specialty coffee beans, sourced by our experts and carefully roasted and blended to deliver eclectic flavour in every capsule.
                      </p>
                    </div>
                    <div>
                      <h2>OUR CAPSULES</h2>
                      <p>
                        Using decades of sourcing and roasting experience, our coffee crew have recreated the distinctive taste of Campos into a range of convenient capsules to stand above the rest. Our aluminium coffee capsules are designed to perfectly capture the flavour profile and fresh aroma of our coffees to ensure a superior taste, every time.

                        Campos Coffee Capsules are compatible with Nespresso®* original coffee machines and are fully recyclable too.
                      </p>
                    </div>
                    <div>
                      <h2>RECYCLING PROGRAM</h2>
                      <p>
                        Our Campos coffee capsules are made from aluminium which means they can be recycled. We've partnered with TerraCycle® to create a recycling program that is not only easy, but free!

                        All you need to do is collect your used coffee capsules and when you're ready, send them in.  

                        Simply follow these 3 easy steps:

                        1. Collect your used Campos aluminium coffee capsules after use. Once you've collected at least 5kg or more, put the capsules in one (and only one) plastic bag before putting them in to a box to avoid any messy spillage.  

                        2. Set up a free account and download a shipping label from TerraCycle® by clicking “Ship us your waste” and follow the prompts.  

                        3. Print out your label and sticky tape it securely onto your box. Don't forget to seal the plastic bag and the box to avoid any leaks. Drop off the box at your local post office to ship to TerraCycle®.  To find out more about our recycling program, head to our Recycling program page.
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

export default ItemsProductRangeTen

