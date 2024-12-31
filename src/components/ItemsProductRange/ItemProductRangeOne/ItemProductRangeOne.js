import React from 'react'
import { DataProductRange } from '../../../data/DataProductRange'
import { useParams } from 'react-router-dom';
import {Div} from "../../styled-components/Div/div"
import icon1 from "../../../images/subscribenow-images/icon1.png"
import icon2 from "../../../images/subscribenow-images/icon2.png"
import img1 from "../../../images/img-items-r/img-1.jpg"
import "./ItemProductRangeOne.css"

const ItemProductRangeOne = () => {
    const {id = 1} = useParams()
    const item = DataProductRange.find(p => p.id === parseInt(id))
  return (
    <div>
          <div className="div-item-ipr-1">
                <div className="div-main-item-ipr1">
                    <div className="img-item-one-ipr">
                        <img src={item.img}/>
                    </div>
                    <Div height="900px" marginbot="-450px">
                        <div className="div-main-factor-ipr1">
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
                            <div className="div-roast">
                                <b>ROAST</b>
                                <div className="div-circle">
                                    <div className="circle1"></div>
                                    <div className="circle2"></div>
                                    <div className="circle3"></div>
                                    <div className="circle4"></div>
                                    <div className="circle5 color-circle5"></div>
                                    <div className="circle6"></div>
                                    <div className="circle7"></div>
                                </div>
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
                </div>
                <div className="title-item-won">
                    <div>
                        <p>
                        This coffee is available in 250g ground OR whole bean | 500g whole bean | 1kg whole bean. For more information, please visit our  FAQs page.
                        </p>
                        <h2>About our coffee subscription</h2>
                        <p>
                        Our Campos Coffee Subscription will deliver coffee right to your door every week, fortnight or month. Become a Coffee of the Month member and you will receive a new Single Origin specialty coffee selected from prime producing regions across the globe.
                        </p>
                        <img src={img1}/>
                    </div>
                    <div>
                        <h2>Coffee of the Month</h2>
                        <p>
                            As a Coffee of the Month member, you receive a new single origin specialty coffee selected from one of the prime producing regions of the world.
                        </p>
                        <p>
                            The coffee is roasted fresh on the due date and shipped in the afternoon. Each coffee is analysed by 
                            the Cupping Crew at our roastery. The coffee arrives with a write-up on the farm.
                        </p>
                        <p>
                            Often these are high ranked auction lots from the Cup of Excellence competitions or exclusive micro-lots from prestigious farms. Whatever you receive, we make sure what we 
                            give to the club is well researched, well tested and well worth your while!
                        </p>
                    </div>
                    <div>
                        <h2>Campos Superior Blend</h2>
                        <p>
                        Our award-winning blend used in all our espressos. We’re tasting beautiful sweet red fruit with caramels and chocolates. For us, it’s not just a blend – it is a project
                        </p>
                    </div>
                    <div>
                        <h2>Blade Runner Blend</h2>
                        <p>
                            Very bright as an espresso while also light enough to be delicious as a filter/ plunger coffee, this is a high-acid coffee much like you would find in many 
                            leading coffee bars in Norway, Sweden and Denmark.
                        </p>
                    </div>
                    <div>
                        <h2>Dark City Blend</h2>
                        <p>
                            One of our darker roasts with a kick. It blends sweet chocolate and forest fruits. Refined and handsome. 
                        </p>
                    </div>
                    <div>
                        <h2>Roma Espresso Blend</h2>
                        <p>
                            Our darkest roast, Southern Italian style. A chocolatey, full rich cup. If you want a powerful flavour then this is the one. Big cocoa flavours, perfect with milk.
                        </p>
                    </div>
                    <div>
                        <h2>Organic Espresso Blend</h2>
                        <p>
                            A crisp fruity blend of carefully selected coffee beans from Certified Organic farms. Well rounded with a sweet red fruit finish. 
                        </p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default ItemProductRangeOne