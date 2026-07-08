import "./MemberCard.css";
import Button from "../button/Button.jsx";
import {Link} from "react-router-dom";

function MemberCard({buttonText, Icon, disabled = false, to}) {
    return (
        <section className={`member-card ${disabled ? "disabled-member-card" : "active-member-card"}`}>
            <Icon className="member-card-icon"
                  aria-hidden="true"
            />

            {to && !disabled ? (
                <Link to={to} className="button">
                    {buttonText}
                </Link>
            ) : (
                <Button
                    type="button"
                    text={buttonText}
                    disabled={disabled}
                />
            )}
        </section>
    );
}

export default MemberCard;