import React from "react";
import Page from "./page/page";
import Finder from "./components/Finder/Finder";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import BrewMethods from "./components/BrewMethods/BrewMethods";
import NewsList from "./components/NewsList/NewsList";
import WholesaleSupplier from "./components/WholesaleSupplier/Wholesale-Supplier";
import SubscribeNow from "./components/SubscribeNow/SubscribeNow";
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
      </Routes>
      <Footer />
    </Router>
  )
}

export default App