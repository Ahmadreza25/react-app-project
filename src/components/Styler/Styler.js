import React  from "react";
import { Link } from "react-router-dom";
import "./Styler.css"




const Styler = () => {
    return(
        <div>
            <div className="div-main-slyder">
                <div className="div-title-slid">
                    <div>
                        <h1 className="title-1-h1">
                            SHOP OUR CONVENIENT CAPSULES
                        </h1>
                    </div>
                    <div>
                        <h5 className="title-2-h2">
                        Using decades of sourcing and roasting
                        experience, our coffee crew have recreated
                        the distinctive taste of Campos into a range
                        of convenient capsules to stand above the rest. 
                        Our aluminium coffee capsules are designed to 
                        perfectly capture the flavour profile and fresh 
                        aroma of our coffees to ensure a superior taste, 
                        every time.
                        </h5>
                        <Link to="/merchandise" className="link">
                            <h4 className="title-3">
                                SHOP NOW
                            </h4>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Styler