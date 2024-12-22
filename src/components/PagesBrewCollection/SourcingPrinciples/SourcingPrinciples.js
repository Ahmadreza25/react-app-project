import React from "react";
import img1 from "../../../images/img-SourcingPrinciples/img1.jpg"
import "./SourcingPrinciples.css"





const SourcingPrinciples = () => {
    return(
        <div>
            <div className="sourcing-principles">
                <div className="principles-row">
                    <div className="principle-item">
                        <div className="principle-content">
                            <div className="div-img__principle">
                                <img src={img1}/>
                            </div>
                            <div className="title-principle">
                                <div className="line-principle"></div>
                                <h1>Campos Coffee Sourcing Principles</h1>
                                <h2>Coffee Sourcing Principles</h2>
                                <p>
                                    Sourcing coffee is at the heart of what we do, no short-cuts or trade-offs. We aim to buy 100% of our 
                                    coffee directly from origin, from seed to cup.
                                </p>
                                <p>
                                    For over a decade, we’ve built relationships with farmers. We hike their hills 
                                    and share meals with their families. Direct purchasing enhances quality and improves the livelihoods 
                                    of farmers and producers, reflecting our timeless Campos philosophy.
                                </p>
                                <p>
                                    Our purchasing philosophy is driven by 5 core principles – Sustainability, Quality, Long-term relationships, Traceability and Transparency.
                                    We believe coffee only tastes good when each of these principles are embraced.
                                </p>
                            </div>
                            <div className="div-sustaunability">
                                <h2>SUSTAINABILITY</h2>
                                <b>Supporting coffee producers to help build a sustainable future.</b>
                                <p>
                                    We believe that our role as coffee buyers is to help more producers move up the quality spectrum which in turn increases the price they are paid for their coffee.
                                    By paying a fair price for quality coffees, and by committing preferencing to contracts that extend beyond the current harvest season, we believe farmers can reach a level of economic sustainability 
                                    that not only provides them with a sufficient income but allows them to invest in methods that will improve their quality in the future, and for future generations.
                                    We are also mindful of our effect on the environment and seek to lessen our impact, specifically by focusing on pollution prevention, waste minimisation and environmental impact management.
                                </p>
                            </div>
                            <div className="div-quality">
                                <h2>QUALITY</h2>
                                <b>Rewarding farmers who produce high-quality coffee.</b>
                                <p>
                                    We believe that a focus on quality helps to create a sustainable future for coffee farmers because it incentivises them to achieve a higher price for the coffee they produce.
                                    The prices we pay are set according to the quality of the coffee we buy, and we frequently pay premiums for high-quality coffee lots. High quality produce leads to fair prices and fair 
                                    prices should lead to profitable businesses for farmers and future generations of coffee farmers to come.
                                    Our commitment to quality spans the entire journey of coffee from bean to cup . We aim to support and help farmers learn innovative and effective methods to produce high quality coffee.
                                    We carefully inspect green bean deliveries, store them in optimal climate conditions, freshly roast daily and cup every batch of coffee we roast to ensure our high-quality standards are 
                                    met along every step of the way. These quality controls help ensure the hard work and effort of farmers is honoured and respected, it also ensures you get to enjoy a perfect cup of coffee every time.
                                </p>
                            </div>
                            <div className="div-Nurturing">
                                <h2>LONG TERM RELATIONSHIPS</h2>
                                <b>Nurturing partnerships to deliver positive long-term community impact.</b>
                                <p>
                                    We’re proud of the long-lasting partnerships we have with some of the best coffee producers in the coffee. Over 60% of our coffee is purchased through relationships that we have had for over 7 years, 
                                    and we continue to search for new partners in new origins that we can build long-lasting relationships with.
                                    Our team spends time on the ground at origin, in some of the most remote places in the world.
                                    We will look at the latest harvest, then we roast, taste, and work with our partners to find new ways that we trust delivers a better crop than the one before.
                                    For us, this is the ultimate win-win. With better crops, our producers can receive higher prices, which could result in greater investment in their communities.
                                    We know that impact doesn’t come from paying a good price once. It comes from long-term commitment, consistency, and volume growth over time.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SourcingPrinciples