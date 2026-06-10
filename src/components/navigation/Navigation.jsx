import "./Navigation.css";
import {NavLink} from "react-router-dom";
import Button from "../button/Button.jsx"
// import {useNavigate} from "react-router-dom";

function Navigation() {
    // const navigate = useNavigate();

    return (
        <nav className="main-navigation">
            <div className="nav-logo-container">
                <span>V.C. Sticky Fingers</span>
            </div>
            <ul className="nav-links">
                <li><NavLink to="/">Home</NavLink></li>
                <li>
                    Over ons
                </li>
                <li>
                    Voor leden
                </li>
            </ul>
            <div>
                <Button
                    type="button"
                    className="nav-button"
                    text="Kom meespelen!"
                    />
            </div>
        </nav>
    );
}

export default Navigation;