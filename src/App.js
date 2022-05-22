import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import './Styles/global.css'

import Home from './Pages/Home';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/services" element={<Services/>}/>
        <Route path="/about" element={<Aboutus/>} />
        <Route path="/bloghighlights" element={<Bloghighlights/>} />
        <Route path="/career" element={<Career/>}/>
        <Route path="/ourwork" element={<Ourwork/>}/>
        <Route path="/Blog" element={<Blog/>}/> */}
      </Routes>
    </Router>
    
  );
}

export default App;
