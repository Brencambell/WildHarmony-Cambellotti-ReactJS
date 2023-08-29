import { Link, NavLink } from 'react-router-dom'
import logoColor from "../../assets/wild-harmony-logo-color.png"
import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className= {`${styles.customNavbar} navbar navbar-expand-lg bg-body-tertiary p-3`}>
            <div className="container-fluid">
                {/* Brand */}
                <div className="navbar-brand">
                    <Link to="/"> <img src={logoColor} alt="Wild Harmony Logo a color" style={{ width : '140px', height : 'auto'}}/> </Link>
                </div>

                {/* Links */}
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/category/maquillaje" className="nav-link">Maquillaje</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/category/cuidado facial" className="nav-link">Cuidado Facial</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/category/cuidado corporal" className="nav-link">Cuidado Corporal</NavLink>
                    </li>
                </ul>

                {/* CartWidget */}
                <CartWidget />
            </div>
        </nav>
    );
};

export default Navbar;