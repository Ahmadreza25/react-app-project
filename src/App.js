import React from "react";
import Page from "./page/page";
import Finder from "./components/Finder/Finder";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import BrewMethods from "./components/BrewMethods/BrewMethods";
import NewsList from "./components/NewsList/NewsList";
import WholesaleSupplier from "./components/WholesaleSupplier/Wholesale-Supplier";
import SubscribeNow from "./components/SubscribeNow/SubscribeNow";
import CareerPath from "./components/CareerPath/CareerPath";
import Merchandise from "./components/Merchandise/Merchandise";
import CoffeeTools from "./components/CoffeeTools/CoffeeTools";
import ProductRange from "./components/ProductRange/ProductRange";
import LoginPage from "./components/LoginPage/LoginPage";
import BrewCollection from "./components/BrewCollection/BrewCollection";

import ItemExplorerWon from "./components/ItemsExplorer/ItemExplorerWon/ItemExplorerWon";
import ItemExplorerTo from "./components/ItemsExplorer/ItemExplorerTo/ItemExplorerTo";
import ItemExplorerTre from "./components/ItemsExplorer/ItemExplorerTre/ItemExplorerTre";
import ItemExplorerFor from "./components/ItemsExplorer/ItemExplorerFor/ItemExplorerFor";
import ItemExplorerFayw from "./components/ItemsExplorer/ItemExplorerFayw/ItemExplorerFayw";

import ItemRangeMapperWon from "./components/ItemsRangeMapper/ItemRangeMapperWon/ItemRangeMapperWon";
import ItemRangeMapperTo from "./components/ItemsRangeMapper/ItemRangeMapperTo/ItemRangeMapperTo";
import ItemRangeMapperTre from "./components/ItemsRangeMapper/ItemRangeMapperTre/ItemRangeMapperTre";
import ItemRangeMapperFor from "./components/ItemsRangeMapper/ItemRangeMapperFor/ItemRangeMapperFor";

import ItemCoffeeEquipmentWon from "./components/ItemsCoffeeEquipment/ItemCoffeeEquipmentWon/ItemCoffeeEquipmentwon";
import ItemCoffeeEquipmentTo from "./components/ItemsCoffeeEquipment/ItemCoffeeEquipmentTo/ItemCoffeeEquipmentTo";
import ItemCoffeeEquipmentTre from "./components/ItemsCoffeeEquipment/ItemCoffeeEquipmentTre/ItemCoffeeEquipmentTre";
import ItemCoffeeEquipmentFor from "./components/ItemsCoffeeEquipment/ItemCoffeeEquipmentFor/ItemCoffeeEquipmentFor";
import ItemCoffeeEquipmentFayw from "./components/ItemsCoffeeEquipment/ItemCoffeeEquipmentFayw/ItemCoffeeEquipmentFayw";

import ItemMerchandiseWon from "./components/ItemMerchandise/ItemMerchandiseWon/ItemMerchandiseWon";
import ItemMerchandiseTo from "./components/ItemMerchandise/ItemMerchandiseTo/ItemMerchandiseTo";
import ItemMerchandiseTre from "./components/ItemMerchandise/ItemMerchandiseTre/ItemMerchandiseTre";
import ItemMerchandiseFor from "./components/ItemMerchandise/ItemMerchandiseFor/ItemMerchandiseFor";
import ItemMerchandiseFive from "./components/ItemMerchandise/ItemMerchandiseFive/ItemMerchandiseFive"
import ItemMerchandiseSex from "./components/ItemMerchandise/ItemMerchandiseSex/ItemMerchandiseSex"
import ItemMerchandiseSeven from "./components/ItemMerchandise/ItemMerchandiseSeven/ItemMerchandiseSeven"
import ItemMerchandiseEight from "./components/ItemMerchandise/ItemMerchandiseEight/ItemMerchandiseEight";

import ItemCoffeeToolsOne from "./components/ItemsCoffeeTools/ItemCoffeeToolsOne/ItemCoffeeToolsOne"
import ItemCoffeeToolsTwo from "./components/ItemsCoffeeTools/ItemCoffeeToolsTwo/ItemCoffeeToolsTwo";
import ItemCoffeeToolsThree from "./components/ItemsCoffeeTools/ItemCoffeeToolsThree/ItemCoffeeToolsThree";
import ItemCoffeeToolsFour from "./components/ItemsCoffeeTools/ItemCoffeeToolsFuor/ItemCoffeeToolsFuor";
import ItemCoffeeToolsFive from "./components/ItemsCoffeeTools/ItemCoffeeToolsFive/ItemCoffeeToolsFive";
import ItemCoffeeToolsSex from "./components/ItemsCoffeeTools/ItemCoffeeToolsSex/ItemCoffeeToolsSex";
import ItemCoffeeToolsSeven from "./components/ItemsCoffeeTools/ItemCoffeeToolsSeven/ItemCoffeeToolsSeven";
import ItemCoffeeToolsEight from "./components/ItemsCoffeeTools/ItemCoffeeToolsEight/ItemCoffeeToolsEight";
import ItemCoffeeToolsNine from "./components/ItemsCoffeeTools/ItemCoffeeToolsNine/ItemCoffeeToolsNine";
import ItemCoffeeToolsTen from "./components/ItemsCoffeeTools/ItemCoffeeToolsTen/ItemCoffeeToolsTen";
import ItemCoffeeToolsEleven from "./components/ItemsCoffeeTools/ItemCoffeeToolsEleven/ItemCoffeeToolsEleven";
import ItemCoffeeToolsTwelve from "./components/ItemsCoffeeTools/ItemCoffeeToolsTwelve/ItemCoffeeToolsTwelve";
import ItemCoffeeToolsThirTeen from "./components/ItemsCoffeeTools/ItemCoffeeToolsThirTeen/ItemCoffeeToolsThirTeen";
import ItemCoffeeToolsFourTeen from "./components/ItemsCoffeeTools/ItemCoffeeToolsFourTeen/ItemCoffeeToolsFourTeen";
import ItemCoffeeToolsFifTeen from "./components/ItemsCoffeeTools/ItemCoffeeToolsFifTeen/ItemCoffeeToolsFifTeen";
import ItemCoffeeToolsSexTeen from "./components/ItemsCoffeeTools/ItemCoffeeToolsSexTeen/ItemCoffeeToolsSexTeen";
import ItemCoffeeToolsSevenTeen from "./components/ItemsCoffeeTools/ItemCoffeeToolsSevenTeen/ItemCoffeeToolsSevenTeen";
import ItemCoffeeToolsEighTeen from "./components/ItemsCoffeeTools/ItemCoffeeToolsEighTeen/ItemCoffeeToolsEighTeen";
import ItemCoffeeToolsNineTeen from "./components/ItemsCoffeeTools/ItemCoffeeToolsNineTeen/ItemCoffeeToolsNineTeen";
import ItemCoffeeToolsTwenty from "./components/ItemsCoffeeTools/ItemCoffeeToolsTwenty/ItemCoffeeToolsTwenty";
import ItemCoffeeToolsTwentyOne from "./components/ItemsCoffeeTools/ItemCoffeeToolsTwentyOne/ItemCoffeeToolsTwentyOne";
import ItemCoffeeToolsTwentyTwe from "./components/ItemsCoffeeTools/ItemCoffeeToolsTwentyTwe/ItemCoffeeToolsTwentyTwe";

import ItemProductRangeOne from "./components/ItemsProductRange/ItemProductRangeOne/ItemProductRangeOne"
import ItemProductRangeTwo from "./components/ItemsProductRange/ItemProductRangeTwo/ItemProductRangeTwo";
import ItemProductRangeThree from "./components/ItemsProductRange/ItemProductRangeThree/ItemProductRangeThree";
import ItemProductRangeFour from "./components/ItemsProductRange/ItemsProductRangeFour/ItemsProductRangeFour";

import {BrowserRouter as Router , Routes , Route} from "react-router-dom"

const App = () => {
  return(
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Page />}/>
        <Route path="/finder" element={<Finder/>}/>
        <Route path="/toguide" element={<BrewMethods />}/>
        <Route path="/neweList" element={<NewsList />} />
        <Route path="/wholesale" element={<WholesaleSupplier />}/>
        <Route path="/subscridenow" element={<SubscribeNow />}/>
        <Route path="/careerpath" element={<CareerPath />} />
        <Route path="/merchandise" element={<Merchandise />}/>
        <Route path="/coffeetools" element={<CoffeeTools/>} />
        <Route path="/productrange" element={<ProductRange />}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/brewcollection" element={<BrewCollection />}/>
      </Routes>
      <Routes>
        <Route path="/product/1" element={<ItemExplorerWon />}/>
        <Route path="/product/2" element={<ItemExplorerTo />}/>
        <Route path="/product/3" element={<ItemExplorerTre />}/>
        <Route path="/product/4" element={<ItemExplorerFor />}/>
        <Route path="/product/5" element={<ItemExplorerFayw />}/>
      </Routes>
      <Routes>
        <Route path="/product2/1" element={<ItemRangeMapperWon/>}/>
        <Route path="/product2/2" element={<ItemRangeMapperTo />}/>
        <Route path="/product2/3" element={<ItemRangeMapperTre />}/>
        <Route path="/product2/4" element={<ItemRangeMapperFor />}/>
      </Routes>
      <Routes>
        <Route path="/product3/1" element={<ItemCoffeeEquipmentWon />}/>
        <Route path="/product3/2" element={<ItemCoffeeEquipmentTo />}/>
        <Route path="/product3/3" element={<ItemCoffeeEquipmentTre />}/>
        <Route path="/product3/4" element={<ItemCoffeeEquipmentFor />}/>
        <Route path="/product3/5" element={<ItemCoffeeEquipmentFayw />}/>
      </Routes>
      <Routes>
        <Route path="/product/Merchandise/1" element={<ItemMerchandiseWon />}/>
        <Route path="/product/Merchandise/2" element={<ItemMerchandiseTo />}/>
        <Route path="/product/Merchandise/3" element={<ItemMerchandiseTre />}/>
        <Route path="/product/Merchandise/4" element={<ItemMerchandiseFor />}/>
        <Route path="/product/Merchandise/5" element={<ItemMerchandiseFive />}/>
        <Route path="/product/Merchandise/6" element={<ItemMerchandiseSex />}/>
        <Route path="/product/Merchandise/7" element={<ItemMerchandiseSeven />}/>
        <Route path="/product/Merchandise/8" element={<ItemMerchandiseEight />}/>
      </Routes>
      <Routes>
        <Route path="/product/coffeetools/1" element={<ItemCoffeeToolsOne />}/>
        <Route path="/product/coffeetools/2" element={<ItemCoffeeToolsTwo />}/>
        <Route path="/product/coffeetools/3" element={<ItemCoffeeToolsThree />}/>
        <Route path="/product/coffeetools/4" element={<ItemCoffeeToolsFour />}/>
        <Route path="/product/coffeetools/5" element={<ItemCoffeeToolsFive />}/>
        <Route path="/product/coffeetools/6" element={<ItemCoffeeToolsSex />}/>
        <Route path="/product/coffeetools/7" element={<ItemCoffeeToolsSeven />}/>
        <Route path="/product/coffeetools/8" element={<ItemCoffeeToolsEight />}/>
        <Route path="/product/coffeetools/9" element={<ItemCoffeeToolsNine />}/>
        <Route path="/product/coffeetools/10" element={<ItemCoffeeToolsTen />}/>
        <Route path="/product/coffeetools/11" element={<ItemCoffeeToolsEleven />}/>
        <Route path="/product/coffeetools/12" element={<ItemCoffeeToolsTwelve />}/>
        <Route path="/product/coffeetools/13" element={<ItemCoffeeToolsThirTeen />}/>
        <Route path="/product/coffeetools/14" element={<ItemCoffeeToolsFourTeen />}/>
        <Route path="/product/coffeetools/15" element={<ItemCoffeeToolsFifTeen />}/>
        <Route path="/product/coffeetools/16" element={<ItemCoffeeToolsSexTeen />}/>
        <Route path="/product/coffeetools/17" element={<ItemCoffeeToolsSevenTeen />}/>
        <Route path="/product/coffeetools/18" element={<ItemCoffeeToolsEighTeen />}/>
        <Route path="/product/coffeetools/19" element={<ItemCoffeeToolsNineTeen />}/>
        <Route path="/product/coffeetools/20" element={<ItemCoffeeToolsTwenty />}/>
        <Route path="/product/coffeetools/21" element={<ItemCoffeeToolsTwentyOne />}/>
        <Route path="/product/coffeetools/22" element={<ItemCoffeeToolsTwentyTwe />}/>
      </Routes>
      <Routes>
        <Route path="/product/productrange/1" element={<ItemProductRangeOne />}/>
        <Route path="/product/productrange/2" element={<ItemProductRangeTwo />}/>
        <Route path="/product/productrange/3" element={<ItemProductRangeThree />}/>
        <Route path="/product/productrange/4" element={<ItemProductRangeFour />}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App