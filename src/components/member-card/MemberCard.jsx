import "./MemberCard.css";
import Button from "../button/Button.jsx";

function MemberCard({ buttonText, Icon, disabled = false}) {
    return (
        <section className="member-card">
            <Icon className="member-card-icon"
                  aria-hidden="true"
            />
            <Button
                type="button"
                text={buttonText}
                disabled={disabled}
            />
        </section>
    );
}

export default MemberCard;