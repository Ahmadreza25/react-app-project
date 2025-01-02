import React from "react";
import { DataRangeMapper } from "../../../data/DataRangeMapper";
import { useParams } from "react-router-dom";
import { Div , DivBackground} from "../../styled-components/Div/div"
import icon1 from "../../../images/subscribenow-images/icon1.png"
import icon2 from "../../../images/subscribenow-images/icon2.png"
import "./ItemRangeMapperTre.css"


const ItemRangeMapperTre = () => {
    const {id = 3} = useParams()
    const item = DataRangeMapper.find(p => p.id === parseInt(id))
    return(
        <div>
            <div className="div-item-3">
                <DivBackground Background="rgb(146, 113, 86)">
                    <div className="img-item-tre">
                        <img src={item.image}/>
                    </div>
                    <Div height="800px" marginbot="-350px">
                        <div className="div-main-factor3">
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
                                    {item.explanation}
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
                <div className="title-item-tre">
                    <div>
                        <p>
                            This coffee is available in 250g ground OR whole bean | 500g whole bean | 
                            1kg whole bean. For more information, please visit our FAQs page.
                        </p>
                        <h2>ABOUT THIS ESPRESSO COFFEE</h2>
                        <p>
                            One of our darker roasts with kick. It blends sweet chocolate and forest fruits. Refined and handsome.
                        </p>
                        <p>
                            Another rich blend, but more on the cocoa side of the flavour wheel and roasted a touch darker than our 
                            usual Australian style roast. Bold but smooth; strong but not bitter.
                        </p>
                    </div>
                    <div>
                        <h2>Information</h2>
                        <div>
                            <b>Farm</b>
                            <p>More body oriented farms from Indian, Colombian, Kenya</p>
                        </div>
                        <div>
                            <b>Roast</b>
                            <p>Northern Italian Roast</p>
                        </div>
                        <div>
                            <b>Cupping Notes</b>
                            <p>Balanced & Hearty. Sweet like Belgian Chocolate. Flavours like Forest Fruits.</p>
                        </div>
                    </div>
                    <div>
                        <h2>Our aim for this Espresso Blend</h2>
                        <p>Our aim for this blend is to deliver a rich body with prominent chocolate flavours in the cup.  Sweet, yes, but with a solid trunk which carries through in the cup.</p>
                        <p>This blend has been a big favourite among the long term regulars with their home espresso machines and always delivers good complexity of nuts, earthy notes and a touch of fruits.</p>
                        <p>This coffee is taken slightly darker than our typical espresso roast and exemplifies a dark Northern Italian roast style which is easy to appreciate in milky beverages.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemRangeMapperTre