import React from "react";
import { DataRangeMapper } from "../../../data/DataRangeMapper";
import { useParams } from "react-router-dom";
import {Div} from "../.././styled-components/Div/div"
import icon1 from "../../../images/subscribenow-images/icon1.png"
import icon2 from "../../../images/subscribenow-images/icon2.png"
import "./ItemRangeMapperTo.css"


const ItemRangeMapperTo = () => {
    const {id = 2} = useParams()
    const item = DataRangeMapper.find(p => p.id === parseInt(id))
    return(
        <div>
            <div className="div-item-2">
                <div className="div-main-item2">
                    <div className="img-item-to">
                        <img src={item.image}/>
                    </div>
                    <Div height="850px" marginbot="-400px">
                        <div className="div-main-factor2">
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
                </div>
                <div className="title-item-to">
                    <div>
                        <p>
                        This coffee is available in 250g ground OR whole bean | 500g whole bean | 1kg whole bean. For more information, please visit our FAQs page.
                        </p>
                        <h2>ABOUT THIS COFFEE</h2>
                        <p>
                        Blade Runner has been roasted in a unique way to be enjoyed as either a filter or espresso.
                        </p>
                        <p>
                        It has a brighter, juicier profile much like you would find in many leading coffee bars in Scandinavia.
                        </p>
                        <p>
                        Not the usual rich chocolates and caramels you would expect to find, but a delicious foray into a new style of coffee blend for us.
                        </p>
                    </div>
                    <div>
                        <h2>
                            INFORMATION
                        </h2>
                        <div>
                            <b>Country</b>
                            <p>Kenyan and Ethiopian</p>
                        </div>
                        <div>
                            <b>Roast</b>
                            <p>Scandinavian Roast</p>
                        </div>
                        <div>
                            <b>Tasting Notes</b>
                            <p>Juicy & Vibrant. Sweet like Toffee. Flavours like Tropical Fruit.</p>
                        </div>
                    </div>
                    <div>
                        <h2>Espresso and Filter</h2>
                        <p>
                            As the Specialty Coffee market develops, new doors open. Currently, we have blends 
                            which represent the origins of filter with roast profiles 
                            matching Southern Italy, Northern Italy, and Australia.
                        </p>
                        <p>
                            Over the last few years, there has been the emergence of a new style of roasting and blending which has 
                            been spurred on by new wave roasters in Scandinavia.
                        </p>
                        <p>
                            Of particular note is a handful of Norwegian roasters who have based their filter styles on a 
                            roast profile that is much lighter than what was previously the norm.
                        </p>
                        <p>
                            Higher acidity and brighter coffee profiles became commonplace in “3rd wave” speciality 
                            coffee as a result of the success of the Scandinavian trailblazers.
                            Blade Runner blend is our tribute to this exciting movement.
                        </p>
                    </div>
                    <div>
                        <h2>Our Innovation</h2>
                        <p>Our innovation team and roasters have collaborated on a 12-month project to develop this Nordic style coffee blend which offers an ultra-bright and juicy result.</p>
                        <p>The coffees used in the blend are brighter Kenyan and Ethiopian with a touch of natural processed coffee to elevate the fruity notes.</p>
                        <p>We are having a great time running it through our espresso machines and as a filter brew in our stores as well.</p>
                        <p>We know you will enjoy tasting this Scandinavian inspired coffee blend.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemRangeMapperTo