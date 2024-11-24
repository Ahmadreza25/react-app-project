import React from "react";
import img1 from "../../../images/img-PlungerTips/img-1.png"
import "./PlungerTips.css"


const PlungerTips = () => {
    return(
        <div>
            <div className="plunger-tips">
                <div className="plunger-tips-section">
                    <div className="plunger-tips-inner">
                        <div className="plunger-tips-item">
                            <div className="plunger-tips-detail">
                                <div className="div-plunger-img">
                                    <img src={img1}/>
                                </div>
                                <div className="title-plunger">
                                    <div className="line-plunger"></div>
                                    <h1>
                                        How To Brew: Plunger
                                    </h1>
                                    <h2>
                                        Brew Guides
                                    </h2>
                                    <p>
                                        The plunger, or ‘French Press’, delivers an enjoyable, easy drinking black coffee. 
                                        The complexity of the coffee gives the cup a bold but smooth drinking experience.
                                    </p>
                                </div>
                                <div className="div__list">
                                    <div>
                                        <h1>Method for 8 cup (the large) plunger</h1>
                                    </div>
                                    <div className="numbered-list">
                                        <ol>
                                            <li><span>Add 56g (6 tbsp) of coffee ground for plunger (see reference page for grind sizes).</span></li>
                                            <li><span>Pour in 800mL of 96ºC water to fill the Plunger up to ~5cm from the top. </span></li>
                                            <li><span>Let the coffee brew for 4-6 minutes then stir the top ‘crust’ layer allowing all coffee to fall to the bottom.</span></li>
                                            <li><span>Insert the plunger and gently push down.</span></li>
                                            <li><span>Pour and share with friends (or drink it all yourself).</span></li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="div-table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>
                                                    
                                                </th>
                                                <th>
                                                3 cup
                                                </th>
                                                <th>
                                                4 cup
                                                </th>
                                                <th>
                                                8 cup
                                                </th>
                                                <th>
                                                12 cup
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Coffee</td>
                                                <td>20g</td>
                                                <td>27g</td>
                                                <td>56g</td>
                                                <td>88g</td>
                                            </tr>
                                        </tbody>
                                        <tbody>
                                            <tr>
                                                <td></td>
                                                <td>5 heaped teaspoons</td>
                                                <td>3 heaped teaspoons</td>
                                                <td>6 heaped teaspoons	5 heaped teaspoons</td>
                                                <td>9.5 heaped teaspoons</td>
                                            </tr>
                                        </tbody>
                                        <tbody>
                                            <tr>
                                                <td>Water</td>
                                                <td>300mL</td>
                                                <td>800mL</td>
                                                <td>800mL</td>
                                                <td>1300mL</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="div__protips">
                                    <h1>Pro Tips</h1>
                                    <ul>
                                        <li>Grind coffee immediately before use. Freshly ground coffee is so important here.</li>
                                        <li>Heat your plunger with hot water before use.</li>
                                        <li>Avoid sediment in your cup by not plunging all the way to the bottom. Push ¾ of the way down.</li>
                                        <li>Pouring slowly will also limit the sediment in your cup.</li>
                                        <li>
                                            You can use your plunger to make cold brew. Follow the same recipe using cold 
                                            water and leave in the fridge for 12-14 hours before plunging and decanting.</li>
                                        <li>If you are having difficulty pushing the plunger down, stop pushing and pull slightly upwards, then continue pushing down.</li>
                                    </ul>
                                    <p>
                                    Want to improve your coffee experience at home? Read these helpful hints.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PlungerTips