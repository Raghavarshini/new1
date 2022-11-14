import { Link } from "react-router-dom"
import './NavBar.css';
import user from "./../user.png"
function NavBar() {
    return(
        <div className="Navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/blind_manage">Blind System</Link></li>
                <li><Link to="/light_manage">Light System</Link></li>
                <li><Link to="/temp_manage">Thermal System</Link></li>
                <li><Link to="/occupancy_manage">Occupancy</Link></li>
                {/* <li><Link to="/logout" className="li-right">User  <img src={user}></img></Link></li> */}
            </ul>
        </div>
    )
}
export default NavBar;