import React from "react";
import img1 from "../../../images/img-traceability/img1.png"
import img2 from "../../../images/img-traceability/img2.png"
import img3 from "../../../images/img-traceability/img3.png"
import img4 from "../../../images/img-traceability/img4.png"
import img5 from "../../../images/img-traceability/img5.png"
import "./Traceability.css"



const Traceability = () => {
    return(
        <div>
            <div className="traceability-container">
                <div className="traceability-row">
                    <div className="traceability-item">
                        <div className="traceability-content">
                            <div className="div-img-traceability">
                                <img src={img1}/>
                            </div>
                            <div className="title-traceability">
                                <div className="line-traceability"></div>
                                <h1>Introducing Our 2023 Festive Superior Range</h1>
                                <h2>News</h2>
                                <p>
                                    Introducing Campos’ 2023 Festive Packaging! This year we have partnered with Melbourne based artist 
                                    Annie Walter to create and Aussie Summer Christmas design across 
                                    our Superior Blend range and makes the perfect gift for the coffee-lover in your life.
                                    </p>
                                <p>
                                    Our limited-edition festive packaging is more than just a beautiful 
                                    exterior; it’s a canvas that tells a story, crafted by the talented illustrator, Annie Walter. Inspired by her diverse upbringing, Annie’s artwork captures the spirit of nature, 
                                    old-world charm, and the unique character of Australia’s wildlife.
                                </p>
                            </div>
                            <div className="div-img2">
                                <img src={img2}/>
                            </div>
                            <div className="div-artist">
                                <b>
                                    Artist Bio – Annie Walter
                                </b>
                                <p>
                                    Hello! My name is Annie Walter. I’ve been an illustrator for around 10 years. 
                                    I moved to Australia as a baby but was born in Sudan to two Australian parents. 
                                    I was lucky to be brought up in a wide variety of places ranging from rural NSW to 
                                    Morocco, giving me a broad view of the world. My family was always very creative with 
                                    lots of hobbies and artistic pursuits. Being constantly surrounded by crafts, music, and 
                                    nature wherever we went was a huge inspiration to me.
                                </p>
                                <p>
                                    As an adult I found myself combining multiple 
                                    interests by working in the music industry. Creating album 
                                    art, merchandise, and posters for Australian and international 
                                    acts. My work is inspired by nature, old gig posters, old cartoons, hand 
                                    painted signs, and mid century illustrations. I enjoy the limitations that 
                                    heavily working in screen printing brought. Over time it has shaped my aesthetic. 
                                    With my work often using limited colour 
                                    palettes, bold line work, and subtle textures. Ideal for screen printing.
                                </p>
                                <p>
                                    For Campos I wanted to focus on my favourite theme; native flora and fauna. 
                                    Taking inspiration from various road trips throughout this country. The creatures 
                                    you get to see along the way. Highlighting the cheeky nature that both the Australian 
                                    fauna and the humans that inhabit this land have. I 
                                    hope coffee lovers can find a new detail in the artwork each time they look.
                                </p>
                            </div>
                            <div className="div-imgs-traceability">
                                <div className="imgs-traceability">
                                    <img src={img3}/>
                                    <img src={img4}/>
                                    <img src={img5}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Traceability