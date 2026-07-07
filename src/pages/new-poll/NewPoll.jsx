import "./NewPoll.css";
import PageLayout from "../../components/page-layout/PageLayout.jsx";
import FormField from "../../components/form-field/FormField.jsx";
import Button from "../../components/button/Button.jsx";
import {useState} from "react";

const initialFormState = {
    question: "",
    optionOne: "",
    optionTwo: "",
    optionThree: "",
    optionFour: "",
};

function NewPoll() {
    const [formState, setFormState] = useState(initialFormState);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

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

        try {
            console.log(formState);

            setFormState(initialFormState);
            setIsSubmitted(true);
            setErrorMessage("");
        } catch (error) {
            console.error(error);
            setIsSubmitted(false);
            setErrorMessage("Er ging iets mis. Probeer het opnieuw.");
        }
    }

    return (
        <PageLayout className="new-poll-page">
            <h1>Nieuwe peiling</h1>
            <form className="new-poll-form" onSubmit={handleSubmit}>
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
                <FormField
                    label="Antwoordoptie 3"
                    type="text"
                    id="poll-option3-field"
                    name="optionThree"
                    value={formState.optionThree}
                    maxLength={45}
                    changeHandler={handleFormChange}
                />
                <FormField
                    label="Antwoordoptie 4"
                    type="text"
                    id="poll-option4-field"
                    name="optionFour"
                    value={formState.optionFour}
                    maxLength={45}
                    changeHandler={handleFormChange}
                />
                <Button
                    type="submit"
                    text="Peiling aanmaken"
                />
            </form>
            {isSubmitted && (
                <p className="poll-success-message">
                    Bedankt! Je peiling is aangemaakt.
                </p>
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