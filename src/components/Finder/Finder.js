import React from "react";
import img1 from "../../images/img-visit/img1.jpg"
import img2 from "../../images/img-visit/img2.jpg"
import img3 from "../../images/img-visit/img3.jpg"
import "./Finder.css"

const Finder = () => {
    return(
        <div>
            <div className="div-main-finder">
                <div className="div-title1-finder">
                    <div>
                        <h4>
                            Campos Coffee Cafe Finder
                        </h4>
                        <h1>
                            FIND A CAMPOS
                            CAFE NEAR YOU
                        </h1>
                    </div>
                </div>
                <div className="div-main-serch">
                    <div className="div-serch">
                        <div className="div-input-serch">
                            <div>
                                <h4>Looking for a Campos cafe</h4>
                            </div>
                            <div>
                                <input type="text" placeholder="NEAR ME"/>
                            </div>
                            <div>
                                <button>FIND</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="div-main-visit">
                    <div className="div-visit">
                        <h1>VISIT A CAMPOS FLAGSHIP CAFE</h1>
                            <div>
                                <h1 className="headline1">New South Wales</h1>
                            </div>
                        <div className="title-visit1">
                            <div>
                                <img src={img1}/>
                                <h3 className="h3">Campos Coffee Newtown</h3>
                                <div className="div-title-visit1">
                                    <div className="visit1">
                                        <h4>193 Missenden RdNewtown, NSW</h4>
                                        <p>More info</p>
                                    </div>
                                    <div className="div-time1">
                                        <h3>Mon - Fri<p>7:00am - 4:00pm</p></h3>
                                        <h3>Saturday<p>8:00am - 5:00pm</p></h3>
                                        <h3>Sunday<p>8:00am - 4:00pm</p></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div>
                                <h1 className="headline2">Queensland</h1>
                            </div>
                        <div className="title-visit2">
                            <div>
                                <img src={img2}/>
                                <h3 className="h3">Campos Coffee Gasworks Plaza</h3>
                                <div className="div-title-visit2">
                                    <div className="visit2">
                                        <h4>Gasworks Plaza76 Skyring TerraceNewstead, QLD</h4>
                                        <p>More info</p>
                                    </div>
                                    <div className="div-time2">
                                        <h3>Mon - Fri<p>6:30am - 2:30pm</p></h3>
                                        <h3>Sat - Sun<p>7:00am - 2:30pm</p></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div>
                                <h1  className="headline3">Victoria</h1>
                            </div>
                        <div className="title-visit3">
                            <div>
                                <img src={img1}/>
                                <h3 className="h3">Campos Coffee South Yarra</h3>
                                <div className="div-title-visit3">
                                    <div className="visit3">
                                        <h4>572 Chapel StreetSouth Yarra, VIC</h4>
                                        <p>More info</p>
                                    </div>
                                    <div className="div-time3">
                                        <h3>Mon - Fri<p>7:00am - 3:00pm</p></h3>
                                        <h3>Sat - Sun<p>8:00am - 4:00pm</p></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Finder