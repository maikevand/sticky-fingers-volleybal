import "./Register.css";
import PageLayout from "../../components/page-layout/PageLayout.jsx";
import FormField from "../../components/form-field/FormField.jsx";
import Button from "../../components/button/Button.jsx";
import {useState} from "react";

const initialFormState = {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
};

function Register() {
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

        if (formState.password !== formState.confirmPassword) {
            setIsSubmitted(false);
            setErrorMessage("De wachtwoorden komen niet overeen.");
            return;
        }

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
        <PageLayout className="register-page">
            <h1>Registreren</h1>
            <p>Maak hier je account aan.</p>
            <form onSubmit={handleSubmit}>
                <FormField
                    label="E-mailadres *"
                    type="email"
                    id="register-email-field"
                    name="email"
                    value={formState.email}
                    changeHandler={handleFormChange}
                    maxLength={35}
                    required={true}
                />
                <FormField
                    label="Voornaam *"
                    type="text"
                    id="register-first-name-field"
                    name="firstName"
                    value={formState.firstName}
                    changeHandler={handleFormChange}
                    maxLength={35}
                    required={true}
                />
                <FormField
                    label="Achternaam *"
                    type="text"
                    id="register-last-name-field"
                    name="lastName"
                    value={formState.lastName}
                    changeHandler={handleFormChange}
                    maxLength={35}
                    required={true}
                />
                <FormField
                    label="Wachtwoord *"
                    type="password"
                    id="register-password-field"
                    name="password"
                    value={formState.password}
                    changeHandler={handleFormChange}
                    required={true}
                />
                <FormField
                    label="Herhaal wachtwoord *"
                    type="password"
                    id="register-confirm-password-field"
                    name="confirmPassword"
                    value={formState.confirmPassword}
                    changeHandler={handleFormChange}
                    required={true}
                />
                <Button
                    type="submit"
                    text="Registreren"
                />
            </form>

            {isSubmitted && (
                <p className="register-success-message">
                    Bedankt! Je registratie is verzonden.
                </p>
            )}

            {errorMessage && (
                <p className="register-error-message">
                    {errorMessage}
                </p>
            )}

        </PageLayout>

    );
}

export default Register;