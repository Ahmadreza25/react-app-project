import React from "react";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import ProductExplorer from "../components/Styler/ProductExplorer/ProductExplorer";
import RangeMapper from "../components/Styler/RangeMapper/RangeMapper"
import Banner2 from "../components/Banner2/Banner2";
import Guide from "../components/Guide/Guide";
import CoffeeEquipment from "../components/Styler/CoffeeEquipment/CoffeeEquipment"
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
                <ProductExplorer />
            </div>
            <div>
                <RangeMapper />
            </div>
            <div>
                <Banner2 />
            </div>
            <div>
                <Guide />
            </div>
            <div>
                <CoffeeEquipment />
            </div>
        </div>
    )
}
export default Page