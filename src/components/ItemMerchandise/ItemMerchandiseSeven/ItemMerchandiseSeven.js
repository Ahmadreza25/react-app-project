import React from "react";
import { DataMerchandise } from "../../../data/DataMerchandise";
import { useParams } from "react-router-dom";
import {Div} from "../../styled-components/Div/div"
import "./ItemMerchandiseSeven.css"


const ItemMerchandiseSeven = () => {
    const {id = 7} = useParams()
    const item = DataMerchandise.find(p => p.id === parseInt(id))
    return(
        <div>
            <div className="div_item_imw_seven">
                <div className="div-main_imw_item7">
                    <div className="img-item-imw7">
                        <img src={item.img}/>
                    </div>
                    <Div height="650px" marginbot="-200px">
                        <div className="div_main_imw_factor7">
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
                </div>
                <div className="title-item-imw1">
                    <div>
                        <h2>
                            ABOUT OUR TREE ORNAMENTS
                        </h2>
                        <p>
                            Add some fun to your tree this year with our limited edition Christmas tree ornaments 
                            which make the perfect stocking filler or Kris Kringle for any home barista.
                        </p>
                        <p>
                            This design by our flagship café in Newtown, where the Campos story began.
                        </p>
                        <p>
                            Fill your tree with the full range of Campos tree ornaments including our iconic Campos Cup and 
                            group handle which are also available. Made with soft enamel in a 2D design with a green ribbon tie.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemMerchandiseSeven