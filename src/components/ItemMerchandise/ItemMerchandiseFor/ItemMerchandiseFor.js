import React from "react";
import { DataMerchandise } from "../../../data/DataMerchandise";
import { useParams } from "react-router-dom";
import {Div , DivBackground} from "../../styled-components/Div/div"
import icon1 from "../../../images/subscribenow-images/icon1.png"
import icon2 from "../../../images/subscribenow-images/icon2.png"
import img1 from "../../../images/img-items-r/img-3.webp"
import img2 from "../../../images/img-items-r/img-4.webp"
import "./ItemMerchandiseFor.css"

const ItemMerchandiseFor = () => {
    const {id = 4} = useParams()
    const item = DataMerchandise.find(p => p.id === parseInt(id))
    return(
        <div>
            <div className="div_item__for">
                <DivBackground  Background="#0fccd2">
                    <div className="img-item-imw4">
                        <img src={item.img}/>
                    </div>
                    <Div height="900px" marginbot="-550px">
                        <div className="div_main_imw_factor4">
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
                </DivBackground>
                <div className="title-item-1">
                    <div>
                        <p>Bundle includes one 250g Airscape Canister and one 250g bag of our most popular coffee, the Superior blend.</p>
                        <div>
                            <h2>ABOUT OUR SUPERIOR BLEND</h2>
                            <p>
                                Campos Superior is our signature, quintessential coffee blend. 
                                It’s what we’ve proudly served in our cafes since day one. Combining 
                                fresh high-quality specialty coffees from our coffee producing partners 
                                in Ethiopia, Kenya and Colombia, this full-bodied coffee is carefully roasted to deliver sweet 
                                caramel, butterscotch and milk chocolate flavours to your cup.
                            </p>
                        </div>
                        <div>
                            <h2>ABOUT THE AIRSCAPE CANISTER 250G</h2>
                            <p>
                                Your coffee will never go stale again. The Campos Airscape® forces the freshness-destroying air out of the 
                                canister, extending the life of your coffee to keep what’s good today, good tomorrow too!
                                Designed of durable, restaurant-grade stainless steel, the Airscape® canister body resists staining and odour retention.
                            </p>
                            <p>
                                The BPA-free clear, top lid allows you to see how much is left in the container, and the inner Airscape® lid (also BPA-free) 
                                makes a fun “swooshing” noise as its pushed down, so you can actually hear it working.
                            </p>
                        </div>
                        <div className="div-title-img">
                            <div className="img-title1">
                                <img src={img1}/>
                            </div>
                            <div className="img-title1">
                                <img src={img2}/>
                            </div>

                        </div>
                        <p>
                        Online offer only.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemMerchandiseFor