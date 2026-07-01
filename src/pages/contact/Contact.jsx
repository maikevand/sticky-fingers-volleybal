import "./Contact.css";
import PageLayout from "../../components/page-layout/PageLayout.jsx";
import Button from "../../components/button/Button.jsx"
import FormField from "../../components/form-field/FormField.jsx";

function Contact() {
    return (
        <PageLayout className="contact-page">
            <h1>Contact</h1>
            <p>Heb je vragen of wil je vrijblijvend een keer meespelen?
                Stuur ons een bericht via onderstaand formulier!
            </p>
            <form className="contact-form">
                <FormField
                    htmlFor="name-field"
                    text="Naam"
                    type="text"
                    id="name-field"
                    name="name"
                    maxLength="35"
                />
                <FormField
                    htmlFor="contact-email-field"
                    text="E-mail"
                    type="email"
                    id="contact-email-field"
                    name="email"
                    maxLength="50"
                />
                <FormField
                    htmlFor="telephone-field"
                    text="Telefoonnummer"
                    type="tel"
                    id="telephone-field"
                    name="telephone"
                    maxLength="13"
                />
                <label htmlFor="message-field" className="textarea-label">
                    Bericht
                    <textarea
                        name="message"
                        id="message-field"
                        cols="30"
                        rows="10"
                        maxLength="400"
                        placeholder="Stel hier je vraag of je verzoek wanneer je wil meespelen"></textarea>
                </label>
                <Button
                    type="submit"
                    text="Verzenden"
                />
            </form>
        </PageLayout>
    );
}

export default Contact;