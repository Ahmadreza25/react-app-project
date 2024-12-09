import React from "react";
import { DataMerchandise } from "../../../data/DataMerchandise";
import { useParams } from "react-router-dom";
import img1 from "../../../images/img-items-r/img-3.webp"
import img2 from "../../../images/img-items-r/img-4.webp"
import "./ItemMerchandiseTre.css"


const ItemMerchandiseTre = () => {
    const {id = 3} = useParams()
    const item = DataMerchandise.find(p => p.id === parseInt(id))
    return(
        <div>
            <div className="div_item_imw_tre">
                <div className="div-main_imw_item3">
                    <div className="img-item-imw3">
                        <img src={item.img}/>
                    </div>
                    <div className="factor-item-imw3">
                        <div className="div_main_imw_factor3">
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
                                    Select Capsule pack size
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="title-item-1">
                <p>Bundle includes one 500g Airscape Canister and one 500g bag of our most popular coffee, the Superior blend.</p>
                    <div>
                        <h2>
                        ABOUT OUR SUPERIOR BLEND
                        </h2>
                        <p>
                        Campos Superior is our signature, quintessential coffee blend. It’s what we’ve proudly 
                        served in our cafes since day one. Combining fresh high-quality specialty coffees from 
                        our coffee producing partners in Ethiopia, Kenya and Colombia, this full-bodied coffee is carefully roasted to deliver 
                        sweet caramel, butterscotch and milk chocolate flavours to your cup.
                        </p>
                    </div>
                    <div>
                        <h2>ABOUT THE AIRSCAPE CANISTER 500G</h2>
                        <p>
                            Your coffee will never go stale again. The Campos Airscape® forces the freshness-destroying 
                            air out of the canister, extending the life of your coffee to keep what’s good today, good tomorrow too!
                            Designed of durable,    restaurant-grade stainless steel, the Airscape® canister body resists staining and odour retention.
                        </p>
                        <p>
                            The BPA-free clear, top lid allows you to see how much is left in the container, 
                            and the inner Airscape® lid (also BPA-free) makes a fun 
                            “swooshing” noise as its pushed down, so you can actually hear it working.
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
    )
}
export default ItemMerchandiseTre