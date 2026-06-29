import "./PollCard.css";
import Button from "../button/Button.jsx";

function PollCard({title, options}) {
    return (
        <article className="poll-card">
                <h2>{title}</h2>
                <ul className="poll-options">
                    {options.map((option) => {
                        return (
                            <li key={option.id}>
                                <input
                                    type="radio"
                                    name="poll-answer"
                                    value={option.id}
                                />
                                <div className="poll-answer-section">
                                    <span>{option.answer}</span>
                                    <span>{option.votes} stemmen</span>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            <Button
                type="button"
                text="Stem indienen"
            />
        </article>
    );
}

export default PollCard;