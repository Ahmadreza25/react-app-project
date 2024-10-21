import React from "react";
import img1 from "../../images/img-togiude/img1.jpg" 
import img2 from "../../images/img-togiude/img2.jpg" 
import img3 from "../../images/img-togiude/img3.jpg" 
import img4 from "../../images/img-togiude/img4.jpg" 
import img5 from "../../images/img-togiude/img5.jpg" 
import img6 from "../../images/img-togiude/img6.jpg" 
import img7 from "../../images/img-togiude/img7.jpg" 
import img8 from "../../images/img-togiude/img8.jpg" 

import "./BrewMethods.css"

const productData = [
    {
        id: 1,
        img:img1 ,
        title:" Pour Over",
    },
    {
        id: 2,
        img:img2 ,
        title:"Stovetop",
        explanation:"",
    },
    {
        id: 3,
        img: img3,
        title:"Aeropress",
    },
    {
        id: 4,
        img: img4,
        title:"Plunger",
    },
    {
        id: 5,
        img: img5,
        title:"How to Pour Milk at Home",
    },
    {
        id: 6,
        img: img6,
        title:"How To Steam Milk at Home",
    },
    {
        id: 7,
        img: img7,
        title:"Cold Brew Coffee",
    },
    {
        id: 8,
        img: img8,
        title:"Espresso At Home",
    },
]


const BrewMethods = () => {
    return(
        <div>
            <div className="div-mainbrew-method">
                <div className="title-mainbrew-method">
                    <div className="banner-mainbrew-method">
                        <p>Featured Article</p>
                        <h1>
                            How To Brew: Pour Over
                        </h1>
                    </div>
                </div>
                <div className="main-search-bar">
                    <div className="search-bar">
                        <p className="title-search"></p>
                        <input type="text" placeholder="" className="input-search"/>
                        <button className="search-button"></button>
                    </div>
                </div>
                <div>
                    <div className="div-center">
                        <div className="div-toguides">
                            {
                                productData.map((item) => (
                                    <div className="main-brew-method">
                                        <div className="brew-method">
                                            <div className="mainimg-brew-method">
                                                <div className="divimg-brew-methods">
                                                    <img src={item.img} className="img-brew-method"/>
                                                </div>
                                            </div>
                                            <div className="line"></div>
                                            <div className="title-item">
                                                <h1>HOW TO BREW:{item.title}</h1>
                                                <p>BREW GUIDES</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default BrewMethods