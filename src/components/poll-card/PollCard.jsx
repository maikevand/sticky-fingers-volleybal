import "./PollCard.css";
import Button from "../button/Button.jsx";
import {useState} from "react";

function PollCard({poll}) {
    const [selectedOptionId, setSelectedOptionId] = useState("");

    return (
        <article className="poll-card">
                <h2>{poll.title}</h2>
            <form className="poll-form">
                <ul className="poll-options">
                    {poll.options.map((option) => {
                        return (
                            <li key={option.id}>
                                <input
                                    type="radio"
                                    id={`poll-${poll.id}-option-${option.id}`}
                                    name={`poll-${poll.id}-answer`}
                                    value={option.id}
                                    checked={selectedOptionId === String(option.id)}
                                    onChange={(event) => setSelectedOptionId(event.target.value)}
                                />

                                <label
                                    htmlFor={`poll-${poll.id}-option-${option.id}`}
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