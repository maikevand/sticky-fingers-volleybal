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
                    htmlFor="register-email-field"
                    text="E-mailadres"
                    type="email"
                    id="register-email-field"
                    name="email"
                    maxLength="35"
                />
                <FormField
                    htmlFor="register-full-name-field"
                    text="Voornaam en achternaam"
                    type="text"
                    id="register-full-name-field"
                    name="fullName"
                    maxLength="35"
                />
                <FormField
                    htmlFor="register-password-field"
                    text="Wachtwoord"
                    type="password"
                    id="register-password-field"
                    name="password"
                />
                <FormField
                    htmlFor="register-confirm-password-field"
                    text="Herhaal wachtwoord"
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