import React from "react";
import { DataMerchandise } from "../../../data/DataMerchandise";
import { useParams } from "react-router-dom";
import {Div , DivBackground} from "../../styled-components/Div/div"
import "./ItemMerchandiseFive.css"

const ItemMerchandiseFive = () => {
    const {id = 5} = useParams()
    const item = DataMerchandise.find(p => p.id === parseInt(id))
    return(
        <div>
            <div className="div_item_imw_five">
                <DivBackground Background="#c62a0e">
                    <div className="img-item-imw5">
                        <img src={item.img}/>
                    </div>
                    <Div height="650px" marginbot="-200px">
                        <div className="div_main_imw_factor5">
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
                            <p className="frequency">Frequency</p>
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
                <div className="title-item-imw1">
                    <div>
                        <p>
                            This coffee is available in 250g whole beans only. For more information, please visit our  FAQs page.
                        </p>
                        <p>
                            It’s the most wonderfully delicious time of year and the Campos Christmas blend is here to spread the festive cheer.
                        </p>
                        <p>
                            Within this blend, you’ll find a few presents from some of our favourite origins. 
                            We’ve blended an Anaerobic Lactic Natural from Indonesia and a Washed Kenyan to 
                            deliver a stocking full of fruity flavours and even a hint brandy-like booziness, 
                            just like a decadent Christmas pudding. A smattering of a Natural from Brazil gives a 
                            warming layer of roasted chestnuts which is 
                            complimented with just a hint of a Cinnamon infused Colombian coffee to bring the festive spice.
                        </p>
                        <p>
                            To give you all the energy you need to get through a day of games, presents, eating and celebrating with your nearest 
                            and dearest, there’s no better way to start your holidays and Christmas morning than this.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemMerchandiseFive