import "./LogIn.css";
import PageLayout from "../../components/page-layout/PageLayout.jsx";
import FormField from "../../components/form-field/FormField.jsx";
import Button from "../../components/button/Button.jsx";
import {Link} from "react-router-dom";
import {useState} from "react";

const initialFormState = {
    email: "",
    password: "",
}

function LogIn() {
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
        <PageLayout className="log-in-page">
            <h1>Inloggen</h1>
            <form onSubmit={handleSubmit}>
                <FormField
                    label="E-mailadres"
                    type="email"
                    id="login-email-field"
                    name="email"
                    value={formState.email}
                    changeHandler={handleFormChange}
                    maxLength={35}
                    required={true}
                />
                <FormField
                    label="Wachtwoord"
                    type="password"
                    id="login-password-field"
                    name="password"
                    value={formState.password}
                    changeHandler={handleFormChange}
                    required={true}
                />
                <Button
                    type="submit"
                    text="Inloggen"
                />
            </form>
            <p>Nog geen account? Klik <Link className="register-link" to="/registreren">hier</Link> om je te
                registreren.</p>

            {isSubmitted && (
                <p className="log-in-success-message">
                    Gelukt! Je bent nu ingelogd.
                </p>
            )}

            {errorMessage && (
                <p className="log-in-error-message">
                    {errorMessage}
                </p>
            )}

        </PageLayout>
    );
}

export default LogIn;