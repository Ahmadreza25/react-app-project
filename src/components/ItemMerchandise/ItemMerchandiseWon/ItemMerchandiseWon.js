import React from "react";
import "./ItemMerchandiseWon.css"
import { DataMerchandise } from "../../../data/DataMerchandise";
import { useParams } from "react-router-dom";
import icon1 from "../../../images/subscribenow-images/icon1.png"
import icon2 from "../../../images/subscribenow-images/icon2.png"
import img1 from "../../../images/img-Merchandise-i/img-1.webp"
import img2 from "../../../images/img-Merchandise-i/img-2.webp"

const ItemMerchandiseWon = () => {
    const {id = 1} = useParams()
    const item = DataMerchandise.find(p => p.id === parseInt(id))
    return(
        <div>
            <div className="div_item_imw_won">
                <div className="div-main_imw_item1">
                    <div className="img-item-imw1">
                        <img src={item.img}/>
                    </div>
                    <div className="factor-item-imw1">
                        <div className="div_main_imw_factor1">
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
                    </div>
                </div>
                <div className="title-item-imw1">
                    <div>
                        <p>
                            This coffee is available in 250g ground OR whole bean | 500g whole bean | 1kg whole bean. For more information, please visit our FAQs page.
                        </p>
                        <h2>THREE UNIQUE FESTIVE DESIGNS TO ENJOY!</h2>
                        <p>
                            Introducing Campos’ 2024 Festive Packaging! This year we have partnered with Victorian based illustrator and designer Eirian Chapman to create 
                            an authentically chaotic and Aussie ‘Christmas Table’ scene.
                        </p>
                        <p>
                            For the first time ever, we’re releasing not just one, but THREE Festive designs across our range of Superior Blend – 250g, 500g & 1kg
                        </p>
                        <img src={img1}/>
                    </div>
                    <div>
                        <p>
                            Our limited-edition festive packaging is more than just a beautiful exterior; it’s a canvas that tells a 
                            story. We love Eirian’s use of bold colour and graphic shapes, working heavily in symbolism to create a narrative.
                        </p>
                        <p>
                            “I wanted to riff on the hectic Australian Christmas, where lunch almost turns into a food fight. Emotions are heightened, everyone’s buzzing from the coffee, and there’s 
                            just a touch of chaos,” – Eirian Chapman.
                        </p>
                        <img src={img2}/>
                        <p>
                            *Please note, the festive Superior packaging is NOT available in 1kg Ground option
                        </p>
                    </div>
                    <div>
                        <h2>ABOUT OUR SUPERIOR BLEND</h2>
                        <p>
                            Campos Superior is our signature, quintessential coffee blend. It’s what we’ve proudly served in our cafes 
                            since day one. Combining fresh high-quality specialty coffees from our coffee producing partners in Ethiopia, 
                            Kenya and Colombia, this full-bodied coffee is carefully roasted to deliver sweet caramel, butterscotch and milk 
                            chocolate flavours to your cup.
                        </p>
                        <p>
                            We pride ourselves in our Superior Blend tasting consistent and even as we continue to grow, we still spend hours everyday 
                            cupping and analysing it to ensure it tastes just right, every single time.
                        </p>
                    </div>
                    <div>
                        <h2>
                            INFORMATION
                        </h2>
                        <div>
                            <h2>Producer</h2>
                            <p>Various producers, depending on the season.</p>
                        </div>
                        <div>
                            <h2>Altitude</h2>
                            <p>1100 - 2400m</p>
                        </div>
                        <div>
                            <h2>Tasting Notes</h2>
                            <p>Caramelly & Rich Blend. Sweet like Butterscotch. Flavours like Red Fruit & Apricot.</p>
                        </div>
                        <div>
                            <h2>Varietal</h2>
                            <p>Bourbon, Caturra, Typica, Ethiopian Heirloom</p>
                        </div>
                        <div>
                            <h2>Harvest</h2>
                            <p>Seasonal Blend</p>
                        </div>
                        <div>
                            <h2>Roast</h2>
                            <p>Australian</p>
                        </div>
                    </div>
                    <div>
                        <h2>Sourcing</h2>
                        <p>
                            The quality always starts with the bean. A handpicked selection is 
                            chosen for this blend. We don’t believe sub-standard beans should 
                            ever exist, let alone be hidden in a blend. In fact, what most roasters 
                            have as a ‘special, one-off’, we use as the standard ingredient 
                            in our flagship Superior Blend and this will never change.
                        </p>
                    </div>
                    <div>
                        <h2>Consistency</h2>
                        <p>
                            We’re all about consistency. Coffee production is seasonal so we scour the globe all 
                            year round following harvest time. But as we all know, coffee can taste 
                            different from one hill to the next, let alone region to region and country to country.
                        </p>
                        <p>
                            We pride ourselves on our Superior Blend tasting consistent all year round, 
                            and spend a lot of time perfecting it. We quality control, taste and assess our 
                            Superior blend every day, 365 days a year. And often more than once a day. It’s imperative 
                            that our blend delivers on the Superior Blend flavour we’ve become known for.
                        </p>
                    </div>
                    <div>
                        <h2>Partnering</h2>
                        <p>
                            The farms we select for the Superior Blend are leaders in the Specialty Coffee world 
                            for their regions. We’ve worked very closely with these partnerships over many years 
                            and most are exclusive to Campos Coffee in Australia. It’s a line-up to be incredibly 
                            proud of and the envy of roasters around the world.
                        </p>
                        <p>
                            We have zero tolerance for child labour, inhumane working conditions 
                            or unsustainable farming practices. In return for those we partner with, 
                            and who share our beliefs on good practices, we create greater rewards. 
                            Not just in premium payments for coffee, but also by supporting social 
                            projects and providing benefits to the communities behind the farms.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemMerchandiseWon