import "./NewPoll.css";
import PageLayout from "../../components/page-layout/PageLayout.jsx";
import FormField from "../../components/form-field/FormField.jsx";
import Button from "../../components/button/Button.jsx";
import {useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const baseUrl = import.meta.env.VITE_API_BASE_URL;
const projectId = import.meta.env.VITE_NOVI_PROJECT_ID;

const initialFormState = {
    firstName: "",
    question: "",
    optionOne: "",
    optionTwo: "",
};

function NewPoll() {
    const [formState, setFormState] = useState(initialFormState);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    function handleFormChange(event) {
        const {name, value} = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });

        setIsSubmitted(false);
        setErrorMessage("");
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setIsLoading(true);

        const pollData = {
            firstName: formState.firstName,
            createdAt: new Date().toISOString(),
            question: formState.question,
            optionOne: formState.optionOne,
            optionTwo: formState.optionTwo,
            optionOneVotes: 0,
            optionTwoVotes: 0,
        };

        try {
            await axios.post(`${baseUrl}/polls`, pollData, {
                headers: {
                    "novi-education-project-id": projectId,
                },
            });

            setFormState(initialFormState);
            setIsSubmitted(true);
            setErrorMessage("");
        } catch {
            setIsSubmitted(false);
            setErrorMessage("Er ging iets mis. Probeer het opnieuw.");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <PageLayout className="new-poll-page">
            <h1>Nieuwe peiling</h1>
            <form className="new-poll-form" onSubmit={handleSubmit}>
                <FormField
                    label="Voornaam *"
                    type="text"
                    id="poll-first-name-field"
                    name="firstName"
                    value={formState.firstName}
                    maxLength={30}
                    changeHandler={handleFormChange}
                    required={true}
                />
                <div>
                    <label htmlFor="poll-question-field" className="textarea-label">
                        Vraag *
                    </label>
                    <textarea
                        name="question"
                        id="poll-question-field"
                        value={formState.question}
                        onChange={handleFormChange}
                        cols={34}
                        rows={2}
                        maxLength={70}
                        required={true}
                        placeholder="Wie wil doorspelen in de kerstvakantie?"
                    />
                </div>

                <FormField
                    label="Antwoordoptie 1 *"
                    type="text"
                    id="poll-option1-field"
                    name="optionOne"
                    value={formState.optionOne}
                    maxLength={45}
                    changeHandler={handleFormChange}
                    required={true}
                />
                <FormField
                    label="Antwoordoptie 2 *"
                    type="text"
                    id="poll-option2-field"
                    name="optionTwo"
                    value={formState.optionTwo}
                    maxLength={45}
                    changeHandler={handleFormChange}
                    required={true}
                />
                <Button
                    type="submit"
                    text={isLoading ? "Verzenden..." : "Peiling aanmaken"}
                    disabled={isLoading}
                />
            </form>
            {isSubmitted && (
                <div className="poll-success-section">
                    <p className="poll-success-message">
                        Bedankt! Je peiling is aangemaakt.
                    </p>
                    <p>
                        Klik <Link className="polls-link" to="/peilingen">hier</Link> om naar het overzicht te gaan.
                    </p>
                </div>
            )}

            {errorMessage && (
                <p className="poll-error-message">
                    {errorMessage}
                </p>
            )}
        </PageLayout>
    );
}

export default NewPoll;