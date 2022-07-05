import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import './Styles/global.css'

import Home from './Pages/Home';

import Nesplatform from './Pages/Product/Nesplatform';
import NesDigitalPlatform from './Pages/Product/NesDigitalPlatform';
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
        
        <Route path="/product/nes-platform" element={<NesDigitalPlatform/>}/>
        <Route path="/product/visibility" element={<Visibility/>}/>
        <Route path="/product/customs" element={<Customs/>}/>
        <Route path="/product/air-freight" element={<AirFreight/>}/>
        <Route path="/product/ocean-freight" element={<OceanFreight />}/>
        <Route path="/product/trade-finance" element={<TradeFinance/>}/>
        <Route path="/product/trade-advisory" element={<TradeAdvisory/>}/>
        <Route path="/product/duty-drawbacks" element={<Dutydrawbacks/>}/>
        <Route path="/product/product-classification" element={<ProductClassification/>}/>
        <Route path="/product/cargo-insurance" element={<CargoInsurance/>}/>
        <Route path="/product/project-air-and-ocean-charters" element={<ProjectAirAndOceanCharters/>}/>

        <Route path="/company/about-us" element={<AboutUs/>}/>
        <Route path="/company/leadership" element={<Leadership/>}/>
        <Route path="/company/engineering" element={<Engineering/>}/>
        <Route path="/company/contact-us" element={<ContactUs/>}/>
        <Route path="/company/nescare" element={<Nescare/>}/>
        <Route path="/company/reach-carbon" element={<Reachcarbon/>}/>
        <Route path="/company/services" element={<Services/>}/>
        <Route path="/company/inventory" element={<Inventory/>}/>
        <Route path="/company/excess-inventory" element={<ExcessInventory/>}/>

        <Route path="/terms" element={<Terms/>}/>
        <Route path="/terms-and-condition/ocean-tnc" element={<OceanTnC/>}/>
        <Route path="/privacy" element={<Privacy/>}/>
        
      </Routes>
    </Router>
    
  );
}

export default App;
