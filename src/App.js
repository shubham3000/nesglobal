import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import './Styles/global.css'

import Home from './Pages/Home';

import Nesplatform from './Pages/Product/Nesplatform';
import Visibility from './Pages/Product/Visibility';
import Customs from './Pages/Product/Customs';
import AirFreight from "./Pages/Product/AirFreight";
import OceanFreight from "./Pages/Product/OceanFreight";
import ProjectAirAndOceanCharters from "./Pages/Product/ProjectAirAndOceanCharters";
import TradeFinance from "./Pages/Product/TradeFinance";
import TradeAdvisory from "./Pages/Product/TradeAdvisory";
import Dutydrawbacks from "./Pages/Product/Dutydrawbacks";
import ProductClassification from "./Pages/Product/ProductClassification";
import CargoInsurance from "./Pages/Product/CargoInsurance";

import AboutUs from "./Pages/Company/AboutUs";
import Leadership from "./Pages/Company/Leadership";
import Engineering from "./Pages/Company/Engineering";
import ContactUs from "./Pages/Company/ContactUs";
import Nescare from "./Pages/Company/Nescare/Nescare";
import Reachcarbon from "./Pages/Company//Nescare/Reachcarbon";
import Services from "./Pages/Company/Nescare/Services";
import Inventory from "./Pages/Company/Nescare/Inventory";
import ExcessInventory from "./Pages/Company/Nescare/ExcessInventory";

import Terms from "./Pages/TermsAndCondition/Terms";
import OceanTnC from "./Pages/TermsAndCondition/OceanTnC";
import Privacy from "./Pages/TermsAndCondition/Privacy";

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        
        <Route path="/Product/NesPlatform" element={<Nesplatform/>}/>
        <Route path="/Product/Visibility" element={<Visibility/>}/>
        <Route path="/Product/Customs" element={<Customs/>}/>
        <Route path="/Product/AirFreight" element={<AirFreight/>}/>
        <Route path="/Product/OceanFreight" element={<OceanFreight />}/>
        <Route path="/Product/TradeFinance" element={<TradeFinance/>}/>
        <Route path="/Product/TradeAdvisory" element={<TradeAdvisory/>}/>
        <Route path="/Product/Dutydrawbacks" element={<Dutydrawbacks/>}/>
        <Route path="/Product/ProductClassification" element={<ProductClassification/>}/>
        <Route path="/Product/CargoInsurance" element={<CargoInsurance/>}/>
        <Route path="/Product/ProjectAirAndOceanCharters" element={<ProjectAirAndOceanCharters/>}/>

        <Route path="/Company/AboutUs" element={<AboutUs/>}/>
        <Route path="/Company/Leadership" element={<Leadership/>}/>
        <Route path="/Company/Engineering" element={<Engineering/>}/>
        <Route path="/Company/ContactUs" element={<ContactUs/>}/>
        <Route path="/Company/Nescare" element={<Nescare/>}/>
        <Route path="/Company/Reachcarbon" element={<Reachcarbon/>}/>
        <Route path="/Company/Services" element={<Services/>}/>
        <Route path="/Company/Inventory" element={<Inventory/>}/>
        <Route path="/Company/ExcessInventory" element={<ExcessInventory/>}/>

        <Route path="/terms" element={<Terms/>}/>
        <Route path="/TermsAndCondition/OceanTnC" element={<OceanTnC/>}/>
        <Route path="/Privacy" element={<Privacy/>}/>
        
      </Routes>
    </Router>
    
  );
}

export default App;
