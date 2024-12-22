import React from "react";
import { productData } from "../../Styler/ProductExplorer/ProductExplorer";
import { useParams } from "react-router-dom";
import icon1 from "../../../images/subscribenow-images/icon1.png"
import icon2 from "../../../images/subscribenow-images/icon2.png"
import img1 from "../../../images/img-to/img1.webp"
import img2 from "../../../images/img-to/img2.jpg"
import "./ItemExplorerTo.css"


const ItemExplorerTo = () => {
    const {id = 2} = useParams()
    const item = productData.find(p => p.id === parseInt(id))
    return(
        <div>
            <div className="div__item_to">
                <div className="div-main__item2">
                    <div className="img-item-2">
                        <img src={item.image}/>
                    </div>
                    <div className="factor-item2">
                        <div className="div_main__factor2">
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
                    </div>
                </div>
                <div className="title-item-2">
                    <div>
                        <h2>ABOUT CAMPOS CAPSULES </h2>
                        <p>
                            Using decades of sourcing and roasting experience, our coffee crew have
                            recreated the distinctive taste of Campos into a range of convenient capsules 
                            to stand above the rest. Our aluminium coffee capsules are designed to perfectly 
                            capture the flavour profile and fresh aroma of our coffees to ensure a superior taste, every time.
                        </p>
                        <p>
                        Campos Coffee Capsules are compatible with Nespresso®* original coffee machines and are fully recyclable too.  Each pack contains 10 aluminium capsules.
                        </p>
                        <img src={img1} className="img-table"/>
                    </div>
                    <div>
                        <h2>
                        ABOUT OUR KING ST BLEND CAPSULES
                        </h2>
                        <p>
                        Named after the main drag in Newtown, the neighbourhood where it all began for Campos, this is one seriously smooth blend  
                        </p>
                        <p>
                        Sweet like shortbread with layered flavour notes of plum and dried fruit when enjoyed black, this blend is truly something special. With milk, it is creamy and balanced with delicious, malted chocolate notes. 
                        </p>
                        <p>
                        King St is a blend which includes some the of the best South and Central American Arabica specialty coffee beans, sourced by our experts and carefully roasted and blended to deliver eclectic flavour in every capsule.
                        </p>
                        <img src={img2}/>
                    </div>
                    <div>
                        <h2>ABOUT OUR RECYCLING PROGRAM </h2>
                        <p>Our Campos coffee capsules are made from aluminium which means they can be recycled. We’ve partnered with TerraCycle® to create a recycling program that is not only easy, but free! </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemExplorerTo