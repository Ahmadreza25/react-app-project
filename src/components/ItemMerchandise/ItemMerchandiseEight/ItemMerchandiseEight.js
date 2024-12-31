import React from "react";
import { DataMerchandise } from "../../../data/DataMerchandise";
import { useParams } from "react-router-dom";
import {Div} from "../../styled-components/Div/div"
import img1 from "../../../images/img-Merchandise-i/img-3.jpg"
import img2 from "../../../images/img-Merchandise-i/img-4.jpg"
import img3 from "../../../images/img-Merchandise-i/img-5.jpg"
import "./ItemMerchandiseEight.css"


const ItemMerchandiseEight = () => {
    const {id = 8} = useParams()
    const item = DataMerchandise.find(p => p.id === parseInt(id))
    return(
        <div>
            <div className="div_item_imw_eight">
                <div className="div-main_imw_item8">
                    <div className="img-item-imw8">
                        <img src={item.img}/>
                    </div>
                    <Div height="800px" marginbot="-350px">
                        <div className="div_main_imw_factor8">
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
                        <p>
                            Introducing the exquisite collaboration between Campos and In The Roundhouse – 
                            the Campos x In The Round House Coasters, a testament to craftsmanship and elegance. Elevate your table 
                            setting with this set of four coasters, each meticulously crafted with care and precision.
                        </p>
                        <p>
                            Measuring 10cm wide, these coasters are perfectly sized to accommodate your favorite
                            mugs, glasses, or teacups, ensuring your surfaces stay protected in style. Made from high-quality new bone china, 
                            they boast a pristine finish and a delicate feel, adding a touch of sophistication to any space.
                        </p>
                        <p>
                            Sold as a set of four, these coasters are designed to complement each other seamlessly, 
                            making them ideal for entertaining guests or enjoying quiet moments at home. Their timeless design 
                            and superior quality make them a versatile addition to any décor, from modern to traditional.
                        </p>
                        <p>
                            Whether you’re hosting a soirée or simply enjoying a cup of coffee on a lazy afternoon, the 
                            Campos x In The Round House Coasters elevate every moment. Don’t miss your chance to add a touch of refinement to 
                            your home – order your set today and experience the perfect blend of style and functionality.
                        </p>
                    </div>
                    <div>
                        <img src={img1} className="img-i-1"/>
                        <img src={img2} className="img-i-2"/>
                        <img src={img3} className="img-i-3"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemMerchandiseEight