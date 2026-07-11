import "./Contact.css";
import PageLayout from "../../components/page-layout/PageLayout.jsx";
import Button from "../../components/button/Button.jsx"
import FormField from "../../components/form-field/FormField.jsx";
import {useState} from "react";
import axios from "axios";

const baseUrl = import.meta.env.VITE_API_BASE_URL;
const projectId = import.meta.env.VITE_NOVI_PROJECT_ID;

const initialFormState = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
};

function Contact() {
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

        const messageData = {
            firstName: formState.firstName,
            lastName: formState.lastName,
            email: formState.email,
            phoneNumber: formState.phoneNumber,
            message: formState.message,
        };

        try {
            const response = await axios.post(`${baseUrl}/contactMessages`, messageData,{
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
            setErrorMessage("Er ging iets mis bij het verzenden. Probeer het opnieuw.");
        } finally {
            setIsLoading(false);
        }
    }

    return (

        <PageLayout className="contact-page">
            <h1>Contact</h1>
            <p>Heb je vragen of wil je vrijblijvend een keer meespelen?
                Stuur ons een bericht via onderstaand formulier!
            </p>
            <form className="contact-form" onSubmit={handleSubmit}>
                <FormField
                    label="Voornaam *"
                    type="text"
                    id="first-name-field"
                    name="firstName"
                    value={formState.firstName}
                    maxLength={35}
                    changeHandler={handleFormChange}
                    required={true}
                />
                <FormField
                    label="Achternaam *"
                    type="text"
                    id="last-name-field"
                    name="lastName"
                    value={formState.lastName}
                    maxLength={35}
                    changeHandler={handleFormChange}
                    required={true}
                />
                <FormField
                    label="E-mail *"
                    type="email"
                    id="contact-email-field"
                    name="email"
                    value={formState.email}
                    maxLength={50}
                    changeHandler={handleFormChange}
                    required={true}
                />
                <FormField
                    label="Telefoonnummer"
                    type="tel"
                    id="telephone-field"
                    name="phoneNumber"
                    value={formState.phoneNumber}
                    maxLength={13}
                    changeHandler={handleFormChange}
                />
                <label htmlFor="message-field" className="textarea-label">
                    Bericht *
                </label>
                <textarea
                    name="message"
                    id="message-field"
                    value={formState.message}
                    onChange={handleFormChange}
                    cols={30}
                    rows={10}
                    maxLength={400}
                    placeholder="Stel hier je vraag of je verzoek wanneer je wil meespelen"
                    required={true}
                />
                <Button
                    type="submit"
                    text={isLoading ? "Verzenden..." : "Verzenden"}
                    disabled={isLoading}
                />
            </form>
            {isSubmitted && (
                <p className="contact-success-message">Bedankt! Je bericht is verzonden.</p>
            )}

            {errorMessage && (
                <p className="contact-error-message">{errorMessage}</p>
            )}
        </PageLayout>
    );
}

export default Contact;