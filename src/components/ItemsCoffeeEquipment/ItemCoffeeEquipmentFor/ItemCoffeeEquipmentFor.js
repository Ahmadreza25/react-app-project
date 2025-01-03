import React from "react";
import {DataCoffeeEquipment} from "../../../data/DataCoffeeEquipment"
import { useParams } from "react-router-dom";
import {Div , DivBackground} from "../../styled-components/Div/div"
import img1 from "../../../images/img-items-r/img-3.webp"
import img2 from "../../../images/img-items-r/img-4.webp"
import "./ItemCoffeeEquipmentFor.css"


const ItemCoffeeEquipmentFor = () => {
    const {id = 4} = useParams()
    const item = DataCoffeeEquipment.find(p => p.id === parseInt(id))
    return(
        <div>
            <div className="div-item4">
                <DivBackground Background="#898f4b">
                    <div className="img_item_for">
                        <img src={item.img}/>
                    </div>
                    <Div height="900px" marginbot="-450px">
                        <div className="main_factor-itemfor">
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
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </Div>
                </DivBackground>
                <div className="title-item_for">
                    <div>
                        <p>Bundle includes one 1kg Airscape Canister and a 1kg bag of our most popular coffee, the Superior blend.</p>
                        <h2>ABOUT OUR SUPERIOR BLEND</h2>
                        <p>
                            Campos Superior is our signature, quintessential coffee blend. It’s what we’ve proudly 
                            served in our cafes since day one. Combining fresh high-quality specialty coffees from our 
                            coffee producing partners in Ethiopia, Kenya and Colombia, this full-bodied coffee is carefully 
                            roasted to deliver sweet caramel, butterscotch and milk chocolate flavours to your cup.
                        </p>
                    </div>
                    <div>
                        <h2>ABOUT THE AIRSCAPE CANISTER 1kG</h2>
                        <p>
                            With the Airscape Canister 1kg your coffee will never go stale again. The Campos 
                            Airscape® forces the freshness-destroying air out of the canister, extending the 
                            life of your coffee to keep what’s good today, good tomorrow too!
                        </p>
                        <p>
                            Designed of durable, restaurant-grade galvanised steel, the Airscape® canister body resists staining and odour retention.
                        </p>
                        <p>
                            The BPA-free clear, top lid allows you to see how much is left in the container, and the inner Airscape® lid (also BPA-free) makes a fun 
                            “swooshing” noise as its pushed down, so you can actually hear it working.
                        </p>
                        <p>
                        The Airscape Canister is perfect for all Campos coffees! Airscape Canisters are perfect for the budding home barista through to the professional barista.
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
                    <div>
                        <p>Online offer only.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemCoffeeEquipmentFor