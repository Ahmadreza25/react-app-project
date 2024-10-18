import React,{useState} from "react";
import { Button } from "../../styled-components/Button/Button";
import { ListBtns1 ,ListBtns2, ListBtns3 } from "../../List-btns/ListBtns";
import icon6 from "../../../images/icon/icon-6.png"
import "./Header-btn.css"

const HeaderBtn = () => {

    const [butList , setBtnList] = useState(false)
    const [butList2 , setBtnList2] = useState(false)
    const [butList3 , setBtnList3] = useState(false)

    return(
        <div>
            <div className="div-btn">
                <div>
                    <Button size="7px" bag="#fff">
                        <h1>CAFE FINDER</h1>
                    </Button>
                </div>
                <div>
                    <Button size="7px" bag="#fff" onClick={() => setBtnList((item) => !item)}>
                        <h1>OUR STORY</h1>
                        <img src={icon6} />
                    </Button>
                </div>
                <div>
                    <Button size="7px" bag="#fff" onClick={() => setBtnList2((item) => !item)}>
                        <h1>SHOP</h1>
                        <img src={icon6} />
                    </Button>
                </div>
                <div>
                    <Button size="7px" bag="#fff" onClick={() => setBtnList3((item) => !item)}>
                        <h1>SUBSCRIPTIONS</h1>
                        <img src={icon6} />
                    </Button>
                </div>
                <div>
                    <Button size="7px" bag="#fff">
                        <h1>BREW GUIDES</h1>
                    </Button>
                </div>
                <div>
                    <Button size="7px" bag="#fff">
                        <h1>NEWS</h1>
                    </Button>
                </div>
                <div>
                    <Button size="7px" bag="#fff">
                        <h1>WHOLESALE</h1>
                    </Button>
                </div>
            </div>
            {
                butList && <ListBtns1 />
            }
            {
                butList2 && <ListBtns2 />
            }
            {
                butList3 && <ListBtns3 />
            }
        </div>
    )
}


export default HeaderBtn