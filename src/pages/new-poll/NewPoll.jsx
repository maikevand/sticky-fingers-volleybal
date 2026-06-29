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
                <FormField
                    htmlFor="question-field"
                    text="Vraag"
                    type="text"
                    id="question-field"
                    name="question"
                    placeholder="Wie wil doorspelen in de kerstvakantie?"
                />
                <FormField
                    htmlFor="option1-field"
                    text="Antwoordoptie 1"
                    type="text"
                    id="option1-field"
                    name="option1"
                />
                <FormField
                    htmlFor="option2-field"
                    text="Antwoordoptie 2"
                    type="text"
                    id="option2-field"
                    name="option2"
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