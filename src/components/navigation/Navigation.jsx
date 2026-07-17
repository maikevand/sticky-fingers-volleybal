import "./Navigation.css";
import {NavLink} from "react-router-dom";
import {Link} from "react-router-dom";
import VolleyballIcon from "../../assets/volleyball-icon.svg?react";
import UserIcon from "../../assets/user-icon.svg?react";

function Navigation() {
    return (
        <nav className="main-navigation">
            <div className="nav-logo-container">
                <VolleyballIcon className="volleyball-icon"/>
                <span>V.C. Sticky Fingers</span>
            </div>
            <ul className="nav-links">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/over-ons">Over ons</NavLink></li>
                <li><NavLink to="/voor-leden">Voor leden</NavLink></li>
            </ul>
            <div className="nav-actions">
                <Link to="/contact" className="button">
                    Kom meespelen!
                </Link>
                <Link to="/inloggen" aria-label="Inloggen">
                    <UserIcon className="user-icon"/>
                </Link>
            </div>
        </nav>
    );
}

export default Navigation;