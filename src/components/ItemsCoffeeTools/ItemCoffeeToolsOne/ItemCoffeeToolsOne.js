import React from "react";
import {DataCoffeetools} from "../../../data/DataCoffeetools"
import { useParams } from "react-router-dom";
import {Div , DivBackground} from "../../styled-components/Div/div"
import img1 from "../../../images/img-items-r/img-3.webp"
import img2 from "../../../images/img-items-r/img-4.webp"
import "./ItemCoffeeToolsOne.css"



const ItemCoffeeToolsOne = () => {
    const {id = 1} = useParams()
    const item = DataCoffeetools.find(p => p.id === parseInt(id))
    return( 
        <div>
            <div className="div-item-ict1">
                <DivBackground Background="#898f4b">
                    <div className="img_item_ictone">
                        <img src={item.img}/>
                    </div>
                    <Div height="800px" marginbot="-350px">
                        <div className="main_factor-item-one">
                            <div className="div-capsules">
                                <h2>
                                    Gifts
                                </h2>
                                <h1>
                                    {item.title}
                                </h1>
                            </div>
                            <div className="div-from">
                                <p>{item.price}</p>
                            </div>
                            <div className="div-profile">
                                <p>
                                    {item.explanations}
                                </p>
                            </div>
                            <div className="div-btn-out">
                                <button>
                                    OUT OF STOCK
                                </button>
                            </div>
                            <div className="div-input-factor">
                                <p>Join the waitlist to be emailed when this product becomes available</p>
                                <input type="text" placeholder="Email Addres"/>
                            </div>
                            <div className="btn-factor">
                                <button>
                                    Join add accont
                                </button>
                            </div>
                        </div>
                    </Div>
                </DivBackground>
                <div className="title-item_ictone">
                    <div>
                        <h2>
                            ABOUT THE AIRSCAPE CANISTER 1kg
                        </h2>
                        <p>
                            With the Airscape Canister 1kg your coffee will never go stale again. The Campos Airscape® forces the freshness-destroying 
                            air out of the canister, extending the life of your coffee to keep what’s good today, good tomorrow too!
                        </p>
                        <p>
                            Designed of durable, restaurant-grade galvanised steel, the Airscape® canister body resists staining and odour retention.
                        </p>
                        <p>
                            The BPA-free clear, top lid allows you to see how much is left in the container, 
                            and the inner Airscape® lid (also BPA-free) 
                            makes a fun “swooshing” noise as its pushed down, so you can actually hear it working.
                        </p>
                        <p>
                            The Airscape Canister is perfect for all Campos coffees! Airscape Canisters are perfect for 
                            the budding home barista through to the professional barista.
                        </p>
                        <p>
                            Dimensions: W17cm x H20.5cm. Holds 1kg Full Coffee Beans
                        </p>
                        <p>
                            See other Airscape Canisters that are available at Campos here
                        </p>
                    </div>
                    <div className="div-title-img-ict">
                        <div className="img-title1">
                            <img src={img1}/>
                        </div>
                        <div className="img-title1">
                            <img src={img2}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCoffeeToolsOne