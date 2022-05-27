import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import './Styles/global.css'

import Home from './Pages/Home';
import Nesplatform from './Pages/Product/Nesplatform';
import Visibility from './Pages/Product/Visibility';
import Customs from './Pages/Product/Customs';
import AirFreight from "./Pages/Product/AirFreight";
import OceanFreight from "./Pages/Product/OceanFreight";
import TradeFinance from "./Pages/Product/TradeFinance";

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
      </Routes>
    </Router>
    
  );
}

export default App;
