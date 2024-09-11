import "../componentStyles/common.css";
import "../pageStyles/home.css";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import "../componentStyles/common.css"
import "../componentStyles/header.css"
function Header() {
    return <>
        <section className="header-section">
            <div className="bg-image-container">
                <div className="nav-logo">
                    <Link to="/">
                        <img src="\logo-no-background-removebg-preview.png" alt="logo" className="logo" />
                    </Link>
                    <nav className="navbar">
                        <Navbar/>
                    </nav>
                </div>
            </div>
        </section>
    </>
}

export default Header;