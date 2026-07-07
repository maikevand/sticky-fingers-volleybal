import "./Register.css";
import PageLayout from "../../components/page-layout/PageLayout.jsx";
import FormField from "../../components/form-field/FormField.jsx";
import Button from "../../components/button/Button.jsx";

function Register() {
    return (
        <PageLayout className="register-page">
            <h1>Registreren</h1>
            <p>Maak hier je account aan.</p>
            <form>
                <FormField
                    label="E-mailadres"
                    type="email"
                    id="register-email-field"
                    name="email"
                    maxLength="35"
                />
                <FormField
                    label="Voornaam en achternaam"
                    type="text"
                    id="register-full-name-field"
                    name="fullName"
                    maxLength="35"
                />
                <FormField
                    label="Wachtwoord"
                    type="password"
                    id="register-password-field"
                    name="password"
                />
                <FormField
                    label="Herhaal wachtwoord"
                    type="password"
                    id="register-confirm-password-field"
                    name="confirmPassword"
                />
                <Button
                    type="submit"
                    text="Registreren"
                />
            </form>
        </PageLayout>

    );
}

export default Register;