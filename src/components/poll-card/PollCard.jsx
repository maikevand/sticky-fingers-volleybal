import "./PollCard.css";
import Button from "../button/Button.jsx";
import {useState} from "react";
import {format, parseISO} from "date-fns";

function PollCard({poll, onVote, optionOneVotes, optionTwoVotes}) {
    const [selectedOptionId, setSelectedOptionId] = useState("");
    const [localErrorMessage, setLocalErrorMessage] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        if (!selectedOptionId) {
            setLocalErrorMessage("Kies eerst een optie voordat je stemt.");
            return;
        }

        setLocalErrorMessage("");
        onVote(poll, selectedOptionId);
    }

    return (
        <article className="poll-card">
            <h2>{poll.question}</h2>
            <p>Van {poll.firstName}, geplaatst op {format(parseISO(poll.createdAt), "dd-MM-yyyy")}</p>
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
                            <span className="poll-votes">{optionOneVotes} stemmen</span>
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
                            <span className="poll-votes">{optionTwoVotes} stemmen</span>
                        </label>
                    </li>
                </ul>
                <Button
                    type="submit"
                    text="Stem indienen"
                />

                {localErrorMessage && (
                    <p className="poll-error-message">
                        {localErrorMessage}
                    </p>
                )}

            </form>
        </article>
    );
}

export default PollCard;