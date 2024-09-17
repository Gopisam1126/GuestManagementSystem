import { Link } from "react-router-dom";
import Navbar from "./navbar";
import "../componentStyles/header2.css"
function Header2() {
    return <>
        <section className="header2-section">
        <div className="nav-logo">
                    <Link to="/">
                        <img src="/images/logo-no-background-removebg-preview.png" alt="logo" className="logo" />
                    </Link>
                    <nav className="navbar">
                        <Navbar/>
                    </nav>
                </div>
        </section>
    </>
}

export default Header2;