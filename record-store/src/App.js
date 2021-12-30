import logo from './images/logo.png';
import aboutHero from './images/about-hero.png'
import Admin from './components/Admin';
import Home from './components/Home';
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
              </Routes>
       </Router>
       </>
  )
}

export default App;
