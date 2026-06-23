import "./Navigation.css";
import {NavLink} from "react-router-dom";
import {Link} from "react-router-dom";
import Button from "../button/Button.jsx";
// import {useNavigate} from "react-router-dom";
import VolleyballIcon from "../../assets/volleyball-icon.svg?react";
import UserIcon from "../../assets/user-icon.svg?react";

function Navigation() {
    // const navigate = useNavigate();
    return (
        <nav className="main-navigation">
            <div className="nav-logo-container">
                <VolleyballIcon className="volleyball-icon"/>
                <span>V.C. Sticky Fingers</span>
            </div>
            <ul className="nav-links">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/over-ons">Over ons</NavLink></li>
                <li>
                    Voor leden
                </li>
            </ul>
            <div className="nav-actions">
                <Link to="/contact">
                    <Button
                        type="button"
                        className="nav-button"
                        text="Kom meespelen!"
                    />
                </Link>
                <UserIcon className="user-icon"/>
            </div>
        </nav>
    );
}

export default Navigation;