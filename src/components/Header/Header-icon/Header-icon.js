import React,{useState} from "react";
import icon1 from "../../../images/icon/icon-1.png"
import icon2 from "../../../images/icon/icon-2.png"
import icon3 from "../../../images/icon/icon-3.png"
import icon4 from "../../../images/icon/icon-4.png"
import Modal from "../../Modal/Modal";
import { Link } from "react-router-dom";
import "./Header-icon.css"



const HeaderIcon = () => {
    const [isModal , setModale] = useState(false)
    const colseModal = () => {
        setModale(false)
    }
    return(
        <div>
            <div className="div-icon">
                <Link to="/login" className="link-icon">
                    <div className="div-1-icon">
                        <img src={icon1}/>
                    </div>
                </Link>
                <Link to="/productrange" className="link-icon">
                    <div className="div-1-icon">
                        <img src={icon2} />
                    </div>
                </Link>
                <div className="div-1-icon">
                    <img src={icon3} onClick={() => setModale((item) => !item)}/>
                </div>
                <div className="div-1-icon">
                    <img src={icon4} />
                </div>
            </div>
            {
                isModal && <Modal colse={colseModal}/>
            }
        </div>
    )
}

export default HeaderIcon