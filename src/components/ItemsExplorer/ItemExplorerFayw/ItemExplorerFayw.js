import React from "react";
import { productData } from "../../Styler/ProductExplorer/ProductExplorer";
import { useParams } from "react-router-dom";
import {Div} from "../../styled-components/Div/div"
import img1 from "../../../images/img-fayw/img1.webp"
import img2 from "../../../images/img-fayw/img2.webp"
import img3 from "../../../images/img-fayw/img3.webp"
import img4 from "../../../images/img-fayw/img4.webp"
import img5 from "../../../images/img-fayw/img5.png"
import "./ItemExplorerFayw.css"


const ItemExplorerFayw = () => {
    const {id = 5} = useParams()
    const item = productData.find(p => p.id === parseInt(id))
    return(
        <div>
            <div className="div__item_fayw">
                <div className="div-main__item5">
                    <div className="img-item-5">
                        <img src={item.image}/>
                    </div>
                    <Div height="1250px" marginbot="-800px">
                        <div className="div_main__factor4">
                            <div className="div-capsules">
                                <h3>
                                Capsules
                                </h3>
                                <h1>
                                    {item.title}
                                </h1>
                            </div>
                            <div className="div-from">
                                <b>FROM</b>
                                <p>{item.price}</p>
                                <b>/ month for 12</b>
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
                                <b>Capsules</b>
                                <input type="text" placeholder="Please select"/>
                            </div>
                            <div className="div-input-factor">
                                <b>Capsule pack size</b>
                                <input type="text" placeholder="Please select"/>
                            </div>
                            <div className="div-Frequency-checkbox">
                                <b>Frequency</b>
                                <div className="Frequency">
                                    <div className="checkbox-Frequency">
                                        <input type="checkbox"/>
                                        <p>Weekly</p>
                                    </div>
                                    <div className="checkbox-Frequency">
                                        <input type="checkbox"/>
                                        <p>Fortnightly</p>
                                    </div>
                                    <div className="checkbox-Frequency">
                                        <input type="checkbox"/>
                                        <p>Monthly</p>
                                    </div>
                                </div>
                            </div>
                            <div className="div-input-factor">
                                <b>Subscription Length</b>
                                <input type="text" placeholder="Please select"/>
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
                                    Select Capsules, Capsule pack size & Subscription Length
                                </button>
                            </div>
                        </div>
                    </Div>
                </div>
                <div className="title-item-5">
                    <div>
                        <h2>ABOUT OUR COFFFEE CAPSULES SUBSCRIPTION </h2>
                        <p>
                            Never run out of coffee again! Our Campos Coffee Capsules Subscription will deliver coffee right to your door every week, fortnight or month.  
                        </p>
                        <p>
                            Our aluminium coffee capsules are designed to perfectly capture the flavour profile 
                            and fresh aroma of our coffees to ensure a superior taste, every time. 
                        </p>
                        <p>
                        Campos Coffee Capsules are compatible with Nespresso®* original coffee machines and are fully recyclable too!
                        </p>
                        <p>
                            For more information on our recycling program, head to our Recycling program page.
                        </p>
                    </div>
                    <div>
                        <img src={img1}/>
                        <h2>CAMPOS SUPERIOR BLEND </h2>
                        <p>
                            If you have ordered a cup of Campos coffee in our famous green cup, then 
                            you’ve tasted our Campos Superior blend. Campos Superior is 
                            our signature, quintessential specialty coffee cafe blend.  
                        </p>
                        <p>
                            Campos Superior Blend is a full-bodied coffee that has been expertly roasted 
                            to deliver the distinct caramel notes and rich flavour of Campos Superior in 
                            every capsules. Famously excellent with milk and when served black, flavours of
                            red fruit and apricot shine through. 
                        </p>
                    </div>
                    <div>
                        <img src={img2}/>
                        <h2>KING ST BLEND </h2>
                        <p>
                            Named after the main drag in Newtown, the neighbourhood where it all began for Campos, this is one seriously smooth blend.  
                        </p>
                        <p>
                            Sweet like shortbread with layered flavour notes of plum and dried fruit when 
                            enjoyed black, this blend is truly something special. 
                            With milk, it is creamy and balanced with delicious, malted chocolate notes. 
                        </p>
                    </div>
                    <div>
                        <img src={img3}/>
                        <h2>INDONESIA SINGLE ORIGIN </h2>
                        <p>
                            Indonesia is one of the most exciting and diverse coffee growing regions 
                            in the world, and it’s right on our doorstep. 
                        </p>
                        <p>
                            Expertly roasted to capture the unique brown spice, cocoa and earthy 
                            tones that are signatures of Indonesia. As a black coffee, sweet dragon 
                            fruits compliment a full-bodied mouthfeel. Add milk 
                            and you’ll discover roasted almonds and nutmeg flavours. 
                        </p>
                    </div>
                    <div>
                        <img src={img4}/>
                        <h2>ROMA BLEND</h2>
                        <p>
                            Campos Roma blend is our very own take on the influential Italian style of roasting and blending which has helped define Australia’s cafe culture.
                        </p>
                        <p>
                            This rich and bold blend is our darkest roast and highlights those deep, 
                            dark tones we love about coffee. Notes of syrupy molasses, dried fruits and chocolate milk are balanced together to produce a strong bold cup.
                        </p>
                        <p>
                            We’re sure you’ll enjoy the aroma and delicious flavours of this blend which embodies all the things we love about Italian style coffee.
                        </p>
                    </div>
                    <div>
                        <img src={img5}/>
                        <h2>DECAF ESPRESSO BLEND</h2>
                        <p>
                            Who said decaf coffee can’t taste good? We take this coffee very seriously because we love 
                            delivering a delicious decaf for everyone to enjoy.
                        </p>
                        <p>
                        Our decaffeinated specialty coffee blend is marked by notes of cocoa, malt and wild berries. This is an elegant espresso with the unmistakable 
                        prominence of real coffee flavours.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemExplorerFayw