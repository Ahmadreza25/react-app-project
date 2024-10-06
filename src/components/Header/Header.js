import React from "react";
import logo from "../../images/img/logo.png"
import "./Header.css"


const Header = () => {
    return(
        <div>
            <div className="div-main-header">
                <header className="header">
                    <div>
                        <img src={logo} className="logo" alt="logo"/>
                    </div>
                    <div className="">

                    </div>
                    <div className="">

                    </div>
                </header>
            </div>
        </div>
    )
}

export default Header