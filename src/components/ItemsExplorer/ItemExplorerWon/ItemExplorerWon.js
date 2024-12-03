import React from "react";
import { productData } from "../../Styler/ProductExplorer/ProductExplorer";
import { useParams } from "react-router-dom";
import icon1 from "../../../images/subscribenow-images/icon1.png"
import icon2 from "../../../images/subscribenow-images/icon2.png"
import img1 from "../../../images/img-won/img1.webp"
import img2 from "../../../images/img-won/img2.jpg"
import "./ItemExplorerWon.css"


const ItemExplorerWon = () => {
    const {id = 1} = useParams()
    const item = productData.find(p => p.id === parseInt(id))
    return(
        <div>
            <div className="div_item__won">
                <div className="div-main__item1">
                    <div className="img-item-1">
                        <img src={item.image}/>
                    </div>
                    <div className="factor-item1">
                        <div className="div_main__factor1">
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
                    </div>
                </div>
                <div className="title-item-1">
                    <div>
                        <h2>ABOUT CAMPOS CAPSULES </h2>
                        <p>
                            Using decades of sourcing and roasting experience, our coffee crew have recreated the 
                            distinctive taste of Campos into a range of convenient capsules to stand above the rest. 
                            Our aluminium coffee capsules are designed to perfectly capture 
                            the flavour profile and fresh aroma of our coffees to ensure a superior taste, every time. 
                        </p>
                        <p>
                            Campos Coffee Capsules are compatible with Nespresso®* original coffee machines and are fully 
                            recyclable too.  Each pack contains 10 aluminium capsules.
                        </p>
                    </div>
                    <div>
                        <img src={img1} className="img-table"/>
                    </div>
                    <div>
                        <h2>
                            ABOUT OUR SUPERIOR BLEND CAPSULES
                        </h2>
                        <p>
                            If you have ordered a cup of Campos coffee in our famous green cup, then you’ve tasted our Campos Superior blend. Campos Superior is our signature, quintessential specialty coffee café blend. 
                        </p>
                        <p>
                            It’s what we’ve proudly served in our cafes since day one in Newtown, 2002.  
                        </p>
                        <p>
                            Campos Superior Blend coffee capsule is a full-bodied coffee that has 
                            been expertly roasted to deliver the distinct caramel notes and rich 
                            flavour of Campos Superior in every capsules. Famously excellent with milk 
                            and when served black, flavours of red fruit and apricot shine through. 
                        </p>
                    </div>
                    <div>
                        <img src={img2}/>
                    </div>
                    <div>
                        <h2>
                        ABOUT OUR RECYCLING PROGRAM 
                        </h2>
                        <p>
                            Our Campos coffee capsules are made from aluminium which means they can be recycled. We’ve partnered with TerraCycle® to create a 
                            recycling program that is not only easy, but free! 
                        </p>
                        <p>
                            All you need to do is collect your used coffee capsules and when you’re ready, send them in.  
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemExplorerWon