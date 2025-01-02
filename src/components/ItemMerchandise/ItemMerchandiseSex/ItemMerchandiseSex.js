import React from "react";
import { DataMerchandise } from "../../../data/DataMerchandise";
import { useParams } from "react-router-dom";
import {Div , DivBackground} from "../../styled-components/Div/div"
import "./ItemMerchandiseSex.css"


const ItemMerchandiseSex = () => {
    const {id = 6} = useParams()
    const item = DataMerchandise.find(p => p.id === parseInt(id))
    return(
        <div>
            <div className="div_item_imw_sex">
                <DivBackground Background="#898f4b">
                    <div className="img-item-imw6">
                        <img src={item.img}/>
                    </div>
                    <Div height="900px" marginbot="-450px">
                        <div className="div_main_imw_factor6">
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
                            <div className="div-profile">
                                <b>
                                    PROFILE
                                </b>
                                <p>
                                    {item.explanations}
                                </p>
                            </div>
                            <div className="div-input-factor">
                                <b>Gift Card Value</b>
                                <input type="text" placeholder="Please select"/>
                            </div>
                            <div className="div-input-factor">
                                <b>Gift Card Type</b>
                                <input type="text" placeholder="Please select"/>
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
                            Looking for a gift for a coffee loving friend or a loved one? Take the hassle out of choosing by sending a Campos Gift Card. Available as either a physical gift card or a digital e-gift card.
                        </p>
                        <h2>
                            Digital e-Gift Card
                        </h2>
                        <p>
                            Ifyou need a quick gift solution, then our digital e-gift card has your back. You can email a gift card directly to your recipient!
                        </p>
                        <p>
                            All our gift cards are valid for 3 years from purchase on our online store.
                        </p>
                        <b>
                            NB – this gift card cannot be redeemed at our flagship or partner cafes.
                        </b>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemMerchandiseSex