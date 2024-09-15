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
                        <img src="/images/logo-no-background-removebg-preview.png" alt="logo" className="logo" />
                    </Link>
                    <nav className="navbar">
                        <Navbar/>
                    </nav>
                </div>
                <div className="header-main-head">
                    <h1 className="main-head">
                        Luxury In Details
                    </h1>
                    <p className="main-head-sub-para">
                        Where elegance meets unparalleled comfort.
                    </p>
                </div>
            </div>
        </section>
    </>
}

export default Header;