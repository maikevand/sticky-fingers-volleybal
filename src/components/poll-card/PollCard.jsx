import "./PollCard.css";
import Button from "../button/Button.jsx";
import {useState} from "react";

function PollCard({poll}) {
    const [selectedOptionId, setSelectedOptionId] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        console.log("Poll id:", poll.id);
        console.log("Gekozen optie:", selectedOptionId);
    }

    return (
        <article className="poll-card">
            <h2>{poll.question}</h2>
            <form className="poll-form" onSubmit={handleSubmit}>
                <ul className="poll-options">
                    <li>
                        <input
                            type="radio"
                            id={`poll-${poll.id}-option-one`}
                            name={`poll-${poll.id}-answer`}
                            value="optionOne"
                            checked={selectedOptionId === "optionOne"}
                            onChange={(event) => setSelectedOptionId(event.target.value)}
                        />

                        <label
                            htmlFor={`poll-${poll.id}-option-one`}
                            className="poll-answer-section"
                        >
                            <span className="poll-question">{poll.optionOne}</span>
                            <span className="poll-votes">{poll.optionOneVotes} stemmen</span>
                        </label>
                    </li>
                    <li>
                        <input
                            type="radio"
                            id={`poll-${poll.id}-option-two`}
                            name={`poll-${poll.id}-answer`}
                            value="optionTwo"
                            checked={selectedOptionId === "optionTwo"}
                            onChange={(event) => setSelectedOptionId(event.target.value)}
                        />

                        <label
                            htmlFor={`poll-${poll.id}-option-two`}
                            className="poll-answer-section"
                        >
                            <span className="poll-question">{poll.optionTwo}</span>
                            <span className="poll-votes">{poll.optionTwoVotes} stemmen</span>
                        </label>
                    </li>
                </ul>
                <Button
                    type="submit"
                    text="Stem indienen"
                />
            </form>
        </article>
    );
}

export default PollCard;