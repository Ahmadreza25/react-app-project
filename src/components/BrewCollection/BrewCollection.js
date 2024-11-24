import React , {useState} from "react";
import RecipeManager from "../PagesBrewCollection/RecipeManager/RecipeManager";
import SourcingPrinciples from "../PagesBrewCollection/SourcingPrinciples/SourcingPrinciples";
import Traceability from "../PagesBrewCollection/Traceability/Traceability";
import PlungerTips from "../PagesBrewCollection/PlungerTips/PlungerTips"
import AeropressGuide from "../PagesBrewCollection/AeropressGuide/AeropressGuide";

import "./BrewCollection.css"


const pages = [
    <PlungerTips />,
    <AeropressGuide />
    // <RecipeManager /> ,
    // <SourcingPrinciples />,
    // <Traceability />
]

const BrewCollection = () => {
    const [currentPage , setcurrentPage] = useState(0)
    const nextBtn = () => {
        if(currentPage < pages.length -1){
            setcurrentPage(currentPage + 1)
        }
    }
    const privBtn = () => {
        if(currentPage > 0){
            setcurrentPage(currentPage -1)
        }
    }
    return(
        <div>
            <div className="div_main__pages">
                <div className="main-div__btn">
                    <div className="div__next">
                        <button onClick={nextBtn} disabled={currentPage === pages.length -1} className="next">Next</button>
                    </div>
                    <div className="div__priv">
                        <button onClick={privBtn} disabled={currentPage === 0} className="priv">Priv</button>
                    </div>
                </div>
                <div>
                    {pages[currentPage]}
                </div>
            </div>
        </div>
    )
}

export default BrewCollection