import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css"


const Banner = () => {
    return(
        <div>
            <div className="main-banner">
                <div className="div-main-banner">
                    <div className="div-banner">
                        <div className="banner">
                            <h1 className="h1-banner">
                                FIND YOUR LOCAL CAMPOS CAFE
                            </h1>
                        </div>
                        <div className="div-btn-banner">
                            <Link to="/finder">
                                <button className="btn-1">
                                    CAFE FINDER
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner