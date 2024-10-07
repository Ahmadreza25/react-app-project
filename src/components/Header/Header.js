import React from "react";
import logo from "../../images/img/logo.png"
import HeaderBtn from "./Header-btn/Header-btn";
import HeaderIcon from "./Header-icon/Header-icon";
import Header2 from "../Header2/Header2";
import "./Header.css"


const Header = () => {
    return(
        <div>
            <div className="div-main-header">
                <header className="header2">
                    <Header2 />
                </header>
                <header className="header">
                    <div>
                        <img src={logo} className="logo" alt="logo"/>
                    </div>
                    <div className="div-main-btn">
                        <HeaderBtn />
                    </div>
                    <div className="div-main-icon">
                        <HeaderIcon />
                    </div>
                </header>
            </div>
        </div>
    )
}

export default Header