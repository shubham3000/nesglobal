import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import './Styles/global.css'

import Home from './Pages/Home';
import Nesplatform from './Pages/Product/Nesplatform';
import Visibility from './Pages/Product/Visibility';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product" element={<Visibility/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
