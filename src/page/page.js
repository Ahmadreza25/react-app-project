import React from "react";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Styler from "../components/Styler/Styler";
import Slider from "../components/Styler/Slider/Slider";
import Slider2 from "../components/Styler/Slider-2/Slider2";
const Page = () => {
    return(
        <div>
            <div>
                <Header />
            </div>
            <div>
                <Banner />
            </div>
            <div>
                <Styler />
            </div>
            <div>
                <Slider />
            </div>
            <div>
                <Slider2 />
            </div>
        </div>
    )
}
export default Page