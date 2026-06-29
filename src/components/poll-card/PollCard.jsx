import "./PollCard.css";
import Button from "../button/Button.jsx";

function PollCard({ title, options }) {
    return (
        <article className="poll-card">
            <div className="poll-content">
                <h2>{title}</h2>
                <ul>
                    {options.map((option) => {
                        return <li key={option.id}>{option.answer}</li>
                    })}
                </ul>

                {/*<p>{options[0].answer}</p>*/}
            </div>
            <Button
                type="button"
                text="Stemmen"
                />
        </article>
    );
}

export default PollCard;