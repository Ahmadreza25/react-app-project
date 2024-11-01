import React from "react";
import { Button } from "../styled-components/Button/Button";
import icon1 from "../../images/icon-footer/icon1.png"
import icon2 from "../../images/icon-footer/icon2.png"
import icon3 from "../../images/icon-footer/icon3.png"
import "./Footer.css"



const Footer = () => {
    return(
        <div>
            <div className="div-main-footer">
                <footer className="footer">
                    <div className="div-footer">
                            <h1 className="title-footer">
                                STAY IN TOUCH   
                            </h1>
                        <div className="div-btn-footer">
                            <div>
                                <p>We're Social</p>
                            </div>
                            <div className="line"></div>
                            <div className="div-buttons">
                                <Button color="#fff" bag="#898f4b" size="17px" mtop="20px">
                                    Facebook
                                </Button>
                                <Button  color="#fff" bag="#898f4b" size="17px" mtop="20px">
                                    Instagram
                                </Button>
                                <Button  color="#fff" bag="#898f4b" size="17px" mtop="20px">
                                    Youtube
                                </Button>
                                <Button  color="#fff" bag="#898f4b" size="17px" mtop="20px">
                                    Twitter
                                </Button>
                                <Button  color="#fff" bag="#898f4b" size="17px" mtop="20px">
                                    LinkedIn
                                </Button>
                                <Button  color="#fff" bag="#898f4b" size="17px" mtop="20px">
                                    Podcasts
                                </Button>
                            </div>
                        </div>
                        <div className="div-btn-footer">
                            <div>
                                <p>Useful</p>
                            </div>
                            <div className="line"></div>
                            <div  className="div-buttons">
                                <Button color="#fff" bag="#898f4b" size="17px" mtop="20px">
                                    FAQ
                                </Button>
                                <Button color="#fff" bag="#898f4b" size="17px" mtop="20px" width="200px">
                                    Delivery & Shipping Information
                                </Button>
                                <Button color="#fff" bag="#898f4b" size="17px" mtop="20px">
                                    Wholesale
                                </Button>
                                <Button color="#fff" bag="#898f4b" size="17px" mtop="20px">
                                    Careers
                                </Button>
                                <Button color="#fff" bag="#898f4b" size="17px" mtop="20px">
                                    Contact
                                </Button>
                                <Button color="#fff" bag="#898f4b" size="17px" mtop="20px">
                                    Competition Winners
                                </Button>
                            </div>
                        </div>
                        <div className="div-btn-footer">
                            <div>
                                <p>Account</p>
                            </div>
                            <div className="line"></div>
                            <div  className="div-buttons">
                                <Button color="#fff" bag="#898f4b" size="17px" mtop="20px">
                                    My Account
                                </Button>
                                <Button color="#fff" bag="#898f4b" size="17px" mtop="20px">
                                    Cart
                                </Button>
                            </div>
                        </div>
                        <div className="div-btn-footer1">
                            <h1>afterpay</h1>
                            <div className="div-icon-footer">
                                <img src={icon1}/>
                                <img src={icon2}/>
                                <img src={icon3}/>
                            </div>
                            <h3>Sign up to receive 10% off your first order.</h3>
                            <div className="div-input">
                                <p>Email*</p>
                                <input />
                                <button>SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </footer>
                <div>
                    <p className="p-footer">
                    Campos Coffee respectfully acknowledges the traditional custodians of the
                    lands throughout Australia and, specifically, where our coffee is roasted 
                    and served. We recognise the continuing connection to lands, waters and communities. 
                    We pay our respects to Aboriginal and Torres Strait Islander cultures and to Elders past, 
                    present and emerging.
                    </p>
                </div>
            </div>
        </div>
    )
}


export default Footer