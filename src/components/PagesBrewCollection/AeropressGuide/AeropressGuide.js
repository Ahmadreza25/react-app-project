import React from "react";
import "./AeropressGuide.css"
import img1 from "../../../images/img-AeropressGuide/img 1.png"


const AeropressGuide = () => {
    return(
        <div>
            <div className="aeropress-guide">
                <div className="guide-header">
                    <div className="guide-intro">
                        <div className="guide-content">
                            <div className="div_img-guide"> 
                                <img src={img1}/>
                            </div>
                            <div className="div-title__guide">
                                <div className="line-guide"></div>
                                <h1>
                                    How To Brew: Aeropress
                                </h1>
                                <h2>
                                    Brew Guides
                                </h2>
                                <p>
                                    The Aeropress is a portable single serve coffee brewer that is great for camping or just mucking about at home. It produces a quick, 
                                    flavourful and easy drinking black coffee with lots of body. Very cool.
                                </p>
                            </div>
                            <div className="list-guide">
                                <h1>Method</h1>
                                <ol>
                                    <li><span>Place plunger inside the brew chamber, to the number 4 and place upside down with the opening facing upwards.</span></li>
                                    <li><span>Place a filter paper into the cap and rinse with hot water from the kettle</span></li>
                                    <li><span>Add 4 heaped teaspoons (16g) of coffee ground into the brew chamber.</span></li>
                                    <li><span>Using 96ºC water fill the Aeropress up half- way and stir immediately</span></li>
                                    <li><span>Resume pouring until approximately 1cm from the top (220mL total).</span></li>
                                    <li><span>Screw in the filter cap and leave to brew for 2 minutes.</span></li>
                                    <li><span>Firmly grasping both parts of the Aeropress, flip it over onto your favourite mug.</span></li>
                                    <li><span>Press the plunger downwards with consistent force. The coffee will pour slowly through the filter</span></li>
                                    <li><span>When the press has finished, you will hear air hiss through your filter. The coffee is complete.</span></li>
                                </ol>
                            </div>
                            <div className="pro-tips">
                                <h1>Pro Tips</h1>
                                <ul>
                                    <li>
                                        To safely rinse the filter paper before use, place filter cap on your mug, add the filter paper and rinse the hot water through to your mug. 
                                        This preheats your mug while also rinsing the papery taste from the filter paper.
                                    </li>
                                    <li>
                                    To produce more cups, use twice the ground coffee and dilute with hot water after brewing.
                                    </li>
                                    <li>
                                    After brewing, remove filter cap and simply pop out the finished coffee by pushing quickly on the plunger then rinse with hot water.
                                    </li>
                                    <li>
                                    Have fun! Check out the World Aeropress Championships (Yes, it’s a thing) at https://aero.press for some inspiration.
                                    </li>
                                </ul>
                                <p>Want to improve your coffee experience at home? Read these helpful hints.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AeropressGuide