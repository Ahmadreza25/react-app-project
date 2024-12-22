import React from "react";
import img1 from "../../../images/img-RecipeManager/img1.png"
import "./RecipeManager.css"

const RecipeManager = () => {
    return(
        <div>
            <div className="recipemanager-container">
                <div className="recipemanager-row">
                    <div className="recipemanager-item">
                        <div className="recipemanager-content">
                            <div className="div-img-recipemanager">
                                <img src={img1}/>
                            </div>
                            <div className="itile-recipemanager">
                                <div className="line-recipemanager"></div>
                                <h1>Introducing Campos Lab Series</h1>
                                <h2>News</h2>
                                <p>
                                    The Campos single origin program has, over the many years, served as a platform to offer 
                                    the worlds finest specialty coffees and to celebrate the people who make them. The coffees 
                                    we have presented have been exemplary of their origin, capturing the distinct 
                                    flavours, individual stories and trends of the time and place in which they were made.
                                </p>
                                <p>
                                    In our search for these exemplary coffees, we’ve also encountered 
                                    some that have been so radically different from the norm that they 
                                    have challenged and, at times, fundamentally changed our preconceived notions.
                                </p>
                                <p>
                                    Controversial and provocative, these coffees have often divided opinions, but in this way, they also sparked conversation, encouraged debate, and provided an opportunity to 
                                    learn more about the endless potential of coffee; and we think that is a great thing.
                                </p>
                                <p>
                                    Introducing Campos Lab Series, a curation of unique coffee releases which will showcase all things innovative, boundary bending and educational in the world of specialty coffee.
                                </p>
                                <p>
                                    The coffees in this series will reward the curious and open minded with their ability to excite, 
                                    inspire, confuse, challenge, and educate. They will offer opportunities to have new experiences, 
                                    to dive deep into all aspects of coffee and learn more, to ask questions and broaden horizons.
                                </p>
                            </div>
                            <div className="div-Peaches">
                                <h1>Lab Series ‘Peaches’</h1>
                                <p>
                                    We’re starting off with the already highly decorated Lab Series ‘Peaches‘ 
                                    which comes from the farm Santa Monica in Colombia. ‘Peaches’ has won a Best 
                                    in Class Gold Medal at the prestigious Australian International Coffee Awards 
                                    and also a Gold Medal at the long standing Golden Bean Awards just last month.
                                </p>
                                <p>
                                    We love the story behind Santa Monica, a 45 year old farm in Armenia, 
                                    Quindio run by Jairo Arcila. This experimental microlot was the result 
                                    of Jairo looking for a sustainable solution to an overabundance of fruit 
                                    in the local market during Covid lockdowns. Using these fruits in his fermentation 
                                    process, he was able to elevate the flavours from the typically milder flavoured 
                                    Castillo variety. Necessity is the mother of invention as they say and the results in this case were 
                                    really special and unique and one we are thrilled to be able to share.
                                </p>
                                <p>
                                    ‘Peaches’ is guaranteed to be an unforgettable coffee experience that will 
                                    undoubtably change your perception about the limits of flavour fidelity that 
                                    can be achieved with coffee. 
                                    This unique and limited-edition coffee won’t last long, so try it out now. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default RecipeManager