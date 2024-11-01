import React from "react";
import img1 from "../../images/subscribenow-images/img-1.png"
import "./SubscribeNow.css"
const SubscribeNow = () => {
    return(
        <div>
            <div className="div-subscribe__content">
                <div className="subscribe__content">
                    <div className="section__item">
                        <div className="div-section__img">
                            <img src={img1} className="section__img"/>
                        </div>
                        <div className="div-section__form">
                            <form className="section__form">

                            </form>
                        </div>
                    </div>
                    <div className="div-explanations__content">

                    </div>
                </div>
            </div>
        </div>
    )
}


export default SubscribeNow