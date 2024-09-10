import "../componentStyles/common.css";
import "../pageStyles/home.css";
import Navbar from "./navbar";
function Header() {
    return <>
        <section className="header-section">
            <div className="bg-image-container">
                <div className="nav-logo">
                    <img src="\logo-no-background-removebg-preview.png" alt="logo" className="logo" />
                    <Navbar/>
                </div>
            </div>
        </section>
    </>
}

export default Header;