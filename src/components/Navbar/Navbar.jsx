import logo from "../../assets/logo.jpg";
import { FaShoppingCart } from "react-icons/fa";

import "./navbar.css"
function Navbar() {
    return (
        <nav className="navbar">
            <div>
                <img src={logo} className="logo" alt="logo" />
            </div>
            <ul className="navbar-links">
                <li className="navbar-item"><a href="#">Inicio</a></li>
                <li className="navbar-item"><a href="#">Tienda</a></li>
                <li className="navbar-item"><a href="#">Costos</a></li>
                <li className="navbar-item"><a href="#">Emprendedores</a></li>



            </ul>
            <div className="carrito">
                <FaShoppingCart size="30px" className="iconoCarrito"/>
                <span className="badge">0</span>
            </div>
        </nav>

    )
}
export default Navbar