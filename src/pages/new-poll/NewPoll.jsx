import "./NewPoll.css";
import PageLayout from "../../components/page-layout/PageLayout.jsx";
import FormField from "../../components/form-field/FormField.jsx";
import Button from "../../components/button/Button.jsx";

function NewPoll() {
    return (
        <PageLayout className="new-poll-page">
            <h1>Nieuwe peiling</h1>
            <form className="new-poll-form">
                {/*<FormField*/}
                {/*    htmlFor="name-field"*/}
                {/*    text="Naam"*/}
                {/*    type="text"*/}
                {/*    id="name-field"*/}
                {/*    name="name"*/}
                {/*/>*/}
                <label htmlFor="poll-question-field" className="textarea-label">
                    Vraag
                    <textarea
                        name="question"
                        id="poll-question-field"
                        cols="34"
                        rows="2"
                        maxLength="70"
                        placeholder="Wie wil doorspelen in de kerstvakantie?">
                    </textarea>
                </label>
                <FormField
                    label="Antwoordoptie 1"
                    type="text"
                    id="poll-option1-field"
                    name="option1"
                    maxLength="45"
                />
                <FormField
                    label="Antwoordoptie 2"
                    type="text"
                    id="poll-option2-field"
                    name="option2"
                    maxLength="45"
                />
                <Button
                    type="button"
                    text="Optie toevoegen"
                />
                <Button
                    type="submit"
                    text="Peiling aanmaken"
                />
            </form>
        </PageLayout>
    );
}

export default NewPoll;