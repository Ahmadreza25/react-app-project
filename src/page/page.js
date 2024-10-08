import React from "react";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Styler from "../components/Styler/Styler";
const Page = () => {
    return(
        <div>
            <div className="header-main">
                <Header />
            </div>
            <div>
                <Banner />
            </div>
            <div>
                <Styler />
            </div>
        </div>
    )
}
export default Page