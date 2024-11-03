import React from "react";
import img from "../../images/img-careerpath/img-1.jpg"
import "./CareerPath.css"



const CareerPath = () => {
    return(
        <div>
            <div className="career-path-container">
                <div className="career-path">
                    <div className="div-banner-section">
                        <div className="banner-section">
                            <b>
                                careers
                            </b>
                            <h1>
                            PEOPLE. COFFEE. PRIDE.
                            </h1>
                        </div>
                    </div>
                    <div className="content-section">
                        <div className="content-section__items1">
                            <div className="content-section__div">
                                <div className="line"></div>
                                <h1>
                                    CAMPOS COFFEE CAREERS
                                </h1>
                                <b>
                                    Whether you’ve come from coffee, or are only just entering the industry, 
                                    you’ll find a fulfilling career here.
                                </b>
                                <p>
                                    At Campos, you’ll seriously care about what you do. You’ll love working 
                                    and belonging with great people who understand that they’re part of something bigger.
                                </p>
                                <p>
                                    This is an exciting time for Campos and you! We’re growing, evolving and staying 
                                    connected. Join our story and write yours.
                                </p>
                                <img src={img} />
                            </div>
                        </div>
                        <div className="content-section__items2">
                            <div className="content-section__div">
                                <div className="line"></div>
                                <h1>
                                    WHY CHOOSE US?
                                </h1>
                                <p>
                                    Here’s why our people say they choose to work for us.
                                </p>
                                <b>
                                    1. Do quality work, with people who care
                                </b>
                                <p>
                                    If you’re passionate about specialty coffee – or if you just seriously 
                                    care about being the best you can be you’ll find like-minded souls here.
                                </p>
                                <b>
                                    2. Be you and belong  
                                </b>
                                <p>
                                    Campos is a great blend of personalities and lives. What unites us is a real 
                                    commitment to consistency, quality and authenticity.
                                </p>
                                <b>
                                    3. Have impact, beyond your role 
                                </b>
                                <p>
                                    Whatever you do at Campos, you’ll be growing something good. Our work positively affects 
                                    local and global communities… and as we grow, so does our impact.
                                </p>
                                <b>
                                    4. Grow your story with ours
                                </b>
                                <p>
                                    Our future success depends on the quality and commitment of our team. We nurture great people – 
                                    because as you grow and thrive, so will we.
                                </p>
                            </div>
                        </div>
                        <div className="content-section__items3">
                            <div className="content-section__div">
                                <div className="line"></div>
                                <h1>
                                    VALUES & CULTURE
                                </h1>
                                <p>
                                    At Campos, our values really matter. They underpin everything we stand 
                                    for, and ensure we attract the right people to help us on our mission.
                                </p>
                                <b>
                                    1. We are authentic
                                </b>
                                <p>
                                    We’re honest and we’re real – we don’t know any other way. We embrace diversity,
                                    we walk the walk andwe don’t shy away from the tough stuff.
                                </p>
                                <b>
                                    2. We lead for better
                                </b>
                                <p>
                                    We’re proud of our coffee, our company and our impact. All three are built on a 
                                    passion for quality,and a dedication to what we do.
                                </p>
                                <b>
                                    3. We care, we connect
                                </b>
                                <p>
                                    We really care – about each other and everyone we work with. Campos is 
                                    built on relationships which matter.
                                </p>
                                <b>
                                    4. We think and act in the long term
                                </b>
                                <p>
                                    We deliver for today, always with an eye on tomorrow. A stronger, better Campos is 
                                    vital for everyone.
                                </p>
                                <b>
                                    5. We love what we do… and love is complicated
                                </b>
                            </div>
                        </div>
                            <div className="line__2"></div>
                        <div className="content-section__items4">
                            <div className="content-section__div">
                                <div className="line"></div>
                                <div>
                                    <h1>
                                        Current Jobs
                                    </h1>
                                </div>
                                <div className="content-section__job">
                                    <h1>
                                        Coffee Roaster
                                    </h1>
                                    <ul>
                                        <li>Roastery</li>
                                        <li>Sydney</li>
                                        <li>Permanent / Full Time</li>
                                    </ul>
                                </div>
                                <b>
                                    29/10/2024
                                </b>
                                <p>
                                    We are looking for an attentive and focused individual to join our coffee roasting team in Banksmeadow!
                                </p>
                                <div>
                                    <p>
                                        More..
                                    </p>
                                    <h1>
                                        CONTENT CREATOR & SOCIAL MEDIA SPECIALIST
                                    </h1>
                                </div>
                                <div className="content-section__job">
                                    <ul>
                                        <li>
                                            Marketing
                                        </li>
                                        <li>
                                            Sydney
                                        </li>
                                        <li>
                                            Permanent / Full Time
                                        </li>
                                    </ul>
                                    <p>
                                        28/10/2024
                                    </p>
                                    <p>
                                        You'll be responsible for creating engaging and visually stunning content that drives measurable 
                                        growth for Campos Coffee's social media channels
                                    </p>
                                    <b>
                                    porogramir Ahmadreza__uysefvand
                                    </b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CareerPath