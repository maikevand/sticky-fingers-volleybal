import "./LogIn.css";
import PageLayout from "../../components/page-layout/PageLayout.jsx";
import FormField from "../../components/form-field/FormField.jsx";
import Button from "../../components/button/Button.jsx";
import {Link} from "react-router-dom";

function LogIn() {
    return (
        <PageLayout className="log-in-page">
            <h1>Inloggen</h1>
            <form>
                <FormField
                    label="E-mailadres"
                    type="email"
                    id="login-email-field"
                    name="email"
                    maxLength="35"
                />
                <FormField
                    label="Wachtwoord"
                    type="password"
                    id="login-password-field"
                    name="password"
                />
                <Button
                    type="submit"
                    text="Inloggen"
                />
            </form>
            <p>Nog geen account? Klik <Link className="register-link" to="/registreren">hier</Link> om je te registreren.</p>
        </PageLayout>
    );
}

export default LogIn;