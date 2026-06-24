import "./MemberCard.css";
import Button from "../button/Button.jsx";

function MemberCard({title, buttonText, Icon}) {
    return (
        <section className="member-card">
            <h2>{title}</h2>
            <Icon className="member-card-icon"
                  aria-hidden="true"
            />
            <Button
                type="button"
                text={buttonText}
            />
        </section>
    );
}

export default MemberCard;