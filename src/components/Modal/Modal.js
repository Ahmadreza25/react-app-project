import React  from "react";
import "./Modal.css"

const Modal = ({colse}) => {
    return(
        <div>
            <div className="main__div-modal">
                <div className="div-modal">
                    <div className="modal">
                        <div className="div_colse">
                            <button onClick={colse} className="btn_colse">
                             ×
                            </button>
                        </div>
                        <div className="modal_title">
                            <b>
                            Stay Updated
                            </b>
                            <h5>
                            Join our newsletter to find out what's bean happening in the world of Campos Coffee.
                            </h5>
                        </div>
                        <div className="div-firstname">
                            <b>
                            First Name*
                            </b>
                            <input type="text"/>
                        </div>
                        <div className="div-lastname">
                            <b>
                            Last Name*
                            </b>
                            <input type="text"/>
                        </div>
                        <div className="email">
                            <b>
                            Email*
                            </b>
                            <input type="text"/>
                        </div>
                        <div className="div_checkbox">
                            <input type="checkbox"/>
                            <b>I`m not a robat</b>
                        </div>
                        <div>
                            <button className="btn-subscride">
                                SUBSCRIBE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Modal