import "./Register.css";
import PageLayout from "../../components/page-layout/PageLayout.jsx";
import FormField from "../../components/form-field/FormField.jsx";
import Button from "../../components/button/Button.jsx";
import {useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const initialFormState = {
    email: "",
    password: "",
    confirmPassword: "",
};

function Register() {
    const [formState, setFormState] = useState(initialFormState);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    const projectId = import.meta.env.VITE_NOVI_PROJECT_ID;

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

        setIsSubmitted(false);
        setErrorMessage("");

        if (formState.password !== formState.confirmPassword) {
            setErrorMessage("De wachtwoorden komen niet overeen.");
            return;
        }

        setIsLoading(true);

        const registrationData = {
            email: formState.email,
            password: formState.password,
            roles: ["user"],
        };

        try {
            await axios.post(`${baseUrl}/users`, registrationData, {
                headers: {
                    "novi-education-project-id": projectId,
                },
            });

            setFormState(initialFormState);
            setIsSubmitted(true);
            setErrorMessage("");
        } catch (error) {
            console.error(error);
            setIsSubmitted(false);
            setErrorMessage("Er ging iets mis. Probeer het opnieuw.");
        } finally {
            setIsLoading(false);
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
                    text={isLoading ? "Bezig met registreren..." : "Registreren"}
                    disabled={isLoading}
                />
            </form>

            {isSubmitted && (
                <p className="register-success-message">
                    Je account is aangemaakt. Je kunt <Link className="log-in-link" to="/inloggen">hier</Link> inloggen.
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