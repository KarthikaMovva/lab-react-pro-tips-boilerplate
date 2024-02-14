import { NavLink,Route,Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import "./App.css";
function App(){
return(
    <div>
        <nav className="navigate">
          <NavLink to="/"><div className="link corner">Kalvium❤️</div></NavLink>
            <NavLink to="/Contact"><div className="corner1 link">Contact</div></NavLink>
            <NavLink to="/Form"><div className="corner2 link">Registration Form</div></NavLink>
        </nav>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Form" element={<About/>}></Route>
            <Route path="/Contact" element={<Contact/>}></Route>
        </Routes>
    </div>
)
}
export default App