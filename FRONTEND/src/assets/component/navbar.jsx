import { Link } from "react-router-dom";
import "../componentStyles/common.css"
import "../componentStyles/navbar.css"
function Navbar() {
    return <>
        <section className="navbar-section">
            <div className="nav-container">
                <ul className="nav-ul">
                    <li className="nav-li">
                        <Link to="/" className="nav-link nav-link1">
                            Home
                        </Link>
                    </li>
                    <li className="nav-li">
                        <Link to="/booking" className="nav-link">
                            Booking
                        </Link>
                    </li>
                    <li className="nav-li">
                        <Link to="/events" className="nav-link">
                            Events
                        </Link>
                    </li>
                    <li className="nav-li">
                        <Link to="/contact" className="nav-link">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    </>
}

export default Navbar;