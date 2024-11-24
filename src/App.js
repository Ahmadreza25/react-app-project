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
      <Footer />
    </Router>
  )
}

export default App