import "./Contact.css"
import PageLayout from "../../components/page-layout/PageLayout.jsx";
import Button from "../../components/button/Button.jsx"

function Contact() {
    return (
        <PageLayout className="contact-page">
            <h1>Contact</h1>
            <p>Heb je vragen of wil je vrijblijvend een keer meespelen?
                Je kunt contact met ons opnemen via onderstaand formulier.
            </p>
            <form className="contact-form">
                <label for="name-field">
                    Naam
                    <input type="text" id="name-field" name="name" placeholder="Naam" />
                </label>
                <label for="email-field">
                    E-mail
                    <input type="email" id="email-field" name="email" placeholder="E-mail" />
                </label>
                <label for="telephone-field">
                    Telefoonnummer
                    <input type="tel" id="telephone-field" name="telephone" placeholder="Telefoonnummer" />
                </label>
                <label for="message-field">
                    Bericht
                    <textarea name="message" id="message-field" cols="30" rows="10" placeholder="Bericht"></textarea>
                </label>
                <Button
                type="submit"
                className="submit-button"
                onClick="submit"
                text="Verzenden"
                />
            </form>
        </PageLayout>
    );
}

export default Contact;