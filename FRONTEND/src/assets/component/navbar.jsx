import { Link } from "react-router-dom";
function Navbar() {
    return <>
        <section className="navbar-section">
            <div className="nav-container">
                <ul className="nav-ul">
                    <li className="nav-li">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    </>
}

export default Navbar;