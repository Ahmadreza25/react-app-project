import React from "react";
import Button from "../../Button/Button";
import icon6 from "../../../images/icon/icon-6.png"
import "./Header-btn.css"

const HeaderBtn = () => {
    return(
        <div>
            <div className="div-btn">
                <div>
                    <Button size="7px">
                        <h1>CAFE FINDER</h1>
                    </Button>
                </div>
                <div>
                    <Button size="7px">
                        <h1>OUR STORY</h1>
                        <img src={icon6} />
                    </Button>
                </div>
                <div>
                    <Button size="7px">
                        <h1>SHOP</h1>
                        <img src={icon6} />
                    </Button>
                </div>
                <div>
                    <Button size="7px">
                        <h1>SUBSCRIPTIONS</h1>
                        <img src={icon6} />
                    </Button>
                </div>
                <div>
                    <Button size="7px">
                        <h1>BREW GUIDES</h1>
                    </Button>
                </div>
                <div>
                    <Button size="7px">
                        <h1>NEWS</h1>
                    </Button>
                </div>
                <div>
                    <Button size="7px">
                        <h1>WHOLESALE</h1>
                    </Button>
                </div>
            </div>
        </div>
    )
}


export default HeaderBtn