import "./PollCard.css";
import Button from "../button/Button.jsx";

function PollCard({title, options}) {
    return (
        <article className="poll-card">
                <h2>{title}</h2>
            <form className="poll-form">
                <ul className="poll-options">
                    {options.map((option) => {
                        return (
                            <li key={option.id}>
                                <input
                                    type="radio"
                                    id={option.id}
                                    name="poll-answer"
                                    value={option.id}
                                />

                                <label
                                    htmlFor={option.id}
                                    className="poll-answer-section"
                                    >
                                    <span className="poll-question">{option.answer}</span>
                                    <span className="poll-votes">{option.votes} stemmen</span>
                                </label>
                            </li>
                        );
                    })}
                </ul>
            <Button
                type="button"
                text="Stem indienen"
            />
            </form>
        </article>
    );
}

export default PollCard;