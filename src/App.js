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
      <Footer />
    </Router>
  )
}

export default App