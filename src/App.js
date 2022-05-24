import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import './Styles/global.css'

import Home from './Pages/Home';
import Nesplatform from './Pages/Product/Nesplatform';
import Visibility from './Pages/Product/Visibility';
import Customs from './Pages/Product/Customs';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        
        <Route path="/Product/NesPlatform" element={<Nesplatform/>}/>
        <Route path="/Product/Visibility" element={<Visibility/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
