import Admin from './components/Admin';
import Home from './components/Home';
import Store from './components/Store';
import {
       BrowserRouter as Router,
       Routes,
       Switch,
       Route,
       Link, Navigate
     } from "react-router-dom";
import './App.css';

function App() {
  return (
       <>
       <Router>
              <Routes>
                     <Route path="/"  element={<Home/>} />
                     <Route path="/Admin" element={<Admin/>}/>
                     <Route path="/Store" element={<Store/>}/>

              </Routes>
       </Router>
       </>
  )
}

export default App;
