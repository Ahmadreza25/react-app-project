import React from "react";
import { DataRangeMapper } from "../../../data/DataRangeMapper";
import { useParams } from "react-router-dom";
import {Div} from "../../styled-components/Div/div"
import icon1 from "../../../images/subscribenow-images/icon1.png"
import icon2 from "../../../images/subscribenow-images/icon2.png"
import "./ItemRangeMapperFor.css"


const ItemRangeMapperFor = () => {
    const {id = 4} = useParams()
    const item = DataRangeMapper.find(p => p.id === parseInt(id))
    return(
        <div>
            <div className="div-item-4">
                <div className="div-main-item4">
                    <div className="img-item-for">
                        <img src={item.image}/>
                    </div>
                    <Div height="800px" marginbot="-350px">
                        <div className="div-main-factor4">
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
                <div className="title-item-for">
                    <div>
                        <p>
                            This coffee is available in 250g ground OR whole bean | 500g whole bean | 1kg whole bean. 
                            For more information, please visit our FAQs page.
                        </p>
                        <h2>ABOUT THIS DECAF COFFEE</h2>
                        <p>
                            Who said decaf can’t taste good? We love delivering a great decaf 
                            and we take this product very seriously by adopting a fully natural 
                            process. The caffeine is gently removed by using a derivative from sugar cane mixed with 
                            mountain water to deliver the very best taste in every cup.
                        </p>
                        <p>
                            Chocolatey goodness with milk.  Enjoyed black, you’ll have real coffee flavours with caramelly sweetness too.
                        </p>
                    </div>
                    <div>
                        <h2>INFORMATION</h2>
                        <div>
                            <b>Country</b>
                            <p>Colombia, Guatemala, Ethiopia</p>
                        </div>
                        <div>
                            <b>Processing</b>
                            <p>The caffeine is gently removed by using a derivative from sugar cane mixed with mountain water.</p>
                        </div>
                        <div>
                            <b>Tasting Notes</b>
                            <p>Syrupy & Bold. Sweet like Malt Chocolate. Flavours like Real Coffee</p>
                        </div>
                        <div>
                            <b>Roast</b>
                            <p>Portland Roast</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemRangeMapperFor