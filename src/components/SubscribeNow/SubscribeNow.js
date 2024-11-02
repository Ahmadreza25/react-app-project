import React from "react";
import img1 from "../../images/subscribenow-images/img-1.png"
import icon1 from "../../images/subscribenow-images/icon1.png"
import icon2 from "../../images/subscribenow-images/icon2.png"
import { DataSubscribeNow } from "../../data";
import "./SubscribeNow.css"
const SubscribeNow = () => {
    return(
        <div>
            <div className="div-subscribe__content">
                <div className="subscribe__content">
                    <div className="section__item">
                        <div className="div-section__img">
                            <img src={img1} className="section__img"/>
                        </div>
                    </div>
                    <div className="div-explanations__content">
                        <div className="explanations__content">
                            <div className="text_explanations" >
                                <h1>
                                    About our coffee subscription
                                </h1>
                                <p>
                                    Our Campos Coffee Subscription will deliver coffee right to 
                                    your door every week, fortnight or month. Become a Coffee of 
                                    the Month member and you will receive a new Single Origin specialty 
                                    coffee selected from prime producing regions across the globe.
                                </p>
                            </div>
                            <div className="text_explanations" >
                                <h1>
                                    Coffee of the Month
                                </h1>
                                <p>
                                    As a Coffee of the Month member, you receive a new single origin 
                                    specialty coffee selected from one of the prime producing regions 
                                    of the world.The coffee is roasted fresh on the due date and shipped 
                                    in the afternoon. Each coffee is analysed by the Cupping Crew at our 
                                    roastery. The coffee arrives with a write-up on the farm.Often these 
                                    are high ranked auction lots from the Cup of Excellence competitions or 
                                    exclusive micro-lots from prestigious farms. Whatever you receive, we make 
                                    sure what we give to the club is well researched, well tested and well worth your while!
                                </p>
                            </div>
                            <div className="text_explanations" >
                                <h1>
                                    Campos Superior Blend
                                </h1>
                                <p>
                                    Our award-winning blend used in all our espressos. We’re tasting beautiful 
                                    sweet red fruit with caramels and chocolates. For us, it’s not just a blend – it is a project.
                                </p>
                            </div>
                            <div className="text_explanations" >
                                <h1>
                                    Blade Runner Blend
                                </h1>
                                <p>
                                    Very bright as an espresso while also light enough to be delicious as a filter/ 
                                    plunger coffee, this is a high-acid coffee much like you would find in many leading 
                                    coffee bars in Norway, Sweden and Denmark. 
                                </p>
                            </div>
                            <div className="text_explanations" >
                                <h1>
                                    Dark City Blend
                                </h1>
                                <p>
                                    One of our darker roasts with a kick. It blends sweet chocolate and 
                                    forest fruits. Refined and handsome.
                                </p>
                            </div>
                            <div className="text_explanations" >
                                <h1>
                                    Dark City Blend
                                </h1>
                                <p>
                                    One of our darker roasts with a kick. It blends sweet chocolate and forest fruits. Refined and handsome.
                                </p>
                            </div>
                            <div className="text_explanations" >
                                <h1>
                                    Roma Espresso Blend
                                </h1>
                                <p>
                                    Our darkest roast, Southern Italian style. A chocolatey, full 
                                    rich cup. If you want a powerful flavour then this is the one. 
                                    Big cocoa flavours, perfect with milk.
                                </p>
                            </div>
                            <div className="text_explanations" >
                                <h1>
                                    Organic Espresso Blend
                                </h1>
                                <p>
                                    A crisp fruity blend of carefully selected coffee beans from 
                                    Certified Organic farms. Well rounded with a sweet red fruit finish.  
                                </p>
                            </div>
                            <div className="text_explanations" >
                                <h1>
                                    Decaf Espresso
                                </h1>
                                <p>
                                    Who said decaf can’t taste good? The caffeine is gently removed by using 
                                    a derivative from sugar cane mixed with mountain water to deliver the very best taste in every cup.
                                </p>
                            </div>
                        </div>
                        <div className="div-section__form">
                            <form className="section__form">
                                <div className="section_title">
                                    <b>
                                        Subscriptions
                                    </b>
                                    <h1>
                                        Campos Subscription
                                    </h1>
                                </div>
                                <div className="subscription-price">
                                    <b>
                                        From <span className="distance"></span>$15.50 / month for 6 months
                                    </b>
                                </div>
                                <div className="roast-selection">
                                    <b>
                                        Roast
                                    </b>
                                    <p>
                                        Espresso
                                    </p>
                                </div>
                                <div className="roast-description">
                                    <p>
                                        Our freshly roasted coffee delivered right to your door 
                                    </p>
                                </div>
                                <div className="bag-size-selection">
                                    <b>
                                        Bag Size
                                    </b>
                                    <input placeholder="Please select" />
                                </div>
                                <div className="grind-selection">
                                    <b>
                                        Grind
                                    </b>
                                    <div className="main_grind-options">
                                        <div className="grind-options">
                                            <div className="grind-option">
                                                <img src={icon1}/>
                                                <b>Whole Beans</b>
                                            </div>
                                            <div className="line1"></div>
                                            <div className="grind-option">
                                                <img src={icon2}/>
                                                <b>Ground</b>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="coffee-selection">
                                    <b>
                                        Coffee
                                    </b>
                                    <input placeholder="Please select" />
                                </div>
                                <div className="frequency-selection">
                                    <b>Frequency</b>
                                    <div className="frequency-options">
                                        <div className="frequency-option">
                                            <div className="div-checkbox"></div>
                                            <p>Weekly</p>
                                        </div>
                                        <div className="frequency-option">
                                            <div className="div-checkbox"></div>
                                            <p>Fortnightly</p>
                                        </div>
                                        <div className="frequency-option">
                                            <div className="div-checkbox"></div>
                                            <p>Monthly</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="length-selection">
                                    <b>
                                        Subscription Length
                                    </b>
                                    <input placeholder="Please select" />
                                </div>
                                <div className="quantity-selection">
                                    <div className="quantity-controls">
                                        <b>+</b>
                                        <p>1</p>
                                        <b>-</b>
                                    </div>
                                </div>
                                <div className="selection-instructions">
                                    <div>
                                        <b>
                                        Select Bag Size, Grind, Coffee & Subscription Length
                                        </b>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="subscribe-container">
                    <div className="div__subscribe-container">
                        <h1>
                            YOU MAY ALSO LIKE
                        </h1>
                        <div className="subscribe-inner">
                            {
                                DataSubscribeNow.map((item,index) => (
                                    <div className="div-subscribe__item">
                                        <div className="subscribe-item">
                                            <div className={`div__subscribe-image div__subscribe-image${index + 1}`}>
                                                <div className={`subscribe-image subscribe-image${index + 1}`}>
                                                    <img src={item.img}/>
                                                </div>
                                            </div>
                                            <div className="subscribe-details">
                                                <p>
                                                    FROM:{item.price}
                                                </p>
                                                <h1>
                                                    {item.title}
                                                </h1>
                                                <p>
                                                    {item.explanations}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))   
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SubscribeNow