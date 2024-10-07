import React from "react";
import icon1 from "../../../images/icon/icon-1.png"
import icon2 from "../../../images/icon/icon-2.png"
import icon3 from "../../../images/icon/icon-3.png"
import icon4 from "../../../images/icon/icon-4.png"
import "./Header-icon.css"

const HeaderIcon = () => {
    return(
        <div>
            <div className="div-icon">
                <div className="div-1-icon">
                    <img src={icon1} />
                </div>
                <div className="div-1-icon">
                    <img src={icon2} />
                </div>
                <div className="div-1-icon">
                    <img src={icon3} />
                </div>
                <div className="div-1-icon">
                    <img src={icon4} />
                </div>
            </div>
        </div>
    )
}

export default HeaderIcon