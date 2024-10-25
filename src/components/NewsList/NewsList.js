import React from "react";
import img1 from "../../images/img-news/img1.jpg"
import img2 from "../../images/img-news/img2.jpg"
import img3 from "../../images/img-news/img3.jpg"
import img4 from "../../images/img-news/img4.jpg"
import img5 from "../../images/img-news/img5.jpg"
import img6 from "../../images/img-news/img6.jpg"
import img7 from "../../images/img-news/img7.jpg"
import img8 from "../../images/img-news/img8.jpg"
import img9 from "../../images/img-news/img9.jpg"
import img10 from "../../images/img-news/img10.jpg"
import img11 from "../../images/img-news/img11.jpg"
import img12 from "../../images/img-news/img12.jpg"
import img13 from "../../images/img-news/img13.jpg"

import "./NewsList.css"



const productData = [
    {
        id: 1,
        img:img1,
        title:"Home Compostable Takeaway Cups",
        explanation:"News Social Good",
    },
    {
        id: 2,
        img:img2,
        title:"Cup Of Excellence® Month At Campos",
        explanation:"Coffee of the Month News",
    },
    {
        id: 3,
        img:img3,
        title:"Introducing Our 2023 Festive Superior Range",
        explanation:"NEWS",
    },
    {
        id: 4,
        img:img4,
        title:"Introducing Campos Lab Series",
        explanation:"NEWS",
    },
    {
        id: 5,
        img:img5,
        title:"Introducing our 2022 Festive Range",
        explanation:"NEWS",
    },
    {
        id: 6,
        img:img6,
        title:"2022 AICA CHAMPION AUSTRALIAN ROASTER ",
        explanation:"NEWS",
    },
    {
        id: 7,
        img:img7,
        title:"Campos Coffee Tiramisu",
        explanation:"NEWS",
    },
    {
        id: 8,
        img:img8,
        title:"Planning to entertain at home this easter? Our coffee-infused dinner menu has you covered",
        explanation:"NEWS",
    },
    {
        id: 9,
        img:img9,
        title:"The Best Coastal walks to discover this Easter",
        explanation:"NEWS",
    },
    {
        id: 10,
        img:img10,
        title:"How To Brew The Best Coffee When Camping",
        explanation:"NEWS",
    },
    {
        id: 11,
        img:img11,
        title:"7 Road Trip essentials to keep your Easter adventure running smoothly",
        explanation:"NEWS",
    },
    {
        id: 12,
        img:img12,
        title:"Random Acts of Kindness Week",
        explanation:"NEWS",
    },
    {
        id: 13,
        img:img13,
        title:"Introducing Our 2020 Christmas Bag",
        explanation:"NEWS",
    },    
]



const NewsList = () => {
    return(
        <div>
            <div className="news-container">
                <div className="div-news-banner">
                    <div className="news-banner">
                        <p>FEATURED ARTICLE</p>
                        <h1>
                        HOME COMPOSTABLE TAKEAWAY CUPS
                        </h1>
                    </div>
                </div>
                <div className="news-search">
                    <div className="filter-area">
                        <p>I'M INTERESTED IN</p>
                        <input placeholder="ALL ARTICLES"/>
                        <button>
                            FIND
                        </button>
                    </div>
                </div>
                <div className="main-content">
                    <div className="div-main-content">
                        {
                            productData.map((item) => (
                                <div className="main-article-list">
                                    <div className="article-list">
                                        <div className="div-content-image">
                                            <div className="news-thumbnail">
                                                <img src={item.img} className="news-thumbnail-img"/>
                                            </div>
                                        </div>
                                            <div className="div-title-news">
                                            <h1>
                                                {item.title}
                                            </h1>
                                            <p>
                                                {item.explanation}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="div-btn-primary">
                    <button className="btn-primary">
                        LOAD MORE
                    </button>
                </div>
            </div>
        </div>
    )
}



export default NewsList