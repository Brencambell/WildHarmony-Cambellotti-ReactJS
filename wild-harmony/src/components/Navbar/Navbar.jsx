import logoColor from "../../assets/wild-harmony-logo-color.png"
import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className= {`${styles.customNavbar} navbar navbar-expand-lg bg-body-tertiary p-3`}>
            <div className="container-fluid">
                {/* Brand */}
                <div className="navbar-brand">
                    <a href="#"><img src={logoColor} alt="Wild Harmony Logo a color" style={{ width : '140px', height : 'auto'}}/></a>
                </div>

                {/* Links */}
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Maquillaje</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Cuidado Facial</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Quienes somos</a>
                    </li>
                </ul>

                {/* CartWidget */}
                <CartWidget />
            </div>
        </nav>
    );
};

export default Navbar;