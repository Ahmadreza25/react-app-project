import React from "react";
import logo from "../.././images/img/logo.png"
import icon2 from "../../images/icon/icon-2.png"
import icon5 from "../../images/icon/icon-5.png"
import "./Header2.css"

const Header2 = () => {
    return(
        <div>
            <div className="div-header-2">
                <div>
                    <img src={icon5} className="icon-header-2"/>
                </div>
                <div>
                    <img src={logo} className="logo2"/>
                </div>
                <div>
                    <img src={icon2} className="icon-header-2"/>
                </div>
            </div>
        </div>
    )
}
export default Header2